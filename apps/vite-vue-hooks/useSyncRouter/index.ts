import { onBeforeMount, watch } from 'vue-demi';
import { defaultOptions, Options } from './const';
import type { DeepPartial } from './const';
import createParams from './createParams';
import decodeParams from './decodeParams';
import { extend } from '../utils/utils';

function log(...rest: any[]) {
	defaultOptions.log && console.log(...rest);
}

export function useSyncRouter(data: Record<string, any>, options?: DeepPartial<Options>) {
	extend(defaultOptions, options || {});
	log('defaultOptions', { ...defaultOptions });

	// 监听上传
	watch(data, (data) => {
		const params = createParams(data);
		const state = { createTime: new Date(), creator: 'useSyncRouter' };
		const title = document.title;
		const url = new URL(location.href);
		const usp = new URLSearchParams(location.search);
		params.forEach((param) => {
			const [key, value] = param;
			usp.set(key, value);
		});
		url.search = usp.toString();
		history.pushState(state, title, url.href);
		log('onWatch', { ...data });
		log('createParams', params);
	});

	// 初始化下载
	onBeforeMount(() => {
		const usp: any = new URLSearchParams(location.search);
		const params = Array.from<[string, string]>(usp.entries());
		const loadData = decodeParams(params);
		extend(data, loadData);
		params.length && log('onBeforeMount', params);
		params.length && log('onBeforeMount afterExtend', { ...data });
	});
}

export type UseWindowSizeReturn = ReturnType<typeof useSyncRouter>;
