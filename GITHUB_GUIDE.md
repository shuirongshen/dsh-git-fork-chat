# GitChat 的 GitHub 保姆级教程

> 目标：把你电脑上的 GitChat 项目上传到一个**公开的 GitHub 仓库**，并且以后能持续更新。
>
> 读者设定：第一次用 GitHub、第一次用 Git、Windows、会打开 PowerShell 但不确定命令含义。
>
> 你不需要先学完 Git。照着做，先成功 push 一次，再慢慢理解。

---

## 目录

1. [先理解 5 个词](#1-先理解-5-个词)
2. [注册 GitHub 账号](#2-注册-github-账号)
3. [确认电脑上有 Git](#3-确认电脑上有-git)
4. [打开项目目录的 PowerShell](#4-打开项目目录的-powershell)
5. [在 GitHub 网页上创建公开仓库](#5-在-github-网页上创建公开仓库)
6. [第一次推送：把本地项目传上去](#6-第一次推送把本地项目传上去)
7. [第一次 push 的登录问题（重点）](#7-第一次-push-的登录问题重点)
8. [成功之后怎么检查](#8-成功之后怎么检查)
9. [更简单的方法：GitHub Desktop](#9-更简单的方法github-desktop)
10. [另一个简单方法：VS Code](#10-另一个简单方法vs-code)
11. [持续更新：每天的三步](#11-持续更新每天的三步)
12. [这个仓库特有的更新流程](#12-这个仓库特有的更新流程)
13. [提交信息怎么写](#13-提交信息怎么写)
14. [撤销、恢复、查看历史](#14-撤销恢复查看历史)
15. [分支与 Pull Request（进阶）](#15-分支与-pull-request进阶)
16. [常见报错对照表](#16-常见报错对照表)
17. [千万不要上传的东西](#17-千万不要上传的东西)
18. [发布版本（Release）](#18-发布版本release)
19. [仓库美化与设置](#19-仓库美化与设置)
20. [一页纸速查](#20-一页纸速查)
21. [第一次发布的完整 checklist](#21-第一次发布的完整-checklist)

---

## 1. 先理解 5 个词

| 词 | 大白话 | 类比 |
|---|---|---|
| **仓库 repository / repo** | 一个被 Git 管理的项目文件夹 | 一个带版本历史的文件夹 |
| **本地 local** | 你电脑上的那份 | 你的草稿本 |
| **远程 remote** | GitHub 上的那份 | 云端的共享副本 |
| **commit** | 给当前修改拍一张快照，并写一句说明 | 把草稿装进盒子、贴标签 |
| **push** | 把本地的新 commit 传到 GitHub | 把盒子寄到云端 |
| **origin** | 远程仓库的默认昵称 | “GitHub 那个地址”的简称 |
| **main** | 主分支的名字 | 主线 |

一句话流程：

```text
改文件 → git add（放进盒子）→ git commit（封箱贴标签）→ git push（寄到 GitHub）
```

---

## 2. 注册 GitHub 账号

如果你已经有账号，跳到第 3 步。

1. 打开浏览器，访问 **<https://github.com/signup>**。
2. 填写邮箱、密码、用户名（username）。
   - 用户名会出现在仓库地址里，例如 `https://github.com/yourname/dsh-gitchat`。
   - 建议用英文、数字、短横线，不要用中文。
3. 完成人机验证，选择 **Free** 计划即可。
4. 去邮箱点验证链接。
5. 登录 GitHub。

> 公开仓库（Public）对所有人可见，适合作品集、教程、开源项目。
> 不要往公开仓库里放密码、API Key、身份证、家庭住址、私人聊天记录。

---

## 3. 确认电脑上有 Git

在 PowerShell 里输入：

```powershell
git --version
```

正常会显示类似：

```text
git version 2.55.0.windows.3
```

如果提示“无法将 git 项识别为 cmdlet”，说明 Git 没装或没进 PATH：

1. 打开 <https://git-scm.com/download/win> 下载安装。
2. 安装时一路默认即可（Git Credential Manager 默认会勾选）。
3. 关掉所有 PowerShell 窗口，重新打开一个，再运行 `git --version`。

### 设置你的 Git 身份

commit 会记录作者名字和邮箱。设置一次即可：

```powershell
git config --global user.name "你的名字或昵称"
git config --global user.email "你的邮箱"
```

检查：

```powershell
git config --global user.name
git config --global user.email
```

> 隐私提示：公开仓库的 commit 会显示这个邮箱。
> 如果你不想公开真实邮箱，可以去 GitHub：
> **Settings → Emails → Keep my email addresses private**，
> 复制形如 `12345678+yourname@users.noreply.github.com` 的地址，
> 然后重新设置 `user.email`。

---

## 4. 打开项目目录的 PowerShell

你的项目在：

```text
$env:USERPROFILE\Documents\deepseek-harness\plugins\dsh-gitchat
```

在 PowerShell 里可以直接用环境变量，不用手打用户名：

```powershell
cd "$env:USERPROFILE\Documents\deepseek-harness\plugins\dsh-gitchat"
```

如果你把项目放在别处，就在文件资源管理器里打开那个文件夹，然后：

1. 点击窗口上方的地址栏；
2. 输入 `powershell`；
3. 按 Enter。

会在这个目录打开 PowerShell。

确认当前位置：

```powershell
Get-Location
```

应该显示 `...\dsh-gitchat`。

确认它已经是一个 Git 仓库：

```powershell
git status
```

你应该看到类似：

```text
On branch main
nothing to commit, working tree clean
```

**注意：这个项目已经初始化过 Git 了，不要重复运行 `git init`。**
如果 `git status` 说“not a git repository”，说明你进错目录了，先 `cd` 到正确目录。

---

## 5. 在 GitHub 网页上创建公开仓库

1. 浏览器打开 **<https://github.com/new>**。
2. 按下表填写：

| 字段 | 填什么 |
|---|---|
| Repository name | `dsh-gitchat` |
| Description | `Git-like conversation trees for DeepSeek Harness`（可自定义） |
| Public / Private | 选 **Public** |
| Add a README file | **不要勾选** |
| Add .gitignore | **None** |
| Choose a license | **None** |

3. 点击 **Create repository**。

### 为什么不要勾选 README / .gitignore / License？

因为你本地已经有这些文件了。如果 GitHub 上再自动生成一个 README，远程仓库就会比本地多一个 commit，第一次 push 会被拒绝。

### 如果你不小心勾选了 README

最简单的修复：

1. 打开刚创建的仓库页面；
2. **Settings → 最下方 Danger Zone → Delete this repository**；
3. 按提示输入仓库名确认删除；
4. 回到 <https://github.com/new> 重新创建一个**完全空**的仓库。

或者用 Git 合并远程 README（对新手更麻烦，见第 16 节报错表）。

创建成功后，页面会显示一个 HTTPS 地址，例如：

```text
https://github.com/<你的用户名>/dsh-gitchat.git
```

把它复制下来。

---

## 6. 第一次推送：把本地项目传上去

回到 PowerShell，确认在项目目录：

```powershell
cd "$env:USERPROFILE\Documents\deepseek-harness\plugins\dsh-gitchat"
git status
```

### 6.1 添加远程地址

```powershell
git remote add origin https://github.com/<你的用户名>/dsh-gitchat.git
```

把 URL 换成你刚刚复制的地址。

检查：

```powershell
git remote -v
```

应看到两行：

```text
origin  https://github.com/<你的用户名>/dsh-gitchat.git (fetch)
origin  https://github.com/<你的用户名>/dsh-gitchat.git (push)
```

如果提示 **`remote origin already exists`**，不要重复 add，改成：

```powershell
git remote set-url origin https://github.com/<你的用户名>/dsh-gitchat.git
```

### 6.2 确认分支叫 main

```powershell
git branch -M main
```

### 6.3 推送

```powershell
git push -u origin main
```

解释：

- `push`：上传；
- `-u`：记住 `origin/main` 是默认上游，以后直接 `git push` 就行；
- `origin`：远程昵称；
- `main`：本地分支名。

---

## 7. 第一次 push 的登录问题（重点）

第一次 push 一定会让你登录 GitHub。你会遇到下面两种之一。

### 情况 A：弹出浏览器窗口（最常见，推荐）

Git for Windows 自带 **Git Credential Manager (GCM)**，通常会弹出：

```text
Sign in to GitHub
```

选择 **Sign in with your browser**，在浏览器里登录 GitHub，点击 **Authorize**，然后回到 PowerShell。

看到类似下面的输出就成功了：

```text
Enumerating objects: 61, done.
Writing objects: 100% (61/61), done.
To https://github.com/<你的用户名>/dsh-gitchat.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
```

> 如果浏览器窗口被其他窗口挡住，检查任务栏，或者再运行一次 `git push -u origin main`。

### 情况 B：终端让你输入 username / password

GitHub 已经**不允许用账号密码**推送。这里的 password 必须填 **Personal Access Token (PAT)**，不是你的登录密码。

创建 PAT：

1. 登录 GitHub，点右上角头像 → **Settings**。
2. 左侧最下方 → **Developer settings**。
3. **Personal access tokens** → **Tokens (classic)**。
4. 点 **Generate new token (classic)**。
5. 填写：
   - Note：`dsh-gitchat push`
   - Expiration：30 天或 90 天（过期后重新生成）
   - Scopes：至少勾选 **`repo`**；因为这个仓库包含 `.github/workflows/ci.yml`，**再勾选 `workflow`**。
6. 点 **Generate token**。
7. 复制页面上以 `ghp_` 开头的 token（**只显示一次**）。
8. 回到 PowerShell：
   - `Username` 填你的 GitHub 用户名；
   - `Password` 粘贴 token（输入时不会显示字符，正常）；
   - 回车。

Windows 会把 token 存进凭据管理器，后续一般不用再输入。

> **绝对不要把 token 写进代码、README、聊天记录或 `.env` 后提交。**
> 如果泄露：立刻去 GitHub 删除该 token，再重新生成。

### 情况 C：提示 `refusing to allow a Personal Access Token to create or update workflow`

你的 token 少了 `workflow` 权限。两个办法：

1. 重新生成 token，勾选 `repo` + `workflow`；
2. 或者改用第 9 节的 GitHub Desktop / 第 10 节的 VS Code，用浏览器登录，不用 PAT。

---

## 8. 成功之后怎么检查

### 8.1 本地检查

```powershell
git status
git remote -v
git log --oneline -5
```

`git status` 应显示：

```text
On branch main
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

### 8.2 网页检查

刷新 GitHub 仓库页面：

```text
https://github.com/<你的用户名>/dsh-gitchat
```

你应该能看到：

- `README.md` 在首页渲染；
- `docs/demo.gif` 动图；
- 文件列表里有 `src/`、`lib/`、`preview/`；
- 右上角 **Commits** 能看到提交记录；
- **Actions** 标签里，CI 工作流开始运行（第一次可能要几分钟）。

如果 CI 是红叉：

- 点进去看是哪一个步骤失败；
- 常见是 `pnpm install` 或 Node 版本；
- 把报错贴给我，我可以帮你改 workflow。

---

## 9. 更简单的方法：GitHub Desktop

如果你觉得命令行和 token 太麻烦，用官方图形客户端最省心。**不需要 PAT。**

### 9.1 安装与登录

1. 打开 <https://desktop.github.com/> 下载 GitHub Desktop。
2. 安装后打开，选择 **Sign in to GitHub.com**，浏览器登录并授权。
3. 回到 GitHub Desktop。

### 9.2 添加本地仓库

1. 菜单 **File → Add local repository…**
2. **Choose…** 选择：
   ```text
   %USERPROFILE%\Documents\deepseek-harness\plugins\dsh-gitchat
   ```
3. 点 **Add**。

如果提示 “This directory does not appear to be a Git repository”，说明你选错了目录（要选包含 `.git` 的那一层），或者项目没有初始化。这个项目已经有 `.git`，正常不会出现。

### 9.3 发布为公开仓库

1. 顶部会出现 **Publish repository**，点击。
2. Name 填 `dsh-gitchat`；
3. Description 可填；
4. **取消勾选 “Keep this code private”**（这就是 Public）；
5. 点 **Publish repository**。

等几秒，GitHub 上就有仓库了。

> 如果之前已经用命令行 `git remote add origin` 添加过远程，GitHub Desktop 会显示 **Push origin**，直接点它即可，不要重复 Publish。

### 9.4 以后更新

1. 修改文件并保存；
2. 打开 GitHub Desktop，左侧会列出变更；
3. 左下角 **Summary** 写一句说明，例如 `docs: update README`；
4. 点 **Commit to main**；
5. 点顶部 **Push origin**。

完成。整个过程不需要 terminal。

---

## 10. 另一个简单方法：VS Code

如果你已经用 VS Code 写代码，也可以：

1. VS Code → **File → Open Folder**，打开 `dsh-gitchat` 文件夹；
2. 左侧点 **Source Control** 图标（三个点连线的图标）；
3. 如果仓库还没有远程，会出现 **Publish to GitHub**；
4. 选择 **Publish to GitHub public repository**；
5. 按提示登录 GitHub，选择仓库名；
6. 完成。

日常更新：

- Source Control 里会显示修改；
- 输入 message；
- 点 **Commit**；
- 点 **Sync Changes** / **Push**。

> 三种方式（命令行 / GitHub Desktop / VS Code）选一种就行，不要同时用多个工具制造混乱。推荐新手先用 **GitHub Desktop**，等熟悉了再学命令行。

---

## 11. 持续更新：每天的三步

假设你已经成功 push 过一次，并且当前在 `main` 分支。

### 11.1 改完文件后，先看状态

```powershell
cd "$env:USERPROFILE\Documents\deepseek-harness\plugins\dsh-gitchat"
git status
```

红色/未跟踪的文件就是改动。

### 11.2 提交

```powershell
git add -A
git commit -m "docs: 更新 README 的安装说明"
```

- `git add -A`：把所有改动放进暂存区（包括新增、修改、删除）；
- `git commit -m "..."`：生成一个 commit。

如果你只想提交某几个文件：

```powershell
git add README.md GITHUB_GUIDE.md
git commit -m "docs: 更新教程"
```

### 11.3 推送

```powershell
git push
```

因为第一次用了 `-u`，现在直接 `git push` 就会推到 `origin/main`。

### 11.4 如果 GitHub 上已经有新提交

例如你在网页上直接改了 README，本地 push 可能被拒绝：

```text
! [rejected]        main -> main (fetch first)
```

先拉取再推：

```powershell
git pull --rebase origin main
git push
```

如果出现冲突（conflict），打开冲突文件，把 `<<<<<<<` / `=======` / `>>>>>>>` 之间的内容改成你想要的，然后：

```powershell
git add <冲突文件>
git rebase --continue
git push
```

> 新手建议：**不要在 GitHub 网页和本地同时改同一个文件**，能减少 90% 的冲突。

### 11.5 提交前先构建（这个仓库特有）

如果你改了 `src/`、`style.css`、`i18n.ts` 等源码，提交前要重新生成构建产物：

```powershell
pnpm install     # 第一次或依赖变化时
pnpm build
pnpm preview
pnpm typecheck
pnpm test
```

然后把 `src/`、`lib/`、`preview/preview.js`、`preview/preview.css` 一起提交。

因为仓库**故意跟踪了构建产物**，这样别人 clone 下来可以直接 link 插件、直接打开预览，不需要先构建。

---

## 12. 这个仓库特有的更新流程

### 12.1 只改文档 / README / 教程

```powershell
git status
git add README.md README.zh.md GITHUB_GUIDE.md docs/
git commit -m "docs: ..."
git push
```

### 12.2 改了插件 UI / 逻辑

```powershell
pnpm build          # 重新生成 lib/
pnpm preview        # 重新生成 preview/preview.js + preview.css
pnpm typecheck
pnpm test
git status          # 确认 lib/ 和 preview/ 的改动也出现了
git add -A
git commit -m "feat: ..."
git push
```

### 12.3 改了依赖

```powershell
pnpm install
pnpm build
pnpm test
git add package.json pnpm-lock.yaml
git commit -m "chore: update dependencies"
git push
```

### 12.4 改了 GitHub Actions

`.github/workflows/ci.yml` 的改动要一起提交：

```powershell
git add .github/workflows/ci.yml
git commit -m "ci: ..."
git push
```

> 注意：如果你用 PAT 推送包含 workflow 文件的提交，token 必须有 `workflow` 权限。

---

## 13. 提交信息怎么写

不需要写很长，但要能看懂。推荐前缀：

| 前缀 | 用途 | 例子 |
|---|---|---|
| `feat:` | 新功能 | `feat: add branch comparison view` |
| `fix:` | 修 bug | `fix: correct dark-mode button contrast` |
| `docs:` | 文档 | `docs: add beginner GitHub guide` |
| `chore:` | 杂项 / 依赖 | `chore: update dependencies` |
| `refactor:` | 重构 | `refactor: split tree builder` |
| `test:` | 测试 | `test: cover archive rollback` |
| `ci:` | 工作流 | `ci: run on windows-latest` |

中文也可以：

```powershell
git commit -m "fix: 修复深色模式按钮白底白字"
```

建议：**一个 commit 只做一件事**。不要把“修 bug + 改 README + 升级依赖”塞进一个 commit。

---

## 14. 撤销、恢复、查看历史

### 14.1 查看历史

```powershell
git log --oneline --graph --decorate -10
```

### 14.2 查看某次改动

```powershell
git show <commit哈希>
git diff <旧哈希> <新哈希>
```

### 14.3 撤销“还没 commit”的修改

丢弃某个文件的修改（**会永久丢失，确认后再用**）：

```powershell
git restore <文件名>
```

把文件从暂存区拿出来（不丢失修改）：

```powershell
git restore --staged <文件名>
```

### 14.4 撤销“已经 push”的 commit

不要用 `git reset --hard` 然后强推，容易把历史搞乱。用 `revert`：

```powershell
git revert <commit哈希>
git push
```

它会生成一个“反向 commit”，安全地抵消那次改动。

### 14.5 查看当前远程

```powershell
git remote -v
```

### 14.6 修改远程地址（换了用户名/仓库名）

```powershell
git remote set-url origin https://github.com/<新用户名>/<新仓库>.git
```

---

## 15. 分支与 Pull Request（进阶）

当你不想直接改 `main` 时：

```powershell
git switch -c docs/my-change
```

改文件、提交：

```powershell
git add -A
git commit -m "docs: my change"
git push -u origin docs/my-change
```

然后打开 GitHub 仓库，会出现 **Compare & pull request** 按钮：

1. 点它；
2. 写标题和说明；
3. 点 **Create pull request**；
4. 自己 review 一下；
5. 点 **Merge pull request** → **Confirm merge**；
6. 回到本地：

```powershell
git switch main
git pull
```

删除已合并的本地分支：

```powershell
git branch -d docs/my-change
```

> 一个人开发时，直接 commit 到 `main` 完全没问题。
> 分支 + PR 更适合“改一个大功能，想先在网页上看看 diff”或和别人协作。

---

## 16. 常见报错对照表

| 报错 / 现象 | 原因 | 解决 |
|---|---|---|
| `git : 无法将“git”项识别为...` | Git 没装 / 没进 PATH | 安装 Git for Windows，重启 PowerShell |
| `fatal: not a git repository` | 当前目录不是仓库 | `cd` 到 `dsh-gitchat` 目录；不要乱运行 `git init` |
| `remote origin already exists` | 已经添加过 origin | `git remote set-url origin <URL>` |
| `src refspec main does not match any` | 还没有 commit，或分支不叫 main | `git add -A` → `git commit`；`git branch -M main` |
| `Updates were rejected because the remote contains work...` | 远程有你本地没有的提交 | `git pull --rebase origin main` 后再 `git push` |
| `fatal: refusing to merge unrelated histories` | 远程初始化时带了 README，和本地历史无关 | 新手推荐删掉远程仓库，重建一个**空**仓库；或 `git pull --rebase --allow-unrelated-histories` |
| `Authentication failed` / `Support for password authentication was removed` | 用了账号密码，不是 PAT | 用浏览器登录；或创建 PAT 当密码 |
| `Permission denied (publickey)` | 远程是 SSH 地址，但没配 SSH key | 改用 HTTPS 地址；或配置 SSH key |
| `refusing to allow a Personal Access Token to create or update workflow` | PAT 缺 `workflow` 权限 | 重新生成 token，勾选 `repo` + `workflow`；或改用 GitHub Desktop |
| `file is 123.00 MB; this exceeds GitHub's file size limit of 100.00 MB` | 提交了大文件 | 不要提交 `node_modules`、视频、大日志；从暂存区移除 |
| `LF will be replaced by CRLF` | Windows 换行符提示 | 正常，无害；仓库已有 `.gitattributes` |
| `Your branch is ahead of 'origin/main' by 1 commit` | 本地有新 commit 没推 | `git push` |
| `nothing to commit, working tree clean` | 没有新改动，或文件没保存 | 确认文件已保存；`git status` |
| `fatal: pathspec 'xxx' did not match any files` | 文件名写错/路径不对 | 用 `git status` 看准确文件名 |
| `Connection was reset` / `Recv failure` | 网络/代理问题 | 重试；换网络；开/关 VPN；用 GitHub Desktop |
| `Repository not found` | URL 错、仓库私有、没登录 | 检查 URL；确认仓库存在；重新登录 |
| `failed to push some refs` + `protected branch` | 分支保护 | 不要强推；走 PR 或让管理员改设置 |
| `git push` 一直卡住 | 登录窗口在后台 | 看任务栏；取消后重试；检查 GCM |
| 中文文件名显示成 `\344\270\255...` | Git 默认转义显示 | `git config --global core.quotepath false` |

---

## 17. 千万不要上传的东西

公开仓库的所有历史对所有人可见。**不要提交：**

- `node_modules/`（依赖，几百 MB；`.gitignore` 已经忽略）；
- `.env`、`.env.local`；
- API Key、Token、密码、`sk-...`；
- 私人聊天记录、session 日志、截图里的本地路径；
- 身份证、家庭住址、手机号；
- 超过 100 MB 的单个大文件；
- 你不想让未来雇主/同学看到的东西。

这个仓库的 `.gitignore` 已经忽略了：

```text
node_modules/
.pnpm-store/
*.log
*.tsbuildinfo
.DS_Store
Thumbs.db
```

提交前用：

```powershell
git status
```

确认没有意外文件。

### 如果不小心提交了 token

1. **立刻**去 GitHub 删除/吊销那个 token；
2. 重新生成一个；
3. 从 Git 历史里彻底删除（不是新 commit 删掉就行，因为历史里还能看到）：
   - 简单做法：用 `git filter-repo`；
   - 或者把仓库删掉重建（如果还没有别人 fork）；
4. 修改代码，改用环境变量或 DSH 的设置存储。

---

## 18. 发布版本（Release）

当插件到一个稳定点，可以打 tag：

```powershell
git tag -a v0.1.0 -m "GitChat 0.1.0"
git push origin v0.1.0
```

然后：

1. GitHub 仓库 → **Releases** → **Draft a new release**；
2. Choose a tag → `v0.1.0`；
3. 写 Release notes；
4. **Publish release**。

插件是通过 `link:` 本地安装的，不需要发布到 npm；Release 更像一个“版本快照 + 说明”。

---

## 19. 仓库美化与设置

创建仓库后建议做：

1. **About**（右上角齿轮）：
   - Description：`Git-like conversation trees for DeepSeek Harness`
   - Topics：`deepseek-harness`, `dsh-plugin`, `conversation-tree`, `git-like`, `react-flow`, `ai-agents`
2. **Issues**：Settings → Features → 勾选 Issues。
3. **README**：已经包含 Hero、GIF、安装、限制。
4. **CI 徽章**（可选）：
   ```markdown
   ![CI](https://github.com/<你的用户名>/dsh-gitchat/actions/workflows/ci.yml/badge.svg)
   ```
   加到 README 顶部。
5. **Pin**：在你的 GitHub 个人主页把 `dsh-gitchat` pin 上去。
6. **License**：仓库已有 MIT。
7. **Security**：已有 `SECURITY.md`。

---

## 20. 一页纸速查

### 第一次发布

```powershell
cd "$env:USERPROFILE\Documents\deepseek-harness\plugins\dsh-gitchat"
git status

# 在 https://github.com/new 创建空公开仓库后：
git remote add origin https://github.com/<你的用户名>/dsh-gitchat.git
git branch -M main
git push -u origin main
```

### 以后每次更新

```powershell
cd "$env:USERPROFILE\Documents\deepseek-harness\plugins\dsh-gitchat"
git status
git add -A
git commit -m "fix: 修复某个问题"
git push
```

### 改源码后额外做

```powershell
pnpm build
pnpm preview
pnpm typecheck
pnpm test
```

### 远程有新提交

```powershell
git pull --rebase origin main
git push
```

### 看历史

```powershell
git log --oneline --graph --decorate -10
```

### 撤销已推送的 commit

```powershell
git revert <commit哈希>
git push
```

---

## 21. 第一次发布的完整 checklist

- [ ] 注册并验证 GitHub 账号
- [ ] `git --version` 正常
- [ ] 设置 `user.name` / `user.email`
- [ ] `cd` 到 `dsh-gitchat`，`git status` 显示 clean
- [ ] 在 <https://github.com/new> 创建 **Public** 空仓库（不勾 README）
- [ ] 复制 HTTPS URL
- [ ] `git remote add origin <URL>`
- [ ] `git branch -M main`
- [ ] `git push -u origin main`
- [ ] 浏览器登录 / PAT（含 `repo` + `workflow`）
- [ ] 刷新 GitHub 页面，能看到 README 和 `docs/demo.gif`
- [ ] Actions 里 CI 跑起来
- [ ] 填 About 描述和 Topics
- [ ] 本地 `git status` 显示 up to date
- [ ] 改一个小文档，走一遍 `add → commit → push`
- [ ] 在 GitHub 上看到第二次 commit

---

## 最后

第一次 push 成功后，你就已经跨过 GitHub 最难的门槛了。

记住三句话：

1. **先 `git status`，再 `git add`，再 `git commit`，最后 `git push`。**
2. **public 仓库不要放秘密。**
3. **改完源码先 build，再提交构建产物。**

如果遇到本文没覆盖的报错，把**完整报错文本**和**你执行的命令**贴出来，不要只贴最后一行。
