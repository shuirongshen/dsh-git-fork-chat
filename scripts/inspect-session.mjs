/**
 * Dev utility: parse one DSH v4 session log with GitChat's turn extractor.
 * Usage: node scripts/inspect-session.mjs <session.v4.jsonl.zstd>
 */
import { readFileSync } from 'node:fs'
import { zstdDecompressSync } from 'node:zlib'
import { parseSession } from '../src/host/tree.ts'

const file = process.argv[2]
if (file === undefined) throw new Error('usage: node scripts/inspect-session.mjs <session.v4.jsonl.zstd>')
const bytes = readFileSync(file)
const magic = Buffer.from('28b52ffd', 'hex')
const offsets = []
for (let index = 0; index < bytes.length - 3; index += 1) {
  if (bytes[index] === magic[0] && bytes[index + 1] === magic[1] && bytes[index + 2] === magic[2] && bytes[index + 3] === magic[3]) {
    offsets.push(index)
  }
}
let text = ''
for (let index = 0; index < offsets.length; index += 1) {
  const start = offsets[index]
  const end = index + 1 < offsets.length ? offsets[index + 1] : bytes.length
  try {
    text += zstdDecompressSync(bytes.subarray(start, end)).toString('utf8')
  } catch {
    // False magic inside a frame; the real frame was already appended.
  }
}
const lines = text.split(/\r?\n/).filter((line) => line.trim() !== '')
const header = JSON.parse(lines[0])
const events = lines.slice(1).map((line) => JSON.parse(line))
const parsed = parseSession({ session: header, inheritedEventCount: 0, events })
console.log(`session ${header.id}`)
console.log(`title   ${parsed.title || '(none)'}`)
console.log(`model   ${parsed.provider ?? '?'}/${parsed.model ?? '?'}`)
console.log(`turns   ${parsed.turns.length}`)
for (const turn of parsed.turns) {
  console.log(`\n#${turn.turn} [${turn.status}] seq ${turn.startSeq}..${turn.lastSeq} tools=${turn.toolCalls}`)
  console.log(`  user: ${turn.user.slice(0, 160).replaceAll('\n', ' ⏎ ')}`)
  console.log(`  assistant: ${turn.assistant.slice(0, 160).replaceAll('\n', ' ⏎ ') || '(empty)'}`)
}
