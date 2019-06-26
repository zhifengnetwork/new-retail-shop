import Vue from 'vue'
import Router from 'vue-router'

// 首页
import Home from '@/pages/home/Home'

// 分类
import Category from '@/pages/category/Category'

// 购物车
import Cart from '@/pages/cart/Cart'

// 我的
import User from '@/pages/user/User'


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		// 首页
		{
			path: '/Home',
			name: 'Home',
			component: Home,
			component:() => import('@/pages/home/Home'),//按需加载
		},

		// 分类
		{
			path: '/Category',
			name: 'Category',
			component: Home,
			component:() => import('@/pages/category/Category'),
		},

		// 购物车
		{
			path: '/Cart',
			name: 'Cart',
			component: Home,
			component:() => import('@/pages/cart/Cart'),
		},

		// 我的
		{
			path: '/User',
			name: 'User',
			component: Home,
			component:() => import('@/pages/user/User'),
		},

		// 重定向
		{
			path: '*',
			redirect: '/Home'
		},

	]
})
