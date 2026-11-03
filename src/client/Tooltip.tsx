/**
 * Small theme-aware tooltip for icon buttons and compact actions.
 *
 * Native `title` tooltips are slow and cannot explain disabled actions; this
 * wrapper shows the same label on hover and keyboard focus. It is portaled to
 * <body> so it is never clipped by the conversation view or a detail panel.
 */
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { createPortal } from 'react-dom'

interface GcTooltipProps {
  /** Short description of what the button does. */
  label: ReactNode
  /** The trigger. Usually a button; disabled buttons still hover through the wrapper. */
  children: ReactNode
  /** Use a full-width flex item, for primary actions that span the detail footer. */
  block?: boolean
}

interface TipState {
  x: number
  y: number
  placement: 'top' | 'bottom'
}

/** Hover/focus tooltip with collision-aware placement. */
export function GcTooltip({ label, children, block = false }: GcTooltipProps) {
  const anchorRef = useRef<HTMLSpanElement>(null)
  const timerRef = useRef<number | null>(null)
  const [tip, setTip] = useState<TipState | null>(null)

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const hide = useCallback(() => {
    clearTimer()
    setTip(null)
  }, [clearTimer])

  const show = useCallback(() => {
    clearTimer()
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null
      const anchor = anchorRef.current
      if (anchor === null) return
      const rect = anchor.getBoundingClientRect()
      const placement: TipState['placement'] = rect.top > 64 ? 'top' : 'bottom'
      const half = Math.min(140, Math.max(40, (window.innerWidth - 16) / 2))
      const x = Math.max(half + 8, Math.min(rect.left + rect.width / 2, window.innerWidth - half - 8))
      const y = placement === 'top' ? rect.top - 8 : rect.bottom + 8
      setTip({ x, y, placement })
    }, 90)
  }, [clearTimer])

  useEffect(() => () => clearTimer(), [clearTimer])

  useEffect(() => {
    if (tip === null) return
    const dismiss = () => hide()
    window.addEventListener('scroll', dismiss, true)
    window.addEventListener('resize', dismiss)
    return () => {
      window.removeEventListener('scroll', dismiss, true)
      window.removeEventListener('resize', dismiss)
    }
  }, [tip, hide])

  return (
    <span
      ref={anchorRef}
      className={`gc-tip-anchor${block ? ' is-block' : ''}`}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocusCapture={show}
      onBlurCapture={hide}
      onClickCapture={hide}
    >
      {children}
      {tip !== null &&
        createPortal(
          <div
            className={`gc-tooltip${tip.placement === 'bottom' ? ' is-bottom' : ''}`}
            style={{ left: tip.x, top: tip.y }}
            role="tooltip"
            aria-hidden="true"
          >
            {label}
          </div>,
          document.body,
        )}
    </span>
  )
}
