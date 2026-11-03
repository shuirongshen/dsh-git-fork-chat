/**
 * Shared wire types for the GitChat host <-> browser boundary.
 *
 * The tree is a read model derived from real DSH session logs: every node is a
 * turn (or a blank branch placeholder), and every fork edge points at a real
 * forked session. Nothing here is persisted by the plugin; the DSH session log
 * remains the source of truth.
 */

/** Node kind: the session origin, a conversation turn, or a blank fork tip. */
export type GitChatNodeKind = 'root' | 'turn' | 'branch'

/** Normalized turn outcome. */
export type GitChatTurnStatus =
  | 'completed'
  | 'error'
  | 'interrupted'
  | 'blocked'
  | 'running'
  | 'unknown'

/** One rendered node in the conversation tree. */
export interface GitChatNode {
  /** Stable id: `root:<sessionId>`, `turn:<sessionId>:<n>`, `branch:<sessionId>`. */
  id: string
  kind: GitChatNodeKind
  /** Parent node id, or null for the root. */
  parentId: string | null
  /** Session that owns this turn (or the blank branch session). */
  sessionId: string
  /** Display title of the owning session. */
  sessionTitle: string
  /** Turn number inside the owning session; null for root/branch placeholders. */
  turn: number | null
  /** Human prompt text for the turn. */
  user: string
  /** Final assistant text for the turn. */
  assistant: string
  /** Turn status. */
  status: GitChatTurnStatus
  /** Optional short failure/interruption detail. */
  statusDetail?: string
  /** Turn start time (epoch ms). */
  time: number
  /** First event seq of the turn. */
  startSeq: number | null
  /** `turn/end` seq, when the turn closed. */
  endSeq: number | null
  /** Inclusive event seq that a fork from this node should copy through. */
  forkSeq: number | null
  /** Seq of the last assistant/message event, when present. */
  assistantSeq: number | null
  /** Number of tool calls observed in the turn. */
  toolCalls: number
  /** Whether the owning session is archived. */
  archived: boolean
  /** Whether the owning session is the session currently open in the GUI. */
  current: boolean
  /** Number of direct child branches forked from this node. */
  childSessionIds: string[]
  /** Placeholder label for root/branch nodes. */
  label?: string
  /** True when user or assistant text was clipped for wire size. */
  textTruncated?: boolean
}

/** One edge of the tree. */
export interface GitChatEdge {
  id: string
  source: string
  target: string
  /** `chain` continues the same session; `fork` crosses into a child session. */
  kind: 'chain' | 'fork'
  archived: boolean
}

/** One session participating in the tree. */
export interface GitChatSessionSummary {
  sessionId: string
  title: string
  parentSessionId: string | null
  cwd?: string
  agentPreset?: string
  model?: string
  provider?: string
  createdAt: number
  archived: boolean
  current: boolean
  /** Turns in the whole log, including inherited prefix. */
  turnCount: number
  /** Turns owned by this session (after the inherited prefix). */
  ownTurnCount: number
  /** Last inherited event seq (`inheritedEventCount - 1`), null for root. */
  forkSeq: number | null
  /** Direct fork descendants. */
  descendantCount: number
  /** Set when the session log could not be read. */
  error?: string
}

/** Complete read model returned by `/gitchat/tree` and persisted by `/gitchat/save`. */
export interface GitChatTree {
  version: 1
  rootId: string
  currentSessionId: string
  generatedAt: number
  includeArchived: boolean
  truncated: boolean
  nodes: GitChatNode[]
  edges: GitChatEdge[]
  sessions: GitChatSessionSummary[]
  stats: {
    sessions: number
    turns: number
    branches: number
    archivedBranches: number
  }
}

/** Stable API error shape. */
export interface GitChatError {
  code: string
  message: string
  details?: unknown
}

/** Every /gitchat JSON response is one of these envelopes. */
export type GitChatEnvelope<T> =
  | { ok: true; value: T }
  | { ok: false; error: GitChatError }

/** Result of archiving a branch subtree. */
export interface GitChatArchiveResult {
  rootSessionId: string
  archivedSessions: string[]
  skipped: string[]
  count: number
}

/** Result of writing a tree snapshot to disk. */
export interface GitChatSaveResult {
  path: string
  bytes: number
  generatedAt: number
  sessions: number
  turns: number
}

/** Request body for the tree route. */
export interface GitChatTreeRequest {
  sessionId: string
  includeArchived?: boolean
}
