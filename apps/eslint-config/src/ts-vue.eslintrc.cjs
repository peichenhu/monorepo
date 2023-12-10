console.log('\x1B[46m %s \x1B[49m', '@pch1024/eslint-config/vue');

module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-essential',
		'prettier' // 关闭 eslint 中与 prettier 相互冲突的规则。
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script'
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		parser: '@typescript-eslint/parser',
		sourceType: 'module'
	},
	plugins: [
		'@typescript-eslint',
		'vue',
		'prettier' // 允许 eslint 用 prettier 格式化代码的能力。 安装依赖并修改 .eslintrc 文件
	],
	rules: {
		'@typescript-eslint/no-explicit-any': 'off',
		'prefer-const': 'off',
		'linebreak-style': ['error', 'unix'],
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always']
	},
	ignorePatterns: ['dist', 'node_modules']
};
