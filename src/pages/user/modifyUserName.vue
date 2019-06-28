<template>
	<div class="modify_wrap">
		<!-- 头部组件 -->
		<Name-Header custom-title="修改用户名" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Name-Header>
        <div class="content">
            <div class="inp_wrap">
                <input type="text" placeholder="输入修改用户名"/>
            </div>
			<!-- 确认按钮 -->
			<div class="btn">确认修改</div>
		</div>

	</div>
</template>

<script>
	import NameHeader from "@/pages/common/header/TopHeader"
	export default {
		name: "modifyUserName",
		data() {
			return{
                
			}
		},
		components: {
			NameHeader,
		},
		
	}
</script>

<style lang="stylus" scoped>
    .modify_wrap
        .content
            padding-top 88px
            .inp_wrap
                padding 20px
                margin 26px 24px
                background #fff
                border-radius 10px
            .inp_wrap input
                width 602px
                font-size 30px
                color #151515
                line-height 65px    
            .inp_wrap input::-webkit-input-placeholder
                font-size 30px
                color #8b8b8b 
            .btn 
                margin 45px auto
                width 702px
                height 88px
                background #ff4d4d
                border-radius 44px
                font-size 30px
                color #fff 
                text-align center
                line-height 88px  
                letter-spacing 2px       

</style>