import { getType } from '../utils/utils';
import { TYPES_HANDLES, defaultOptions, TYPES_BASE, TYPES_REFERENCE } from './const';

export type Params = [string, string][];
export default function createParams(obj: Record<string, any>): Params {
	const alias = defaultOptions.alias;
	const params: Params = [];

	loop(obj, '');

	function loop(data: Record<string, any>, key = '') {
		const dataType = getType(data);
		// 引用数据类型
		if (data && TYPES_REFERENCE.includes(dataType)) {
			for (let subKey in data) {
				if (Object.prototype.hasOwnProperty.call(data, subKey)) {
					const value = data[subKey];
					const type = getType(value);
					const subKeyAndType = [subKey, type].join(alias.typeSeparator);
					loop(value, [key, subKeyAndType].filter(Boolean).join(alias.propSeparator));
				}
			}
			return;
		}
		// 基础数据类型
		if (key && TYPES_BASE.includes(dataType)) {
			const value = TYPES_HANDLES[dataType].toString(data);
			params.push([key, value]);
		}
	}

	return params;
}
