<template>
    <div class="Up_wrap">
        <!-- 头部组件 -->
		<Up-Header custom-title="充值金额" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Up-Header>
        <div class="content">
            <div class="item_wrap">
                <div class="inp"> 
                    <input type="number" placeholder="请输入充值金额" v-model="money"/>
                </div>
                <van-radio-group v-model="radio">
                    <van-radio name="2" checked-color="#f30c0c">微信</van-radio>
                    <van-radio name="3" checked-color="#f30c0c">支付宝</van-radio>
                </van-radio-group>
            </div>
            <!-- 充值按钮 -->
            <div class="btn" @click="PopData()">立即充值</div>
        </div>    
    </div>
</template>

<script>
    import UpHeader from "@/pages/common/header/TopHeader"
    import { Checkbox, CheckboxGroup } from 'vant'
    export default {
		name: 'upAmount',
		data(){
            return{
                radio: '2',
                money:''
            }
			
        },
        methods: {
            PopData(){
                var that = this 
                if(that.money === '') {
                    return that.$toast('金额不能为空')
                } 
                if(that.money <= 0.01) {
                    return that.$toast('金额不能低于0.01元')
                }
                if(that.radio==2){return that.$toast('调用微信接口')} 
                var url = "pay/recharge_pay"
                that.$axios.post(url,{
                    token:that.$store.getters.optuser.Authorization,
                    'money':that.money,
                    'pay_type':that.radio
                })
                .then((res)=>{      
                    if(res.data.status === 200){
                        window.location.href =res.data.data.url 
                    }else{
                        that.$toast(res.data.msg)
                    }
                })
                
            }
        },
        components:{
            UpHeader,
        },
        
    }
</script>

<style lang="stylus" scoped>
    .Up_wrap
       .content
            padding 88px 24px 0
            .item_wrap
                padding 25px 0 135px
                .inp 
                    line-height 65px
                    border-bottom 1.5px solid #ff4d4d
                    input 
                        padding 0 0 0 15px 
                        width 500px
                        color #151515
                        font-size 24px
                        line-height 65px
                .van-radio-group
                    padding 26px 0
                    display flex
                    .van-radio
                        padding-left 123px
                        flex 1 
            .btn 
                width 702px
                height 88px
                background-color #ff4d4d
                border-radius 44px
                color #fff
                font-size 30px
                text-align center
                line-height 88px                 


</style>
