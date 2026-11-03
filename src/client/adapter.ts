/**
 * DSH client adapter: turns the host routes and session services into the
 * small GitChatController the pure view consumes.
 */
import type { GitChatController } from './controller.ts'
import * as api from './api.ts'

/** Structural slice of the DSH client context used by GitChat. */
export interface DshClientContext {
  effect: (fn: () => void | (() => void), label?: string) => void
  locale: {
    register: (namespace: string, dictionaries: { zh: Record<string, string>; en: Record<string, string> }) => () => void
    bind: (namespace: string) => (key: string, params?: Record<string, string | number>) => string
  }
  slots: {
    inject: (name: string, callback: () => (() => void) | void) => void
    register: (options: Record<string, unknown>, component: unknown) => () => void
  }
  sessions: {
    fork: (options: {
      sessionId: string
      atSeq?: number
      increaseTitle?: boolean
      onCreated?: (childId: string) => void
    }) => Promise<string>
  }
  uiWorkspace: {
    openSession: (sessionId: string) => void
  }
}

/** Build the real controller around live DSH services. */
export function createController(ctx: DshClientContext): GitChatController {
  return {
    loadTree: (sessionId, includeArchived, signal) => api.loadTree(sessionId, includeArchived, signal),
    openSession: (sessionId) => {
      ctx.uiWorkspace.openSession(sessionId)
    },
    forkAt: async (sessionId, atSeq) => {
      // DSH's fork copies the exact inclusive event prefix and closes any open
      // tail, so the child's derived messages contain the full root -> turn
      // context. `increaseTitle` gives the child a distinguishable title.
      const childId = await ctx.sessions.fork({ sessionId, atSeq, increaseTitle: true })
      ctx.uiWorkspace.openSession(childId)
      return childId
    },
    archiveBranch: (sessionId, force) => api.archiveBranch(sessionId, force),
    unarchiveBranch: async (sessionId) => {
      await api.unarchiveBranch(sessionId)
    },
    saveTree: (tree) => api.saveTree(tree.currentSessionId),
    downloadTree: async (tree) => {
      // The on-screen tree may be filtered by the archived toggle. An export
      // is a snapshot of the whole conversation tree, so fetch the full model
      // unless it is already the visible one.
      const full = tree.includeArchived ? tree : await api.loadTree(tree.currentSessionId, true)
      api.downloadTree(full)
    },
  }
}
