# Publishing GitChat to GitHub

The repository is already initialized with a `main` branch and an initial commit. It has **no remote** yet, and it contains no personal absolute paths.

## 1. Create an empty repository on GitHub

Create `dsh-gitchat` on GitHub. Do **not** initialize it with a README, `.gitignore`, or license — the local repository already contains them.

Use the name `dsh-gitchat` and a short description such as:

> Git-like conversation trees for DeepSeek Harness: fork any turn, inherit the full context, archive dead ends, and export the whole tree.

Suggested topics:

```text
deepseek-harness
dsh-plugin
conversation-tree
git-like
react-flow
ai-agents
```

## 2. Push from the local checkout

```bash
git remote add origin https://github.com/<your-username>/dsh-gitchat.git
git branch -M main
git push -u origin main
```

For SSH:

```bash
git remote add origin git@github.com:<your-username>/dsh-gitchat.git
git push -u origin main
```

If the remote already exists:

```bash
git remote set-url origin https://github.com/<your-username>/dsh-gitchat.git
git push -u origin main
```

## 3. Tag the first release (optional)

```bash
git tag -a v0.1.0 -m "GitChat 0.1.0"
git push origin v0.1.0
```

Then create a GitHub Release from the tag and attach the repository source. The plugin is installed from a source link, not from npm.

## 4. Optional: use the GitHub CLI

If `gh` is installed and authenticated:

```bash
gh repo create dsh-gitchat --public --source=. --remote=origin --push
```

This creates the remote, adds `origin`, and pushes `main` in one step.

## 5. Verify

```bash
git remote -v
git status
git log --oneline -1
```

The working tree should be clean. GitHub Actions runs the workflow in `.github/workflows/ci.yml` on the first push.

## Notes

- `node_modules/` is ignored.
- `lib/` and `preview/` are intentionally tracked so users can link the plugin and open the preview without building.
- Do not commit credentials, session logs, or local absolute paths.
- If you rename the package, update `package.json`, `cordis.patch.yml`, the client bundle id in `scripts/build.mjs` (it reads the package name), and the README install commands.
