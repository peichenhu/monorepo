import { isVue3, getCurrentInstance, computed, useAttrs } from 'vue-demi';

export function useListeners() {
	const listeners = computed(() => {
		if (isVue3) return {};
		const vm = getCurrentInstance() as any;
		return vm?.proxy?.$listeners || {};
	});
	const attrs = useAttrs();
	return { listeners, attrs };
}
