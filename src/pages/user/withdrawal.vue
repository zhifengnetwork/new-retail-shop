<template>
	<div class="wit_wrap">
		<!-- 头部组件 -->
		<With-Header custom-title="账户提现" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</With-Header>
        <div class="content">
            <div class="hd_wrap">
				<div class="back">
                    <div class="k_box">
                        <p class="can">可提现金额</p>
                        <div class="sum">
                            <span>￥</span><span>10014.52</span>
                        </div>
                    </div>
                </div>
				<!-- 提现方式 -->
				<div class="way_wrap">
					<h4>提现方式</h4>
					<!-- 选择方式 -->
					<div class="mode">
						<div class="wechat" v-for="(item,index) in pay" :key="index" @click="cur=index" :class="{on:cur==index}">
							<img :src="item.img"/>
						</div>
					</div>
					<div class="play_wrap">
						<!-- 微信/支付宝-提现金额 -->
						<div class="sum_wrap" v-for="(list,index) in as" :key="index" v-show="cur===index">
							<h4>提现金额</h4>
							<!-- 支付宝账号编辑 -->
							<router-link to="/user/alipay" v-if="cur===1">
								<div class="fee_wrap">
									<div class="fee">
                                        <span>周</span>
                                        <span>180 2222 6666</span>
                                    </div>
									<div class="unit icon"></div>
								</div>
							</router-link>

							<div class="put">
                                <span class="dollars">￥</span>
								<div class="inp">
									<input type="text" placeholder="请输入提现金额"/>
								</div>
								<div class="all_btn">全部提现</div>
							</div>
							<!-- 手续费 -->
							<div class="fee_wrap">
								<div class="fee">
									<span>手续费 ：</span>
									<span>{{list.num}}</span>
								</div>
								<div class="unit">元</div>
							</div>
							<!-- 实际到账 -->
							<div class="fee_wrap">
								<div class="fee">
									<span>实际到账 ：</span>
									<span>{{list.mas}}</span>
								</div>
								<div class="unit">元</div>
							</div>
						</div>

					</div>
				</div>
				<!-- 申请提现按钮 -->
				<div class="apply_btn">申请提现</div>
			</div>
		</div>
	</div>
</template>

<script>
	import WithHeader from "@/pages/common/header/TopHeader"
	export default {
        name: 'withdrawal',
        components: {
			WithHeader,
		},
		data() {
			return{
                pay:[
					{id:1,img:'/static/images/user/weixi.png'},
					{id:2,img:'/static/images/user/zfb.png'},
				],
				as:[
					{id:1,num:0,mas:92.20},
					{id:2,num:0,mas:92.20},
				],
                //默认选中第一个
                cur: 0
			}
		},
	}
</script>

<style lang="stylus" scoped>
.wit_wrap
    width 100%
    height 100%
    .content
        padding 88px 0 0
        .hd_wrap
            margin 21px 24px 30px
        .back
            padding 90px 0
            width 100%
            background url('/static/images/user/of.png') no-repeat
            background-size 100% 100%
        .k_box
            text-align center
            line-height 55px
            .sum
                font-size 36px
                color #fff
            .can
                font-size 30px
                color #ffe1e2
        .way_wrap
            h4
                margin 26px 0 26px
                color #151515
                font-size 26px
                line-height 65px
            .mode
                font-size 0
            .mode img
                margin 0 auto
                display block
                max-width 100%
            .mode .wechat
                margin 0 37px 0 0	
            .mode .wechat,.alipay
                display inline-block
                vertical-align middle
                width 58px
                height 58px
            .mode .on
                width 70px
                height 70px
            .sum_wrap
                .sum_wrap
                .put
                    padding 22px 0
                    border-bottom 1.1px solid #e6e6e6
                .dollars
                    font-size 30px
                    line-height 50px
                    font-weight 600    
                .put .inp,.all_btn
                    display inline-block
                    vertical-align top
                    font-size 24px
                    color #151515
                .inp input
                    width 560px
                    height 45px
                    font-size 26px
                    color #151515
                    .inp input::-webkit-input-placeholder
                        font-size 26px
                        color #717171
                .all_btn
                    float right
                    line-height 45px
                .fee_wrap
                    padding 22px 0
                    line-height 45px
                    border-bottom 1.1px solid #e6e6e6
                .fee_wrap .fee,.unit
                    display inline-block
                    vertical-align top
                    font-size 26px
                    color #151515
                .unit
                    float right
                .icon
                    margin 16px 0 0 
                    width 25px
                    height 25px
                    background url('/static/images/user/address/address-edit-icon.png') no-repeat
                    background-size 100% 100%
        .apply_btn
            margin 50px auto 45px
            width 702px
            height 88px
            background #ff4d4d
            border-radius 44px
            font-size 30px
            color #fff
            text-align center
            line-height 88px
            letter-spacing 4px

</style>