# Security policy

## Supported versions

GitChat is an early-preview plugin. Security fixes target the latest `main` branch and the latest tagged release.

## Reporting

Please report vulnerabilities privately through GitHub Security Advisories on the repository (Security → Report a vulnerability). Do not open a public issue for a vulnerability that could expose a user's session data or local files.

Include:

- affected version / commit,
- DSH version and platform,
- minimal reproduction steps,
- impact (for example: can a non-loopback client reach `/gitchat`?).

## Security model

- `/gitchat` routes are **loopback-only**. A non-loopback request is rejected with 403.
- The plugin stores no credentials and does not read API keys.
- The host half reads DSH session logs through `sessionQuery` and archives sessions through `workspaceRegistry`.
- The only file write is the JSON snapshot under `~/.dsh/plugin-data/dsh-gitchat/exports/`; the filename is sanitized.
- Message content is rendered as React text; the plugin does not use `dangerouslySetInnerHTML`.
- The standalone preview uses a strict CSP and an in-memory mock controller; it is not the plugin runtime.

## Known boundaries

- DSH has no public session-delete API; GitChat archives sessions instead of deleting logs.
- A user who can run code in the DSH host already has access to the session files; GitChat does not add a sandbox boundary beyond the loopback route check.
- If you expose DSH to a network, keep the loopback route policy and put authentication in front of the host. GitChat will not accept remote requests by design.
