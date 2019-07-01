<template>
	<div class="data_wrap">
		<!-- 头部组件 -->
		<Data-Header custom-title="个人资料" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Data-Header>
        <div class="content">
			<div class="nom_wrap">
                <div class="item_wrap">
                    <div class="text">头像</div>
                    <div class="img">
                        <img src="/static/images/user/002.png"/>
                    </div>
                </div>
                <router-link class="my_look" to="/user/modifyUserName">
                    <div class="item_wrap">
                        <div class="text">用户名</div>
                        <div class="name_wrap">
                            <span class="name">风风火火</span>
                            <i class="iconfont icon-xiangyoujiantou"></i>
                        </div>
                    </div>
                </router-link>
                <router-link class="my_look" to="#">
                    <div class="item_wrap">
                        <div class="text">修改密码</div>
                        <div class="name_wrap">
                            <i class="iconfont icon-xiangyoujiantou"></i>
                        </div>
                    </div>
                </router-link>    
            </div>
            <!-- 按钮 -->
            <div class="btn">退出登录</div>
		</div>
	</div>
</template>

<script>
	import DataHeader from "@/pages/common/header/TopHeader"
	export default {
		name: "personalData",
		data() {
			return{
                
			}
		},
		components: {
			DataHeader,
		},
		
	}
</script>

<style lang="stylus" scoped>
    .data_wrap
        width 100%
        height 100%
        .content
            padding-top 88px
            .nom_wrap
                margin 26px 24px
                .item_wrap
                    padding 15px 20px
                    margin 0 0 30px
                    background #fff
                    line-height 75px
                    border-radius 10px
                .my_look
                    display block
                    color #151515    
                .item_wrap .text,.img,.name_wrap 
                    display inline-block
                    vertical-align middle
                .text
                    width 130px
                    font-size 30px
                    text-align right
                .name_wrap
                    font-size 30px
                    float right
                .img
                    margin 5px 0 0
                    float right
                    width 68px
                    height 68px
                    border-radius 50% 
            .btn 
                position fixed
                bottom 27px
                left 24px
                width 702px
                height 88px
                background #ff4d4d
                border-radius 44px
                font-size 30px
                color #fff 
                text-align center
                line-height 88px  
                letter-spacing 2px            
                    

img
    display block
    margin 0 auto
    max-width 100%
    height 100%
    border-radius 50%
</style>