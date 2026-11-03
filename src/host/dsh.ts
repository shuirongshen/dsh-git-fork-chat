/**
 * Minimal structural types for the DSH host services this plugin consumes.
 *
 * The package intentionally does not depend on DSH type packages at runtime or
 * build time: the host half only needs a handful of documented services, and
 * keeping them structural makes the graph builder testable with plain fixtures.
 */
import type { IncomingMessage, ServerResponse } from 'node:http'

/** DSH session header (the subset GitChat reads). */
export interface DshSessionHeader {
  version?: number
  id: string
  createdAt: number
  cwd?: string
  parentSession?: string
  isSeeded?: boolean
  origin?: 'subagent'
  delegationDepth?: number
  agentPreset?: string
}

/** One session record from sessionQuery.listSessions(). */
export interface DshSessionRecord {
  header: DshSessionHeader
  live?: boolean
  persisted?: boolean
  formatStatus?: string
}

/** One durable session event. `data` is intentionally opaque. */
export interface DshSessionEvent {
  type: string
  seq: number
  time: number
  data: Record<string, unknown>
}

/** Result of sessionQuery.readSession(). */
export interface DshSessionObservation {
  session: DshSessionHeader
  inheritedEventCount: number
  events: DshSessionEvent[]
}

/** The sessionQuery service contract used by GitChat. */
export interface DshSessionQuery {
  listSessions(signal?: AbortSignal): Promise<DshSessionRecord[]>
  readSession(sessionId: string): Promise<DshSessionObservation>
  traceSession(sessionId: string, signal?: AbortSignal): Promise<unknown>
}

/** The workspace registry contract used for archive/restore. */
export interface DshWorkspaceRegistry {
  readonly archivedSessionIds: readonly string[]
  archiveSession(sessionId: string, options?: { stopActivity?: boolean }): Promise<void>
  unarchiveSession(sessionId: string): Promise<void>
}

/** One named HTTP route accepted by the DSH web server. */
export interface DshWebRoute {
  kind: 'prefix' | 'exact'
  path: string
  handler: (request: IncomingMessage, response: ServerResponse) => void
}

/** The web server service contract used by GitChat. */
export interface DshWebServer {
  register(route: DshWebRoute): () => void
}

/** Cordis-like effect registration. */
export interface DshEffect {
  (effect: () => void | (() => void), label?: string): void
}

/** The host context slice GitChat needs. */
export interface DshHostContext {
  webServer: DshWebServer
  sessionQuery: DshSessionQuery
  workspaceRegistry: DshWorkspaceRegistry
  effect: DshEffect
}
