<template>
    <div class="max_div">
        <!-- 头部组件 -->
		<List-Header custom-title="预计收益" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</List-Header>
        <ul class="ul">
            <li class="li">
                <span class="user_id">名称/下单ID</span><span class="user_name">订单号</span><span class="user_phone">佣金</span>
            </li>
            <li class="li">
                <span class="user_id">度偶哦都一</span><span class="user_name">￥290000.00</span><span class="user_phone">订单16999业绩</span>
            </li>
            <li class="li">
                <span class="user_id">安啦私家的</span><span class="user_name">￥290000.00</span><span class="user_phone">订单78989业绩</span>
            </li>
        </ul>
    </div>
</template>

<script>
/**头部 */
	import ListHeader from "@/pages/common/header/TopHeader"
    export default {
		name: 'shouyilist',
		data(){
            return{
                
            }
			
		},
        components:{
            ListHeader,
        },
    }
</script>

<style lang="stylus" scoped>
.max_div
    .ul
        width 90%
        margin 100px 0 0 5%
        .li
            width 100%
            height 70px
            line-height 70px
            .user_id
                display inline-block
                vertical-align top
                width 30%
                text-align center
                font-size 20px
            .user_name
                display inline-block
                vertical-align top
                width 40%
                text-align center 
                font-size 20px
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap
            .user_phone
                display inline-block
                vertical-align top
                width 30%
                text-align center 
                font-size 20px   
        .li:nth-child(odd)
            background #f3f9ff
        .li:nth-child(even)
            background #ecf4fc   
        .li:first-child  
            background #c6e1ff
            .user_id
                line-height 70px
               
             

        

</style>
