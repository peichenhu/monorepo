# Vue 3 + TypeScript + Vite

这个模板应该可以帮助您开始在 Vite 中使用 Vue 3 和 TypeScript 进行开发。
模板使用 Vue 3`<script setup>`SFCs，请查看[script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-脚本设置）以了解更多信息。

## 建议的IDE设置

-   [VS Code](https://code.visualstudio.com/) +
-   [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（并禁用Vetur）+
-   [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)。

## 在TS中键入对`.vue`导入的支持

TypeScript 默认情况下无法处理 “.vue” 导入的类型信息，因此我们将 “tsc” CLI替换为 “vue-tsc” 以进行类型检查。

在编辑器中，我们需要 [TypeScript Vue插件（Volar）](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)，以使 typescript 语言服务知道 `.vue` 类型。

如果你觉得独立的 TypeScript 插件不够快，Volar 还实现了 [接管模式](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) 更具性能。

您可以通过以下步骤启用它：

1. 禁用内置 TypeScript 扩展
1. 从 VSCode 的命令调色板运行 “扩展：显示内置扩展”
1. 找到 “TypeScript和JavaScript语言功能”，右键单击并选择 “禁用（工作区）”
1. 通过从命令面板运行 “Developer:Reload window” 来重新加载 VSCode 窗口。
