<template>
	<div>
		<h3>个人中心</h3>
		<TabBar></TabBar>
	</div>
</template>

<script>
	const TabBar = ()=>import('@/components/TabBar.vue')
	export default {
		components: {
			TabBar
		}
	}
</script>

<style>
</style>
