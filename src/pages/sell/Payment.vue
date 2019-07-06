<template>
    <div class="payment">
      	<!-- 头部组件 -->
		<TopHeader custom-title="订单支付" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <!-- CONTENT START --> 
        <div class="content">
            <img class="-imgs" src="/static/images/sell/sell1.png" />
            <div class="inner">
                
                <img class="-img2"  src="/static/images/sell/payCode.png" />
                <div class="-payment-">
                    <span v-for="(item,key) in list" :key="key" class="-payment-1" v-show="key==saveId">{{item.msg}}</span>
                    <span class="-payment-2"  @click="changPayment()">切换</span>
                </div>
                <!-- <van-popup v-model="show" position="bottom" :style="{ height: '20%' }"> 
                    <ul>
                        <li>支付宝</li>
                        <li>微信</li>
                    </ul>
                </van-popup> -->
               
               <p class="-userinfo"><strong>联系方式: 13480197692</strong></p>
            </div>
        </div>
        <p class="height90"></p>
        <input class="submit" type="button" value="提交" />
    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader";
import { Collapse, CollapseItem } from 'vant';
export default {
    data() {
        return {
            isShow:true,
            saveId:0,
            list:[
                {msg:'支付宝收款',id:0},
                {msg:'微信收款',id:1},
                {msg:'马云闪付',id:2}
            ]
        }
    },
    methods:{
        changPayment(){
            this.saveId ++;
            if(this.saveId>2){
                this.saveId=0
            }
        }
    },
    components:{
        TopHeader
    }
}
</script>
<style lang="stylus">
    .payment
        .content
            padding:24px 24px 30px
            .-imgs
                margin-bottom 130px
                width 100%
                height 280px
            .inner
                padding:0 180px
                .-img2 
                    width:332px
                    height 331px
                .-payment-
                    display :flex
                    justify-content space-between
                    margin :100px 0 95px
                    .-payment-1
                        font-weight:30px
                        color:#151515 
                    .-payment-2
                        color:#ff6521
                        font-size:28px
                        padding:2px 6px
                    .-userinfo
                        font-size :28px
                        letter-spacing: 1px
                        .box-list
                            width: 100%
                            height: 500px
                            padding: 10px
        .height90
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

