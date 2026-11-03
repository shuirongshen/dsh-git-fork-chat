/**
 * Typed browser client for /gitchat routes.
 *
 * Paths are document-relative (no leading slash): DSH can be mounted under a
 * sub-path, and the official plugin clients use the same convention.
 */
import type {
  GitChatArchiveResult,
  GitChatEnvelope,
  GitChatError,
  GitChatSaveResult,
  GitChatTree,
} from '../shared/types.ts'

/** Error carrying the host's stable code. */
export class GitChatApiError extends Error {
  readonly code: string
  readonly details?: unknown

  constructor(code: string, message: string, details?: unknown) {
    super(message)
    this.name = 'GitChatApiError'
    this.code = code
    this.details = details
  }
}

/** Whether a value is a plain JSON object. */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/** Transport-level error for non-envelope responses. */
function transportError(status: number): GitChatApiError {
  return new GitChatApiError('gitchat/transport', `GitChat route returned HTTP ${status}`)
}

/** POST one JSON payload and unwrap the envelope. */
async function post<T>(
  path: string,
  payload: Record<string, unknown>,
  signal?: AbortSignal,
): Promise<T> {
  let response: Response
  try {
    response = await fetch(path, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
      credentials: 'same-origin',
      cache: 'no-store',
      signal,
    })
  } catch (error: unknown) {
    if (signal?.aborted === true) throw error
    throw new GitChatApiError('gitchat/transport', error instanceof Error ? error.message : 'GitChat route is unavailable')
  }

  let body: unknown
  try {
    body = await response.json()
  } catch {
    throw transportError(response.status)
  }
  if (!isRecord(body)) throw transportError(response.status)
  const envelope = body as unknown as GitChatEnvelope<T>
  if (envelope.ok === true) return envelope.value
  const error: GitChatError | undefined = isRecord(envelope.error) ? envelope.error : undefined
  throw new GitChatApiError(
    error?.code ?? 'gitchat/internal',
    error?.message ?? `GitChat route failed with HTTP ${response.status}`,
    error?.details,
  )
}

/** Read the fork tree rooted at the current session's top ancestor. */
export function loadTree(
  sessionId: string,
  includeArchived: boolean,
  signal?: AbortSignal,
): Promise<GitChatTree> {
  return post<GitChatTree>('gitchat/tree', { sessionId, includeArchived }, signal)
}

/** Archive a branch subtree. */
export function archiveBranch(sessionId: string, force: boolean): Promise<GitChatArchiveResult> {
  return post<GitChatArchiveResult>('gitchat/archive', { sessionId, force })
}

/** Restore one archived session. */
export function unarchiveBranch(sessionId: string): Promise<{ sessionId: string; unarchived: true }> {
  return post('gitchat/unarchive', { sessionId })
}

/** Write a full snapshot under DSH's plugin-data directory. */
export function saveTree(sessionId: string): Promise<GitChatSaveResult> {
  return post<GitChatSaveResult>('gitchat/save', { sessionId })
}

/** Make a Windows-safe file stem. */
function safeStem(value: string): string {
  const cleaned = value
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, '_')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^[-_.]+|[-_.]+$/g, '')
    .slice(0, 48)
  return cleaned === '' ? 'tree' : cleaned
}

/** Download the tree JSON through the browser. */
export function downloadTree(tree: GitChatTree): void {
  const rootTitle = tree.sessions.find((session) => session.sessionId === tree.rootId)?.title ?? 'tree'
  const stamp = new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')
  const json = JSON.stringify(tree, null, 2)
  const blob = new Blob([json], { type: 'application/json;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `gitchat-${safeStem(rootTitle)}-${stamp}.json`
  anchor.style.display = 'none'
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1_000)
}
