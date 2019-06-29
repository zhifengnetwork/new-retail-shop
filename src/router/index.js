import Vue from 'vue'
import Router from 'vue-router'

// 登录
import Login from '@/pages/login/Login'

// 注册
import Register from '@/pages/login/Register'

// 修改密码
import EditPassword from '@/pages/login/EditPassword'

// 首页
import Home from '@/pages/home/Home'

// 分类
import Category from '@/pages/category/Category'

//商品详情
import Details from '@/pages/details/Details'

// 购物车
import Cart from '@/pages/cart/Cart'

// 订单列表
import Order from '@/pages/order/Order'
// 提交评价
import Evaluate from '@/pages/order/Evaluate'
// 退货
import ReturnGoods from '@/pages/order/ReturnGoods'
// 申请退款
import ReturnRequest from '@/pages/order/ReturnRequest'



// 我的
import User from '@/pages/user/User'
// 我的团队
import myTeam from '@/pages/user/myTeam'
// 收款信息
import receiptInformation from '@/pages/user/receiptInformation'
// 我的分享
import mySharing from '@/pages/user/mySharing'

// 收货地址
import Address from '@/pages/user/address/Address'
// 添加收货地址
import AddAddress from '@/pages/user/address/AddAddress'
// 修改收货地址
import EditAddress from '@/pages/user/address/EditAddress'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		/**
		 * 登录
		 */
		{
			path: '/Login',
			name: 'Login',
			component:() => import('@/pages/login/Login'),
		},
		// 注册
		{
			path: '/Register',
			name: 'Register',
			component:() => import('@/pages/login/Register'),
		},
		// 修改密码
		{
			path: '/EditPassword',
			name: 'EditPassword',
			component:() => import('@/pages/login/EditPassword'),
		},


		/**
		 * 首页
		 */
		{
			path: '/Home',
			name: 'Home',
			component:() => import('@/pages/home/Home'),//按需加载
		},

		/**
		 * 分类
		 */
		{
			path: '/Category',
			name: 'Category',
			component:() => import('@/pages/category/Category'),
		},

		/**
		 * 购物车
		 */
		{
			path: '/Cart',
			name: 'Cart',
			component:() => import('@/pages/cart/Cart'),
		},

		/**
		 * 商品详情页 
		 */ 
		{
			path: '/Details',
			name: 'Details',
			component:() => import('@/pages/details/Details'),
		},

		/**
		 * 
		 * 订单中心
		 */
		// 订单列表
		{
			path: '/Order',
			name: 'Order',
			component:() => import('@/pages/order/Order'),
		},
		// 提交评价
		{
			path: '/Order/Evaluate',
			name: 'Evaluate',
			component: (resolve) => require(['@/pages/order/Evaluate'],resolve),
		},
		// 退货
		{
			path: '/Order/ReturnGoods',
			name: 'ReturnGoods',
			component: (resolve) => require(['@/pages/order/ReturnGoods'],resolve),
		},
		// 退款申请
		{
			path: '/Order/ReturnRequest',
			name: 'ReturnRequest',
			component: (resolve) => require(['@/pages/order/ReturnRequest'],resolve),
		},

		/**
		 * 我的
		 */
		//我的
		{
			path: '/User',
			name: 'User',
			component:() => import('@/pages/user/User'),
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

		/**
		 * 地址管理
		 */
		// 收货地址
		{
			path: '/user/Address',
			name: 'Address',
			component:() => import('@/pages/user/address/Address'),
		},
		// 添加收货地址
		{
			path: '/user/AddAddress',
			name: 'AddAddress',
			component:() => import('@/pages/user/address/AddAddress'),
		},
		// 修改收货地址
		{
			path: '/user/EditAddress',
			name: 'EditAddress',
			component:() => import('@/pages/user/address/EditAddress'),
		},
		// 地址选点
		{
			path: '/user/SelectPoint',
			name: 'SelectPoint',
			component: (resolve) => require(['@/pages/user/address/SelectPoint'],resolve),
		},


		// 重定向
		{
			path: '*',
			redirect: '/Home'
		},

	]
})
