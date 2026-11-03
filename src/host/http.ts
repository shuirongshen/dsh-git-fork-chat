/**
 * Small HTTP helpers for the /gitchat route family.
 *
 * The DSH web server is a plain Node server: route owners bring their own
 * request policy. GitChat is a local desktop surface, so every route is
 * loopback-only; the browser and the host share one origin.
 */
import type { IncomingMessage, OutgoingHttpHeaders, ServerResponse } from 'node:http'
import type { GitChatEnvelope } from '../shared/types.ts'

/** Default JSON body cap. */
export const MAX_BODY_BYTES = 64 * 1024

/** JSON response headers used by every route. */
const JSON_HEADERS: OutgoingHttpHeaders = {
  'content-type': 'application/json; charset=utf-8',
  'cache-control': 'no-store',
  'referrer-policy': 'no-referrer',
  'x-content-type-options': 'nosniff',
}

/** Read at most `maxBytes` of a JSON body; null for empty/invalid/oversized. */
export async function readJsonBody(
  request: IncomingMessage,
  maxBytes: number = MAX_BODY_BYTES,
): Promise<unknown | null> {
  const chunks: Buffer[] = []
  let size = 0
  for await (const chunk of request) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk as Uint8Array)
    size += buffer.length
    if (size > maxBytes) {
      request.destroy()
      return null
    }
    chunks.push(buffer)
  }
  if (size === 0) return null
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8')) as unknown
  } catch {
    return null
  }
}

/** Write one JSON response. */
export function writeJson(
  response: ServerResponse,
  status: number,
  body: unknown,
  headers: OutgoingHttpHeaders = {},
): void {
  const payload = JSON.stringify(body)
  response.writeHead(status, { ...JSON_HEADERS, 'content-length': Buffer.byteLength(payload), ...headers })
  response.end(payload)
}

/** Write a successful envelope. */
export function writeOk<T>(response: ServerResponse, value: T): void {
  writeJson(response, 200, { ok: true, value } satisfies GitChatEnvelope<T>)
}

/** Write an error envelope. The transport stays 200 for application errors. */
export function writeError(
  response: ServerResponse,
  error: { code: string; message: string; details?: unknown },
  status = 200,
): void {
  writeJson(response, status, { ok: false, error } satisfies GitChatEnvelope<never>)
}

/** Parse the pathname without trusting the Host header. */
export function requestPath(request: IncomingMessage): string {
  return new URL(request.url ?? '/', 'http://gitchat.local').pathname
}

/** Whether the request came over loopback (or an Electron IPC bridge). */
export function isLoopback(request: IncomingMessage): boolean {
  const address = request.socket?.remoteAddress
  // Electron's file:// shell forwards host fetches through an IPC bridge that
  // has no socket address; that carrier is already process-local.
  if (address === undefined || address === '') return true
  const normalized = address.startsWith('::ffff:') ? address.slice('::ffff:'.length) : address
  return normalized === '::1' || normalized === '127.0.0.1' || normalized.startsWith('127.')
}

/** Narrow a value to a JSON object. */
export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/** Read a non-empty string field from a JSON object. */
export function stringField(body: unknown, field: string): string | null {
  if (!isRecord(body)) return null
  const value = body[field]
  return typeof value === 'string' && value.trim() !== '' ? value.trim() : null
}

/** Read a strict boolean field from a JSON object. */
export function booleanField(body: unknown, field: string): boolean {
  return isRecord(body) && body[field] === true
}
