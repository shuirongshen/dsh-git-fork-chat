/**
 * GitChat host half: exposes the read model and branch operations over the
 * DSH web server. The browser half lives in `./client` and is served by the
 * client module system from the package's `dsh.client` declaration.
 * @module dsh-gitchat
 */
import type { DshHostContext } from './dsh.ts'
import { mountOnce } from './mount-once.ts'
import { registerGitChatRoutes } from './routes.ts'

/** Required host services: route registry, session log reader, archive registry. */
export const inject = ['webServer', 'sessionQuery', 'workspaceRegistry']

/**
 * Mount the /gitchat routes and tie their lifetime to the plugin fiber.
 * @param ctx - host context carrying the three required services.
 */
export const apply = mountOnce('dsh-gitchat', (ctx: DshHostContext): void => {
  ctx.effect(() => registerGitChatRoutes(ctx), 'dsh-gitchat: /gitchat routes')
})
