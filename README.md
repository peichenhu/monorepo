# monorepo

建设一个用于个人长期使用的代码仓库集合。

-   管理包版本: `changesets` `rush`
-   代码规范提交: `Commitizen` `commitlint` `simple-git-hooks` `husky`
-   代码格式校验: `eslint` `prettier`

## 仓库基础

### only-allow

限制项目只能使用 pnpm 包管理器

```json
{
	"scripts": {
		"preinstall": "npx only-allow pnpm"
	}
}
```

### .npmrc

```bash
# 在工作区内，pnpm install 安装所有项目中的所有依赖项。
# 如果要禁用此行为，请将 recursive-install 设置为 false。
recursive-install=false # 存在 BUG，设置不生效
```

### package.json

```json
{
	"name": "monorepo",
	"version": "1.0.0",
	"description": "",
	// 防止我们的根目录被当作包发布
	"private": true,
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC",
	// 指定项目运行的 Node、pnpm 版本, 减少因 node 或 pnpm 的版本的差异而产生开发环境错误
	"engines": {
		"node": ">=20",
		"pnpm": ">=8"
	}
}
```

### pnpm

-   pnpm 自动使用 npm 的源包地址
-   pnpm 支持 monorepo 概念的仓库集合管理

```yml
packages:
    # 指定所有的仓库放在 packages 子目录中
    - 'packages/*'
```

-   pnpm 支持安装源包共享
-   pnpm 指令

```bash
# 安装全局依赖包
# -w 表示在 workspace 的根目录下安装而不是当前的目录
pnpm add rollup chalk minimist npm-run-all typescript -Dw

# 安装子包的依赖
pnpm install # 全部安装
pnpm store prune # 清除掉全局无用的包

# 除了进入子包目录直接安装 pnpm add pkgname 之外，还可以通过过滤参数 --filter 或 -F 指定命令作用范围。格式如下：
# pnpm --filter/-F 具体包目录名/包的name/正则匹配包名/匹配目录 command
pnpm --filter vite-vue-3 add chalk -D
pnpm --filter vite-react add chalk

# 列出所有项目依赖安装情况
pnpm m ls

# 项目运行
pnpm --filter vite-vue-3 dev
pnpm --filter vite-react dev

```

### vite

> 在集合中初始化一个新仓库 pnpm create vite

### prettier

使用 prettier 进行格式化，使用 Linters 来捕捉 bug！

```json
// .prettierrc.yaml 配置
// .prettierignore 忽略

// 在 package.json 中添加
{
	"scripts": {
		"fmtcheck": "prettier --check .", // 检查格式问题
		"fmt": "prettier --write ." // 自动格式化
	}
}
```

## changesets

changesets 主要作用有两个：`管理包版本` 和 `生成 changelog`

```bash
pnpm add @changesets/cli -Dw
```

## ESLint

```bash
# 安装
pnpm i eslint eslint-config-prettier -wD
# eslint-config-prettier 关闭 eslint 中与 prettier 相互冲突的规则。
# eslint-plugin-prettier 允许 eslint 用 prettier 格式化代码的能力。 安装依赖并修改 .eslintrc 文件
# 初始化
pnpx eslint --init # 根据提示配置
# 使用
npx eslint <folder | file>
# 关闭所有不必要或可能与 Prettier 冲突的规则。
# 确保把它放在最后，这样它就有机会覆盖其他配置
# {
#   "extends": [
#     "some-other-config-you-use",
#     "prettier"
#   ]
# }
```
