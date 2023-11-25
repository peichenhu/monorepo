const { ESLint } = require('eslint');
const cfg = require('../index.cjs');

(async function main() {
	// 1. 创建实例
	const eslint = new ESLint({
		useEslintrc: false,
		overrideConfig: cfg
	});
	// 2. 检查
	const results = await eslint.lintFiles('test/files/*');
	// 3. 格式化结果
	const formatter = await eslint.loadFormatter('stylish');
	const resultText = formatter.format(results);
	// 4. 输出
	console.log(resultText);
})().catch((error) => {
	process.exitCode = 1;
	console.error(error);
});
