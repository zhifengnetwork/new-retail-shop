<template>
     <div class="Navigate">
        <ul>
 			<li>
 				<router-link exact to="/Home">
                    <van-icon name="wap-home"/>
 					<span>首页</span>
 				</router-link>
 			</li>
 			<li>
 				<router-link to="/Category">
 					<van-icon name="wap-nav" />
 					<span>分类</span>
 				</router-link>
 			</li>
 			<li>
 				<router-link to="/Cart">
 					<van-icon name="cart" />
 					<span>购物车</span>
 				</router-link>
 			</li>
 			<li>
 				<router-link to="/User">
 					<van-icon name="contact" />
 					<span>我的</span>	
 				</router-link>
 			</li>
 		</ul>

    </div>
</template>

<script>
    export default {
        name:'Navigate',
        data(){
            return{
                active: 0
            }
        }
        
    }
</script>

<style lang="stylus" scoped>
.Navigate
	width 100%
	height 98px
	border-top 1px solid #f8f2f2
	background #ffffff
	z-index 9
	position fixed
	left 0
	bottom 0
	ul
		display flex
		height inherit
		li
			width 25%
			a
				width 100%
				height 100%
				display flex
				flex-direction column
				align-items center 
				justify-content center
				i
					display block
					margin-top 8px 
				.van-icon
					font-size 40px
					color #7f7f7f
				span{
					margin-top: 8px
					font-size 26px;
					color #7f7f7f
				}
			.router-link-exact-active
				.van-icon
					color #ff0000
				span
					color #ff0000	
</style>


