import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('@/views/home/Home.vue')
const Detail = ()=> import('@/views/home/Detail.vue')
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
		},
		{
			path: '/detail',
			component: Detail
		}
	]
})

export default router