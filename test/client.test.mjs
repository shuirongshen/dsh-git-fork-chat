import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import vm from 'node:vm'

/** Load the built lazy-CJS client bundle through a mock DSH module loader. */
function loadBundle() {
  const code = readFileSync(new URL('../lib/client.js', import.meta.url), 'utf8')
  let entry
  const sandbox = {
    window: {
      __ModuleLoader__: {
        load(value) {
          entry = value
        },
      },
    },
    console,
    setTimeout,
    clearTimeout,
  }
  vm.createContext(sandbox)
  vm.runInContext(code, sandbox, { filename: 'lib/client.js' })
  assert.ok(entry, 'bundle did not register through window.__ModuleLoader__.load')
  const require = createRequire(import.meta.url)
  const module = entry.factory((id) => require(id))
  return { entry, module }
}

test('client bundle registers the dsh-gitchat module id', () => {
  const { entry } = loadBundle()
  assert.equal(entry.id, 'dsh-gitchat')
})

test('client apply registers a session-scoped conversation View slot', () => {
  const { module } = loadBundle()
  // The bundle runs in a vm realm; copy its array into this realm first.
  assert.deepEqual([...module.inject], ['slots', 'sessions', 'uiWorkspace', 'locale'])
  assert.equal(typeof module.apply, 'function')

  const localeRegistrations = []
  const injections = []
  const registrations = []
  const opened = []
  const effects = []

  const t = (key, params) => {
    if (params === undefined) return key
    let text = key
    for (const [name, value] of Object.entries(params)) text = text.split(`{${name}}`).join(String(value))
    return text
  }

  const ctx = {
    effect(fn, label) {
      const dispose = fn()
      effects.push({ label, dispose })
      return dispose
    },
    locale: {
      register(namespace, dictionaries) {
        localeRegistrations.push({ namespace, dictionaries })
        return () => {}
      },
      bind() {
        return t
      },
    },
    slots: {
      inject(name, callback) {
        injections.push(name)
        return callback()
      },
      register(options, component) {
        registrations.push({ options, component })
        return () => {}
      },
    },
    sessions: {
      fork: async () => 'session-child',
    },
    uiWorkspace: {
      openSession(sessionId) {
        opened.push(sessionId)
      },
    },
  }

  module.apply(ctx)

  assert.deepEqual(injections, ['conversation.view'])
  assert.equal(localeRegistrations.length, 1)
  assert.equal(localeRegistrations[0].namespace, 'gitchat')
  assert.ok(localeRegistrations[0].dictionaries.zh['view.tab'])
  assert.equal(registrations.length, 1)
  const { options, component } = registrations[0]
  assert.equal(options.name, 'conversation.view')
  assert.equal(options.id, 'gitchat')
  assert.equal(options.locale, 'gitchat')
  assert.equal(options.order, 20)
  assert.equal(typeof component, 'function')
  assert.equal(options.label(), 'view.tab')

  const injected = options.inject()
  assert.equal(typeof injected.controller.loadTree, 'function')
  assert.equal(typeof injected.controller.forkAt, 'function')
  assert.equal(typeof injected.controller.archiveBranch, 'function')
  assert.equal(typeof injected.controller.unarchiveBranch, 'function')
  assert.equal(typeof injected.controller.saveTree, 'function')
  assert.equal(typeof injected.controller.downloadTree, 'function')

  return injected.controller.forkAt('session-root', 6).then(() => {
    assert.deepEqual(opened, ['session-child'])
  })
})
