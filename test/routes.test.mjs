import test from 'node:test'
import assert from 'node:assert/strict'
import { Readable } from 'node:stream'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const T0 = 1_800_000_000_000

function header(id, parent) {
  const value = { version: 4, id, createdAt: T0, cwd: 'C:\\work\\demo', isSeeded: parent !== undefined, agentPreset: 'standard' }
  if (parent !== undefined) value.parentSession = parent
  return value
}

function ev(type, seq, data) {
  return { type, seq, time: T0 + seq, data }
}

function human(seq, text) {
  return ev('user/message', seq, { content: [{ type: 'text', text }], source: { kind: 'user', rpcId: `rpc-${seq}` }, role: 'user' })
}

function assistant(seq, text, turnNo) {
  return ev('assistant/message', seq, { turn: turnNo, step: 1, message: { role: 'assistant', content: [{ type: 'text', text }] }, stream: [] })
}

function turn(turnNo, start, user, reply) {
  return [
    ev('turn/start', start, { turn: turnNo }),
    human(start + 1, user),
    assistant(start + 2, reply, turnNo),
    ev('turn/end', start + 3, { turn: turnNo, reason: { kind: 'completed' } }),
  ]
}

const rootEvents = [...turn(1, 0, '你好', '你好，我是助手'), ...turn(2, 4, '继续', '继续回答')]
const childEvents = [
  ...rootEvents.slice(0, 4),
  ev('session/end-seed', 4, { inherited: true }),
  ...turn(2, 5, '分支问题', '分支回答'),
]
const records = [
  { header: header('session-root') },
  { header: header('session-child', 'session-root') },
]
const observations = new Map([
  ['session-root', { session: header('session-root'), inheritedEventCount: 0, events: rootEvents }],
  ['session-child', { session: header('session-child', 'session-root'), inheritedEventCount: 4, events: childEvents }],
])

/** Build a fake request with a JSON body. */
function request(url, body, method = 'POST', address = '127.0.0.1') {
  const req = Readable.from(body === undefined ? [] : [Buffer.from(JSON.stringify(body))])
  req.method = method
  req.url = url
  req.socket = { remoteAddress: address }
  return req
}

/** Capture one JSON response. */
function response() {
  let resolve
  const done = new Promise((r) => { resolve = r })
  const state = { status: 0, headers: {}, body: '' }
  const res = {
    writeHead(status, headers) {
      state.status = status
      state.headers = headers
    },
    end(payload) {
      state.body = payload ?? ''
      resolve()
    },
  }
  return { res, done, state }
}

/** Mount a fresh host module instance and return its /gitchat route. */
async function mount() {
  delete globalThis[Symbol.for('dsh-gitchat.mounted')]
  delete globalThis[Symbol.for('dsh-gitchat.mounted.waiters')]
  const suffix = `${Date.now()}-${Math.random().toString(16).slice(2)}`
  const module = await import(pathToFileURL(join(process.cwd(), 'lib', 'index.js')).href + `?t=${suffix}`)
  let route
  const archived = []
  const archiveCalls = []
  const sessionQuery = {
    listSessions: async () => records,
    readSession: async (id) => {
      const value = observations.get(id)
      if (value === undefined) throw new Error(`missing ${id}`)
      return value
    },
    traceSession: async () => { throw new Error('traceSession is not used by GitChat') },
  }
  const workspaceRegistry = {
    get archivedSessionIds() { return archived },
    archiveSession: async (id, options) => {
      archiveCalls.push({ id, options })
      archived.push(id)
    },
    unarchiveSession: async (id) => {
      const index = archived.indexOf(id)
      if (index >= 0) archived.splice(index, 1)
    },
  }
  const ctx = {
    sessionQuery,
    workspaceRegistry,
    webServer: {
      register(value) {
        route = value
        return () => { route = undefined }
      },
    },
    effect(fn) {
      const dispose = fn()
      return dispose
    },
  }
  module.apply(ctx)
  assert.ok(route)
  return { route, archived, archiveCalls }
}

/** Invoke the route and decode the envelope. */
async function call(route, url, body, method = 'POST', address = '127.0.0.1') {
  const { res, done, state } = response()
  route.handler(request(url, body, method, address), res)
  await done
  return { ...state, json: JSON.parse(state.body) }
}

test('/gitchat/ping reports the package identity', async () => {
  const { route } = await mount()
  const result = await call(route, '/gitchat/ping', undefined, 'GET')
  assert.equal(result.status, 200)
  assert.equal(result.json.ok, true)
  assert.equal(result.json.value.name, 'dsh-gitchat')
})

test('/gitchat/tree returns a rooted turn graph', async () => {
  const { route } = await mount()
  const result = await call(route, '/gitchat/tree', { sessionId: 'session-child' })
  assert.equal(result.status, 200)
  assert.equal(result.json.ok, true)
  const tree = result.json.value
  assert.equal(tree.rootId, 'session-root')
  assert.equal(tree.currentSessionId, 'session-child')
  assert.ok(tree.nodes.some((node) => node.id === 'turn:session-root:1'))
  assert.ok(tree.nodes.some((node) => node.id === 'turn:session-child:2'))
  assert.ok(tree.edges.some((edge) => edge.kind === 'fork'))
})

test('/gitchat/archive archives a branch and the tree can show it again', async () => {
  const { route, archived, archiveCalls } = await mount()
  const result = await call(route, '/gitchat/archive', { sessionId: 'session-child', force: true })
  assert.equal(result.status, 200)
  assert.equal(result.json.ok, true)
  assert.deepEqual(result.json.value.archivedSessions, ['session-child'])
  assert.deepEqual(archived, ['session-child'])
  assert.equal(archiveCalls[0].options.stopActivity, true)

  const hidden = await call(route, '/gitchat/tree', { sessionId: 'session-root', includeArchived: false })
  assert.equal(hidden.json.ok, true)
  assert.equal(hidden.json.value.nodes.some((node) => node.sessionId === 'session-child'), false)

  const shown = await call(route, '/gitchat/tree', { sessionId: 'session-root', includeArchived: true })
  assert.equal(shown.json.value.nodes.some((node) => node.sessionId === 'session-child' && node.archived), true)
})

test('/gitchat/archive refuses the root session', async () => {
  const { route } = await mount()
  const result = await call(route, '/gitchat/archive', { sessionId: 'session-root' })
  assert.equal(result.json.ok, false)
  assert.equal(result.json.error.code, 'gitchat/root-session')
})

test('/gitchat/save writes a full JSON snapshot under DSH_HOME', async () => {
  const { route } = await mount()
  const home = mkdtempSync(join(tmpdir(), 'gitchat-save-'))
  const previous = process.env.DSH_HOME
  process.env.DSH_HOME = home
  try {
    const result = await call(route, '/gitchat/save', { sessionId: 'session-child' })
    assert.equal(result.json.ok, true)
    const saved = result.json.value
    assert.ok(existsSync(saved.path))
    const parsed = JSON.parse(readFileSync(saved.path, 'utf8'))
    assert.equal(parsed.version, 1)
    assert.ok(parsed.nodes.length > 0)
    assert.ok(saved.bytes > 0)
  } finally {
    if (previous === undefined) delete process.env.DSH_HOME
    else process.env.DSH_HOME = previous
    rmSync(home, { recursive: true, force: true })
  }
})

test('non-loopback requests are rejected', async () => {
  const { route } = await mount()
  const result = await call(route, '/gitchat/tree', { sessionId: 'session-root' }, 'POST', '10.0.0.4')
  assert.equal(result.status, 403)
  assert.equal(result.json.ok, false)
})

test('GET on a JSON route is method-not-allowed', async () => {
  const { route } = await mount()
  const result = await call(route, '/gitchat/tree', undefined, 'GET')
  assert.equal(result.status, 405)
})
