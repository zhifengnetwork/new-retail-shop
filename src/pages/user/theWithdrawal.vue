<template>
	<div class="tx_wrap">
		<!-- 头部组件 -->
		<Tx-Header custom-title="提现明细" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Tx-Header>
		<div class="content">
			<div class="bd_wrap">
				<div class="title_wrap">
					<ul>
						<li>申请日期</li>
						<li>金额</li>
						<li>手续费</li>
						<li>审核状态</li>
					</ul>
				</div>
				<div class="list_wrap">
					<ul>
						<li>2019-09-06</li>
						<li>￥9155.00</li>
						<li>￥55.00</li>
						<li class="state">审核成功</li>
					</ul>
					<ul>
						<li>2019-09-06</li>
						<li>￥9155.00</li>
						<li>￥55.00</li>
						<li class="status">审核失败</li>
					</ul>
					<ul>
						<li>2019-09-06</li>
						<li>￥9155.00</li>
						<li>￥55.00</li>
						<li class="state">审核成功</li>
					</ul>
					<ul>
						<li>2019-09-06</li>
						<li>￥9155.00</li>
						<li>￥55.00</li>
						<li class="status">审核失败</li>
					</ul>
				</div>
			</div>
			<!--  -->
			<p class="none">没有数据哦~~</p>
		</div>

    </div>    
</template>

<script>
	import TxHeader from "@/pages/common/header/TopHeader"
	export default {
        name: 'theWithdrawal',
		data() {
			return{
                
			}
		},
		components: {
			TxHeader,
		},
		
	}
</script>

<style lang="stylus" scoped>
.tx_wrap
    width 100%
    height 100%
    .content
        padding 88px 0 0
        .bd_wrap
            margin 20px 24px
            color #151515
            .title_wrap
                background #ffd7c7
                font-size 0
            .title_wrap ul li
                display inline-block
                width 25%
                font-size 26px
                font-weight 550
                text-align center
                line-height 75px
            .list_wrap
                background #fff4f0
                font-size 0
            .list_wrap ul li
                display inline-block
                width 25%
                font-size 18px
                text-align center
                line-height 65px
            .list_wrap ul:nth-child(even)
                background #ffede7	
            .state
                color #f70a0a
            .status
                color #12eb22
    .none
        margin 20px 0 0	
        font-size 20px
        color #909090
        text-align center
        line-height 75px					

</style>