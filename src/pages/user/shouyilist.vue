<template>
    <div class="shou_wrap">
        <!-- 头部组件 -->
		<Shou-Header custom-title="预计收益" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Shou-Header>
        <div class="content">
            <div class="item_wrap">

                <div class="title_wrap">
                    <ul class="title">
                        <li>名称/下单ID</li>
                        <li>订单号</li>
                        <li>佣金</li>
                    </ul>
                </div>

                <div class="list_wrap">
                    <ul class="bound">
                        <li>哈萨克粉红色二小姐</li>
                        <li>01234567890</li>
                        <li>￥96.00</li>
                    </ul>
                    <ul class="not_bound">
                        <li>45932</li>
                        <li>01234567890</li>
                        <li>￥96.00</li>
                    </ul>
                </div>

            </div>
        </div>    
    </div>
</template>

<script>
	import ShouHeader from "@/pages/common/header/TopHeader"
    export default {
		name: 'shouyilist',
		data(){
            return{
                
            }
			
		},
        components:{
            ShouHeader,
        },
        
    }
</script>

<style lang="stylus" scoped>
    .shou_wrap
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
