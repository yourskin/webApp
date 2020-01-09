import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('@/views/home/Home.vue')
const Find = ()=> import('@/views/find/Find.vue')
const Mine = ()=> import('@/views/mine/Mine.vue')

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'hash',
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/find',
			component: Find
		},
		{
			path: '/mine',
			component: Mine
		}
	]
})

export default router