<template>
    <div class="paycode-wrap">
      	<!-- 头部组件 -->
		<TopHeader custom-title="我的付款码" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
            <span slot="rightBtn"><router-link class="fontRe" to="/user/EditPaymentCode">添加</router-link></span>
		</TopHeader>
        <div class="height-88"></div>
        <!-- CONTENT START --> 
        <div class="content">
            <ul>
                <li class="cade-list-cont">
                    <div class="cade-list bg-1">
                        <div class="code-msg"><img src="/static/images/sell/payCode.png" /></div>
                    </div>
                    <p>微信收款</p>
                </li>
                <li class="cade-list-cont">
                    <div class="cade-list bg-2">
                        <div class="code-msg"><img src="/static/images/sell/payCode.png" /></div>
                    </div>
                    <p>支付宝收款</p>
                </li>
                <li class="cade-list-cont">
                    <div class="cade-list bg-3">
                        <div class="code-msg"><img src="/static/images/sell/payCode.png" /></div>
                    </div>
                    <p>码云闪付</p>
                </li>
            </ul>
        </div>
        <p class="foot-height"></p>
        <input class="submit" type="button" value="提交" @click="setAgents()" />
    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader";
export default {
    data() {
        return {
            imgList: [],
            token:this.$store.getters.optuser.Authorization
        }
    },
    created(){
        this.$store.commit('showLoading')       //加载login
        this.getPayCodeInfo()
    },
    methods:{

        getPayCodeInfo(){
            var _that =this
            _that.$axios.post('pay/get_user_payment',{
                'token':_that.token         
            })
            .then((res)=>{
                var list = res.data;
                if(list.status == 200){
                    _that.imgList =
                    _that.$store.commit('hideLoading')
                }
                // else if(list.status === 999){
                //     _that.$store.commit('del_token'); //清除token
                //     setTimeout(()=>{
                //         _that.$router.push('/Login')
                //     },1000)
                // }
                else{
                    _that.$toast(list.msg)
                }
            })
        }, 

        // setAgents(){
        //     var _that =this;
        //     _that.$axios.post('user/agent_res',{
        //         'proof':post,
        //         'fz_order_id':this.$route.query.fz_order_id,
        //         'token':this.$store.getters.optuser.Authorization            
        //     })
        //     .then((res)=>{
        //         var list = res.data;
        //         if(list.status == 200){
        //             _that.option1 =list.data
        //             this.$store.commit('hideLoading')
        //         }else if(list.status == 999){
        //             this.$store.commit('del_token'); //清除token
        //             setTimeout(()=>{
        //                 this.$router.push('/Login')
        //             },1000)
        //         }else{
        //             _that.$toast(list.msg)
        //         }
        //     })
        // }
    },
    components:{
        TopHeader
    }
}
</script>
<style lang="stylus">
    .paycode-wrap
        padding :24px
        .fontRe
            font-size 28px
            color #f30c0c
        .cade-list-cont
            color:#151515
            font-size 30px
            text-align center
            p
                margin-bottom 10px
            .cade-list
                width 100%
                height 300px
                margin-bottom 20px
                display flex
                align-items center
                justify-content center
            .code-msg
                width: 261px
                height: 260px
                background-color: #fff
                border-radius: 6px
                padding 24px
                box-sizing border-box
                // margin: 20px auto
                img 
                    max-width 100%
                    max-height 100%
            .bg-1
                background:url('../../../static/images/sell/wx_bg.png')
                background-size 100% 100%
            .bg-2
                background:url('../../../static/images/sell/zfb_bg.png')
                background-size 100% 100%    
            .bg-3
                background:url('../../../static/images/sell/ysf_bg.png')
                background-size 100% 100%  
        .foot-height
            width 100%
            height 100px
        .submit
            width 702px
            height 88px
            background-color #ff4d4d
            border-radius 44px
            color #fff
            position fixed
            bottom 24px
            left 24px
</style>

