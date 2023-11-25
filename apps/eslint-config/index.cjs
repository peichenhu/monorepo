// 配置参考文档 https://eslint.org/docs/latest/use/getting-started
// 配置参考文档 https://zh-hans.eslint.org/docs/latest/extend/shareable-configs
console.log('\x1B[46m %s \x1B[49m', '=== @pch1024/eslint-config ===');
module.exports = {
	// 配置运行环境
	env: {
		browser: true,
		es2021: true
	},
	// FIX Warning: React version not specified in eslint-plugin-react settings.
	settings: {
		sharedData: 'Hello PCH1024!',
		react: {
			version: '18.2.0'
		}
	},
	// # 配置规则继承
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:vue/vue3-essential',
		'prettier' // 关闭 eslint 中与 prettier 相互冲突的规则。
	],
	// 配置解析器
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	// 配置插件
	plugins: [
		'@typescript-eslint',
		'vue',
		'react',
		'react-hooks',
		'react-refresh',
		'prettier' // 允许 eslint 用 prettier 格式化代码的能力。 安装依赖并修改 .eslintrc 文件
	],
	// 配置忽略
	ignorePatterns: [
		// 配置忽略
		'.eslintrc.cjs',
		'.eslintrc.yml',
		'node_modules',
		'dist',
		'apps/eslint-config'
	],
	// 配置详细规则
	rules: {
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		indent: ['error', 'tab'],
		semi: ['error', 'always']
	}
};
