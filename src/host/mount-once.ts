/**
 * Single-instance guard for the host half.
 *
 * DSH's loader can create the replacement fiber before the previous one is
 * torn down. Registering `/gitchat` twice would throw, so a mount that loses
 * the race waits for the holder to release the name and then retries.
 * The registry rides a global symbol so two copies of the package (a profile
 * link and a bundled copy) still agree on the holder.
 */

const MOUNTED = Symbol.for('dsh-gitchat.mounted')
const WAITERS = Symbol.for('dsh-gitchat.mounted.waiters')

interface MountRegistry {
  [MOUNTED]?: Set<string>
  [WAITERS]?: Map<string, Array<() => void>>
}

/** Wrap an apply so one package mount is live at a time. */
export function mountOnce<T extends (ctx: any) => void>(name: string, fn: T): T {
  const wrapped = (ctx: any): void => {
    const registry = globalThis as MountRegistry
    const mounted = (registry[MOUNTED] ??= new Set<string>())
    if (mounted.has(name)) {
      const waiters = (registry[WAITERS] ??= new Map<string, Array<() => void>>())
      const queue = waiters.get(name) ?? []
      let alive = true
      queue.push(() => {
        if (alive) wrapped(ctx)
      })
      waiters.set(name, queue)
      ctx?.effect?.(() => () => {
        alive = false
      })
      return
    }

    mounted.add(name)
    ctx?.effect?.(() => () => {
      mounted.delete(name)
      const queue = registry[WAITERS]?.get(name)
      if (queue === undefined || queue.length === 0) return
      registry[WAITERS]?.delete(name)
      for (const waiter of queue) queueMicrotask(waiter)
    })
    fn(ctx)
  }
  return wrapped as T
}
