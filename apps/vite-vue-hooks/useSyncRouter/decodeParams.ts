import { defaultOptions, TYPES_HANDLES } from './const';

export type Params = [string, string][];
export default function decodeParams(params: Params = []) {
	const alias = defaultOptions.alias;
	const obj: Record<string, any> = {};
	params.forEach((data) => {
		const [key, value] = data;
		const keys = key.split(alias.propSeparator);
		let tmpObj = obj;
		keys.forEach((k, index) => {
			const [kName, vType] = k.split(alias.typeSeparator) as [string, string];
			if (!tmpObj[kName] && TYPES_HANDLES[vType]) {
				tmpObj[kName] = TYPES_HANDLES[vType].init();
			}
			if (index === keys.length - 1 && TYPES_HANDLES[vType]) {
				tmpObj[kName] = TYPES_HANDLES[vType].toRaw(value);
			}
			tmpObj = tmpObj[kName];
		});
	});
	return obj;
}
