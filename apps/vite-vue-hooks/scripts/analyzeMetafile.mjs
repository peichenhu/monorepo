import { consola } from 'consola';
import chalk from 'chalk';

export function analyzeMetafile(metafile) {
	const outputs = metafile?.outputs || {};
	const maxLength = Math.max(...Object.keys(outputs).map((i) => i.length));
	const filenames = Object.keys(outputs);
	filenames.sort((a, b) => a.length - b.length);
	for (const index in filenames) {
		const filename = filenames[index];
		if (+index === 0) {
			const format = filename.split('.').pop();
			consola.start(format);
		}
		const fileinfo = outputs[filename];
		const filesize = (fileinfo.bytes / 1024).toFixed(2) + 'kb';
		const filenameFmt = chalk.blue(filename).padEnd(maxLength + 30, '-');
		consola.info(filenameFmt, filesize);
	}
}
