/**
 * /gitchat HTTP routes: tree read model, branch archive/restore, and JSON
 * snapshot export. Every route is loopback-only and returns a typed envelope.
 */
import type { IncomingMessage, ServerResponse } from 'node:http'
import { mkdir, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { join } from 'node:path'
import type { DshHostContext, DshSessionRecord } from './dsh.ts'
import type { GitChatArchiveResult, GitChatSaveResult, GitChatTree } from '../shared/types.ts'
import { buildGitChatTree, GitChatTreeError, MAX_SESSIONS, type SessionObservationEntry } from './tree.ts'
import {
  collectForkSubtree,
  displayCurrentSessionId,
  topAncestor,
  visibleSessionIds,
} from './lineage.ts'
import {
  booleanField,
  isLoopback,
  readJsonBody,
  requestPath,
  stringField,
  writeError,
  writeJson,
} from './http.ts'

/** Package identity echoed by /gitchat/ping. */
const PACKAGE_NAME = 'dsh-gitchat'
const PACKAGE_VERSION = '0.1.0'
/** Short cache to absorb mount/refresh double-fetches without hiding forks. */
const CACHE_TTL_MS = 1_500
/** Concurrent session-log reads. */
const READ_CONCURRENCY = 4

/** One application error with a stable code. */
class RouteError extends Error {
  readonly code: string
  readonly status: number

  constructor(code: string, message: string, status = 200) {
    super(message)
    this.name = 'RouteError'
    this.code = code
    this.status = status
  }
}

/** One cached tree result. */
interface CacheEntry {
  at: number
  tree: GitChatTree
}

/** Map with bounded concurrency, preserving input order. */
async function mapLimit<T, R>(
  items: readonly T[],
  limit: number,
  fn: (item: T, index: number) => Promise<R>,
): Promise<R[]> {
  const output = new Array<R>(items.length)
  let cursor = 0
  const workers = Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, async () => {
    while (true) {
      const index = cursor
      cursor += 1
      if (index >= items.length) return
      output[index] = await fn(items[index] as T, index)
    }
  })
  await Promise.all(workers)
  return output
}

/** Human-readable error message. */
function messageOf(error: unknown): string {
  if (error instanceof Error) return error.message
  return String(error)
}

/** Resolve the DSH home used for default plugin data. */
function dshHome(): string {
  const configured = process.env.DSH_HOME?.trim()
  return configured !== undefined && configured !== '' ? configured : join(homedir(), '.dsh')
}

/** Make a Windows-safe short file-name stem. */
function safeStem(value: string): string {
  const cleaned = value
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, '_')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-_.]+|[-_.]+$/g, '')
    .slice(0, 56)
  return cleaned === '' ? 'tree' : cleaned
}

/** Archive or restore one branch subtree. */
class GitChatService {
  private readonly cache = new Map<string, CacheEntry>()

  constructor(private readonly ctx: DshHostContext) {}

  /** Invalidate every cached tree. */
  invalidate(): void {
    this.cache.clear()
  }

  /** Read and validate the records once per operation. */
  private async records(): Promise<DshSessionRecord[]> {
    const records = await this.ctx.sessionQuery.listSessions()
    return [...records]
  }

  /** Find one known session or throw a stable error. */
  private static requireSession(records: readonly DshSessionRecord[], sessionId: string): DshSessionRecord {
    const record = records.find((candidate) => candidate.header.id === sessionId)
    if (record === undefined) {
      throw new RouteError('gitchat/session-not-found', `session "${sessionId}" is not known to DSH`)
    }
    return record
  }

  /** Build or reuse one read model. */
  async loadTree(sessionId: string, includeArchived: boolean, fresh = false): Promise<GitChatTree> {
    const records = await this.records()
    const target = GitChatService.requireSession(records, sessionId)
    const archivedSet = new Set(this.ctx.workspaceRegistry.archivedSessionIds)
    const currentId = displayCurrentSessionId(records, sessionId)
    let effectiveInclude = includeArchived || archivedSet.has(currentId)
    const root = topAncestor(records, currentId)
    if (root === undefined) {
      throw new RouteError('gitchat/session-not-found', `session "${sessionId}" has no readable lineage`)
    }

    // If the current session sits under an archived ancestor (an unusual but
    // legal state), the visible roster would omit the very session being
    // viewed. Force archived branches visible so the current path is present.
    let roster = visibleSessionIds(records, root.id, archivedSet, effectiveInclude, MAX_SESSIONS)
    if (!roster.ids.includes(currentId)) {
      effectiveInclude = true
      roster = visibleSessionIds(records, root.id, archivedSet, true, MAX_SESSIONS)
    }

    const cacheKey = `${currentId}|${root.id}|${effectiveInclude ? 'all' : 'visible'}`
    if (!fresh) {
      const cached = this.cache.get(cacheKey)
      if (cached !== undefined && Date.now() - cached.at < CACHE_TTL_MS) return cached.tree
    }
    const pairs = await mapLimit<string, readonly [string, SessionObservationEntry]>(
      roster.ids,
      READ_CONCURRENCY,
      async (id) => {
        try {
          const observation = await this.ctx.sessionQuery.readSession(id)
          return [id, { observation }] as const
        } catch (error: unknown) {
          return [id, { error: messageOf(error) }] as const
        }
      },
    )
    const observations = new Map<string, SessionObservationEntry>(pairs)
    const tree = buildGitChatTree({
      records,
      observations,
      currentSessionId: target.header.id,
      includeArchived: effectiveInclude,
      archivedSessionIds: [...archivedSet],
      generatedAt: Date.now(),
    })
    this.cache.set(cacheKey, { at: Date.now(), tree })
    return tree
  }

  /** Archive a fork subtree; rollback already-archived sessions on failure. */
  async archive(sessionId: string, force: boolean): Promise<GitChatArchiveResult> {
    const records = await this.records()
    const target = GitChatService.requireSession(records, sessionId)
    if (target.header.origin === 'subagent') {
      throw new RouteError('gitchat/subagent-branch', '子代理会话不是对话分支，不能从 GitChat 归档')
    }
    if (target.header.parentSession === undefined) {
      throw new RouteError('gitchat/root-session', '根会话不能归档；请选择一个分支节点')
    }

    const subtree = collectForkSubtree(records, sessionId)
    const archived = new Set(this.ctx.workspaceRegistry.archivedSessionIds)
    const skipped = subtree.filter((record) => archived.has(record.header.id)).map((record) => record.header.id)
    const pending = subtree.filter((record) => !archived.has(record.header.id))
    if (pending.length === 0) {
      return { rootSessionId: sessionId, archivedSessions: [], skipped, count: 0 }
    }

    const done: string[] = []
    try {
      for (const record of pending) {
        await this.ctx.workspaceRegistry.archiveSession(record.header.id, force ? { stopActivity: true } : undefined)
        done.push(record.header.id)
      }
    } catch (error: unknown) {
      for (const id of done.reverse()) {
        try {
          await this.ctx.workspaceRegistry.unarchiveSession(id)
        } catch {
          // Best-effort rollback; the original error is the actionable one.
        }
      }
      throw new RouteError(
        'gitchat/archive-failed',
        `归档分支失败：${messageOf(error)}。已回滚本次已归档的 ${done.length} 个会话。`,
      )
    }

    this.invalidate()
    return {
      rootSessionId: sessionId,
      archivedSessions: done,
      skipped,
      count: done.length,
    }
  }

  /** Restore one archived session. */
  async unarchive(sessionId: string): Promise<{ sessionId: string; unarchived: true }> {
    const records = await this.records()
    GitChatService.requireSession(records, sessionId)
    await this.ctx.workspaceRegistry.unarchiveSession(sessionId)
    this.invalidate()
    return { sessionId, unarchived: true }
  }

  /** Write a full JSON snapshot under ~/.dsh/plugin-data/dsh-gitchat/exports. */
  async save(sessionId: string): Promise<GitChatSaveResult> {
    const tree = await this.loadTree(sessionId, true, true)
    const rootTitle = tree.sessions.find((session) => session.sessionId === tree.rootId)?.title ?? tree.rootId
    const exportsDir = join(dshHome(), 'plugin-data', PACKAGE_NAME, 'exports')
    await mkdir(exportsDir, { recursive: true })
    const stamp = new Date().toISOString().replace(/[:.]/g, '-')
    const file = join(exportsDir, `gitchat-${safeStem(rootTitle)}-${stamp}.json`)
    const json = JSON.stringify(tree, null, 2)
    await writeFile(file, json, 'utf8')
    return {
      path: file,
      bytes: Buffer.byteLength(json),
      generatedAt: tree.generatedAt,
      sessions: tree.stats.sessions,
      turns: tree.stats.turns,
    }
  }
}

/** Dispatch one POST body to a service operation. */
async function dispatch(
  service: GitChatService,
  path: string,
  body: unknown,
): Promise<unknown> {
  switch (path) {
    case '/gitchat/tree': {
      const sessionId = stringField(body, 'sessionId')
      if (sessionId === null) throw new RouteError('gitchat/bad-request', '缺少 sessionId')
      return service.loadTree(sessionId, booleanField(body, 'includeArchived'))
    }
    case '/gitchat/archive': {
      const sessionId = stringField(body, 'sessionId')
      if (sessionId === null) throw new RouteError('gitchat/bad-request', '缺少 sessionId')
      return service.archive(sessionId, booleanField(body, 'force'))
    }
    case '/gitchat/unarchive': {
      const sessionId = stringField(body, 'sessionId')
      if (sessionId === null) throw new RouteError('gitchat/bad-request', '缺少 sessionId')
      return service.unarchive(sessionId)
    }
    case '/gitchat/save': {
      const sessionId = stringField(body, 'sessionId')
      if (sessionId === null) throw new RouteError('gitchat/bad-request', '缺少 sessionId')
      return service.save(sessionId)
    }
    default:
      throw new RouteError('gitchat/not-found', `unknown GitChat route "${path}"`, 404)
  }
}

/** Map a thrown value to the stable error envelope. */
function toRouteError(error: unknown): { code: string; message: string; status: number } {
  if (error instanceof RouteError) return { code: error.code, message: error.message, status: error.status }
  if (error instanceof GitChatTreeError) return { code: error.code, message: error.message, status: 200 }
  return { code: 'gitchat/internal', message: messageOf(error), status: 500 }
}

/**
 * Register the /gitchat prefix route.
 * @returns a disposer that removes the route and clears cached trees.
 */
export function registerGitChatRoutes(ctx: DshHostContext): () => void {
  const service = new GitChatService(ctx)

  const handler = (request: IncomingMessage, response: ServerResponse): void => {
    void (async () => {
      if (!isLoopback(request)) {
        writeError(response, { code: 'gitchat/forbidden', message: 'GitChat routes are loopback-only' }, 403)
        return
      }
      const path = requestPath(request)
      if (request.method === 'GET' && path === '/gitchat/ping') {
        writeJson(response, 200, {
          ok: true,
          value: { name: PACKAGE_NAME, version: PACKAGE_VERSION, now: Date.now() },
        })
        return
      }
      if (request.method !== 'POST') {
        writeError(response, { code: 'gitchat/method-not-allowed', message: 'use POST' }, 405)
        return
      }
      try {
        const body = await readJsonBody(request)
        if (body === null) throw new RouteError('gitchat/bad-request', '请求体必须是 64 KiB 以内的 JSON')
        const value = await dispatch(service, path, body)
        writeJson(response, 200, { ok: true, value })
      } catch (error: unknown) {
        const routeError = toRouteError(error)
        writeError(response, { code: routeError.code, message: routeError.message }, routeError.status)
      }
    })()
  }

  const dispose = ctx.webServer.register({ kind: 'prefix', path: '/gitchat', handler })
  return () => {
    service.invalidate()
    dispose()
  }
}
