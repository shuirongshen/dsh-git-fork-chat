/**
 * Browser-side controller contract for the GitChat view.
 *
 * The DSH adapter implements it with the real session service and host routes;
 * the standalone preview implements it with an in-memory fixture. Keeping the
 * view free of DSH services makes both surfaces exercise the same UI code.
 */
import type { GitChatArchiveResult, GitChatSaveResult, GitChatTree } from '../shared/types.ts'

/** Translation function supplied by the DSH locale service (or the preview). */
export type GitChatTranslate = (key: string, params?: Record<string, string | number>) => string

export interface GitChatController {
  /** Load the tree rooted at the current session's top ancestor. */
  loadTree(sessionId: string, includeArchived: boolean, signal?: AbortSignal): Promise<GitChatTree>
  /** Navigate the GUI to a session (Chat view). */
  openSession(sessionId: string): void
  /** Fork at an inclusive event sequence and open the child session. */
  forkAt(sessionId: string, atSeq: number): Promise<string>
  /** Archive a branch subtree (non-destructive; recoverable). */
  archiveBranch(sessionId: string, force: boolean): Promise<GitChatArchiveResult>
  /** Restore an archived session. */
  unarchiveBranch(sessionId: string): Promise<void>
  /** Write a full snapshot under DSH's plugin-data directory. */
  saveTree(tree: GitChatTree): Promise<GitChatSaveResult>
  /** Trigger a browser download of the full tree JSON, including archived branches. */
  downloadTree(tree: GitChatTree): Promise<void>
}

/** Props the conversation.view slot passes to the GitChat component. */
export interface GitChatViewProps {
  /** Current DSH session id, supplied by the session-scoped slot. */
  sessionId: string
  /** Injected controller. */
  controller: GitChatController
  /** Locale-bound translator for the `gitchat` namespace. */
  t: GitChatTranslate
}
