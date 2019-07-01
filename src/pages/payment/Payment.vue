<template>
    <div class="payment">
      	<!-- 头部组件 -->
		<TopHeader custom-title="订单支付" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <!-- CONTENT START --> 
        <div class="content">
            <div class="inner">
                <img class="-imgs" src="/static/images/payment/goods2.png" />
                <img class="-img2"  src="/static/images/payment/payCode.png" />
                <div class="-payment-">
                    <span class="-payment-1">支付宝收款</span>
                    <span class="-payment-2">切换</span>
                </div>
                <p class=""><strong>联系方式:13480197692</strong></p>
            </div>
            <van-button type="primary" @click="showPopup">展示弹出层</van-button>
        </div>
        <van-popup v-model="show" position="buttom" :overlay="true">内容</van-popup>
    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader";
import { Popup } from 'vant';
export default {
    data() {
        return {
        show: false
        }
    },
    methods:{
        showPopup() {
            this.show = true;
        }
    },
    components:{
        TopHeader
    }
}
</script>
<style lang="stylus">
    .content
        padding: 0 24px 24px
        .inner
            padding:0 180px
            >img 
               width:332px
               height 331px
            .-imgs
                margin-bottom :130px
            .-payment-
                display :flex
                justify-content :space-between
                margin :100px 0 190px
                .-payment-1
                    font-weight:30px
                    color:#151515; 
                .-payment-2
                    color:#ff6521;
                    font-size:28px;
                    padding:2px 6px;

</style>

