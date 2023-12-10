# useSyncRouter

-   使用说明

```html
<script setup>
	import { useSyncRouter } from '@pch1024/hooks';
	const form = reactive({
		name: '',
		region: '',
		date1: '',
		date2: '',
		delivery: false,
		type: [],
		resource: '',
		desc: ''
	});
	useSyncRouter(form, { log: true });
</script>

<template>
	<el-form :model="form" label-width="120px">
		<!-- ... -->
	</el-form>
</template>
```
