/**
 * 数据类型获取
 * 设计思路	"[object Obejct]".slice(8, "[object Obejct]".length - 1);
 * @param x 未知数据
 * @returns {string} type
 */
export function getType(x: unknown): string {
	const t = Reflect.toString.call(x);
	return t.slice(8, t.length - 1);
}

export function extend(object: Record<string, any>, extendObject: Record<string, any>) {
	const referenceTypes = ['Object', 'Array'];
	// 非 Object 不处理
	if (getType(object) !== 'Object' || getType(extendObject) !== 'Object') return;
	// 第一层：必须同 key
	Object.keys(extendObject).forEach((key) => {
		const value = extendObject[key];
		const t = getType(value);
		if (!Object.prototype.hasOwnProperty.call(object, key)) return;
		if (!object[key] && t === 'Object') object[key] = {};
		if (!object[key] && t === 'Array') object[key] = [];
		if (referenceTypes.includes(t)) loop(object[key], value);
		else object[key] = value;
	});
	// 非第一层：object 可以没 key
	function loop(object: Record<string, any>, extendObject: Record<string, any>) {
		Object.keys(extendObject).forEach((key) => {
			const value = extendObject[key];
			const t = getType(value);
			if (!object[key] && t === 'Object') object[key] = {};
			if (!object[key] && t === 'Array') object[key] = [];
			if (referenceTypes.includes(t)) loop(object[key], value);
			else object[key] = value;
		});
	}
}
