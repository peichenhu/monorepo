# @pch1024/eslint-config

> [eslint 配置说明文档](https://zh-hans.eslint.org/docs/latest/extend/shareable-configs)

# 安装和使用

-   对等依赖项 `"eslint": ">= 8"`

-   模块系统 `sourceType: 'module'`

-   安装

```bash
npm i -D @pch1024/eslint-config
pnpm add -D @pch1024/eslint-config
```

-   使用

```js
module.exports = {
	// extends: ['@pch1024/eslint-config/react'],
	// extends: ['@pch1024/eslint-config/node'],
	// extends: ['@pch1024/eslint-config/vue']
};
```

## 本地测试发布

```bash
# 你也可以在发布之前通过全局链接你的模块，在自己电脑上测试你的可共享配置。输入：
npm link
npm ls -g # 查看本地安装

# 然后，在想要使用可共享配置的项目中，输入：
npm link @pch1024/eslint-config

# 使用
# { "extends": "@pch1024/eslint-config" }
# { "extends": "@pch1024/eslint-config/vue" }
# { "extends": "@pch1024/eslint-config/node" }
# { "extends": "@pch1024/eslint-config/react" }
```
