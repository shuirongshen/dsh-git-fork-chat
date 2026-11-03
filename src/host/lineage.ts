/**
 * Fork-lineage helpers over DSH session headers.
 *
 * A "GitChat branch" is an ordinary DSH Session whose header carries
 * `parentSession`. Subagent Sessions also carry `parentSession`, but they are
 * not conversation branches and are filtered out here.
 */
import type { DshSessionHeader, DshSessionRecord } from './dsh.ts'

/** Whether a record is a conversation fork (not a root and not a subagent). */
export function isForkChild(record: DshSessionRecord): boolean {
  return record.header.parentSession !== undefined && record.header.origin !== 'subagent'
}

/** Build a map from parent session id to its direct fork children. */
export function forkChildrenByParent(records: readonly DshSessionRecord[]): Map<string, DshSessionRecord[]> {
  const children = new Map<string, DshSessionRecord[]>()
  for (const record of records) {
    if (!isForkChild(record)) continue
    const parent = record.header.parentSession as string
    const list = children.get(parent) ?? []
    list.push(record)
    children.set(parent, list)
  }
  for (const list of children.values()) {
    list.sort((a, b) => a.header.createdAt - b.header.createdAt || a.header.id.localeCompare(b.header.id))
  }
  return children
}

/** Create a header map, keeping the last record for a duplicate id. */
export function recordsById(records: readonly DshSessionRecord[]): Map<string, DshSessionRecord> {
  const byId = new Map<string, DshSessionRecord>()
  for (const record of records) byId.set(record.header.id, record)
  return byId
}

/**
 * Walk `parentSession` to the topmost known ancestor.
 * Cycles are broken defensively; DSH validates lineage before exposing it.
 */
export function topAncestor(records: readonly DshSessionRecord[], sessionId: string): DshSessionHeader | undefined {
  const byId = recordsById(records)
  const seen = new Set<string>()
  let current: DshSessionHeader | undefined = byId.get(sessionId)?.header
  if (current === undefined) return undefined
  while (current.parentSession !== undefined && !seen.has(current.parentSession)) {
    seen.add(current.id)
    const parent: DshSessionHeader | undefined = byId.get(current.parentSession)?.header
    if (parent === undefined) return current
    current = parent
  }
  return current
}

/**
 * The current Session id to highlight. A subagent view is rendered against its
 * nearest non-subagent ancestor because subagent sessions are not tree nodes.
 */
export function displayCurrentSessionId(records: readonly DshSessionRecord[], sessionId: string): string {
  const byId = recordsById(records)
  const seen = new Set<string>()
  let header = byId.get(sessionId)?.header
  while (header !== undefined && header.origin === 'subagent' && header.parentSession !== undefined && !seen.has(header.id)) {
    seen.add(header.id)
    header = byId.get(header.parentSession)?.header
  }
  return header?.id ?? sessionId
}

/** Collect a fork subtree in deterministic pre-order, excluding subagents. */
export function collectForkSubtree(
  records: readonly DshSessionRecord[],
  sessionId: string,
): DshSessionRecord[] {
  const byId = recordsById(records)
  const children = forkChildrenByParent(records)
  const out: DshSessionRecord[] = []
  const seen = new Set<string>()
  const visit = (id: string): void => {
    if (seen.has(id)) return
    const record = byId.get(id)
    if (record === undefined) return
    seen.add(id)
    out.push(record)
    for (const child of children.get(id) ?? []) visit(child.header.id)
  }
  visit(sessionId)
  return out
}

/** Count direct fork children for every session. */
export function directChildCounts(records: readonly DshSessionRecord[]): Map<string, number> {
  const counts = new Map<string, number>()
  for (const record of records) {
    if (!isForkChild(record)) continue
    const parent = record.header.parentSession as string
    counts.set(parent, (counts.get(parent) ?? 0) + 1)
  }
  return counts
}

/**
 * Count all fork descendants for every session. A small memo keeps this linear
 * even when the session list later grows beyond a handful of branches.
 */
export function descendantCounts(records: readonly DshSessionRecord[]): Map<string, number> {
  const children = forkChildrenByParent(records)
  const memo = new Map<string, number>()
  const visit = (id: string, stack: Set<string>): number => {
    const cached = memo.get(id)
    if (cached !== undefined) return cached
    if (stack.has(id)) return 0
    stack.add(id)
    let count = 0
    for (const child of children.get(id) ?? []) {
      count += 1 + visit(child.header.id, stack)
    }
    stack.delete(id)
    memo.set(id, count)
    return count
  }
  for (const record of records) visit(record.header.id, new Set())
  return memo
}

/**
 * Collect the session ids the graph builder will include, in the same
 * pre-order and with the same archived-subtree rule. The route reads only
 * these logs instead of every session in the workspace.
 */
export function visibleSessionIds(
  records: readonly DshSessionRecord[],
  rootId: string,
  archivedSessionIds: ReadonlySet<string>,
  includeArchived: boolean,
  maxSessions: number,
): { ids: string[]; truncated: boolean } {
  const byId = recordsById(records)
  const children = forkChildrenByParent(records)
  const ids: string[] = []
  let truncated = false
  const visit = (id: string): void => {
    const record = byId.get(id)
    if (record === undefined) return
    if (archivedSessionIds.has(id) && !includeArchived) return
    if (ids.length >= maxSessions) {
      truncated = true
      return
    }
    ids.push(id)
    for (const child of children.get(id) ?? []) visit(child.header.id)
  }
  visit(rootId)
  return { ids, truncated }
}

/** Short human-readable session id for fallback labels. */
export function shortSessionId(sessionId: string): string {
  const tail = sessionId.replace(/^session-/, '')
  return tail.length > 8 ? tail.slice(0, 8) : tail
}
