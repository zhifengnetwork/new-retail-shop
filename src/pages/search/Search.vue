<template>
  	<div class="Search">
		<!-- 搜索框  -->
		<div class="search">
			<i  class="iconfont icon-fanhui" @click="jumpTo()"></i>
			<form class="searchForm">
				<i class="iconfont icon-sousuo"></i>
				<input
					v-focus
					v-model="searchVal"
					type="text"
					maxlength="40"
					class="keyword"
					name="keyword"
					ref="keyword"
					@keyup="getAssociate(searchVal)"
				/>
				<div class="keyword-del" @click="emptyVal()">
					<i class="iconfont icon-ai54"></i>
				</div>
			</form>
			<button class="search-btn" @click="onSearch(searchVal)">搜索</button>
		</div>
		<!-- 搜索关键字 -->
		<div class="search-associate" style="display:none">
			<ul class="associate-list">
				<li class="item">
					<span class="keyword">空调</span>
					<span class="iconfont icon-arrow-left-top"></span>
				</li>
				<li class="item">
					<span class="keyword">界面</span>
					<span class="iconfont icon-arrow-left-top"></span>
				</li>
				<li class="item">
					<span class="keyword">护肤</span>
					<span class="iconfont icon-arrow-left-top"></span>
				</li>
			</ul>
		</div>
		<!-- 最近搜索 -->
		<div class="search-item">
			<h3>最近搜索</h3>
			<div class="search-list">
				<div class="list-item">空调</div>
				<div class="list-item">冰箱</div>
				<div class="list-item">洗衣机</div>
				<div class="list-item">厨房小电器</div>
				<div class="list-item">厨房大电器</div>
				<div class="list-item">生活家电</div>
				<div class="list-item">热水器</div>
				<div class="list-item">配件及周边</div>
				<div class="list-item">热水器</div>
			</div>
		</div>

		<!-- 热搜 -->
		<div class="search-item">
			<h3>热搜</h3>
			<div class="search-list">
				<div class="list-item">空调</div>
				<div class="list-item">冰箱</div>
				<div class="list-item">洗衣机</div>
				<div class="list-item">厨房小电器</div>
				<div class="list-item">厨房大电器</div>
				<div class="list-item">生活家电</div>
				<div class="list-item">热水器</div>
				<div class="list-item">配件及周边</div>
				<div class="list-item">热水器</div>
			</div>
		</div>

	

  </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader";
export default {
	name: "Search",
	components: {
		TopHeader
	},
	data(){
		return{
			searchVal:''
		}
	},
	methods:{
		/**
		 * 清空搜索框
		 */
		emptyVal(){
			this.searchVal = ''
			this.$refs.keyword.focus()
		},
		/**
		 * 获取关联数据
		 */
		getAssociate(e){
			console.log(e)
		},
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

	},
	

};
</script>

<style lang="stylus" scoped>
.Search
	width 100%
	min-height 100vh
	background-color #fff
	.search
		padding  20px 24px 20px 0
		box-sizing border-box
		border-bottom 1px solid #eeeeee
		display flex
		.icon-fanhui
			width 10%
			height 60px
			color #0092d8
			font-size 36px
			display flex
			align-items center
			justify-content center
		.searchForm
			flex 1
			height 60px
			background-color #eee
			display flex
			align-items center
			margin 0 auto
			border-radius 5px
			.icon-sousuo
				width 10%
				height 100%
				display flex
				align-items center
				justify-content center
				font-size 34px
				color #d2d2d2
			.keyword
				flex 1
			.keyword-del
				width 10%
				height 100%
				display flex
				align-items center
				justify-content center
				.icon-ai54
					font-size 40px
					color #b2b2b2
		.search-btn
			width 80px
			height 60px
			display inline-block
			background #0092d8
			color #ffffff
			font-size 24px
			border-radius 5px
			margin-left 20px
			border none 
			outline none
	.search-associate
		.associate-list
			.item
				height 80px
				line-height 80px
				color #666
				font-size 28px
				background-color #f9f9f9
				border-bottom 1px solid #dedede
				padding 0 30px
				box-sizing border-box
				display flex
				justify-content space-between
				.icon-arrow-left-top
					color #999999
					font-size 28px
	.search-item
		padding 0 30px
		box-sizing border-box
		margin-bottom 30px
		h3
			line-height 60px
			font-size 28px
			color #999999
		.search-list
			display flex
			flex-wrap wrap
			.list-item
				height 40px
				line-height 40px
				text-align center
				border 1px solid #cccccc
				padding 0 14px 
				margin-right 10px
				margin-bottom 10px

</style>
