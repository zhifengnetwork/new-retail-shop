<template>
    <div class="paycode-wrap">
      	<!-- 头部组件 -->
		<!-- <TopHeader custom-title="我的收款码" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
            <span slot="rightBtn"><router-link class="fontRe" to="/user/EditPaymentCode"><i class="iconfont icon-bianji"></i></router-link></span>
		</TopHeader> -->

        <div class="TopHeader">
            <router-link to="/Home" class="backBtn">
                <i class="iconfont icon-fanhui"></i>
            </router-link>
            <div class="title">我的收款码</div>
            <span class="rightBtn"><router-link class="fontRe" to="/user/EditPaymentCode"><i class="iconfont icon-bianji"></i></router-link></span>
        </div>

        <div class="height-88"></div>
        <!-- CONTENT START --> 
        <div class="content">
            <ul>
                <li class="cade-list-cont" v-if="imgList.wx_pic">
                    <div class="cade-list bg-1">
                        <div class="code-msg"><img :src="imgList.wx_pic" /></div>
                    </div>
                    <p>微信收款</p>
                </li>
                <li class="cade-list-cont" v-if="imgList.zfb_pic!=''">
                    <div class="cade-list bg-2">
                        <div class="code-msg"><img :src="imgList.zfb_pic" /></div>
                    </div>
                    <p>支付宝收款</p>
                </li>
                <li class="cade-list-cont" v-if="imgList.my_pic!=''">
                    <div class="cade-list bg-3">
                        <div class="code-msg"><img :src="imgList.my_pic" /></div>
                    </div>
                    <p>码云闪付</p>
                </li> 
            </ul>
        </div>
        <p class="foot-height"></p>
        <!-- <input class="submit" type="button" value="提交" @click="setAgents()" /> -->
    </div>
</template>
<script>
// import TopHeader from "@/pages/common/header/TopHeader2";
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
                console.log(list)
                _that.$store.commit('hideLoading')
                if(list.status == 200){
                    _that.imgList =list.data
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
        // }
    },
    components:{
        // TopHeader
    }
}
</script>
<style lang="stylus" scoped>
    .paycode-wrap
        padding :24px
        .TopHeader
            width 100%
            height 88px
            line-height 88px
            color #151515
            font-size 30px
            background-color #ffffff
            display flex
            justify-content space-between
            align-items center
            position fixed
            top 0
            left 0
            z-index 9
            .backBtn
                width 10%
                text-align center
                position absolute
                left 0
                top 0
                .iconfont 
                    font-size 36px
            .title
                text-align center
                width 70%
                margin 0 auto
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
            .rightBtn
                padding-right 30px
                position absolute
                right 0
                top 0
                .iconfont
                    font-size 46px
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

