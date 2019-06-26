import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/Home',
			name: 'Home',
			component: Home,
			component:() => import('@/pages/home/Home'),//按需加载
		},
		// 重定向
		{
			path: '*',
			redirect: '/Home'
		},

	]
})
