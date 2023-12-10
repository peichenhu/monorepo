# useListeners

-   使用说明

```html
<script setup>
	import useListeners from 'useListeners.js';
	const { listeners, attrs } = useListeners();
</script>

<template>
	<el-input v-on="listeners" v-bind="attrs"></el-input>
</template>
```
