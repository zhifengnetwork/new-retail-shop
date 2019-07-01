<template>
	<div class="Category">
		
		<!-- 头部组件 -->
		<TopHeader custom-title="分类" custom-fixed>
			<!-- <i slot="backBtn" class="iconfont icon-fanhui"></i> -->
			<!-- <i slot="rightBtn" class="iconfont icon-lajitong"></i> -->
		</TopHeader>
		<div class="height-88"></div>
		
		<div class="scroll-content">
			<div class="scroll-menu">
				<div class="menu-item" 
				v-for="(item,index) in menuBar" 
				:key="index"
				:class="{'active': activeIndex === index}"
				@click="handleClick(index)"
				>{{item}}</div>
				<!-- <div class="menu-item active">洁面</div>
				<div class="menu-item">爽肤水</div>
				<div class="menu-item">清透乳</div>
				<div class="menu-item">面霜</div>
				<div class="menu-item">面膜</div>
				<div class="menu-item">连衣裙</div> -->
			</div>
			<p>{{pullDownTip}}</p>
			<div class="scroll-list" ref="scroll_list">
				<Scroller :handleToScroll = "handleToScroll" :hangdleToTouchEnd = "hangdleToTouchEnd">
					<div class="list-item" v-for="(items,index) in this.listData" :key="index" v-show ="activeIndex === index">
						<div class="single-item" v-for="(item,index) in items" :key="index">
							<div class="img-wrap">
								<router-link to="/Details"><img :src="item.imgUrl" /></router-link>
							</div>
							<div class="main">
								<router-link to="/Details"><h3>{{item.goodsName}}</h3></router-link>
								<p class="price">{{item.price | moneyFormat | rmb}}</p>
							</div>
						</div>
					</div>
				</Scroller>
				<!-- <div class="single-item">
					<div class="img-wrap">
						<a href="#"><img src="/static/images/category/category-goods-img01.png" /></a>
					</div>
					<div class="main">
						<a href="#"><h3>洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面</h3></a>
						<p class="price">￥545.00</p>
					</div>
				</div>
				<div class="single-item">
					<div class="img-wrap">
						<a href="#"><img src="/static/images/category/category-goods-img01.png" /></a>
					</div>
					<div class="main">
						<a href="#"><h3>洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面</h3></a>
						<p class="price">￥545.00</p>
					</div>
				</div>
				<div class="single-item">
					<div class="img-wrap">
						<a href="#"><img src="/static/images/category/category-goods-img01.png" /></a>
					</div>
					<div class="main">
						<a href="#"><h3>洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面</h3></a>
						<p class="price">￥545.00</p>
					</div>
				</div> -->
			</div>
		</div>
		<!-- 底部导航 -->
		<Navigate></Navigate>
	</div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
import Navigate from "@/pages/common/footer/Navigate"
// import BScroll from "better-scroll"
export default {
	name: "Category",
	components: {
		TopHeader,
		Navigate,
	},
	data() {
		return {
			activeIndex:0,
			menuBar:["洁面","爽肤水","清透乳","面霜","面膜","连衣裙"],
			listData:[
				[
					{
						"id":"001",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"洁面洁面洁面洁面洁面洁面洁",
						"price":535
					},
					{
						"id":"002",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面",
						"price":545
					},
					{
						"id":"003",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面",
						"price":555
					},	
					{
						"id":"001",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"洁面洁面洁面洁面洁面洁面洁",
						"price":535
					},
					{
						"id":"002",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面",
						"price":545
					},
					{
						"id":"003",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面",
						"price":555
					},
						{
						"id":"001",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"洁面洁面洁面洁面洁面洁面洁",
						"price":535
					},
					{
						"id":"002",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面",
						"price":545
					},
					{
						"id":"003",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面洁面",
						"price":555
					},
				],
				[
					{
						"id":"004",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"爽肤水爽肤水爽肤水爽肤水",
						"price":635
					},
					{
						"id":"005",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"爽肤水爽肤水爽肤水爽肤水爽肤水爽肤水爽肤水爽肤水爽肤水爽肤水爽肤水",
						"price":645
					},
					{
						"id":"006",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"爽肤水爽肤水爽肤水",
						"price":655
					},
				],
				[
					{
						"id":"007",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"清透乳清透乳清透乳",
						"price":735
					},
					{
						"id":"008",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"清透乳",
						"price":745
					},
					{
						"id":"009",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"清透乳清透乳清透乳清透乳",
						"price":755
					},
				],
				[
					{
						"id":"010",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"面霜",
						"price":835
					},
					{
						"id":"011",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"面霜面霜面霜",
						"price":845
					},
					{
						"id":"012",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"面霜面霜面霜面霜",
						"price":855
					},
				],
				[
					{
						"id":"013",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"面膜",
						"price":835
					}
				],
				[
					{
						"id":"014",
						"imgUrl":"static/images/category/category-goods-img01.png",
						"goodsName":"连衣裙",
						"price":935
					}
				]
			],
			isLoading:true,
			pullDownTip:''
		};
	},
	mounted(){
		// this.$nextTick( ()=>{
		// 	var scroll = new BScroll(this.$refs.scroll_list,{
		// 		click:true,
		// 		probeType:1,//滚动的时候会派发事件
		// 	});

		// 	scroll.on('scroll',(pos)=>{
		// 		// console.log("scroll")
		// 		if(pos.y > 30){
		// 			this.pullDownTip = '正在更新中';
		// 		}
		// 	});

		// 	scroll.on('touchEnd',(pos)=>{
		// 		// console.log('touchend')
		// 		if(pos.y > 30){
		// 			this.pullDownTip = '更新成功';
		// 			setInterval(() => {
		// 				this.pullDownTip = '';
		// 			}, 1000);
		// 		}
		// 	})

		// })


	},
	methods:{
		// 根据索引点击跳至对应内容
		handleClick(i){
			this.activeIndex = i;
		},
		handleToScroll(pos){
			if(pos.y > 30){
				this.pullDownTip = '正在更新中';
			}
		},
		hangdleToTouchEnd(pos){
			if(pos.y > 30){
				this.pullDownTip = '更新成功';
				setInterval(() => {
					this.pullDownTip = '';
				}, 1000);
			}
		}
	},
	filters:{
		moneyFormat(val){
			return parseInt(val).toFixed(2)
		},
		rmb(val){
			return "¥" + val
		}
	}
	
};
</script>


<style lang="stylus" scoped>
.Category
	width 100%
	min-height 100vh
	background-color #ffffff
	.scroll-content
		height 100%
		display flex
		padding-right 24px
		box-sizing border-box
		padding-bottom 98px
		.scroll-menu
			width 250px
			height calc(100vh - 186px)
			text-align center
			margin-right 30px
			background-color #f2f2f2
			.menu-item
				height 80px
				line-height 80px
				font-size 30px
				&.active
					background-color #fff
		.scroll-list
			height calc(100vh - 186px)
			flex 1
			margin-top 25px
			.single-item
				display flex
				padding 10px 0
				box-sizing border-box
				border-bottom 1px solid #eeeeee
				.img-wrap
					width 160px
					height 160px
					overflow hidden
					margin-right 20px
					img 
						width 100%
				.main
					flex 1
					h3
						height 70px
						font-size 26px
						color #151515
						font-weight normal
						display -webkit-box
						-webkit-box-orient vertical
						-webkit-line-clamp 2
						overflow hidden
						margin 20px 0 30px
					.price
						font-size 26px
						color #f30c0c

				
  
</style>
