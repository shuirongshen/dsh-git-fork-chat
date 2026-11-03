/**
 * GitChat browser half.
 *
 * Registers a `GitChat` conversation View tab next to Chat/Trajectory. The
 * bundle is a lazy-CJS client module: React and DSH packages stay external,
 * React Flow + Dagre are bundled, and CSS is injected through the official
 * `style[data-plugin-css]` mechanism.
 * @module dsh-gitchat/client
 */
import type { ComponentType } from 'react'
import xyflowCss from '@xyflow/react/dist/style.css'
import appCss from './style.css'
import { GitChatView } from './GitChatView.tsx'
import { en, zh } from './i18n.ts'
import { createController, type DshClientContext } from './adapter.ts'

/** Locale namespace owned by this plugin. */
const NS = 'gitchat'
/** Stable stylesheet identity used to dedupe reloads. */
const STYLE_ID = 'dsh-gitchat/styles'

/**
 * Inject the bundled stylesheet once. This mirrors the official plugin build's
 * `style[data-plugin-css]` convention and keeps React Flow's base CSS scoped to
 * the GitChat surface.
 */
function installStyle(): void {
  if (typeof document === 'undefined') return
  if (document.querySelector(`style[data-plugin-css="${STYLE_ID}"]`) !== null) return
  const style = document.createElement('style')
  style.dataset.plugin = 'dsh-gitchat'
  style.dataset.pluginCss = STYLE_ID
  style.textContent = `${xyflowCss}\n${appCss}`
  document.head.appendChild(style)
}

installStyle()

/** Required client services: slot registry, fork API, navigation, locale. */
export const inject = ['slots', 'sessions', 'uiWorkspace', 'locale']

/**
 * Register the GitChat View tab and its controller.
 * @param ctx - client root context.
 */
export function apply(ctx: DshClientContext): void {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-gitchat: dictionaries')
  const t = ctx.locale.bind(NS)
  const controller = createController(ctx)

  ctx.slots.inject('conversation.view', () => {
    try {
      return ctx.slots.register(
        {
          name: 'conversation.view',
          id: 'gitchat',
          order: 20,
          locale: NS,
          label: () => t('view.tab'),
          inject: () => ({ controller }),
        },
        GitChatView as unknown as ComponentType<Record<string, unknown>>,
      )
    } catch {
      // A shell without the conversation View hole simply omits GitChat.
      return () => {}
    }
  })
}
