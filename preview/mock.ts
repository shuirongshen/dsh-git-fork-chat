/**
 * In-memory fixture for the standalone preview. It mirrors the host's read
 * model closely enough to exercise selection, forking, archive/restore, and
 * the archived toggle without a DSH host.
 */
import type { GitChatController } from '../src/client/controller.ts'
import type {
  GitChatArchiveResult,
  GitChatEdge,
  GitChatNode,
  GitChatSaveResult,
  GitChatSessionSummary,
  GitChatTree,
  GitChatTurnStatus,
} from '../src/shared/types.ts'

const T0 = Date.now() - 3 * 60 * 60 * 1000

interface TurnSpec {
  user: string
  assistant: string
  status?: GitChatTurnStatus
  statusDetail?: string
  toolCalls?: number
}

interface SessionSpec {
  id: string
  title: string
  parent?: string
  forkAtTurn?: number
  turns: TurnSpec[]
  archived?: boolean
  model?: string
  provider?: string
}

const SESSIONS: SessionSpec[] = [
  {
    id: 'session-root',
    title: '智能小车 · 电机抖动排查',
    model: 'deepseek-flash',
    provider: 'deepseek-account',
    turns: [
      {
        user: '小车低速时电机抖动很明显，帮我排查一下。',
        assistant:
          '先分成三类：电源/驱动、PWM 时序、速度环。建议先看 PWM 频率、死区时间和电流采样是否对齐，再决定改算法还是改硬件。',
      },
      {
        user: 'PWM 现在 10kHz，死区 1us，电流采样 5ms 一次。',
        assistant:
          '10kHz 在低速时容易听到啸叫；把死区加到 1.5us，并让电流采样和 PWM 中心对齐，先排除采样毛刺。',
        toolCalls: 1,
      },
      {
        user: '改成 20kHz 后抖动小了一点，但低速还是有顿挫。',
        assistant:
          '说明高频开关不是根因。下一步把速度环周期从 10ms 缩到 5ms，并检查编码器四倍频后的计数是否稳定。',
      },
      {
        user: '编码器是 500 线，四倍频后 2000 计数/圈。',
        assistant:
          '2000 计数在 5ms 周期下低速分辨率偏粗。可以试 M/T 法测速，或者把速度环改成 2ms，并给编码器 A/B 相加 RC 滤波。',
      },
    ],
  },
  {
    id: 'session-hw',
    title: '硬件排查 · 死区与驱动',
    parent: 'session-root',
    forkAtTurn: 2,
    model: 'deepseek-flash',
    provider: 'deepseek-account',
    turns: [
      {
        user: '先别改算法，我想量一下驱动波形。',
        assistant:
          '可以。先把电机悬空，用双通道看 A/B 相和 PWM 互补输出；重点看死区实际宽度、栅极电阻振铃，以及母线电压跌落。',
      },
      {
        user: '示波器上看死区只有 0.6us，和代码配置不一致。',
        assistant:
          '更像栅极电阻/米勒电容把实际死区吃掉了。先换 10Ω 栅极电阻，再加 1.5us 软件死区，然后复测低速顿挫。',
        toolCalls: 2,
      },
    ],
  },
  {
    id: 'session-encoder',
    title: '换编码器方案',
    parent: 'session-root',
    forkAtTurn: 1,
    model: 'deepseek-flash',
    provider: 'deepseek-account',
    turns: [
      {
        user: '如果直接换磁编码器，值不值得？',
        assistant:
          '如果机械安装允许，磁编码器能显著改善低速分辨率。优先选 SPI/ABZ 输出、12bit 以上的型号，注意安装偏心误差。',
      },
      {
        user: 'AS5600 的 I2C 读取延迟会不会影响速度环？',
        assistant:
          '会。I2C 400kHz 读一次约 0.2ms，建议用硬件定时器触发，并把读取放在速度环周期起点；预算紧可以只读角度寄存器。',
      },
    ],
  },
  {
    id: 'session-encoder-b',
    title: '编码器 · 先改滤波',
    parent: 'session-encoder',
    forkAtTurn: 1,
    model: 'deepseek-flash',
    provider: 'deepseek-account',
    turns: [
      {
        user: '先只改滤波电容，不换编码器。',
        assistant: '可以先在 A/B 相各加 1nF 到地，再把采样窗口移到 PWM 中心。若计数仍跳变，再考虑换磁编码器。',
        status: 'error',
        statusDetail: '预览示例：驱动过流保护触发，分支在此中断',
      },
    ],
  },
  {
    id: 'session-pwm',
    title: '提高 PWM 频率（已归档）',
    parent: 'session-root',
    forkAtTurn: 3,
    archived: true,
    model: 'deepseek-flash',
    provider: 'deepseek-account',
    turns: [
      {
        user: '把 PWM 提到 40kHz 试试。',
        assistant: '40kHz 对 MOS 驱动和死区要求更高，先把栅极电阻降到 4.7Ω，并确认自举电容足够。这个分支先归档，等硬件改完再继续。',
      },
    ],
  },
  {
    id: 'session-blank',
    title: '下一个实验',
    parent: 'session-root',
    forkAtTurn: 4,
    model: 'deepseek-flash',
    provider: 'deepseek-account',
    turns: [],
  },
]

/** Deep clone the fixture. */
function clone<T>(value: T): T {
  return structuredClone(value)
}

/** Build the full fixture tree, including archived sessions. */
function buildBaseTree(): GitChatTree {
  const nodes: GitChatNode[] = []
  const edges: GitChatEdge[] = []
  const summaries: GitChatSessionSummary[] = []
  const turnNodeByKey = new Map<string, GitChatNode>()
  let seq = 0
  const rootId = 'session-root'

  const rootNode: GitChatNode = {
    id: `root:${rootId}`,
    kind: 'root',
    parentId: null,
    sessionId: rootId,
    sessionTitle: SESSIONS[0]?.title ?? '根会话',
    turn: null,
    user: '',
    assistant: '',
    status: 'completed',
    time: T0,
    startSeq: null,
    endSeq: null,
    forkSeq: null,
    assistantSeq: null,
    toolCalls: 0,
    archived: false,
    current: false,
    childSessionIds: [],
    label: SESSIONS[0]?.title ?? '根会话',
  }
  nodes.push(rootNode)

  for (const spec of SESSIONS) {
    const isRoot = spec.id === rootId
    const archived = spec.archived === true
    const current = spec.id === 'session-hw'
    let parentId = rootNode.id
    if (!isRoot && spec.parent !== undefined && spec.forkAtTurn !== undefined) {
      parentId = turnNodeByKey.get(`${spec.parent}:${spec.forkAtTurn}`)?.id ?? rootNode.id
    }

    if (spec.turns.length === 0) {
      const parentNode = nodes.find((node) => node.id === parentId)
      const branch: GitChatNode = {
        id: `branch:${spec.id}`,
        kind: 'branch',
        parentId,
        sessionId: spec.id,
        sessionTitle: spec.title,
        turn: null,
        user: '',
        assistant: '',
        status: 'unknown',
        time: T0 + seq * 60_000,
        startSeq: null,
        endSeq: null,
        forkSeq: parentNode?.forkSeq ?? null,
        assistantSeq: null,
        toolCalls: 0,
        archived,
        current,
        childSessionIds: [],
        label: '空分支',
      }
      nodes.push(branch)
      edges.push({
        id: `edge:${parentId}->${branch.id}`,
        source: parentId,
        target: branch.id,
        kind: 'fork',
        archived,
      })
    } else {
      spec.turns.forEach((turn, index) => {
        const turnNo = index + 1
        const startSeq = (seq += 1)
        const assistantSeq = (seq += 1)
        const endSeq = (seq += 1)
        const node: GitChatNode = {
          id: `turn:${spec.id}:${turnNo}`,
          kind: 'turn',
          parentId,
          sessionId: spec.id,
          sessionTitle: spec.title,
          turn: turnNo,
          user: turn.user,
          assistant: turn.assistant,
          status: turn.status ?? 'completed',
          time: T0 + seq * 60_000,
          startSeq,
          endSeq,
          forkSeq: endSeq,
          assistantSeq,
          toolCalls: turn.toolCalls ?? 0,
          archived,
          current,
          childSessionIds: [],
        }
        if (turn.statusDetail !== undefined) node.statusDetail = turn.statusDetail
        nodes.push(node)
        turnNodeByKey.set(`${spec.id}:${turnNo}`, node)
        edges.push({
          id: `edge:${parentId}->${node.id}`,
          source: parentId,
          target: node.id,
          kind: index === 0 && !isRoot ? 'fork' : 'chain',
          archived,
        })
        parentId = node.id
      })
    }

    summaries.push({
      sessionId: spec.id,
      title: spec.title,
      parentSessionId: spec.parent ?? null,
      cwd: 'C:\\workspace\\demo',
      agentPreset: 'standard',
      createdAt: T0 + seq * 60_000,
      archived,
      current,
      turnCount: spec.turns.length,
      ownTurnCount: spec.turns.length,
      forkSeq: isRoot ? null : spec.turns.length === 0 ? null : turnNodeByKey.get(`${spec.parent}:${spec.forkAtTurn}`)?.forkSeq ?? null,
      descendantCount: 0,
      ...(spec.model === undefined ? {} : { model: spec.model }),
      ...(spec.provider === undefined ? {} : { provider: spec.provider }),
    })
  }

  for (const edge of edges) {
    if (edge.kind !== 'fork') continue
    const source = nodes.find((node) => node.id === edge.source)
    const target = nodes.find((node) => node.id === edge.target)
    if (source !== undefined && target !== undefined && !source.childSessionIds.includes(target.sessionId)) {
      source.childSessionIds.push(target.sessionId)
    }
  }
  for (const summary of summaries) {
    summary.descendantCount = summaries.filter((candidate) => {
      let cursor = candidate.parentSessionId
      while (cursor !== null) {
        if (cursor === summary.sessionId) return true
        cursor = summaries.find((parent) => parent.sessionId === cursor)?.parentSessionId ?? null
      }
      return false
    }).length
  }

  const tree: GitChatTree = {
    version: 1,
    rootId,
    currentSessionId: 'session-hw',
    generatedAt: Date.now(),
    includeArchived: true,
    truncated: false,
    nodes,
    edges,
    sessions: summaries,
    stats: {
      sessions: summaries.length,
      turns: nodes.filter((node) => node.kind === 'turn').length,
      branches: edges.filter((edge) => edge.kind === 'fork').length,
      archivedBranches: summaries.filter((summary) => summary.archived && summary.sessionId !== rootId).length,
    },
  }
  return tree
}

const fullTree = buildBaseTree()

/** Remove archived sessions and their nodes for the default tree response. */
function visibleTree(includeArchived: boolean): GitChatTree {
  const tree = clone(fullTree)
  tree.generatedAt = Date.now()
  tree.includeArchived = includeArchived
  if (includeArchived) return tree

  const archivedSessions = new Set(
    tree.sessions.filter((session) => session.archived).map((session) => session.sessionId),
  )
  tree.sessions = tree.sessions.filter((session) => !archivedSessions.has(session.sessionId))
  tree.nodes = tree.nodes.filter((node) => !archivedSessions.has(node.sessionId))
  tree.edges = tree.edges.filter(
    (edge) =>
      tree.nodes.some((node) => node.id === edge.source) && tree.nodes.some((node) => node.id === edge.target),
  )
  for (const node of tree.nodes) {
    node.childSessionIds = node.childSessionIds.filter((sessionId) => !archivedSessions.has(sessionId))
  }
  tree.stats = {
    sessions: tree.sessions.length,
    turns: tree.nodes.filter((node) => node.kind === 'turn').length,
    branches: tree.edges.filter((edge) => edge.kind === 'fork').length,
    archivedBranches: 0,
  }
  return tree
}

/** Collect a session and all fork descendants. */
function subtree(sessionId: string): string[] {
  const result: string[] = []
  const visit = (id: string): void => {
    if (result.includes(id)) return
    result.push(id)
    for (const session of fullTree.sessions) {
      if (session.parentSessionId === id) visit(session.sessionId)
    }
  }
  visit(sessionId)
  return result
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/** Build the preview controller. */
export function createMockController(): GitChatController {
  let forkCounter = 0

  return {
    loadTree: async (_sessionId, includeArchived) => {
      await sleep(160)
      return visibleTree(includeArchived)
    },
    openSession: (sessionId) => {
      ;(window as unknown as Record<string, unknown>).__gitchat_last_open__ = sessionId
    },
    forkAt: async (sessionId, atSeq) => {
      await sleep(220)
      const parent = fullTree.nodes.find(
        (node) => node.sessionId === sessionId && node.kind === 'turn' && node.forkSeq === atSeq,
      )
      if (parent === undefined) throw new Error('preview: fork point not found')
      forkCounter += 1
      const childId = `session-preview-${forkCounter}`
      const turn: GitChatNode = {
        id: `turn:${childId}:1`,
        kind: 'turn',
        parentId: parent.id,
        sessionId: childId,
        sessionTitle: '预览新分支',
        turn: 1,
        user: '这是从预览里新建的分支。',
        assistant: '分支上下文继承了从根节点到所选轮次的全部消息；刷新后可以看到新节点。',
        status: 'completed',
        time: Date.now(),
        startSeq: 900 + forkCounter,
        endSeq: 902 + forkCounter,
        forkSeq: 902 + forkCounter,
        assistantSeq: 901 + forkCounter,
        toolCalls: 0,
        archived: false,
        current: false,
        childSessionIds: [],
      }
      fullTree.nodes.push(turn)
      fullTree.edges.push({
        id: `edge:${parent.id}->${turn.id}`,
        source: parent.id,
        target: turn.id,
        kind: 'fork',
        archived: false,
      })
      parent.childSessionIds.push(childId)
      fullTree.sessions.push({
        sessionId: childId,
        title: '预览新分支',
        parentSessionId: sessionId,
        cwd: 'C:\\workspace\\demo',
        agentPreset: 'standard',
        createdAt: Date.now(),
        archived: false,
        current: false,
        turnCount: 1,
        ownTurnCount: 1,
        forkSeq: atSeq,
        descendantCount: 0,
        model: 'deepseek-flash',
        provider: 'deepseek-account',
      })
      fullTree.stats = {
        sessions: fullTree.sessions.length,
        turns: fullTree.nodes.filter((node) => node.kind === 'turn').length,
        branches: fullTree.edges.filter((edge) => edge.kind === 'fork').length,
        archivedBranches: fullTree.sessions.filter((session) => session.archived && session.sessionId !== fullTree.rootId).length,
      }
      return childId
    },
    archiveBranch: async (sessionId, _force): Promise<GitChatArchiveResult> => {
      await sleep(180)
      const ids = subtree(sessionId)
      const skipped = ids.filter((id) => fullTree.sessions.find((session) => session.sessionId === id)?.archived === true)
      const archivedSessions = ids.filter((id) => !skipped.includes(id))
      for (const id of archivedSessions) {
        const session = fullTree.sessions.find((candidate) => candidate.sessionId === id)
        if (session !== undefined) session.archived = true
        for (const node of fullTree.nodes) if (node.sessionId === id) node.archived = true
      }
      fullTree.stats.archivedBranches = fullTree.sessions.filter(
        (session) => session.archived && session.sessionId !== fullTree.rootId,
      ).length
      return { rootSessionId: sessionId, archivedSessions, skipped, count: archivedSessions.length }
    },
    unarchiveBranch: async (sessionId) => {
      await sleep(140)
      const session = fullTree.sessions.find((candidate) => candidate.sessionId === sessionId)
      if (session !== undefined) session.archived = false
      for (const node of fullTree.nodes) if (node.sessionId === sessionId) node.archived = false
      fullTree.stats.archivedBranches = fullTree.sessions.filter(
        (candidate) => candidate.archived && candidate.sessionId !== fullTree.rootId,
      ).length
    },
    saveTree: async (tree): Promise<GitChatSaveResult> => {
      await sleep(220)
      return {
        path: `~/.dsh/plugin-data/dsh-gitchat/exports/gitchat-preview-${Date.now()}.json`,
        bytes: JSON.stringify(tree).length,
        generatedAt: Date.now(),
        sessions: tree.stats.sessions,
        turns: tree.stats.turns,
      }
    },
    downloadTree: async (tree) => {
      const full = tree.includeArchived ? tree : visibleTree(true)
      ;(window as unknown as Record<string, unknown>).__gitchat_last_download__ = full
    },
  }
}

/** Expose the fixture for screenshot assertions. */
export function previewTree(): GitChatTree {
  return visibleTree(true)
}
