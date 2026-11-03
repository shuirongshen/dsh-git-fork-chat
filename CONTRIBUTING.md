# Contributing to GitChat

Thanks for taking a look. GitChat is a native DeepSeek Harness plugin; the goal is to keep the integration small, the tree model honest, and the UI theme-native.

## Setup

```bash
git clone <your-fork-url>
cd dsh-gitchat
pnpm install
pnpm build
pnpm typecheck
pnpm test
```

The standalone preview needs no host:

```bash
pnpm preview
node scripts/preview-server.mjs
# http://127.0.0.1:5177/
```

## What to know before changing code

- **Host/browser split.** `src/host` is a Cordis plugin and must stay free of browser APIs. `src/client` must stay free of Node APIs.
- **No runtime dependencies.** React, ReactDOM, React Flow, and Dagre are bundled; the host half has no third-party runtime imports. Prefer the standard library.
- **No hand-built model context.** Branches use `sessions.fork`; do not reconstruct the `messages` array.
- **No local absolute paths.** Never commit a user directory, API key, or machine-specific path.
- **Use theme semantics.** Use DSH tokens (`--dsw-alias-*`) rather than hard-coded colors. For primary actions, use the fill + inverted label pair; `brand-primary` is a contrast token, not a blue brand color.
- **Tooltips are part of the UX.** Every new icon-only or ambiguous button should be wrapped in `GcTooltip` and explain the action, including disabled states.
- **Built artifacts are tracked.** If behavior changes, run `pnpm build` and `pnpm preview`, then commit `lib/`, `preview/preview.js`, and `preview/preview.css` alongside the source.

## Tests

```bash
pnpm test
```

The suite runs in one Node process because the DSH Windows sandbox denies piped child-process stdio. When adding a route or tree rule, add a focused test:

- `test/tree.test.mjs` for pure event/tree logic.
- `test/routes.test.mjs` for HTTP envelopes, archive rollback, and save.
- `test/client.test.mjs` for the bundle loader, `apply`, slot registration, and controller.

## Pull requests

1. Keep the change focused.
2. Update `README.md` / `README.zh.md` for user-visible behavior.
3. Run `pnpm typecheck`, `pnpm test`, `pnpm build`, and `pnpm preview`.
4. Confirm no local paths or credentials: `git grep -n -I -E "C:\\\\Users|API_KEY|sk-"`.
5. Describe the user-visible effect and the verification you ran.

## Reporting bugs

Please include:

- DSH version (`dsh --version` or the app version),
- whether Chat/Trajectory works,
- a screenshot or the GitChat error toast,
- relevant host/client console errors,
- a reduced description of the session/fork shape (no secrets or full logs).
