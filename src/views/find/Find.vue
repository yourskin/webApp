<template>
	<div>
		<h3>发现</h3>
		<swiper></swiper>
		<TabBar></TabBar>
	</div>
</template>

<script>
	const swiper = ()=>import('@/components/Swiper.vue')
	const TabBar = ()=>import('@/components/TabBar.vue')
	export default {
		components: {
			swiper,
			TabBar
		}
	}
</script>

<style>
</style>
