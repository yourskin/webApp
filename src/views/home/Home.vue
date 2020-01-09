<template>
	<div class="home">
		<h3>首页</h3>
		<p v-text="msg" @touchstart='click'></p>
		<TabBar></TabBar>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	const TabBar = ()=>import('@/components/TabBar.vue')
	export default {
		computed: {
			...mapState('test',['msg'])
		},
		components: {
			TabBar
		},
		methods: {
			click() {
				this.$router.push('/detail')
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
