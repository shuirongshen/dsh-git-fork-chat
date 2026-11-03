import test from 'node:test'
import assert from 'node:assert/strict'
import { buildGitChatTree, parseSession } from '../src/host/tree.ts'

const T0 = 1_800_000_000_000

/** Build a session header. */
function header(id, parent, createdAt = T0) {
  const value = {
    version: 4,
    id,
    createdAt,
    cwd: 'C:\\work\\demo',
    isSeeded: parent !== undefined,
    agentPreset: 'standard',
  }
  if (parent !== undefined) value.parentSession = parent
  return value
}

/** Build one event. */
function ev(type, seq, data, time = T0 + seq) {
  return { type, seq, time, data }
}

/** Human prompt event. */
function human(seq, text, time) {
  return ev('user/message', seq, {
    content: [{ type: 'text', text }],
    source: { kind: 'user', rpcId: `rpc-${seq}` },
    role: 'user',
  }, time)
}

/** Assistant message event. */
function assistant(seq, text, turn, step = 1, time) {
  return ev('assistant/message', seq, {
    turn,
    step,
    message: { role: 'assistant', content: [{ type: 'text', text }] },
    stream: [],
  }, time)
}

/** A completed turn. */
function turn(turnNo, startSeq, user, reply, offset = 0) {
  return [
    ev('turn/start', startSeq, { turn: turnNo }),
    human(startSeq + 1, user),
    assistant(startSeq + 2, reply, turnNo),
    ev('turn/end', startSeq + 3, { turn: turnNo, reason: { kind: 'completed' } }),
  ]
}

/** A single root session with two turns. */
function rootObservation() {
  const events = [...turn(1, 0, '你好', '你好，我是助手'), ...turn(2, 4, '继续', '继续回答')]
  return {
    session: header('session-root'),
    inheritedEventCount: 0,
    events,
  }
}

test('parseSession extracts human turns, assistant text, and status', () => {
  const parsed = parseSession(rootObservation())
  assert.equal(parsed.turns.length, 2)
  assert.equal(parsed.ownTurns.length, 2)
  assert.equal(parsed.turns[0].user, '你好')
  assert.equal(parsed.turns[0].assistant, '你好，我是助手')
  assert.equal(parsed.turns[0].status, 'completed')
  assert.equal(parsed.turns[0].endSeq, 3)
  assert.equal(parsed.turns[1].turn, 2)
})

test('parseSession ignores runtime-context user messages', () => {
  const events = [
    ev('turn/start', 0, { turn: 1 }),
    ev('user/message', 1, {
      content: [{ type: 'text', text: 'Current runtime context. This snapshot supersedes...' }],
      role: 'user',
    }),
    human(2, '真正的问题'),
    assistant(3, '回答', 1),
    ev('turn/end', 4, { turn: 1, reason: { kind: 'completed' } }),
  ]
  const parsed = parseSession({ session: header('session-a'), inheritedEventCount: 0, events })
  assert.equal(parsed.turns[0].user, '真正的问题')
})

test('buildGitChatTree renders a root session as root + turn chain', () => {
  const records = [{ header: header('session-root') }]
  const observations = new Map([
    ['session-root', { observation: rootObservation() }],
  ])
  const tree = buildGitChatTree({
    records,
    observations,
    currentSessionId: 'session-root',
    includeArchived: false,
    archivedSessionIds: [],
    generatedAt: T0,
  })
  assert.equal(tree.rootId, 'session-root')
  assert.equal(tree.nodes.length, 3)
  assert.equal(tree.nodes[0].kind, 'root')
  assert.equal(tree.edges.length, 2)
  assert.deepEqual(tree.edges.map((edge) => edge.kind), ['chain', 'chain'])
  assert.equal(tree.stats.turns, 2)
  assert.equal(tree.stats.branches, 0)
})

test('a forked session attaches its first own turn to the parent turn', () => {
  const parent = rootObservation()
  const childEvents = [
    ...parent.events.slice(0, 4),
    ev('session/end-seed', 4, { inherited: true }),
    ...turn(2, 6, '分支问题', '分支回答'),
  ]
  const records = [
    { header: header('session-root') },
    { header: header('session-child', 'session-root') },
  ]
  const observations = new Map([
    ['session-root', { observation: parent }],
    ['session-child', {
      observation: {
        session: header('session-child', 'session-root'),
        inheritedEventCount: 4,
        events: childEvents,
      },
    }],
  ])
  const tree = buildGitChatTree({
    records,
    observations,
    currentSessionId: 'session-child',
    includeArchived: false,
    archivedSessionIds: [],
    generatedAt: T0,
  })
  const parentTurn = tree.nodes.find((node) => node.id === 'turn:session-root:1')
  const childTurn = tree.nodes.find((node) => node.id === 'turn:session-child:2')
  assert.ok(parentTurn)
  assert.ok(childTurn)
  assert.equal(childTurn.parentId, parentTurn.id)
  const forkEdge = tree.edges.find((edge) => edge.target === childTurn.id)
  assert.ok(forkEdge)
  assert.equal(forkEdge.kind, 'fork')
  assert.equal(parentTurn.childSessionIds.length, 1)
  assert.equal(tree.stats.branches, 1)
})

test('a nested fork at an inherited turn attaches to the ancestor node', () => {
  const parent = rootObservation()
  const childEvents = [
    ...parent.events.slice(0, 4),
    ev('session/end-seed', 4, { inherited: true }),
    ...turn(2, 6, '分支问题', '分支回答'),
  ]
  const grandEvents = [
    ...childEvents.slice(0, 4),
    ev('session/end-seed', 4, { inherited: true }),
    ...turn(2, 6, '孙分支问题', '孙分支回答'),
  ]
  const records = [
    { header: header('session-root') },
    { header: header('session-child', 'session-root') },
    { header: header('session-grand', 'session-child') },
  ]
  const observations = new Map([
    ['session-root', { observation: parent }],
    ['session-child', {
      observation: {
        session: header('session-child', 'session-root'),
        inheritedEventCount: 4,
        events: childEvents,
      },
    }],
    ['session-grand', {
      observation: {
        session: header('session-grand', 'session-child'),
        inheritedEventCount: 4,
        events: grandEvents,
      },
    }],
  ])
  const tree = buildGitChatTree({
    records,
    observations,
    currentSessionId: 'session-grand',
    includeArchived: false,
    archivedSessionIds: [],
    generatedAt: T0,
  })
  const grandNode = tree.nodes.find((node) => node.id === 'turn:session-grand:2')
  assert.ok(grandNode)
  assert.equal(grandNode.parentId, 'turn:session-root:1')
})

test('archived branches are hidden unless requested, then recoverable', () => {
  const parent = rootObservation()
  const childEvents = [
    ...parent.events.slice(0, 4),
    ev('session/end-seed', 4, { inherited: true }),
    ...turn(2, 6, '分支问题', '分支回答'),
  ]
  const records = [
    { header: header('session-root') },
    { header: header('session-child', 'session-root') },
  ]
  const observations = new Map([
    ['session-root', { observation: parent }],
    ['session-child', {
      observation: {
        session: header('session-child', 'session-root'),
        inheritedEventCount: 4,
        events: childEvents,
      },
    }],
  ])
  const hidden = buildGitChatTree({
    records,
    observations,
    currentSessionId: 'session-root',
    includeArchived: false,
    archivedSessionIds: ['session-child'],
    generatedAt: T0,
  })
  assert.equal(hidden.nodes.some((node) => node.sessionId === 'session-child'), false)
  assert.equal(hidden.stats.archivedBranches, 0)

  const shown = buildGitChatTree({
    records,
    observations,
    currentSessionId: 'session-root',
    includeArchived: true,
    archivedSessionIds: ['session-child'],
    generatedAt: T0,
  })
  const childNode = shown.nodes.find((node) => node.sessionId === 'session-child')
  assert.ok(childNode)
  assert.equal(childNode.archived, true)
  assert.equal(shown.stats.archivedBranches, 1)
})

test('a blank fork produces a placeholder branch node', () => {
  const records = [
    { header: header('session-root') },
    { header: header('session-child', 'session-root') },
  ]
  const parent = rootObservation()
  const observations = new Map([
    ['session-root', { observation: parent }],
    ['session-child', {
      observation: {
        session: header('session-child', 'session-root'),
        inheritedEventCount: 4,
        events: [
          ...parent.events.slice(0, 4),
          ev('session/end-seed', 4, { inherited: true }),
        ],
      },
    }],
  ])
  const tree = buildGitChatTree({
    records,
    observations,
    currentSessionId: 'session-child',
    includeArchived: false,
    archivedSessionIds: [],
    generatedAt: T0,
  })
  const branch = tree.nodes.find((node) => node.kind === 'branch')
  assert.ok(branch)
  assert.equal(branch.label, '空分支')
  assert.equal(branch.parentId, 'turn:session-root:1')
})
