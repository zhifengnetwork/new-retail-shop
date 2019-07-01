<template>
	<div class="Home">
		<!-- 搜索 -->
		<div class="top-bar">
			<div class="search">
				<span class="search-icon"></span>
				<span class="text">搜索	</span>
			</div>
		</div>
		<!-- 轮播图 -->
		<div class="banner">
			<van-swipe :autoplay="3000" indicator-color="white">
				<van-swipe-item>
					<img src="/static/images/home/banner01.png" />
				</van-swipe-item>
				<van-swipe-item>
					<img src="/static/images/home/banner01.png" />
				</van-swipe-item>
				<van-swipe-item>
					<img src="/static/images/home/banner01.png" />
				</van-swipe-item>
			</van-swipe>
		</div>

		<!-- 公告 -->
		<div class="notice">
			<van-notice-bar
				text="通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容"
				left-icon="volume-o"
				color="#ffffff"
  				background="#f92a0f"
			/>
		</div>

		<!-- 预售 -->
		<div class="advance-sale">
			<a href="#">
				<h1>50元专区</h1>
				<span>不包邮</span>
			</a>
		</div>

		<!-- 热销商品 -->
		<div class="hot-wrap">
			<div class="heading">
				<i class="icon"><img src="/static/images/home/hot-icon.png"></i>
				<h3>热销商品</h3>
			</div>
			<div class="hot-list">
				<div class="single-item">
					<router-link to="/Details">
						<div class="img-wrap">
							<img src="/static/images/home/hot-img01.png" />
						</div>
						<div class="main">
							<h3>韩后化妆品 面膏 </h3>
							<div class="price">
								<p class="discount-price">￥1569.00</p>
								<p class="original-price">原价:￥2500.00</p>
							</div>
						</div>
					</router-link>
				</div>
				<div class="single-item">
					<router-link to="/Details">
						<div class="img-wrap">
							<img src="/static/images/home/hot-img01.png" />
						</div>
						<div class="main">
							<h3>韩后化妆品 面膏 </h3>
							<div class="price">
								<p class="discount-price">￥1569.00</p>
								<p class="original-price">原价:￥2500.00</p>
							</div>
						</div>
					</router-link>
				</div>
				<div class="single-item">
					<router-link to="/Details">
						<div class="img-wrap">
							<img src="/static/images/home/hot-img01.png" />
						</div>
						<div class="main">
							<h3>韩后化妆品 面膏 </h3>
							<div class="price">
								<p class="discount-price">￥1569.00</p>
								<p class="original-price">原价:￥2500.00</p>
							</div>
						</div>
					</router-link>
				</div>
				<div class="single-item">
					<router-link to="/Details">
						<div class="img-wrap">
							<img src="/static/images/home/hot-img01.png" />
						</div>
						<div class="main">
							<h3>韩后化妆品 面膏 </h3>
							<div class="price">
								<p class="discount-price">￥1569.00</p>
								<p class="original-price">原价:￥2500.00</p>
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
				<div class="single-item">
					<router-link to="/Details">
						<div class="img-wrap">
							<img src="/static/images/home/recommend-goods-img01.png" />
						</div>
						<div class="main">
							<h3>自然堂化妆品补水防晒虎自然堂化...</h3>
							<div class="price">
								<p class="discount-price">￥360.00</p>
								<p class="original-price">原价:￥500.00</p>
							</div>
						</div>
					</router-link>
				</div>
				<div class="single-item">
					<router-link to="/Details">
						<div class="img-wrap">
							<img src="/static/images/home/recommend-goods-img01.png" />
						</div>
						<div class="main">
							<h3>自然堂化妆品补水防晒虎自然堂化...</h3>
							<div class="price">
								<p class="discount-price">￥360.00</p>
								<p class="original-price">原价:￥500.00</p>
							</div>
						</div>
					</router-link>
				</div>
				<div class="single-item">
					<router-link to="/Details">
						<div class="img-wrap">
							<img src="/static/images/home/recommend-goods-img01.png" />
						</div>
						<div class="main">
							<h3>自然堂化妆品补水防晒虎自然堂化...</h3>
							<div class="price">
								<p class="discount-price">￥360.00</p>
								<p class="original-price">原价:￥500.00</p>
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>

		<!-- 底部导航 -->
		<Navigate></Navigate>
	</div>
</template>

<script>
import Navigate from "@/pages/common/footer/Navigate";
export default {
	name: "home",
	data() {
		return {};
	},
	components: {
		Navigate
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
	.advance-sale
		width 700px
		height 150px
		background url(/static/images/home/advance-sale-img.png) no-repeat
		background-size 100%
		margin 0 auto
		padding 0 .25rem
		box-sizing border-box
		a
			width 100%
			height 100%
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
					width 320px
					height 320px
					overflow hidden
					img 
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
							max-width 100%
							max-height 100%
					.main
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
