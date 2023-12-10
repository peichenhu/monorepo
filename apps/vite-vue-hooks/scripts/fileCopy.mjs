import { consola } from 'consola';
import copy from 'copy';
import chalk from 'chalk';

export function fileCopy(list = [], outdir = 'dist') {
	consola.start('文件拷贝...');
	copy.each(list, outdir, function (err, files) {
		if (err) {
			consola.error(err);
		} else {
			files.forEach((file, index) => {
				const [from, to] = file.history;
				consola.info(chalk.blue(`文件${index + 1} from:`), from);
				consola.info(chalk.blue(`文件${index + 1} to:`), to);
			});
			// consola.success('文件拷贝完成');
		}
	});
}
