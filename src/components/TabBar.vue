<template>
	<div class="tabBar">
		<router-link to='/' tag="span">首页</router-link>
		<router-link to='/find' tag="span">发现</router-link>
		<router-link to='/mine' tag="span">我的</router-link>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	.tabBar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		height: 1.2rem;
		span {
			display: block;
			flex: 1;
			text-align: center;
			height: 100%;
			line-height: 1.2rem;
			background: #eee;
			font-size: 0.4rem;
		}
	}
</style>
