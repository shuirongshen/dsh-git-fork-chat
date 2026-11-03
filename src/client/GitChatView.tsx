/**
 * GitChat conversation-tree surface.
 *
 * The component is deliberately DSH-free: it receives a controller and a
 * locale-bound translator, so the same code renders inside the conversation
 * View slot and in the standalone preview with an in-memory controller.
 */
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from 'react'
import { createPortal } from 'react-dom'
import {
  Background,
  BackgroundVariant,
  Controls,
  Handle,
  MiniMap,
  Position,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
  type Edge,
  type Node,
  type NodeProps,
  type NodeTypes,
} from '@xyflow/react'
import type { GitChatController, GitChatTranslate, GitChatViewProps } from './controller.ts'
import type {
  GitChatEdge,
  GitChatNode,
  GitChatSessionSummary,
  GitChatTree,
  GitChatTurnStatus,
} from '../shared/types.ts'
import { layoutTree } from './layout.ts'
import { GcTooltip } from './Tooltip.tsx'
import {
  ArchiveIcon,
  BranchIcon,
  CheckIcon,
  ChevronIcon,
  CloseIcon,
  CopyIcon,
  DownloadIcon,
  EmptyTreeIcon,
  FitIcon,
  LayoutIcon,
  OpenIcon,
  RefreshIcon,
  RestoreIcon,
  SaveIcon,
  SpinnerIcon,
  WarningIcon,
} from './icons.tsx'

/** Branch accent palette; root always uses the theme brand token. */
const BRANCH_COLORS = [
  '#4d6bfe',
  '#0f9f8f',
  '#d97706',
  '#c026d3',
  '#0284c7',
  '#7c3aed',
  '#dc2626',
  '#15803d',
]

const STATUS_CLASS: Record<GitChatTurnStatus, string> = {
  completed: 'is-completed',
  error: 'is-error',
  interrupted: 'is-interrupted',
  blocked: 'is-blocked',
  running: 'is-running',
  unknown: 'is-unknown',
}

const STATUS_KEY: Record<GitChatTurnStatus, string> = {
  completed: 'status.completed',
  error: 'status.error',
  interrupted: 'status.interrupted',
  blocked: 'status.blocked',
  running: 'status.running',
  unknown: 'status.unknown',
}

type NodeSize = { width: number; height: number }

/** Fixed rendered size of one turn card. */
const TURN_SIZE: NodeSize = { width: 280, height: 124 }
/** Fixed rendered size of the root card. */
const ROOT_SIZE: NodeSize = { width: 280, height: 92 }
/** Fixed rendered size of a blank/error branch card. */
const BRANCH_SIZE: NodeSize = { width: 280, height: 96 }

type GitChatFlowNodeData = {
  node: GitChatNode
  accent: string
  stats: GitChatTree['stats']
  t: GitChatTranslate
  onSelect: (id: string) => void
}

type GitChatFlowNode = Node<GitChatFlowNodeData, 'gitchat'>

const NODE_TYPES: NodeTypes = { gitchat: GitChatNodeCard }

/** Stable branch colour for a session. */
function accentFor(node: GitChatNode, rootId: string): string {
  if (node.kind === 'root' || node.sessionId === rootId) return 'var(--gc-brand)'
  let hash = 2166136261
  for (let index = 0; index < node.sessionId.length; index += 1) {
    hash ^= node.sessionId.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return BRANCH_COLORS[(hash >>> 0) % BRANCH_COLORS.length] as string
}

/** Fixed dimensions used by the Dagre layout. */
function sizeFor(node: GitChatNode): NodeSize {
  if (node.kind === 'root') return ROOT_SIZE
  if (node.kind === 'branch') return BRANCH_SIZE
  return TURN_SIZE
}

/** Compact numeric timestamp for node footers. */
function formatShortTime(ms: number): string {
  if (!Number.isFinite(ms)) return ''
  const date = new Date(ms)
  const pad = (value: number) => String(value).padStart(2, '0')
  return `${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

/** Full local timestamp for the detail panel. */
function formatFullTime(ms: number): string {
  if (!Number.isFinite(ms)) return '—'
  try {
    return new Date(ms).toLocaleString()
  } catch {
    return String(ms)
  }
}

/** Copy with a graceful fallback for restricted clipboard contexts. */
async function copyText(text: string): Promise<void> {
  if (navigator.clipboard?.writeText !== undefined) {
    await navigator.clipboard.writeText(text)
    return
  }
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.style.position = 'fixed'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()
  const ok = document.execCommand('copy')
  textarea.remove()
  if (!ok) throw new Error('copy command was rejected')
}

/** One node card. */
function GitChatNodeCard({ data, selected }: NodeProps<GitChatFlowNode>) {
  const { node, accent, stats, t, onSelect } = data
  const statusClass = STATUS_CLASS[node.status]
  const label =
    node.kind === 'root'
      ? t('view.rootBranch')
      : node.kind === 'branch'
        ? node.label ?? t('detail.branch')
        : ''
  const aria =
    node.kind === 'turn'
      ? t('aria.node', { turn: node.turn ?? 0, text: node.user || t('detail.noUser') })
      : `${label} ${node.sessionTitle}`

  const className = [
    'gc-node',
    `gc-node-kind-${node.kind}`,
    selected ? 'is-selected' : '',
    node.current ? 'is-current' : '',
    node.archived ? 'is-archived' : '',
    node.kind === 'branch' && node.status === 'error' ? 'is-error' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect(node.id)
    }
  }

  return (
    <div
      className={className}
      style={{ '--gc-accent': accent } as CSSProperties}
      data-node-id={node.id}
      role="button"
      tabIndex={0}
      aria-label={aria}
      onClick={(event) => {
        event.stopPropagation()
        onSelect(node.id)
      }}
      onKeyDown={handleKeyDown}
    >
      <Handle type="target" position={Position.Top} isConnectable={false} className="gc-handle" />
      <div className="gc-node-top">
        <span className="gc-node-turn">
          {node.kind === 'root' ? 'ROOT' : node.kind === 'branch' ? '⑂' : `T${node.turn ?? '?'}`}
        </span>
        <span className="gc-node-title" title={node.sessionTitle}>
          {node.sessionTitle}
        </span>
        <span className={`gc-node-dot ${statusClass}`} title={t(STATUS_KEY[node.status])} />
      </div>

      {node.kind === 'root' ? (
        <div className="gc-node-root-body">
          <div className="gc-node-root-label">{label}</div>
          <div className="gc-node-root-meta">
            {t('view.turnCount', { count: stats.turns })} · {t('view.branchCount', { count: stats.branches })}
          </div>
        </div>
      ) : node.kind === 'branch' ? (
        <div className="gc-node-branch-body">
          <div className="gc-node-branch-label">{label}</div>
          <div className="gc-node-branch-hint">
            {node.status === 'error'
              ? node.assistant
              : node.forkSeq === null
                ? t('detail.branch')
                : `#${node.forkSeq}`}
          </div>
        </div>
      ) : (
        <>
          <div className="gc-node-user">{node.user || '—'}</div>
          <div className={`gc-node-assistant ${node.assistant ? '' : 'is-empty'}`}>
            {node.assistant || (node.status === 'running' ? t('status.running') : '—')}
          </div>
        </>
      )}

      <div className="gc-node-foot">
        <span>{formatShortTime(node.time)}</span>
        {node.childSessionIds.length > 0 && (
          <span className="gc-node-branches">⑂ {node.childSessionIds.length}</span>
        )}
        {node.archived && <span className="gc-node-badge gc-node-badge-archived">{t('detail.archived')}</span>}
        {node.current && <span className="gc-node-badge gc-node-badge-current">{t('detail.current')}</span>}
      </div>
      <Handle type="source" position={Position.Bottom} isConnectable={false} className="gc-handle" />
    </div>
  )
}

interface CanvasProps {
  tree: GitChatTree
  t: GitChatTranslate
  selectedId: string | null
  layoutNonce: number
  onSelect: (id: string | null) => void
}

/** React Flow canvas with Dagre layout and preserved dragged positions. */
function GitChatCanvas({ tree, t, selectedId, layoutNonce, onSelect }: CanvasProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState<GitChatFlowNode>([])
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([])
  const { fitView } = useReactFlow()
  const fitted = useRef(false)
  const appliedNonce = useRef(layoutNonce)
  const signatureRef = useRef('')

  const flowEdges = useMemo<Edge[]>(() => {
    const byId = new Map(tree.nodes.map((node) => [node.id, node]))
    return tree.edges.map((edge: GitChatEdge) => {
      const target = byId.get(edge.target)
      const accent = target === undefined ? 'var(--gc-border-strong)' : accentFor(target, tree.rootId)
      return {
        id: edge.id,
        source: edge.source,
        target: edge.target,
        type: 'smoothstep',
        animated: !edge.archived && target?.status === 'running',
        className: edge.archived ? 'is-archived' : undefined,
        style: {
          stroke: edge.archived ? 'var(--gc-border-strong)' : accent,
          strokeWidth: edge.kind === 'fork' ? 2 : 1.7,
          ...(edge.archived ? { strokeDasharray: '5 4' } : {}),
          opacity: edge.archived ? 0.65 : 0.9,
        },
        selectable: false,
        focusable: false,
      } satisfies Edge
    })
  }, [tree])

  useEffect(() => {
    if (tree.nodes.length === 0) {
      setNodes([])
      setEdges([])
      return
    }
    const sizes = new Map(tree.nodes.map((node) => [node.id, sizeFor(node)]))
    const positions = layoutTree(
      tree.nodes.map((node) => ({ id: node.id, ...sizeFor(node) })),
      tree.edges.map((edge) => ({ source: edge.source, target: edge.target })),
    )
    const signature = `${tree.nodes.map((node) => node.id).join('|')}::${tree.edges.map((edge) => edge.id).join('|')}`
    const structuralChange = signatureRef.current !== signature
    signatureRef.current = signature
    const nonceChanged = appliedNonce.current !== layoutNonce
    appliedNonce.current = layoutNonce
    const relayout = structuralChange || nonceChanged

    setNodes((current) => {
      const previous = new Map(current.map((node) => [node.id, node]))
      return tree.nodes.map((node) => {
        const size = sizes.get(node.id) ?? TURN_SIZE
        const laidOut = positions.get(node.id)
        const existing = previous.get(node.id)
        // A manual re-layout discards dragged positions; normal refreshes keep
        // them so an 8-second live poll never yanks a node from the user.
        const position =
          !relayout && existing !== undefined
            ? existing.position
            : { x: laidOut?.x ?? 0, y: laidOut?.y ?? 0 }
        return {
          id: node.id,
          type: 'gitchat',
          position,
          data: {
            node,
            accent: accentFor(node, tree.rootId),
            stats: tree.stats,
            t,
            onSelect: (id: string) => onSelect(id),
          },
          selected: node.id === selectedId,
          style: { width: size.width },
          draggable: true,
          connectable: false,
          deletable: false,
        } satisfies GitChatFlowNode
      })
    })
    setEdges(flowEdges)
  }, [tree, t, selectedId, layoutNonce, flowEdges, setNodes, setEdges, onSelect])

  useEffect(() => {
    if (fitted.current || tree.nodes.length === 0) return
    fitted.current = true
    const timer = window.setTimeout(() => {
      // Keep the default view legible; a huge tree can still be zoomed out
      // manually below this floor.
      void fitView({ padding: 0.18, minZoom: 0.5, duration: 320 })
    }, 90)
    return () => window.clearTimeout(timer)
  }, [tree, fitView])

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={NODE_TYPES}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={(_event, node) => onSelect(node.id)}
      onPaneClick={() => onSelect(null)}
      nodesConnectable={false}
      elementsSelectable
      nodesDraggable
      panOnScroll
      zoomOnScroll
      zoomOnPinch
      minZoom={0.12}
      maxZoom={1.8}
      fitView={false}
      attributionPosition="top-right"
      className="gc-flow"
      aria-label={t('aria.nodeCount', { count: tree.nodes.length })}
    >
      <Background variant={BackgroundVariant.Dots} gap={18} size={1} color="var(--gc-grid)" />
      <Controls showInteractive={false} />
      <MiniMap
        pannable
        zoomable
        nodeBorderRadius={4}
        maskColor="color-mix(in srgb, var(--gc-bg) 62%, transparent)"
        nodeColor={(node: Node) => {
          const data = node.data as GitChatFlowNodeData
          return data.node.archived ? 'var(--gc-border-strong)' : data.accent
        }}
      />
    </ReactFlow>
  )
}

interface DetailProps {
  node: GitChatNode
  tree: GitChatTree
  t: GitChatTranslate
  busy: BusyState
  onClose: () => void
  onFork: (node: GitChatNode) => void
  onOpen: (node: GitChatNode) => void
  onArchive: (node: GitChatNode) => void
  onRestore: (node: GitChatNode) => void
  onCopy: (node: GitChatNode) => void
}

/** Right-hand inspector for the selected node. */
function GitChatDetail({ node, tree, t, busy, onClose, onFork, onOpen, onArchive, onRestore, onCopy }: DetailProps) {
  const summary: GitChatSessionSummary | undefined = tree.sessions.find(
    (session) => session.sessionId === node.sessionId,
  )
  const model =
    summary?.model === undefined
      ? undefined
      : summary.provider === undefined
        ? summary.model
        : `${summary.provider}/${summary.model}`
  const title =
    node.kind === 'root'
      ? node.sessionTitle
      : node.kind === 'branch'
        ? node.label ?? t('detail.branch')
        : node.sessionTitle
  const badge =
    node.kind === 'root'
      ? t('detail.root')
      : node.kind === 'branch'
        ? t('detail.branch')
        : t('detail.turn', { turn: node.turn ?? 0 })
  const forkDisabled =
    node.kind !== 'turn' ||
    node.forkSeq === null ||
    node.archived ||
    node.status === 'running' ||
    busy !== null
  const isRoot = node.sessionId === tree.rootId
  const isBusy = busy !== null
  const forkHint = node.archived
    ? t('detail.forkArchived')
    : node.status === 'running'
      ? t('detail.forkRunning')
      : forkDisabled && !isBusy
        ? t('detail.forkDisabled')
        : t('detail.forkHint')

  return (
    <div className="gc-detail-content" aria-label={title}>
      <div className="gc-detail-head">
        <div className="gc-detail-title-row">
          <span className="gc-turn-badge">{badge}</span>
          <h2 title={title}>{title}</h2>
          <GcTooltip label={t('detail.action.close')}>
            <button
              type="button"
              className="gc-icon-btn gc-detail-close"
              onClick={onClose}
              aria-label={t('aria.closeDetail')}
            >
              <CloseIcon />
            </button>
          </GcTooltip>
        </div>
        <div className="gc-detail-chips">
          <span className={`gc-status ${STATUS_CLASS[node.status]}`}>
            <i />
            {t(STATUS_KEY[node.status])}
          </span>
          {node.current && <span className="gc-pill is-accent">{t('detail.current')}</span>}
          {node.archived && <span className="gc-pill is-archived">{t('detail.archived')}</span>}
          {node.childSessionIds.length > 0 && (
            <span className="gc-pill">
              {t('detail.childBranches', { count: node.childSessionIds.length })}
            </span>
          )}
        </div>
      </div>

      <div className="gc-detail-scroll">
        <div className="gc-meta-grid">
          <span className="gc-meta-key">{t('detail.meta.session')}</span>
          <span className="gc-meta-value">
            <code>{node.sessionId}</code>
          </span>
          {model !== undefined && (
            <>
              <span className="gc-meta-key">{t('detail.meta.model')}</span>
              <span className="gc-meta-value">{model}</span>
            </>
          )}
          <span className="gc-meta-key">{t('detail.meta.time')}</span>
          <span className="gc-meta-value">{formatFullTime(node.time)}</span>
          {node.kind === 'turn' && node.forkSeq !== null && (
            <>
              <span className="gc-meta-key">{t('detail.meta.forkSeq')}</span>
              <span className="gc-meta-value">#{node.forkSeq}</span>
            </>
          )}
          {node.toolCalls > 0 && (
            <>
              <span className="gc-meta-key">{t('detail.meta.tools')}</span>
              <span className="gc-meta-value">{node.toolCalls}</span>
            </>
          )}
          {summary?.cwd !== undefined && (
            <>
              <span className="gc-meta-key">{t('detail.meta.cwd')}</span>
              <span className="gc-meta-value">{summary.cwd}</span>
            </>
          )}
        </div>

        {node.kind === 'turn' && (
          <>
            <section className="gc-section">
              <div className="gc-section-head">
                <span>{t('detail.user')}</span>
              </div>
              <div className={`gc-message gc-message-user ${node.user ? '' : 'gc-message-empty'}`}>
                {node.user || t('detail.noUser')}
              </div>
            </section>
            <section className="gc-section">
              <div className="gc-section-head">
                <span>{t('detail.assistant')}</span>
                {node.statusDetail !== undefined && <span className="gc-section-time">{node.statusDetail}</span>}
              </div>
              <div className={`gc-message ${node.assistant ? '' : 'gc-message-empty'}`}>
                {node.assistant || t('detail.noAssistant')}
              </div>
            </section>
            {node.textTruncated === true && (
              <div className="gc-hint">
                <WarningIcon size={13} />
                <span>{t('detail.truncated')}</span>
              </div>
            )}
            <div className="gc-hint">
              <BranchIcon size={13} />
              <span>{forkHint}</span>
            </div>
          </>
        )}

        {node.kind === 'root' && (
          <div className="gc-hint">
            <BranchIcon size={13} />
            <span>{t('view.rootBranch')}</span>
          </div>
        )}

        {node.kind === 'branch' && (
          <section className="gc-section">
            <div className="gc-section-head">
              <span>{t('detail.branch')}</span>
            </div>
            <div className={`gc-message ${node.status === 'error' ? '' : 'gc-message-empty'}`}>
              {node.assistant || t('detail.forkHint')}
            </div>
          </section>
        )}
      </div>

      <div className="gc-detail-actions">
        {node.kind === 'turn' && !node.archived && (
          <GcTooltip label={forkHint} block>
            <button
              type="button"
              className="gc-btn gc-btn-primary gc-action-main"
              disabled={forkDisabled}
              onClick={() => onFork(node)}
            >
              {busy === 'fork' ? <SpinnerIcon /> : <BranchIcon />}
              {busy === 'fork' ? t('detail.action.forking') : t('detail.action.fork')}
            </button>
          </GcTooltip>
        )}
        <GcTooltip label={t('detail.tip.open')}>
          <button type="button" className="gc-btn" onClick={() => onOpen(node)} disabled={isBusy}>
            <OpenIcon />
            {t('detail.action.open')}
          </button>
        </GcTooltip>
        {!isRoot && !node.archived && (
          <GcTooltip label={t('detail.tip.archive')}>
            <button type="button" className="gc-btn gc-btn-danger" onClick={() => onArchive(node)} disabled={isBusy}>
              {busy === 'archive' ? <SpinnerIcon /> : <ArchiveIcon />}
              {busy === 'archive' ? t('detail.action.archiving') : t('detail.action.archive')}
            </button>
          </GcTooltip>
        )}
        {!isRoot && node.archived && (
          <GcTooltip label={t('detail.tip.restore')}>
            <button type="button" className="gc-btn" onClick={() => onRestore(node)} disabled={isBusy}>
              {busy === 'restore' ? <SpinnerIcon /> : <RestoreIcon />}
              {t('detail.action.restore')}
            </button>
          </GcTooltip>
        )}
        <GcTooltip label={t('detail.tip.copy')}>
          <button
            type="button"
            className="gc-btn gc-btn-ghost gc-action-icon"
            onClick={() => onCopy(node)}
            aria-label={t('detail.action.copy')}
          >
            <CopyIcon />
          </button>
        </GcTooltip>
      </div>
    </div>
  )
}

type ConfirmState =
  | { kind: 'archive'; node: GitChatNode }
  | { kind: 'restore'; node: GitChatNode }

interface ConfirmProps {
  confirm: ConfirmState
  tree: GitChatTree
  t: GitChatTranslate
  busy: BusyState
  onCancel: () => void
  onConfirm: () => void
}

/** Portal confirmation dialog for destructive/recoverable branch actions. */
function GitChatConfirm({ confirm, tree, t, busy, onCancel, onConfirm }: ConfirmProps) {
  const summary = tree.sessions.find((session) => session.sessionId === confirm.node.sessionId)
  const count = 1 + (summary?.descendantCount ?? 0)
  const isArchive = confirm.kind === 'archive'
  const title = isArchive ? t('confirm.archive.title') : t('confirm.restore.title')
  const body = isArchive
    ? t('confirm.archive.body', { title: confirm.node.label ?? confirm.node.sessionTitle, count })
    : t('confirm.restore.body', { title: confirm.node.label ?? confirm.node.sessionTitle })
  const confirmLabel = isArchive ? t('confirm.archive.confirm') : t('confirm.restore.confirm')

  return createPortal(
    <div
      className="gc-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && busy === null) onCancel()
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && busy === null) onCancel()
      }}
    >
      <div className="gc-modal" role="dialog" aria-modal="true" aria-labelledby="gc-confirm-title">
        <h3 id="gc-confirm-title">
          <WarningIcon />
          {title}
        </h3>
        <p>{body}</p>
        <div className="gc-modal-actions">
          <button type="button" className="gc-btn" onClick={onCancel} disabled={busy !== null} autoFocus>
            {isArchive ? t('confirm.archive.cancel') : t('confirm.archive.cancel')}
          </button>
          <button
            type="button"
            className={`gc-btn ${isArchive ? 'gc-btn-danger' : 'gc-btn-primary'}`}
            onClick={onConfirm}
            disabled={busy !== null}
          >
            {busy === 'archive' || busy === 'restore' ? <SpinnerIcon /> : <CheckIcon />}
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}

type BusyState = 'fork' | 'archive' | 'restore' | 'save' | 'export' | null

interface ToastState {
  kind: 'ok' | 'error'
  text: string
}

/** Empty-tree illustration + copy. */
function GitChatEmpty({ t }: { t: GitChatTranslate }) {
  return (
    <div className="gc-empty">
      <EmptyTreeIcon size={118} />
      <h3>{t('view.empty.title')}</h3>
      <p>{t('view.empty.body')}</p>
    </div>
  )
}

/** Initial load overlay. */
function GitChatLoading({ t }: { t: GitChatTranslate }) {
  return (
    <div className="gc-state" role="status">
      <SpinnerIcon size={24} />
      <p>{t('view.loading')}</p>
    </div>
  )
}

/** Initial load failure. */
function GitChatErrorState({
  t,
  message,
  onRetry,
}: {
  t: GitChatTranslate
  message: string
  onRetry: () => void
}) {
  return (
    <div className="gc-state">
      <span className="gc-state-icon">
        <WarningIcon size={20} />
      </span>
      <h3>{t('view.error.title')}</h3>
      <p>{t('error.load', { error: message })}</p>
      <div className="gc-state-actions">
        <GcTooltip label={t('view.tip.retry')}>
          <button type="button" className="gc-btn gc-btn-primary" onClick={onRetry}>
            <RefreshIcon />
            {t('view.error.retry')}
          </button>
        </GcTooltip>
      </div>
    </div>
  )
}

/** The actual panel; ReactFlowProvider lives in the exported wrapper. */
function GitChatSurface({ sessionId, controller, t }: GitChatViewProps) {
  const [tree, setTree] = useState<GitChatTree | null>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [includeArchived, setIncludeArchived] = useState(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [busy, setBusy] = useState<BusyState>(null)
  const [toast, setToast] = useState<ToastState | null>(null)
  const [confirm, setConfirm] = useState<ConfirmState | null>(null)
  const [layoutNonce, setLayoutNonce] = useState(0)
  const [reloadNonce, setReloadNonce] = useState(0)
  const { fitView } = useReactFlow()

  const abortRef = useRef<AbortController | null>(null)
  const aliveRef = useRef(true)
  const toastTimerRef = useRef<number | null>(null)

  const showToast = useCallback((kind: ToastState['kind'], text: string) => {
    if (toastTimerRef.current !== null) window.clearTimeout(toastTimerRef.current)
    setToast({ kind, text })
    toastTimerRef.current = window.setTimeout(() => {
      toastTimerRef.current = null
      setToast(null)
    }, 5_200)
  }, [])

  const load = useCallback(
    async (archived: boolean, silent: boolean): Promise<boolean> => {
      abortRef.current?.abort()
      const controllerState = new AbortController()
      abortRef.current = controllerState
      if (silent) setRefreshing(true)
      else setLoading(true)
      setError(null)
      try {
        const next = await controller.loadTree(sessionId, archived, controllerState.signal)
        if (controllerState.signal.aborted) return false
        setTree(next)
        if (next.includeArchived && !archived) setIncludeArchived(true)
        setSelectedId((current) => {
          if (current !== null && next.nodes.some((node) => node.id === current)) return current
          const tip =
            [...next.nodes].reverse().find((node) => node.current && node.kind === 'turn') ??
            next.nodes.find((node) => node.current) ??
            next.nodes[0]
          return tip?.id ?? null
        })
        return true
      } catch (reason: unknown) {
        if (controllerState.signal.aborted) return false
        setError(reason instanceof Error ? reason.message : String(reason))
        return false
      } finally {
        if (!controllerState.signal.aborted) {
          setLoading(false)
          setRefreshing(false)
        }
      }
    },
    [controller, sessionId],
  )

  useEffect(() => {
    aliveRef.current = true
    return () => {
      aliveRef.current = false
      abortRef.current?.abort()
      if (toastTimerRef.current !== null) window.clearTimeout(toastTimerRef.current)
    }
  }, [])

  useEffect(() => {
    void load(includeArchived, false)
    // `reloadNonce` is an explicit retry trigger; includeArchived is the input.
  }, [load, includeArchived, reloadNonce])

  // Keep a live tree fresh while any turn is running. The interval resets on
  // each tree update, so an idle tree performs no polling at all.
  useEffect(() => {
    if (tree === null) return
    const hasRunning = tree.nodes.some((node) => node.status === 'running')
    if (!hasRunning) return
    const timer = window.setInterval(() => {
      if (document.visibilityState === 'visible') void load(includeArchived, true)
    }, 7_000)
    return () => window.clearInterval(timer)
  }, [tree, includeArchived, load])

  const selected = useMemo(
    () => (tree === null || selectedId === null ? null : tree.nodes.find((node) => node.id === selectedId) ?? null),
    [tree, selectedId],
  )

  const rootSummary = tree?.sessions.find((session) => session.sessionId === tree.rootId)
  const rootTitle = rootSummary?.title ?? tree?.rootId ?? ''
  const currentArchived = tree?.sessions.some((session) => session.sessionId === tree.currentSessionId && session.archived) ?? false
  const showEmpty = tree !== null && tree.nodes.length <= 1

  const fit = useCallback(() => {
    requestAnimationFrame(() => {
      void fitView({ padding: 0.18, minZoom: 0.5, duration: 280 })
    })
  }, [fitView])

  const refresh = useCallback(async () => {
    const ok = await load(includeArchived, true)
    if (ok) showToast('ok', t('toast.refreshed'))
  }, [includeArchived, load, showToast, t])

  const relayout = useCallback(() => {
    setLayoutNonce((value) => value + 1)
    window.setTimeout(fit, 120)
    showToast('ok', t('toast.relayouted'))
  }, [fit, showToast, t])

  const openSession = useCallback(
    (node: GitChatNode) => {
      controller.openSession(node.sessionId)
    },
    [controller],
  )

  const forkNode = useCallback(
    async (node: GitChatNode) => {
      if (node.forkSeq === null || node.kind !== 'turn' || busy !== null) return
      setBusy('fork')
      try {
        await controller.forkAt(node.sessionId, node.forkSeq)
        if (aliveRef.current) showToast('ok', t('toast.forked'))
      } catch (reason: unknown) {
        if (aliveRef.current) {
          showToast('error', t('error.generic', { error: reason instanceof Error ? reason.message : String(reason) }))
        }
      } finally {
        if (aliveRef.current) setBusy(null)
      }
    },
    [busy, controller, showToast, t],
  )

  const archiveNode = useCallback(
    async (node: GitChatNode) => {
      if (busy !== null) return
      setConfirm(null)
      setBusy('archive')
      try {
        const result = await controller.archiveBranch(node.sessionId, true)
        if (!aliveRef.current) return
        showToast('ok', t('toast.archived', { count: result.count }))
        setIncludeArchived(true)
        await load(true, true)
      } catch (reason: unknown) {
        if (aliveRef.current) {
          showToast('error', t('error.generic', { error: reason instanceof Error ? reason.message : String(reason) }))
        }
      } finally {
        if (aliveRef.current) setBusy(null)
      }
    },
    [busy, controller, load, showToast, t],
  )

  const restoreNode = useCallback(
    async (node: GitChatNode) => {
      if (busy !== null) return
      setConfirm(null)
      setBusy('restore')
      try {
        await controller.unarchiveBranch(node.sessionId)
        if (!aliveRef.current) return
        showToast('ok', t('toast.restored'))
        await load(includeArchived, true)
      } catch (reason: unknown) {
        if (aliveRef.current) {
          showToast('error', t('error.generic', { error: reason instanceof Error ? reason.message : String(reason) }))
        }
      } finally {
        if (aliveRef.current) setBusy(null)
      }
    },
    [busy, controller, includeArchived, load, showToast, t],
  )

  const copyNode = useCallback(
    async (node: GitChatNode) => {
      try {
        await copyText(JSON.stringify(node, null, 2))
        showToast('ok', t('toast.copied'))
      } catch {
        showToast('error', t('toast.copyFailed'))
      }
    },
    [showToast, t],
  )

  const save = useCallback(async () => {
    if (tree === null || busy !== null) return
    setBusy('save')
    try {
      const result = await controller.saveTree(tree)
      if (aliveRef.current) showToast('ok', t('toast.saved', { path: result.path }))
    } catch (reason: unknown) {
      if (aliveRef.current) {
        showToast('error', t('error.generic', { error: reason instanceof Error ? reason.message : String(reason) }))
      }
    } finally {
      if (aliveRef.current) setBusy(null)
    }
  }, [busy, controller, showToast, t, tree])

  const exportJson = useCallback(async () => {
    if (tree === null || busy !== null) return
    setBusy('export')
    try {
      await controller.downloadTree(tree)
      if (aliveRef.current) showToast('ok', t('toast.exported'))
    } catch (reason: unknown) {
      if (aliveRef.current) {
        showToast('error', t('error.generic', { error: reason instanceof Error ? reason.message : String(reason) }))
      }
    } finally {
      if (aliveRef.current) setBusy(null)
    }
  }, [busy, controller, showToast, t, tree])

  const toggleArchived = useCallback(() => {
    setIncludeArchived((value) => !value)
  }, [])

  const confirmAction = useCallback(() => {
    if (confirm === null) return
    if (confirm.kind === 'archive') void archiveNode(confirm.node)
    else void restoreNode(confirm.node)
  }, [archiveNode, confirm, restoreNode])

  const retry = useCallback(() => {
    setReloadNonce((value) => value + 1)
  }, [])

  return (
    <section
      className="gc-root"
      aria-label={t('aria.nodeCount', { count: tree?.nodes.length ?? 0 })}
      aria-busy={loading || refreshing || busy !== null}
    >
      <header className="gc-toolbar">
        <div className="gc-brand">
          <span className="gc-brand-icon">
            <BranchIcon size={18} />
          </span>
          <div className="gc-brand-text">
            <div className="gc-brand-title">
              {t('view.title')}
              <span className="gc-brand-tag">TREE</span>
            </div>
            <div className="gc-brand-subtitle" title={rootTitle}>
              {tree === null
                ? t('view.loading')
                : `${rootTitle} · ${t('view.subtitle', {
                    branches: tree.stats.branches,
                    turns: tree.stats.turns,
                  })}`}
            </div>
          </div>
        </div>

        <div className="gc-actions">
          {tree !== null && (
            <div className="gc-stats">
              <span className="gc-stat">
                <BranchIcon size={11} />
                <strong>{tree.stats.branches}</strong> {t('view.branchesUnit')}
              </span>
              <span className="gc-stat">
                <strong>{tree.stats.turns}</strong> {t('view.turnsUnit')}
              </span>
            </div>
          )}
          <GcTooltip label={t('view.tip.refresh')}>
            <button
              type="button"
              className="gc-icon-btn"
              onClick={() => void refresh()}
              disabled={loading || busy !== null}
              aria-label={t('view.refresh')}
            >
              {refreshing ? <SpinnerIcon /> : <RefreshIcon />}
            </button>
          </GcTooltip>
          <GcTooltip label={t('view.tip.fit')}>
            <button
              type="button"
              className="gc-icon-btn"
              onClick={fit}
              disabled={tree === null}
              aria-label={t('view.fit')}
            >
              <FitIcon />
            </button>
          </GcTooltip>
          <GcTooltip label={t('view.tip.relayout')}>
            <button
              type="button"
              className="gc-icon-btn"
              onClick={relayout}
              disabled={tree === null}
              aria-label={t('view.relayout')}
            >
              <LayoutIcon />
            </button>
          </GcTooltip>
          <GcTooltip label={t('view.tip.archived')}>
            <button
              type="button"
              className="gc-chip-btn"
              aria-pressed={includeArchived}
              onClick={toggleArchived}
            >
              <ArchiveIcon size={14} />
              <span className="gc-chip-text">
                {includeArchived ? t('view.hideArchived') : t('view.showArchived')}
              </span>
              {(tree?.stats.archivedBranches ?? 0) > 0 && <span className="gc-count">{tree?.stats.archivedBranches}</span>}
            </button>
          </GcTooltip>
          <span className="gc-divider" />
          <GcTooltip label={t('view.tip.export')}>
            <button
              type="button"
              className="gc-btn"
              onClick={() => void exportJson()}
              disabled={tree === null || busy !== null}
            >
              {busy === 'export' ? <SpinnerIcon /> : <DownloadIcon />}
              <span className="gc-btn-label">{busy === 'export' ? t('view.exporting') : t('view.export')}</span>
            </button>
          </GcTooltip>
          <GcTooltip label={t('view.tip.save')}>
            <button
              type="button"
              className="gc-btn gc-btn-primary"
              onClick={() => void save()}
              disabled={tree === null || busy !== null}
            >
              {busy === 'save' ? <SpinnerIcon /> : <SaveIcon />}
              <span className="gc-btn-label">{busy === 'save' ? t('view.saving') : t('view.save')}</span>
            </button>
          </GcTooltip>
        </div>
      </header>

      {tree?.truncated === true && (
        <div className="gc-banner">
          <WarningIcon size={14} />
          <span>{t('view.truncated')}</span>
        </div>
      )}
      {currentArchived && (
        <div className="gc-banner">
          <ArchiveIcon size={14} />
          <span>{t('view.archivedNotice')}</span>
        </div>
      )}
      {error !== null && tree !== null && (
        <div className="gc-banner">
          <WarningIcon size={14} />
          <span>{t('error.load', { error })}</span>
          <GcTooltip label={t('view.tip.retry')}>
            <button type="button" className="gc-btn gc-btn-ghost" onClick={retry}>
              {t('view.error.retry')}
            </button>
          </GcTooltip>
        </div>
      )}

      <div className="gc-body">
        <div className="gc-canvas">
          {tree !== null && (
            <GitChatCanvas
              key={`${tree.rootId}:${tree.currentSessionId}`}
              tree={tree}
              t={t}
              selectedId={selectedId}
              layoutNonce={layoutNonce}
              onSelect={setSelectedId}
            />
          )}
          {loading && tree !== null && <div className="gc-loading-bar" />}
          {loading && tree === null && <GitChatLoading t={t} />}
          {!loading && tree === null && error !== null && (
            <GitChatErrorState t={t} message={error} onRetry={retry} />
          )}
          {showEmpty && <GitChatEmpty t={t} />}
        </div>

        <aside className={`gc-detail ${selected === null ? 'is-empty' : 'is-open'}`}>
          {selected === null || tree === null ? (
            <div className="gc-detail-empty">
              <ChevronIcon size={30} />
              <h3>{t('detail.empty.title')}</h3>
              <p>{t('detail.empty.body')}</p>
            </div>
          ) : (
            <GitChatDetail
              node={selected}
              tree={tree}
              t={t}
              busy={busy}
              onClose={() => setSelectedId(null)}
              onFork={(node) => void forkNode(node)}
              onOpen={openSession}
              onArchive={(node) => setConfirm({ kind: 'archive', node })}
              onRestore={(node) => setConfirm({ kind: 'restore', node })}
              onCopy={(node) => void copyNode(node)}
            />
          )}
        </aside>
      </div>

      {toast !== null && (
        <div className={`gc-toast ${toast.kind === 'error' ? 'is-error' : ''}`} role="status" aria-live="polite">
          {toast.kind === 'error' ? <WarningIcon size={14} /> : <CheckIcon size={14} />}
          <span>{toast.text}</span>
        </div>
      )}

      {confirm !== null && tree !== null && (
        <GitChatConfirm
          confirm={confirm}
          tree={tree}
          t={t}
          busy={busy}
          onCancel={() => setConfirm(null)}
          onConfirm={confirmAction}
        />
      )}
    </section>
  )
}

/**
 * Conversation View entry. The provider must sit above every component that
 * calls useReactFlow (toolbar fit and the canvas).
 */
export function GitChatView(props: GitChatViewProps) {
  return (
    <ReactFlowProvider>
      <GitChatSurface {...props} />
    </ReactFlowProvider>
  )
}
