/**
 * Standalone preview entry. It renders the exact GitChatView used by the DSH
 * slot against an in-memory controller, with no host or network dependency.
 * The small theme switch exists only in this preview harness.
 */
import { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '@xyflow/react/dist/style.css'
import '../src/client/style.css'
import { GitChatView } from '../src/client/GitChatView.tsx'
import { zh } from '../src/client/i18n.ts'
import { createMockController, previewTree } from './mock.ts'
import type { GitChatTranslate } from '../src/client/controller.ts'

type PreviewTheme = 'light' | 'dark'

const t: GitChatTranslate = (key, params) => {
  let text = (zh as Record<string, string>)[key] ?? key
  if (params !== undefined) {
    for (const [name, value] of Object.entries(params)) {
      text = text.split(`{${name}}`).join(String(value))
    }
  }
  return text
}

const initialTheme: PreviewTheme =
  new URLSearchParams(window.location.search).get('theme') === 'dark' ? 'dark' : 'light'
document.body.dataset.previewTheme = initialTheme

const controller = createMockController()

function Preview() {
  const [theme, setTheme] = useState<PreviewTheme>(initialTheme)

  useEffect(() => {
    document.body.dataset.previewTheme = theme
  }, [theme])

  return (
    <>
      <GitChatView sessionId="session-hw" controller={controller} t={t} />
      <button
        type="button"
        className="preview-theme-toggle"
        data-testid="preview-theme-toggle"
        onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        aria-label={theme === 'dark' ? '切换到浅色模式' : '切换到深色模式'}
      >
        {theme === 'dark' ? '☀ 浅色' : '☾ 深色'}
      </button>
    </>
  )
}

const container = document.getElementById('root')
if (container === null) throw new Error('preview: #root is missing')

createRoot(container).render(<Preview />)

;(window as unknown as Record<string, unknown>).__gitchat_preview_tree__ = previewTree()
;(window as unknown as Record<string, unknown>).__gitchat_preview_ready__ = true
