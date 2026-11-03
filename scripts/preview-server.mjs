/**
 * Tiny static server for the standalone preview. It is a test harness only;
 * the plugin itself runs inside the DSH web GUI.
 */
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const root = resolve(dirname(dirname(fileURLToPath(import.meta.url))), 'preview')
const port = Number(process.env.GITCHAT_PREVIEW_PORT ?? 5177)
const host = '127.0.0.1'

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
}

const CSP =
  "default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'none'; base-uri 'none'; form-action 'none'"

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? '/', `http://${host}`)
    const requested = url.pathname === '/' ? '/index.html' : decodeURIComponent(url.pathname)
    const file = resolve(join(root, normalize(requested).replace(/^([/\\])+/, '')))
    if (file !== root && !file.startsWith(root + sep)) {
      response.writeHead(403)
      response.end('forbidden')
      return
    }
    const body = await readFile(file)
    response.writeHead(200, {
      'content-type': MIME[extname(file)] ?? 'application/octet-stream',
      'cache-control': 'no-store',
      'content-security-policy': CSP,
      'referrer-policy': 'no-referrer',
      'x-content-type-options': 'nosniff',
    })
    response.end(body)
  } catch {
    response.writeHead(404)
    response.end('not found')
  }
})

server.listen(port, host, () => {
  console.log(`[preview] http://${host}:${port}/`)
})
