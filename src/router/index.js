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
// 首页弹窗
import Popup from '@/pages/home/Popup'
//挂卖区
import Sell from '@/pages/sell/Sell'
//上传评证
import UploadDocuments from '@/pages/sell/UploadDocuments'
//编辑付款码
import EditPaymentCode from '@/pages/sell/EditPaymentCode'

//申请代理
import Agents from '@/pages/sell/Agents'
// 搜索
import Search from '@/pages/search/Search'

// 分类
import Category from '@/pages/category/Category'

//商品详情
import Details from '@/pages/details/Details'

// 购物车
import Cart from '@/pages/cart/Cart'

//付款
import Payment from '@/pages/sell/Payment'

// 订单列表
import Order from '@/pages/order/Order'
// 订单详情
import OrderDetails from '@/pages/order/OrderDetails'
// 提交评价
import Evaluate from '@/pages/order/Evaluate'
// 退货
import ReturnGoods from '@/pages/order/ReturnGoods'
// 申请退款
import ReturnRequest from '@/pages/order/ReturnRequest'

// 确认订单
import ConfirmOrder from '@/pages/pay/ConfirmOrder'
// 支付方式
import PayWay from '@/pages/pay/PayWay'
// 支付成功
import PaySucceed from '@/pages/pay/PaySucceed'
// 支付失败
import PayFail from '@/pages/pay/PayFail'


// 我的
import User from '@/pages/user/User'
// 个人资料
import personalData from '@/pages/user/personalData'

// 预计收益
import shouyilist from '@/pages/user/shouyilist'
// 账户余额
import theAccountBalance from '@/pages/user/theAccountBalance'
// 提现明细
import theWithdrawal from '@/pages/user/theWithdrawal'
// 账单明细
import billingDetails from '@/pages/user/billingDetails'
// 账户提现
import withdrawal from '@/pages/user/withdrawal'
// 我的团队
import myTeam from '@/pages/user/myTeam'
// 团队列表
import commissionlist from '@/pages/user/commissionlist'
// 查看订单
import viewOrders from '@/pages/user/viewOrders'
// 收款信息
import receiptInformation from '@/pages/user/receiptInformation'
// 佣金明细
import detailed from '@/pages/user/detailed'
// 邀请链接
import InviteLink from '@/pages/user/InviteLink'
// 我的分享
import mySharing from '@/pages/user/mySharing'
// 支付宝账号编辑
import alipay from '@/pages/user/alipay'
// 修改用户名
import modifyUserName from '@/pages/user/modifyUserName'

// 收藏
import Collect from '@/pages/user/Collect'

// 我的发布
import release from '@/pages/user/release'
// 收货地址
import Address from '@/pages/user/address/Address'
// 添加收货地址
import AddAddress from '@/pages/user/address/AddAddress'
// 修改收货地址
import EditAddress from '@/pages/user/address/EditAddress'
import { Dialog } from 'vant';

Vue.use(Router)

const router= new Router({
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
			// component:() => import('@/pages/home/Home'),//按需加载
			component: (resolve) => require(['@/pages/home/Home'],resolve),
			meta:{requireAuth:true}
		},
		// 弹窗
		{
			path: '/Home/Popup',
			name: 'Popup',
			component:() => import('@/pages/home/Popup'),//按需加载
		},
		//挂卖区
		{
			path: '/Sell',
			name: 'Sell',
			component:() => import('@/pages/sell/Sell'),
			meta:{requireAuth:true}
		},
		{
			path: '/Sell/UploadDocuments',
			name: 'uploadDocuments',
			component:() => import('@/pages/sell/UploadDocuments'),
			meta:{requireAuth:true}
		},
		{		//编辑付款码
			path: '/Sell/EditPaymentCode',
			name: 'EditPaymentCode',
			component:() => import('@/pages/sell/EditPaymentCode'),
			meta:{requireAuth:true}
		},	
		{		// 代理 Agents
			path: '/Sell/Agents',
			name: 'Agents',
			component:() => import('@/pages/sell/Agents'),
			meta:{requireAuth:true}
		},

		/**
		 * 搜索
		 */
		{
			path: '/Search',
			name: 'Search',
			component:() => import('@/pages/search/Search'),
			meta:{requireAuth:true}
		},

		/**
		 * 分类
		 */
		{
			path: '/Category',
			name: 'Category',
			component:() => import('@/pages/category/Category'),
			meta:{requireAuth:true} //是否需要登录
		},

		/**
		 * 购物车
		 */
		{
			path: '/Cart',
			name: 'Cart',
			component: (resolve) => require(['@/pages/cart/Cart'],resolve),
			meta:{requireAuth:true}
		},

		//50元专区支付
		{
			path: '/Payment',
			name: 'Payment',
			component:() => import('@/pages/sell/Payment'),
			meta:{requireAuth:true}
		},

		/**
		 * 商品详情页 
		 */ 
		{
			path: '/Details',
			name: 'Details',
			component:() => import('@/pages/details/Details'),
			meta:{requireAuth:true}
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
			meta:{requireAuth:true}
		},
		// 订单详情
		{
			path: '/Order/OrderDetails',
			name: 'OrderDetails',
			component:() => import('@/pages/order/OrderDetails'),
			meta:{requireAuth:true}
		},
		// 提交评价
		{
			path: '/Order/Evaluate',
			name: 'Evaluate',
			component: (resolve) => require(['@/pages/order/Evaluate'],resolve),
			meta:{requireAuth:true}
		},
		// 退货
		{
			path: '/Order/ReturnGoods',
			name: 'ReturnGoods',
			component: (resolve) => require(['@/pages/order/ReturnGoods'],resolve),
			meta:{requireAuth:true}
		},
		// 退款申请
		{
			path: '/Order/ReturnRequest',
			name: 'ReturnRequest',
			component: (resolve) => require(['@/pages/order/ReturnRequest'],resolve),
			meta:{requireAuth:true}
		},

		/**
		 * 支付模块
		 */
		// 确认订单
		{
			path: '/Pay/ConfirmOrder',
			name: 'ConfirmOrder',
			component: (resolve) => require(['@/pages/pay/ConfirmOrder'],resolve),
		},
		// 支付方式
		{
			path: '/Pay/PayWay',
			name: 'PayWay',
			component: (resolve) => require(['@/pages/pay/PayWay'],resolve),
			meta:{requireAuth:true}
		},
		// 支付成功
		{
			path: '/Pay/PaySucceed',
			name: 'PaySucceed',
			component: (resolve) => require(['@/pages/pay/PaySucceed'],resolve),
			meta:{requireAuth:true}
		},
		// 支付失败
		{
			path: '/Pay/PayFail',
			name: 'PayFail',
			component: (resolve) => require(['@/pages/pay/PayFail'],resolve),
			meta:{requireAuth:true}
		},

		/**
		 * 我的
		 */
		{
			path: '/User',
			name: 'User',
			// component:() => import('@/pages/user/User'),
			component: (resolve) => require(['@/pages/user/User'],resolve),
			meta:{requireAuth:true}
		},
		// 个人资料
		{
			path: '/user/personalData',
			name: 'personalData',
			// component:() => import('@/pages/user/personalData'),
			component: (resolve) => require(['@/pages/user/personalData'],resolve),
			meta:{requireAuth:true}
		},
		// 预计收益
		{
			path: '/user/shouyilist',
			name: 'shouyilist',
			component: (resolve) => require(['@/pages/user/shouyilist'],resolve),
			meta:{requireAuth:true}
		},
		// 账户余额
		{
			path: '/user/theAccountBalance',
			name: 'theAccountBalance',
			component:() => import('@/pages/user/theAccountBalance'),
			meta:{requireAuth:true}
		},
		// 账户提现
		{
			path: '/user/withdrawal',
			name: 'withdrawal',
			component:() => import('@/pages/user/withdrawal'),
			meta:{requireAuth:true}
		},
		// 提现明细
		{
			path: '/user/theWithdrawal',
			name: 'theWithdrawal',
			component:() => import('@/pages/user/theWithdrawal'),
			meta:{requireAuth:true}
		},
		// 账单明细
		{
			path: '/user/billingDetails',
			name: 'billingDetails',
			component:() => import('@/pages/user/billingDetails'),
			meta:{requireAuth:true}
		},

		// 我的团队
		{
			path: '/user/myTeam',
			name: 'myTeam',
			component:() => import('@/pages/user/myTeam'),
			meta:{requireAuth:true}
		},
		// 团队列表
		{
			path: '/user/myTeam/commissionlist',  
			name: 'commissionlist',
			component: () => import('@/pages/user/commissionlist'),
			meta:{requireAuth:true}
		},
		// 查看订单
		{
			path: '/user/myTeam/commissionlist/viewOrders',  
			name: 'viewOrders',
			component: () => import('@/pages/user/viewOrders'),
			meta:{requireAuth:true}
		},
		// 收款信息
		{
			path: '/user/receiptInformation',
			name: 'receiptInformation',
			component:() => import('@/pages/user/receiptInformation'),
			meta:{requireAuth:true}
		},
		// 佣金明细
		{
			path: '/user/detailed',
			name: 'detailed',
			component:() => import('@/pages/user/detailed'),
			meta:{requireAuth:true}
		},
		// 我的发布
		{
			path: '/user/release',
			name: 'release',
			component:() => import('@/pages/user/release'),
		},
		// 邀请链接
		{
			path: '/user/InviteLink',
			name: 'InviteLink',
			component:() => import('@/pages/user/InviteLink'),
			meta:{requireAuth:true}
		},
		// 我的分享
		{
			path: '/user/mySharing',
			name: 'mySharing',
			component:() => import('@/pages/user/mySharing'),
			meta:{requireAuth:true}
		},
		// 支付宝账号编辑
		{
			path: '/user/alipay',
			name: 'alipay',
			component:() => import('@/pages/user/alipay'),
			meta:{requireAuth:true}
		},
		// 修改用户名
		{
			path: '/user/modifyUserName',
			name: 'alipay',
			component:() => import('@/pages/user/modifyUserName'),
			meta:{requireAuth:true}
		},
		// 收藏
		{
			path: '/user/Collect',
			name: 'alipay',
			component:() => import('@/pages/user/Collect'),
			meta:{requireAuth:true}
		},
		/**
		 * 地址管理
		 */
		// 收货地址
		{
			path: '/user/Address',
			name: 'Address',
			component:() => import('@/pages/user/address/Address'),
			meta:{requireAuth:true}
		},
		// 添加收货地址
		{
			path: '/user/AddAddress',
			name: 'AddAddress',
			component:() => import('@/pages/user/address/AddAddress'),
			meta:{requireAuth:true}
		},
		// 修改收货地址
		{
			path: '/user/EditAddress',
			name: 'EditAddress',
			component:() => import('@/pages/user/address/EditAddress'),
			meta:{requireAuth:true}
		},
		// 地址选点
		{
			path: '/user/SelectPoint',
			name: 'SelectPoint',
			component: (resolve) => require(['@/pages/user/address/SelectPoint'],resolve),
			meta:{requireAuth:true}
		},

	
		// 重定向
		{
			path: '*',
			redirect: '/Home'
		},

	]
})

//注册全局钩子函数
router.beforeEach((to,from,next) =>{
	if(to.matched.some(r => r.meta.requireAuth)){	//当前页面是否需要登录
		if(to.path === '/Login' || to.path ==='/Register'){
			next()
		}else{
			let token =localStorage.getItem('Authorization');
			if(token === null || token === ''){		//判断是否有token
				Dialog.confirm({
					message: '亲，还没有登录哦!'
				}).then(() =>{
					next('/Login');
				})
				next('/Login');
			}else{
				next()
			}
		}
	}else{
		next()
	}
})

export default router