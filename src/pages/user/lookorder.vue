<template>
    <div class="max_div">
        <!-- 头部组件 -->
		<Look-Header custom-title="查看订单" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Look-Header>
        <ul class="ul">
            <li class="li">
                <span class="user_id">日期</span><span class="user_name">订单号</span><span class="user_phone">金额</span>
            </li>
            <li class="li">
                <span class="user_id">2019-02-15</span><span class="user_name">1142025879401</span><span class="user_phone">￥290000</span>
            </li>
            <li class="li">
                <span class="user_id">2018-10-11</span><span class="user_name">89895879408</span><span class="user_phone">￥2900</span>
            </li>
        </ul>
    </div>
</template>

<script>
	import LookHeader from "@/pages/common/header/TopHeader"
    export default {
		name: 'lookorder',
		data(){
            return{
                
            }
			
		},
        components:{
            LookHeader,
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
            height 50px
            line-height 50px
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

        

</style>
