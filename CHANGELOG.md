# Changelog

## 0.1.0

Initial public preview.

### Added

- Native dual-face DeepSeek Harness plugin: host `/gitchat` routes + browser `conversation.view` surface.
- Git-like conversation tree derived from DSH fork lineage, rendered with React Flow + Dagre.
- Fork from any closed turn with exact DSH context inheritance.
- Branch archive/restore (non-destructive subtree archive with rollback).
- Full-tree JSON export and plugin-data snapshot writing.
- Theme-native light/dark/dynamic-range styling.
- Hover/focus tooltips for toolbar and detail actions, including disabled reasons.
- Chinese and English dictionaries.
- Standalone preview with an in-memory controller, dark-mode switch, and demo GIF.
- Unit/integration tests for event parsing, tree assembly, HTTP routes, and client bundle registration.
- GitHub-ready repository: CI workflow, contributing guide, publishing guide, third-party notices.

### Fixed

- Dark-mode primary buttons could render white text on a white fill. `brand-primary` is a contrast token, not a blue accent; primary CTAs now use `button-primary-fill` + `label-primary-inverted`.
- A `.gc-root button` specificity rule overrode semantic button colors and font sizes; it now only normalizes the font family.
- Local machine paths were removed from the preview fixture, docs, and install instructions.
- Demo screenshots were regenerated with a generic working directory.
