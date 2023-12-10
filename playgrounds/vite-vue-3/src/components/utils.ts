import { onBeforeMount, watch, ref, UnwrapNestedRefs } from 'vue';

export function encode(object: Record<string, any>): string {
	return encodeURIComponent(JSON.stringify(object));
}

export function decode(string: string): Record<string, any> {
	return JSON.parse(decodeURIComponent(string));
}

export function extend(obj: Record<string, any>, extendObj: Record<string, any>) {
	const has = Object.prototype.hasOwnProperty;
	for (const key in obj) {
		if (has.call(obj, key) && has.call(extendObj, key)) {
			obj[key] = extendObj[key];
		}
	}
}

export function useJsonRouter(data: UnwrapNestedRefs<Record<string, any>> | typeof ref) {
	watch(data, (_data) => {
		const state = { createTime: new Date(), creator: 'useJsonRouter' };
		const title = document.title;
		const url = new URL(location.href);
		const usp = new URLSearchParams(location.search);
		usp.set('encodeJson', encode(_data));
		url.search = usp.toString();
		history.pushState(state, title, url.href);
	});
	onBeforeMount(() => {
		const usp = new URLSearchParams(location.search);
		const encodeJson = usp.get('encodeJson');
		if (encodeJson) {
			extend(data, decode(encodeJson));
		}
	});
}
