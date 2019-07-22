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
                <!-- <div  class="shopMid iconfont icon-fanhui" v-on:click="shiftOrder(-1)"></div > -->
                <div class="shopMid">{{currentOrder.fz_order_id}}</div>
                <!-- <div  class="shopMid goright iconfont icon-fanhui" v-on:click="shiftOrder(1)"></div > -->
            </div>
            <div class="img">
                <div class="-list-msg">
                    <p>ID: {{currentOrder.shop_user_id}}</p>
                    <p>{{currentOrder.mobile}}</p>
                </div>
                <img class="-imgs" :src="currentOrder.img" />
            </div>
            <div class="inner" v-for="(item,key) in list" :key="key" v-show="key==ewmId" >   
                <div class="-img2">
                    <img :src="item.pic" />
                </div>
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
            </div>
            <p class="-userinfo"><strong>联系方式: {{currentOrder.mobile}}</strong></p>
        </div>
        <p class="height122"></p>
        <!-- <router-link :to="'sell/UploadDocuments?fz_order_id='+currentOrder.fz_order_id" > -->
        <input class="submit" type="button" value="确定" @click="comfirm"/>
        <!-- </router-link> -->
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
                {msg:'云闪付收款',id:2,pic:''}
            ],
            orderList:[],
            currentOrder:[],
            token:this.$store.getters.optuser.Authorization,

        }
    },
    created(){
        this.$store.commit('showLoading')       //加载loading
        this._getPayList()
    },
    methods:{
        comfirm(){
            var _that =this;
            _that.$axios.post('fifty_zone/upload_proof',{
                'proof':'',
                'fz_order_id':this.currentOrder.fz_order_id,
                'token':this.$store.getters.optuser.Authorization            
            })
            .then((res)=>{
                var list = res.data;
                if(list.status === 200){
                    _that.$toast('上传成功...')
                    setTimeout(() => {
                        // _that.$router.push('/Payment')
                        location.reload() 
                    },2000)
                }
                else if(res.data.status == 999){
					this.$store.commit('del_token'); //清除token
					setTimeout(()=>{
						this.$router.push('/Login')
					},1000)
				}
                else{
                    _that.$toast(list.msg)
                }
            })


        },
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
                    if(list.status == 200){
                        if(list.data.length<1){
                            this.$router.push('/user/PaycodeList')
                        }
                        _that.orderList =list.data
                        _that.currentOrder=list.data[0]
                        _that.list[0].pic=list.data[0].zfb_pic;
                        _that.list[1].pic=list.data[0].wx_pic;
                        _that.list[2].pic=list.data[0].my_pic;
                        _that.$store.commit('hideLoading')
                        // if(list.data[0].zfb_pic==null && list.data[0].wx_pic==null && list.data[0].my_pic==null){
                        //     this.$router.push('/user/PaycodeList')
                        // }
                    }
                    else if(res.data.status == 999){
                        this.$toast(res.data.msg)
                        this.$store.commit('del_token'); //清除token
                        setTimeout(()=>{
                            this.$router.push('/Login')
                        },1000)
                    }
                    else{
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
<style lang="stylus" scoped>
    .payment
        width 100%
        height 100%
        .content
            padding 24px 24px 30px
            .img
                width 701px
                height 280px
                border-radius 10px
                position relative
                .-list-msg
                    position absolute
                    top 20px
                    left 25px 
                    font-size 26px
                    color #fff
                    width 200px
                    text-align center
                    background rgba(0,0,0,0.3)
                    padding 6px
                    box-sizing border-box
                    border-radius 8px
                    p:nth-child(1)
                        margin-bottom 4px
                img 
                    border-radius 10px                   
            .inner
                margin 30px 60px
                padding 90px 0 0
                background #fff
                border-radius 10px
                .-img2 
                    margin 0 auto
                    width 280px
                    height 280px
                .-payment-
                    margin 60px 0 0
                    width 100%
                    text-align right
                    font-size 0
                    line-height 75px
                    .-payment-1
                        display inline-block
                        width 35%
                        color #151515 
                        font-size 30px
                    .-payment-2
                        display inline-block
                        margin 0 160px 0 50px
                        width 10%
                        color #ff6521
                        font-size 28px
                        box-sizing border-box
            .-userinfo
                font-size 28px
                text-align center
                line-height 55px
                .box-list
                    width: 100%
                    height: 500px
                    padding: 10px
        .height122
            width 100%
            height 122px
        .submit
            width 702px
            height 88px
            background-color #ff4d4d
            border-radius 44px
            color #fff
            font-size 30px
            letter-spacing 5px
            position fixed
            bottom 24px
            left 24px
       .shiftShop
            -height 100px
            width 50%
            margin 0 auto
            display flex
            .shopMid
                text-align center
                line-height 55px
                flex 1
                -height 100px
                widht 20px
                font-size 28px
            .goright
               transform rotate(180deg)
img 
    display block
    margin 0 auto
    width 100%
    height 100%               
              
</style>

