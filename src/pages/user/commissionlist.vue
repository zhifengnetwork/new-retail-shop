<template>
    <div class="max_div">
        <!-- 头部组件 -->
		<Comm-Header custom-title="团队列表" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Comm-Header>
        <ul class="ul">
            <li class="li">
                <span class="user_id">订单号</span><span class="user_name">用户金额</span><span class="user_phone">描述</span>
            </li>
            <li class="li">
                <span class="user_id">44088214489578</span><span class="user_name">冷漠之秋二小姐89</span><span class="user_phone">18488885975</span>
            </li>
            <li class="li">
                <span class="user_id">789895</span><span class="user_name">冷漠之秋二小姐89</span><span class="user_phone">18488885975</span>
            </li>
        </ul>          
    </div>
</template>

<script>
	import CommHeader from "@/pages/common/header/TopHeader"
    export default {
		name: 'commissionlist',
		data(){
            return{
                
            }
			
		},
        components:{
            CommHeader,
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
            padding 10px 0 6px 0
            .user_id
                display inline-block
                vertical-align top
                width 35%
                text-align center
                font-size 20px
            .user_name
                display inline-block
                vertical-align top
                width 35%
                text-align center 
                font-size 20px       
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
