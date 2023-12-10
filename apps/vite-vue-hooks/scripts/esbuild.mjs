import * as esbuild from 'esbuild';
import fs from 'node:fs';
import { analyzeMetafile } from './analyzeMetafile.mjs';
import { fileCopy } from './fileCopy.mjs';

fileCopy(['package.json'], 'dist');

const options = {
	define: { DEBUG: 'false' },
	entryPoints: [
		// 动态入口
		'./useListeners/index.ts',
		'./useSyncRouter/index.ts',
		'./index.ts'
	],
	minify: true,
	metafile: true,
	treeShaking: true,
	bundle: true,
	outdir: './dist',
	external: ['vue-demi']
	// sourcemap: true,
	// chunkNames: 'chunks/[name]-[hash]',
	// splitting: true,
	// format: 'esm',
	// outExtension: { '.js': '.mjs' }
};

const build_iife = await esbuild.build({
	...options,
	format: 'iife'
});

const build_cjs = await esbuild.build({
	...options,
	minify: false,
	format: 'cjs',
	outExtension: { '.js': '.cjs' }
});

const build_esm = await esbuild.build({
	...options,
	minify: false,
	format: 'esm',
	outExtension: { '.js': '.mjs' }
});

analyzeMetafile(build_esm.metafile);
analyzeMetafile(build_cjs.metafile);
analyzeMetafile(build_iife.metafile);

fs.writeFileSync('dist/meta.esm.json', JSON.stringify(build_esm.metafile));
fs.writeFileSync('dist/meta.cjs.json', JSON.stringify(build_cjs.metafile));
fs.writeFileSync('dist/meta.iife.json', JSON.stringify(build_iife.metafile));
