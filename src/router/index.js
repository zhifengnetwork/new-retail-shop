import Vue from 'vue'
import Router from 'vue-router'

// 首页
import Home from '@/pages/home/Home'

// 分类
import Category from '@/pages/category/Category'

// 购物车
import Cart from '@/pages/cart/Cart'
//挂卖区
import Sell from '@/pages/sell/Sell'
// 我的
import User from '@/pages/user/User'
// 我的团队
import myTeam from '@/pages/user/myTeam'
// 收款信息
import receiptInformation from '@/pages/user/receiptInformation'
// 我的分享
import mySharing from '@/pages/user/mySharing'


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
		//挂卖区
		{
			path: '/Sell',
			name: 'Sell',
			component:() => import('@/pages/sell/Sell'),
		},
		// 我的团队
		{
			path: '/user/myTeam',
			name: 'myTeam',
			component:() => import('@/pages/user/myTeam'),
		},
		// 收款信息
		{
			path: '/user/receiptInformation',
			name: 'receiptInformation',
			component:() => import('@/pages/user/receiptInformation'),
		},
		// 我的分享
		{
			path: '/user/mySharing',
			name: 'mySharing',
			component:() => import('@/pages/user/mySharing'),
		},

		// 重定向
		{
			path: '*',
			redirect: '/Home'
		},

	]
})
