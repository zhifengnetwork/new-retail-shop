<template>
    <div class="payment">
      	<!-- 头部组件 -->
		<TopHeader custom-title="订单支付" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <!-- CONTENT START --> 
        <div class="content">
        <div class="shiftShop">
            <div  class="shopMid iconfont icon-fanhui" v-on:click="shiftOrder(-1)"></div >
            <div class="shopMid">{{currentOrder.fz_order_id}}</div>
            <div  class="shopMid goright iconfont icon-fanhui" v-on:click="shiftOrder(1)"></div >
        </div>
            <img class="-imgs" :src="currentOrder.img" />
            <div class="inner" v-for="(item,key) in list" :key="key" v-show="key==ewmId" >
                
                <img class="-img2" :src="item.pic" />
                <div class="-payment-">
                    <span class="-payment-1" v-show="key==ewmId">{{item.msg}}</span>
                    <span class="-payment-2"  @click="changPayment()">切换</span>
                </div>
                <!-- <van-popup v-model="show" position="bottom" :style="{ height: '20%' }"> 
                    <ul>
                        <li>支付宝</li>
                        <li>微信</li>
                    </ul>
                </van-popup> -->
               
               <p class="-userinfo"><strong>联系方式: {{currentOrder.mobile}}</strong></p>
            </div>
        </div>
        <p class="height90"></p>
        <router-link :to="'sell/UploadDocuments?fz_order_id='+currentOrder.fz_order_id" >
        <input class="submit" type="button" value="上传凭证" />
        </router-link>
    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader";
import { Collapse, CollapseItem } from 'vant';
export default {
    data() {
        return {
            isShow:true,
            ewmId:0,
            saveId:0,
            list:[
                {msg:'支付宝收款',id:0,pic:''},
                {msg:'微信收款',id:1,pic:''},
                {msg:'马云闪付',id:2,pic:''}
            ],
            orderList:[],
            currentOrder:[],
            token:this.$store.getters.optuser.Authorization,

        }
    },
     mounted(){
            this._getPayList()
        },

    methods:{
        shiftOrder(num) {
           var current= this.saveId+num;
            if(current<0){
                current=0;
            }
            if(current>this.orderList.length-1){
                current=this.orderList.length-1;
            }
            this.saveId=current;
             this.currentOrder=this.orderList[current];
             this.list[0].pic=this.orderList[current].zfb_pic;
             this.list[1].pic=this.orderList[current].wx_pic;
             this.list[2].pic=this.orderList[current].my_pic;
        },
        changPayment(){
            this.ewmId ++;
            if(this.ewmId>2){
                this.ewmId=0
            }
        },
         _getPayList(){
                var _that =this;
                _that.$axios.post('fifty_zone/fifty_order',{
                    'token':this.token         
                })
                .then((res)=>{
                    var list = res.data;
                    // console.log(list)
                    if(list.status == 200){
                        _that.orderList =list.data
                        _that.currentOrder=list.data[0]
                             _that.list[0].pic=list.data[0].zfb_pic;
                            _that.list[1].pic=list.data[0].wx_pic;
                            _that.list[2].pic=list.data[0].my_pic;
                    }else{
                        _that.$toast(list.msg)
                    }
                })
            },
           
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
                margin-bottom 100px
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
       .shiftShop
            height:100px;
            width:50%;
            margin:0 auto;
            display:flex;
            .shopMid
                text-align:center;
                line-height:100px;
                flex:1;
                height:100px;
                widht:20px;
                font-size:16px;
            .goright
               transform:rotate(180deg);
              
</style>

