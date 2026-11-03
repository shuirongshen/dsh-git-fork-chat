/**
 * Build the standalone preview (IIFE JS + CSS) with the native esbuild binary.
 * The plugin build stays separate: this bundle inlines React and React DOM so
 * `preview/index.html` runs from any static file server.
 */
import { spawnSync } from 'node:child_process'
import { mkdir, readFile, rm } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const esbuild = join(root, 'node_modules', '@esbuild', 'win32-x64', 'esbuild.exe')
const outDir = join(root, 'preview')

await mkdir(outDir, { recursive: true })
await rm(join(outDir, 'preview.js'), { force: true })
await rm(join(outDir, 'preview.css'), { force: true })

const result = spawnSync(
  esbuild,
  [
    'preview/main.tsx',
    '--bundle',
    '--platform=browser',
    '--format=iife',
    '--target=chrome110',
    '--jsx=automatic',
    '--loader:.css=css',
    '--charset=utf8',
    '--log-level=error',
    '--legal-comments=none',
    '--define:process.env.NODE_ENV="production"',
    '--outfile=preview/preview.js',
  ],
  { cwd: root, stdio: 'inherit' },
)
if (result.error !== undefined) throw result.error
if (result.status !== 0) throw new Error(`preview esbuild exited with ${String(result.status)}`)

const js = await readFile(join(outDir, 'preview.js'), 'utf8')
let css = ''
try {
  css = await readFile(join(outDir, 'preview.css'), 'utf8')
} catch {
  // No CSS is possible only if the entry imports nothing; keep the build valid.
}
console.log(`[preview] preview.js  ${(Buffer.byteLength(js) / 1024).toFixed(1)} KiB`)
console.log(`[preview] preview.css ${(Buffer.byteLength(css) / 1024).toFixed(1)} KiB`)
