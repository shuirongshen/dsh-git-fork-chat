/**
 * Deterministic GitChat read-model builder.
 *
 * Inputs are plain DSH session observations (header + raw events), so the
 * branching rules can be unit-tested without a running Harness. The builder
 * never writes anything; it derives turn nodes, fork edges, and summaries.
 */
import type { DshSessionEvent, DshSessionHeader, DshSessionObservation, DshSessionRecord } from './dsh.ts'
import type {
  GitChatEdge,
  GitChatNode,
  GitChatSessionSummary,
  GitChatTree,
  GitChatTurnStatus,
} from '../shared/types.ts'
import {
  descendantCounts,
  displayCurrentSessionId,
  forkChildrenByParent,
  recordsById,
  shortSessionId,
  topAncestor,
} from './lineage.ts'

/** Maximum characters retained per message on the wire. */
export const MAX_MESSAGE_CHARS = 20_000
/** Maximum sessions included in one graph. */
export const MAX_SESSIONS = 80
/** Maximum turn nodes included in one graph. */
export const MAX_TURNS = 800
/** Maximum total nodes (turns + root + blank branch tips). */
export const MAX_NODES = 900

/** One parsed turn. */
export interface ParsedTurn {
  turn: number
  startSeq: number
  endSeq: number | null
  lastSeq: number
  user: string
  assistant: string
  assistantSeq: number | null
  status: GitChatTurnStatus
  statusDetail?: string
  time: number
  toolCalls: number
  inherited: boolean
}

/** One parsed session log. */
export interface ParsedSession {
  header: DshSessionHeader
  inheritedEventCount: number
  turns: ParsedTurn[]
  ownTurns: ParsedTurn[]
  title: string
  provider?: string
  model?: string
  error?: string
}

/** One observation outcome, with read failures retained for display. */
export interface SessionObservationEntry {
  observation?: DshSessionObservation
  error?: string
}

/** Input to the pure tree builder. */
export interface TreeBuildInput {
  records: readonly DshSessionRecord[]
  observations: ReadonlyMap<string, SessionObservationEntry>
  currentSessionId: string
  includeArchived: boolean
  archivedSessionIds: readonly string[]
  generatedAt?: number
}

/** Raised when the requested session cannot be represented as a tree. */
export class GitChatTreeError extends Error {
  readonly code: string

  constructor(code: string, message: string) {
    super(message)
    this.name = 'GitChatTreeError'
    this.code = code
  }
}

/** Narrow unknown to a JSON object. */
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/** Extract text blocks from an assistant/user content array. */
export function extractText(content: unknown): string {
  if (typeof content === 'string') return content
  if (!Array.isArray(content)) return ''
  const parts: string[] = []
  for (const block of content) {
    if (typeof block === 'string') {
      parts.push(block)
      continue
    }
    if (!isRecord(block)) continue
    if (block.type === 'text' && typeof block.text === 'string') parts.push(block.text)
  }
  return parts.join('\n').trim()
}

/**
 * Human-authored prompts carry `source.kind === 'user'`. Runtime-context and
 * skill-reminder user messages are injected by the harness and are skipped.
 * The fallback keeps older/custom logs readable without surfacing obvious
 * system envelopes.
 */
function isHumanUserMessage(data: Record<string, unknown>): boolean {
  const source = data.source
  if (isRecord(source) && source.kind === 'user') return true
  if (data.role !== 'user') return false
  if (isRecord(source) && source.kind !== undefined) return false
  const text = extractText(data.content)
  if (text === '') return false
  if (text.includes('<system-reminder>')) return false
  if (text.startsWith('Current runtime context.')) return false
  return true
}

/** Normalize a turn-end reason into the small status vocabulary. */
function statusOfReason(reason: unknown): { status: GitChatTurnStatus; detail?: string } {
  if (!isRecord(reason)) return { status: 'completed' }
  const kind = typeof reason.kind === 'string' ? reason.kind : 'completed'
  if (kind === 'completed') return { status: 'completed' }
  if (kind === 'error') {
    const error = isRecord(reason.error) ? reason.error : undefined
    const message = typeof error?.message === 'string' ? error.message : '模型调用失败'
    return { status: 'error', detail: clipDetail(message) }
  }
  if (kind === 'blocked') return { status: 'blocked' }
  if (kind === 'interrupted' || kind === 'aborted' || kind === 'cancelled' || kind === 'canceled') {
    return { status: 'interrupted' }
  }
  return { status: 'completed' }
}

/** Clip a status detail for the wire. */
function clipDetail(text: string): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  return clean.length > 240 ? `${clean.slice(0, 237)}…` : clean
}

/** Clip a message and report whether clipping happened. */
function clipMessage(text: string): { text: string; truncated: boolean } {
  const normalized = text.replace(/\r\n/g, '\n').trim()
  if (normalized.length <= MAX_MESSAGE_CHARS) return { text: normalized, truncated: false }
  return { text: `${normalized.slice(0, MAX_MESSAGE_CHARS)}\n…`, truncated: true }
}

/** Parse one session observation into turns and metadata. */
export function parseSession(observation: DshSessionObservation): ParsedSession {
  const header = observation.session
  const inheritedEventCount = Number.isFinite(observation.inheritedEventCount)
    ? Math.max(0, Math.trunc(observation.inheritedEventCount))
    : 0
  const events = [...observation.events].sort((a, b) => a.seq - b.seq)
  const turns: ParsedTurn[] = []
  const byTurn = new Map<number, ParsedTurn>()
  let current: ParsedTurn | null = null
  let title = ''
  let provider: string | undefined
  let model: string | undefined

  for (const event of events) {
    const data = isRecord(event.data) ? event.data : {}
    switch (event.type) {
      case 'turn/start': {
        const turn = typeof data.turn === 'number' ? data.turn : turns.length + 1
        current = {
          turn,
          startSeq: event.seq,
          endSeq: null,
          lastSeq: event.seq,
          user: '',
          assistant: '',
          assistantSeq: null,
          status: 'running',
          time: event.time,
          toolCalls: 0,
          inherited: event.seq < inheritedEventCount,
        }
        turns.push(current)
        byTurn.set(turn, current)
        break
      }
      case 'turn/end': {
        const turn = typeof data.turn === 'number' ? data.turn : current?.turn
        const target = turn === undefined ? current : byTurn.get(turn) ?? current
        if (target !== null && target !== undefined) {
          const outcome = statusOfReason(data.reason)
          target.endSeq = event.seq
          target.lastSeq = Math.max(target.lastSeq, event.seq)
          target.status = outcome.status
          if (outcome.detail !== undefined) target.statusDetail = outcome.detail
          current = null
        }
        break
      }
      case 'user/message': {
        if (current === null || !isHumanUserMessage(data)) break
        const text = extractText(data.content)
        if (text === '') break
        current.user = current.user === '' ? text : `${current.user}\n\n${text}`
        current.lastSeq = Math.max(current.lastSeq, event.seq)
        break
      }
      case 'assistant/message': {
        if (current === null) break
        const text = extractText(isRecord(data.message) ? data.message.content : undefined)
        if (text !== '') {
          current.assistant = text
          current.assistantSeq = event.seq
        }
        if (data.interrupted === true) current.status = 'interrupted'
        current.lastSeq = Math.max(current.lastSeq, event.seq)
        break
      }
      case 'tool/call': {
        if (current !== null) {
          current.toolCalls += 1
          current.lastSeq = Math.max(current.lastSeq, event.seq)
        }
        break
      }
      case 'assistant/attempt':
      case 'tool/result':
      case 'step/start':
      case 'step/end':
      case 'developer/message':
      case 'system/message':
      case 'request/header':
      case 'request/context': {
        if (current !== null) current.lastSeq = Math.max(current.lastSeq, event.seq)
        break
      }
      case 'session/title': {
        if (typeof data.title === 'string' && data.title.trim() !== '') title = data.title.trim()
        break
      }
      case 'session/end-seed': {
        break
      }
      default:
        break
    }

    // Request context is recorded outside the turn switch so inherited
    // model information survives even when a turn is not open.
    if (event.type === 'request/context') {
      if (typeof data.provider === 'string') provider = data.provider
      if (typeof data.model === 'string') model = data.model
    } else if (event.type === 'request/header' && isRecord(data.header)) {
      const config = isRecord(data.header.config) ? data.header.config : undefined
      if (typeof config?.provider === 'string') provider = config.provider
      if (typeof config?.model === 'string') model = config.model
    } else if (event.type === 'session/title' && typeof data.title === 'string' && data.title.trim() !== '') {
      title = data.title.trim()
    }
  }

  // A turn that never received `turn/end` is still running. Keep it visible so
  // the graph can show live work rather than silently dropping it.
  const ownTurns = turns.filter((turn) => turn.startSeq >= inheritedEventCount)
  return {
    header,
    inheritedEventCount,
    turns,
    ownTurns,
    title,
    ...(provider === undefined ? {} : { provider }),
    ...(model === undefined ? {} : { model }),
  }
}

/** Construct an empty parsed session for a read failure. */
function failedSession(header: DshSessionHeader, error: string): ParsedSession {
  return {
    header,
    inheritedEventCount: 0,
    turns: [],
    ownTurns: [],
    title: shortSessionId(header.id),
    error,
  }
}

/** Human/session title fallback. */
function titleOf(parsed: ParsedSession | undefined, header: DshSessionHeader): string {
  const title = parsed?.title?.trim()
  if (title !== undefined && title !== '') return title
  return shortSessionId(header.id)
}

/** Find the node that owns the last inherited event, walking up seeded ancestry. */
function resolveBoundaryNode(
  boundarySeq: number,
  parentSessionId: string | undefined,
  parsed: ReadonlyMap<string, ParsedSession>,
  nodes: ReadonlyMap<string, GitChatNode>,
  rootNodeId: string,
): string {
  if (boundarySeq < 0 || parentSessionId === undefined) return rootNodeId
  const seen = new Set<string>()
  let currentId: string | undefined = parentSessionId
  while (currentId !== undefined && !seen.has(currentId)) {
    seen.add(currentId)
    const owner = parsed.get(currentId)
    if (owner === undefined) return rootNodeId
    if (boundarySeq < owner.inheritedEventCount) {
      currentId = owner.header.parentSession
      continue
    }
    for (const turn of owner.turns) {
      if (boundarySeq < turn.startSeq) break
      if (boundarySeq <= turn.lastSeq) {
        const nodeId = `turn:${currentId}:${turn.turn}`
        if (nodes.has(nodeId)) return nodeId
        return rootNodeId
      }
    }
    return rootNodeId
  }
  return rootNodeId
}

/** Build the complete GitChat read model. */
export function buildGitChatTree(input: TreeBuildInput): GitChatTree {
  const { records, observations, includeArchived, archivedSessionIds } = input
  const byId = recordsById(records)
  const currentSessionId = displayCurrentSessionId(records, input.currentSessionId)
  const root = topAncestor(records, currentSessionId)
  if (root === undefined) {
    throw new GitChatTreeError('gitchat/session-not-found', `session "${input.currentSessionId}" is not known to the session query service`)
  }
  const rootId = root.id
  const archivedSet = new Set(archivedSessionIds)
  const effectiveIncludeArchived = includeArchived || archivedSet.has(currentSessionId)
  const children = forkChildrenByParent(records)
  const descendants = descendantCounts(records)

  // Collect the visible session roster in deterministic pre-order.
  const included: DshSessionRecord[] = []
  let truncated = false
  const visit = (sessionId: string): void => {
    const record = byId.get(sessionId)
    if (record === undefined) return
    const archived = archivedSet.has(sessionId)
    if (archived && !effectiveIncludeArchived) return
    if (included.length >= MAX_SESSIONS) {
      truncated = true
      return
    }
    included.push(record)
    for (const child of children.get(sessionId) ?? []) visit(child.header.id)
  }
  visit(rootId)

  const parsed = new Map<string, ParsedSession>()
  for (const record of included) {
    const entry = observations.get(record.header.id)
    if (entry?.error !== undefined) {
      parsed.set(record.header.id, failedSession(record.header, entry.error))
      continue
    }
    if (entry?.observation === undefined) {
      parsed.set(record.header.id, failedSession(record.header, 'session log was not loaded'))
      continue
    }
    try {
      parsed.set(record.header.id, parseSession(entry.observation))
    } catch (error: unknown) {
      parsed.set(record.header.id, failedSession(record.header, error instanceof Error ? error.message : String(error)))
    }
  }

  const rootParsed = parsed.get(rootId)
  if (rootParsed?.error !== undefined) {
    throw new GitChatTreeError('gitchat/root-unreadable', `root session "${rootId}" could not be read: ${rootParsed.error}`)
  }

  const nodeById = new Map<string, GitChatNode>()
  const nodes: GitChatNode[] = []
  let turnNodes = 0

  const addNode = (node: GitChatNode): boolean => {
    if (nodeById.has(node.id)) return true
    if (nodes.length >= MAX_NODES) {
      truncated = true
      return false
    }
    nodeById.set(node.id, node)
    nodes.push(node)
    if (node.kind === 'turn') turnNodes += 1
    return true
  }

  const rootTitle = titleOf(rootParsed, root)
  addNode({
    id: `root:${rootId}`,
    kind: 'root',
    parentId: null,
    sessionId: rootId,
    sessionTitle: rootTitle,
    turn: null,
    user: '',
    assistant: '',
    status: archivedSet.has(rootId) ? 'unknown' : 'completed',
    time: root.createdAt,
    startSeq: null,
    endSeq: null,
    forkSeq: null,
    assistantSeq: null,
    toolCalls: 0,
    archived: archivedSet.has(rootId),
    current: rootId === currentSessionId,
    childSessionIds: [],
    label: rootTitle,
  })

  const addTurnNode = (
    record: DshSessionRecord,
    turn: ParsedTurn,
    parentId: string,
    sessionTitle: string,
  ): string | null => {
    if (turnNodes >= MAX_TURNS) {
      truncated = true
      return null
    }
    const user = clipMessage(turn.user)
    const assistant = clipMessage(turn.assistant)
    const node: GitChatNode = {
      id: `turn:${record.header.id}:${turn.turn}`,
      kind: 'turn',
      parentId,
      sessionId: record.header.id,
      sessionTitle,
      turn: turn.turn,
      user: user.text,
      assistant: assistant.text,
      status: turn.status,
      time: turn.time,
      startSeq: turn.startSeq,
      endSeq: turn.endSeq,
      // Only a closed turn has an unambiguous inclusive fork boundary. A live
      // turn stays branchable from Chat itself, not from the graph.
      forkSeq: turn.endSeq,
      assistantSeq: turn.assistantSeq,
      toolCalls: turn.toolCalls,
      archived: archivedSet.has(record.header.id),
      current: record.header.id === currentSessionId,
      childSessionIds: [],
      textTruncated: user.truncated || assistant.truncated,
    }
    if (turn.statusDetail !== undefined) node.statusDetail = turn.statusDetail
    return addNode(node) ? node.id : null
  }

  for (const record of included) {
    const session = parsed.get(record.header.id)
    if (session === undefined) continue
    const sessionTitle = titleOf(session, record.header)
    const isRoot = record.header.id === rootId
    let parentId = `root:${rootId}`
    if (!isRoot) {
      const boundarySeq = session.inheritedEventCount - 1
      parentId = resolveBoundaryNode(boundarySeq, record.header.parentSession, parsed, nodeById, `root:${rootId}`)
    }

    if (session.error !== undefined) {
      const branchId = `branch:${record.header.id}`
      addNode({
        id: branchId,
        kind: 'branch',
        parentId,
        sessionId: record.header.id,
        sessionTitle,
        turn: null,
        user: '',
        assistant: `会话读取失败：${session.error}`,
        status: 'error',
        statusDetail: clipDetail(session.error),
        time: record.header.createdAt,
        startSeq: null,
        endSeq: null,
        forkSeq: session.inheritedEventCount > 0 ? session.inheritedEventCount - 1 : null,
        assistantSeq: null,
        toolCalls: 0,
        archived: archivedSet.has(record.header.id),
        current: record.header.id === currentSessionId,
        childSessionIds: [],
        label: '读取失败',
      })
      continue
    }

    if (!isRoot && session.ownTurns.length === 0) {
      addNode({
        id: `branch:${record.header.id}`,
        kind: 'branch',
        parentId,
        sessionId: record.header.id,
        sessionTitle,
        turn: null,
        user: '',
        assistant: '',
        status: 'unknown',
        time: record.header.createdAt,
        startSeq: null,
        endSeq: null,
        forkSeq: session.inheritedEventCount > 0 ? session.inheritedEventCount - 1 : null,
        assistantSeq: null,
        toolCalls: 0,
        archived: archivedSet.has(record.header.id),
        current: record.header.id === currentSessionId,
        childSessionIds: [],
        label: '空分支',
      })
      continue
    }

    const turns = isRoot ? session.turns : session.ownTurns
    for (const turn of turns) {
      const created = addTurnNode(record, turn, parentId, sessionTitle)
      if (created !== null) parentId = created
    }
  }

  // Edges are derived from parentId after all nodes exist. A missing parent
  // falls back to the root so a clipped/partial tree stays connected.
  const edges: GitChatEdge[] = []
  const rootNodeId = `root:${rootId}`
  for (const node of nodes) {
    if (node.parentId === null) continue
    const parent = nodeById.get(node.parentId) ?? nodeById.get(rootNodeId)
    if (parent === undefined) continue
    const kind: GitChatEdge['kind'] = parent.sessionId === node.sessionId ? 'chain' : 'fork'
    edges.push({
      id: `edge:${parent.id}->${node.id}`,
      source: parent.id,
      target: node.id,
      kind,
      archived: node.archived,
    })
    if (kind === 'fork' && !parent.childSessionIds.includes(node.sessionId)) {
      parent.childSessionIds.push(node.sessionId)
    }
  }

  const sessions: GitChatSessionSummary[] = included.map((record) => {
    const session = parsed.get(record.header.id)
    const summary: GitChatSessionSummary = {
      sessionId: record.header.id,
      title: titleOf(session, record.header),
      parentSessionId: record.header.parentSession ?? null,
      createdAt: record.header.createdAt,
      archived: archivedSet.has(record.header.id),
      current: record.header.id === currentSessionId,
      turnCount: session?.turns.length ?? 0,
      ownTurnCount: session?.ownTurns.length ?? 0,
      forkSeq: session !== undefined && session.inheritedEventCount > 0 ? session.inheritedEventCount - 1 : null,
      descendantCount: descendants.get(record.header.id) ?? 0,
    }
    if (record.header.cwd !== undefined) summary.cwd = record.header.cwd
    if (record.header.agentPreset !== undefined) summary.agentPreset = record.header.agentPreset
    if (session?.provider !== undefined) summary.provider = session.provider
    if (session?.model !== undefined) summary.model = session.model
    if (session?.error !== undefined) summary.error = session.error
    return summary
  })

  return {
    version: 1,
    rootId,
    currentSessionId,
    generatedAt: input.generatedAt ?? Date.now(),
    includeArchived: effectiveIncludeArchived,
    truncated,
    nodes,
    edges,
    sessions,
    stats: {
      sessions: sessions.length,
      turns: turnNodes,
      branches: edges.filter((edge) => edge.kind === 'fork').length,
      archivedBranches: sessions.filter((session) => session.archived && session.sessionId !== rootId).length,
    },
  }
}
