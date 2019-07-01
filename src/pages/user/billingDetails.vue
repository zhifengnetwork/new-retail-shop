<template>
	<div class="zd_wrap">
		<!-- 头部组件 -->
		<Bill-Header custom-title="账单明细" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Bill-Header>
		<div class="content">
			<div class="ft_wrap">
				<div class="tit_wrap">
					<ul>
						<li v-for="(item,index) in tabList" 
						:key="index" 
						:class="{on:index === nowIndex}" 
						@click="handleClick(index)">{{item.tabTitle}}</li>
					</ul>
				</div>
				<div class="item_wrap">
					<div class="title">
						<ul>
							<li>订单</li>
							<li>日期</li>
							<li>金额</li>
						</ul>
					</div>
					<div class="list" v-show="nowIndex===0">
						<ul v-for="(tes,index) in tits" :key="index">
							<li>
								<div>{{tes.zhi}}</div>
								<div>{{tes.dan}}</div>
							</li>
							<li>{{tes.title}}</li>
							<li>{{tes.ge}}</li>
						</ul>
					</div>
					<div class="list" v-show="nowIndex===1">
						<ul v-for="(list,index) in futits" :key="index">
							<li>
								<div>{{list.zi}}</div>
								<div>{{list.an}}</div>
							</li>
							<li>{{list.itle}}</li>
							<li>{{list.gs}}</li>
						</ul>
					</div>

				</div>

			</div>
		</div>
    </div>    
</template>

<script>
	import BillHeader from "@/pages/common/header/TopHeader"
	export default {
        name: 'billingDetails',
		data() {
			return{
                tabList:[
					{
						tabTitle:"消费"
					},
					{
						tabTitle:"赚取"
					}
				],
				tits:[
					{id:1,zhi:'01234567890',dan:'下单消费',title:'2019-06-03',ge:'-￥4584.00'},
					{id:2,zhi:'01234567890',dan:'下单消费',title:'2019-06-03',ge:'-￥4584.00'},
					{id:3,zhi:'01234567890',dan:'下单消费',title:'2019-06-03',ge:'-￥4584.00'},
					{id:4,zhi:'01234567890',dan:'下单消费',title:'2019-06-03',ge:'-￥4584.00'}
				],
				futits:[
					{id:1,zi:'01234567890',an:'分享赚取',itle:'2019-06-03',gs:'-￥4584.00'},
					{id:2,zi:'01234567890',an:'分享赚取',itle:'2019-06-03',gs:'-￥4584.00'},
					{id:3,zi:'01234567890',an:'分享赚取',itle:'2019-06-03',gs:'-￥4584.00'},
					{id:4,zi:'01234567890',an:'分享赚取',itle:'2019-06-03',gs:'-￥4584.00'}
				],
				nowIndex:0,
			}
		},
		components: {
			BillHeader,
		},
		methods: {
             handleClick(index){
                this.nowIndex = index;
            },
		}
	}
</script>

<style lang="stylus" scoped>
.zd_wrap
    width 100%
    height 100%
    .content
        padding 88px 0 0
        .ft_wrap
            margin 20px 24px
            .tit_wrap
                font-size 0
                background #fff
            .tit_wrap ul li
                display inline-block
                width 50%
                font-size 30px
                text-align center
                line-height 65px
                font-weight 550
            .tit_wrap ul li.on
                color #ef1010
            .item_wrap .title
                background #ffc9b4
                color #151515
                font-size 0
            .item_wrap .title ul li
                display inline-block
                width 33.3%
                font-size 26px
                text-align center
                line-height 50px
            .item_wrap .list
                background #fff4f0
                color #151515
                font-size 0
            .item_wrap .list ul li
                display inline-block
                vertical-align middle	
                width 33.3%
                font-size 18px
                text-align center
                line-height 40px
            .item_wrap .list ul:nth-child(even)
                background #ffede7

</style>