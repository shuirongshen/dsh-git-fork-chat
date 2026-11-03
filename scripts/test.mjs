/**
 * Run every test file in one process.
 *
 * `node --test` spawns a child per file with piped stdio, which the DSH
 * Windows sandbox denies (EPERM). Importing the files directly keeps the test
 * runner in-process and works in both sandboxed and normal terminals.
 */
import '../test/tree.test.mjs'
import '../test/routes.test.mjs'
import '../test/client.test.mjs'
