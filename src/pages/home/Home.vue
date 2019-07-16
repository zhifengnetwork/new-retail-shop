<template>
	<div class="Home">
		<!-- 搜索 -->
		<div class="top-bar">
			<div class="search" @click.stop="jumpTo('/Search')">
				<span class="search-icon"></span>
				<span class="text">搜索	</span>
			</div>
		</div>
		<!-- 轮播图 -->
		<div class="banner">
			<van-swipe :autoplay="3000" indicator-color="white">
				<van-swipe-item v-for="(item,index) in bannerData" :key="index">
					<img :src="baseUrl+item.picture" />
				</van-swipe-item>
			</van-swipe>
		</div>
		<!-- 公告 -->
		<div class="notice" v-for="(item,index) in filterNotice" :key="index">
			<van-notice-bar
				:text = "item.title"
				left-icon="volume-o"
				color="#ffffff"
  				background="#f92a0f"
			/>
		</div>

		<!-- 预售 -->
		<div class="advance-sale" @click="handleInto()">
			<h1>50元专区</h1>
			<span>不包邮</span>
		</div>

		<!-- 礼品专区 -->
		<div class="gift-area">
			<div class="heading">
				<i class="icon iconfont icon-lipin"></i>
				<h3>礼品专区</h3>
			</div>
			<div class="gift-list">
				<div class="single-item" v-for="(item,index) in giftData" :key="index">
					<router-link :to="'/Details?goods_id='+item.goods_id">
						<div class="img-wrap">
							<img :src="item.img" />
						</div>
						<div class="main">
							<h3>{{item.goods_name}}</h3>
							<div class="price">
								<p class="discount-price">{{item.price | formatMoney}}</p>
								<p class="original-price"><del>原价:{{item.original_price | formatMoney}}</del></p>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>

		<!-- 热销商品 -->
		<div class="hot-wrap">
			<div class="heading">
				<i class="icon"><img src="/static/images/home/hot-icon.png"></i>
				<h3>热销商品</h3>
			</div>
			<div class="hot-list">
				<div class="single-item" v-for="(item,index) in hotGoods" :key="index">
					<router-link :to="'/Details?goods_id='+item.goods_id">
						<div class="img-wrap">
							<img :src="item.img" />
						</div>
						<div class="main">
							<h3>{{item.goods_name}}</h3>
							<div class="price">
								<p class="discount-price">{{item.price | formatMoney}}</p>
								<p class="original-price"><del>原价:{{item.original_price | formatMoney}}</del></p>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
		
		<!-- 推荐商品 -->
		<div class="recommend-wrap">
			<div class="heading">
				<i class="icon"><img src="/static/images/home/recommend-icon.png"></i>
				<h3>推荐商品</h3>
			</div>
			<div class="recommend-list">
				<div class="single-item" v-for="(item,index) in recommendData" :key="index">
					<router-link :to="'/Details?goods_id='+item.goods_id">
						<div class="img-wrap">
							<img :src="item.img" />
						</div>
						<div class="main">
							<h3>{{item.goods_name}}</h3>
							<div class="price">
								<p class="discount-price">{{item.price | formatMoney}}</p>
								<p class="original-price">原价:{{item.original_price | formatMoney}}</p>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>

		<!-- 底部导航 -->
		<Navigate></Navigate>

		<!-- 弹窗 -->
		<Popup :popShow = "isShow" v-on:handleCancel="hidePopup"></Popup>

	</div>
</template>

<script>
import Navigate from "@/pages/common/footer/Navigate";
import Popup from "@/pages/home/Popup"
import {jumpTo} from '../../../static/js/public'

export default {
	name: "home",
	components: {
		Navigate,
		Popup
	},
	data() {
		return {
			baseUrl:'',
			bannerData:[],
			noticeData:[],
			isShow:false,//弹窗是否显示
			giftData:[],
			hotGoods:[],
			recommendData:[],
			token: this.$store.getters.optuser.Authorization
		};
	},
	created(){		
		this.$store.commit('showLoading')//加载loading
		this.requestData();
	},
	methods:{
		/**
		 * 请求数据
		 */
		requestData(){
            let url = 'index/index';
            this.$axios.post(url)
            .then( (res) => {
                if(res.data.status === 200){
					this.bannerData = res.data.data.banners;
					this.noticeData = res.data.data.announce;
					this.giftData = res.data.data.goods_gift;
					this.hotGoods = res.data.data.hot_goods;
					this.recommendData = res.data.data.recommend_goods;
					this.$store.commit('hideLoading')
				}
				else if(res.data.status == 999){
					this.$store.commit('del_token'); //清除token
					setTimeout(()=>{
						this.$router.push('/Login')
					},1000)
				}
				else{
					this.$toast(res.data.msg)
				}
            })
            .catch((error) => {
                alert('请求错误:'+ error)
            })
		},

		/**
		 * 隐藏弹框
		 */
		hidePopup(){
			this.isShow = false
		},

		/**
		 * 进入50元专区
		 */
		handleInto(){
			var _that =this
			_that.$axios.post('fifty_zone/shop_list',{
                'token': _that.token
            })
            .then((res)=>{
				var list = res.data;
				if(list.status == 200){
					this.$router.push({
						path: '/sell/Sell',
						name: 'Sell',
					})
				}else if(list.status ==302){
					return _that.isShow = true
				}else if(list.status ==304){
					_that.$toast(list.msg)
					return this.$router.push({
						path: '/sell/Payment',
						name: 'Payment',
					})
				}
				else if(res.data.status == 999){
					this.$toast(res.data.msg)
					this.$store.commit('del_token'); //清除token
					setTimeout(()=>{
						this.$router.push('/Login')
					},1000)
				}
				else{
					_that.$toast(list.msg)
				}
            })
		},

		/**
		 * 路由跳转
		 */
		jumpTo(path,name,id){
			// 商品路由跳转
			if(path && name && id){
				this.$router.push(path+'?'+ name +'=' + id);
				return false;
			}
			// 跳转指定路由
			if(path && !name && !id){
				this.$router.push(path);
				return false;
			}
			//后退
			else{
				this.$router.go(-1)
			}
		}

		// jumpTo(path,name,id){
		// 	jumpTo(path,name,id);
		// },

	},
	computed:{
		// 过滤公告列表
		filterNotice(){
			return this.noticeData.slice(0,1);
		}
	},
	filters:{
		//格式化金钱
        formatMoney:function(val){
            return "¥" + Number(val).toFixed(2)
        }
	}

};
</script>


<style lang="stylus" scoped>
.Home
	padding-bottom 114px
	.top-bar
		width 100%
		height 76px
		background-color #f57121
		display flex
		align-items center
		justify-content center
		position fixed
		left 0
		top 0
		z-index 9
		.search
			width 700px
			height 60px
			background-color #ffffff
			border-radius 25px
			display flex
			align-items center
			justify-content center
			.search-icon
				width 26px
				height 24px
				background url(/static/images/home/search-icon.png) no-repeat 
				background-size 100%
				margin-right 10px
			.text
				color #a7a7a7
				font-size 28px
	.banner
		width 100%
		padding-top 76px
		img 
			width 100% 
			height 380px
			display block
	.notice
		margin-bottom 20px
		.van-notice-bar
			height 40px
		.van-notice-bar >>> .van-icon 
			width 33px
			height 27px
			background url(/static/images/home/notice-icon.png) no-repeat 
			background-size 100%
			margin-right 20px
		.van-notice-bar >>>	.van-icon-volume-o:before
			content ''
		.van-notice-bar >>> .van-notice-bar__left-icon, .van-notice-bar__right-icon
			min-width 33px
	.gift-area
		padding 0 .25rem
		box-sizing border-box
		.heading
			.iconfont 
				color #f41111
				font-size 32px
		.gift-list
			display flex
			flex-wrap wrap
			.single-item
				width 48%
				height 494px
				background-color #fff
				border-radius 8px
				overflow hidden
				margin 0 20px 20px 0
				padding 10px
				box-sizing border-box
				&:nth-child(2n)
					margin-right 0
				.img-wrap
					height 320px
					overflow hidden
					img 
						display block
						margin 0 auto
						max-width 100%
						max-height 100%
				.main
					flex 1
					h3
						font-size 22px
						color #151515
						height 64px
						-webkit-box-orient vertical
						-webkit-line-clamp 2
						display -webkit-box
						overflow hidden
						text-overflow ellipsis
					.price
						.discount-price
							font-size 30px
							color #ed0d0d
							line-height 50px
						.original-price
							font-size 24px
							color #a1a1a1
	.advance-sale
		width 700px
		height 150px
		background url(/static/images/home/advance-sale-img.png) no-repeat
		background-size 100%
		margin 0 auto
		padding 0 .25rem
		box-sizing border-box
		display flex
		align-items center
		justify-content center
		h1
			font-size 48px
			color #ffffff
			font-weight normal
			margin-left 35px
			margin-right 44px
		span 
			font-size 28px
			color #ffdbd9
	.heading
		height 82px
		display flex
		align-items center
		.icon
			width 28px
			height 28px
			display inline-block
			margin-right 12px
			img 
				max-width 100%
				max-height 100%
				display inline-block
		h3
			font-size 30px
			color #151515	
	.hot-wrap
		padding 0 .25rem
		box-sizing border-box
		.hot-list
			display flex
			flex-wrap wrap
			.single-item
				width 48%
				height 494px
				background-color #fff
				border-radius 8px
				overflow hidden
				margin 0 20px 20px 0
				padding 10px
				box-sizing border-box
				&:nth-child(2n)
					margin-right 0
				.img-wrap
					height 320px
					overflow hidden
					img 
						display block
						margin 0 auto
						max-width 100%
						max-height 100%
				.main
					flex 1
					h3
						font-size 22px
						color #151515
						height 64px
						-webkit-box-orient vertical
						-webkit-line-clamp 2
						display -webkit-box
						overflow hidden
						text-overflow ellipsis
					.price
						.discount-price
							font-size 30px
							color #ed0d0d
							line-height 50px
						.original-price
							font-size 24px
							color #a1a1a1
	.recommend-wrap
		padding 0 .25rem
		box-sizing border-box
		.recommend-list
			.single-item
				width 100%
				height 324px
				background-color #fff
				border-radius 8px
				overflow hidden
				margin-bottom 12px
				padding 12px
				box-sizing border-box
				a
					display flex
					align-items center
					.img-wrap
						width 300px
						height 300px
						overflow hidden
						margin-right 28px
						img 
							display block
							margin 0 auto
							max-width 100%
							max-height 100%
					.main	
						flex 1
						h3
							height 70px
							font-size 26px
							color #151515
							-webkit-box-orient vertical
							-webkit-line-clamp 2
							display -webkit-box
							overflow hidden
							text-overflow ellipsis
							margin-bottom 80px
						.price
							display flex
							align-items center
							justify-content space-between
							margin-right 26px
							.discount-price
								font-size 30px
								color #ed0d0d
							.original-price
								font-size 24px
								color #a1a1a1
								text-decoration line-through
			
</style>
