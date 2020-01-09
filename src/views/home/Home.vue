<template>
	<div class="home">
		<h3>首页</h3>
		<p v-text="msg"></p>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		computed: {
			...mapState('test',['msg'])
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
