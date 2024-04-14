# SASTOJ Frontend Monorepo

这是 SASTOJ 的前端仓库，包含了 SASTOJ 的前端所有代码和文档。
SASTOJ 是一个原生支持分布式部署的 OJ 系统，以满足机房低带宽的需求，同时也支持单机部署。
通过 SASTOJ 你可以快速开始一个 IOI 比赛，选手可以在线运行代码（不提交，包含输入数据，简称运行）并查看编译结果和运行输出，提交代码并实时看到评测结果（简称判题或提交），查看赛时排行榜，同时支持多语言（提交时勾选编程语言）。

## 项目结构

### packages

packages 目录下是所有的子项目，每个子项目都是一个独立的 npm 包。

```bash
packages
├── competition
├── docs
├── management
```

其中 competition 是比赛前端，docs 是文档前端，management 是比赛系统管理端

#### @sast/oj-competition

比赛前端，包含了比赛的所有功能，包括运行，提交，排行榜等。
使用 Vite + React + TypeScript 开发。
路由使用 react-router-dom，状态管理使用 zustand，网络请求库采用 SWR。

#### @sast/oj-docs

SASTOJ 文档，包含开发指南和部署指南。
基于 Rspress 开发。

#### @sast/oj-management

管理前端，包含了比赛系统的管理。
使用 Nuxt + Vue + TypeScript 开发。
状态管理使用 pinia。

### 开始开发

克隆本仓库，并开启你自己的分支，分支命名规则为 `<FEATURE>-<STATE>`，其中 FEATURE 为功能名称，STATE 为功能状态，包括 dev 和 prod，分别代表开发状态和生产状态。

```bash
git clone https://git.sast.fun/sast-f2e/sastoj-frontend.git
git checkout -b <FEATURE>-<STATE>
```

安装依赖

```bash
pnpm install
```

#### 文档开发

文档开发的包在 packages/docs 下，使用 Rspress 进行开发。使用以下指令快速打开文档预览。

```bash
pnpm docs:dev
```

#### 比赛系统开发

比赛系统开发的包在 packages/competition 下，使用 Vite + React + TypeScript 进行开发。使用以下指令快速打开比赛系统预览。

```bash
pnpm competition:dev
```

如果你想直接在分包内执行指令，也可以执行以下命令

```bash
pnpm --filter <package name> <command>
```

#### 比赛管理开发

比赛系统开发的包在 packages/competition 下，使用 Nuxt + Vue + TypeScript 进行开发。使用以下指令快速打开比赛系统预览。

```bash
pnpm management:dev
```

如果你想直接在分包内执行指令，也可以执行以下命令

```bash
pnpm --filter <package name> <command>
```

### 提交代码

本仓库在提交代码之前会自动检查代码格式和执行测试脚本，所以 `git commit` 会被拦截。

请使用 `pnpm commit` 提交代码。
