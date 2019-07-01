<template>
    <div class="view_wrap">
        <!-- 头部组件 -->
		<View-Header custom-title="查看订单" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</View-Header>
        <div class="content">
            <div class="item_wrap">

                <div class="title_wrap">
                    <ul class="title">
                        <li>下单时间</li>
                        <li>订单号</li>
                        <li>金额</li>
                    </ul>
                </div>

                <div class="list_wrap">
                    <ul class="bound">
                        <li>2019-09-06</li>
                        <li>915588229900</li>
                        <li>￥229900.00</li>
                    </ul>
                    <ul class="not_bound">
                        <li>2019-09-06</li>
                        <li>915588229900</li>
                        <li>￥229900.00</li>
                    </ul>
                </div>

            </div>
        </div>    
    </div>
</template>

<script>
	import ViewHeader from "@/pages/common/header/TopHeader"
    export default {
		name: 'viewOrders',
		data(){
            return{
                
            }
			
		},
        components:{
            ViewHeader,
        },
        
    }
</script>

<style lang="stylus" scoped>
    .view_wrap
        .content
            padding-top 88px
            .item_wrap
                margin 28px 24px 0
                .title_wrap
                    background #c6e1ff
                    .title
                        display flex
                        li 
                            flex 1
                            text-align center
                            line-height 55px
                .list_wrap ul
                    display flex
                .list_wrap ul li 
                    flex 1
                    text-align center  
                    line-height 50px 
                .list_wrap .bound
                    background #f3f9ff
                .list_wrap .not_bound
                    background #ecf4fc                         

</style>
