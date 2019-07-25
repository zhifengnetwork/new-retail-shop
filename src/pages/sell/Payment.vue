<template>
    <div class="payment">
      	<!-- 头部组件 -->
		<TopHeader custom-title="订单支付" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <!-- CONTENT START --> 
        <div class="content">
            <div class="c_list" v-for="(list,index) in orderList" :key="index">
                    <div class="shiftShop">
                        <div class="shopMid">{{list.fz_order_id}}</div>
                    </div>
                    <div class="img">
                        <div class="-list-msg">
                            <p>ID: {{list.shop_user_id}}</p>
                            <p>{{list.mobile}}</p>
                        </div>
                        <img class="-imgs" :src="list.img" />
                    </div>

                   <div class="inner" v-show="list.ewmId == 0">  
                        <div class="-img2">
                            <img :src="list.wx_pic" />
                        </div>
                        <div class="-payment-">
                            <span class="-payment-1">微信收款</span>
                            <span class="-payment-2"  @click="changPayment(index,0)">切换</span>
                        </div>
                    </div>
                    <div class="inner" v-show="list.ewmId == 1" >  
                        <div class="-img2">
                            <img :src="list.zfb_pic" />
                        </div>
                        <div class="-payment-">
                            <span class="-payment-1">支付宝收款</span>
                            <span class="-payment-2"  @click="changPayment(index,1)">切换</span>
                        </div>
                    </div>

                    <div class="inner" v-show="list.ewmId == 2" >  
                        <div class="-img2">
                            <img :src="list.my_pic" />
                        </div>
                        <div class="-payment-">
                            <span class="-payment-1">云闪付收款</span>
                            <span class="-payment-2"  @click="changPayment(index,2)">切换</span>
                        </div>
                    </div>


                    <!-- <div class="inner" v-for="(item,key) in list.list" :key="key" v-show="list.ewmId == key" >   
                        <div class="-img2">
                            <img :src="item.pic" />
                            {{item.pic}}
                        </div>
                        <div class="-payment-">
                            <span class="-payment-1">{{item.msg}}</span>
                            <span class="-payment-2"  @click="changPayment(index,key,$event)">切换</span>
                        </div>
                    </div> -->
                    <p class="-userinfo"><strong>联系方式: {{list.mobile}}</strong></p>
                    <input class="submit" type="button" value="确定" @click="comfirm(list.fz_order_id)"/>
            </div>
        </div>
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
            wet:0,
            pwet:0,
            sel:[],
        }
    },
    created(){
        this.$store.commit('showLoading')       //加载loading
        this._getPayList()
    },
   computed:{
        updatePrice(){
            let totalPrice=0;
            this.list.forEach((data)=>{
                if(data.selected==0){
                    totalPrice += new Number(data.goods_price) * new Number(data.goods_num);
                }
            })
            return totalPrice.toFixed(2);
        }
    },
    methods:{
        comfirm(fz_order_id){
            // console.log(fz_order_id)
            var _that =this;
            _that.$axios.post('fifty_zone/upload_proof',{
                'proof':'',
                'fz_order_id':fz_order_id,
                'token':this.$store.getters.optuser.Authorization            
            })
            .then((res)=>{
                var list = res.data;
                if(list.status === 200){
                    _that.$toast('提交成功...')
                    // console.log(this.orderList)
                    setTimeout(() => {
                        // _that.$router.push('/Payment')
                        location.reload() 
                    },2000)

                    if(this.orderList.length<1){

                    }
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
        changPayment(index,key){
            var t =key+1
            if(t>2){
                t =0
            }
            this.$set(this.orderList[index],'ewmId',t)
            this.$forceUpdate();
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
                        for(var i in _that.orderList){
                            _that.orderList[i].list  = _that.list
                            _that.orderList[i].ewmId = 0

                            _that.orderList[i].list[0].pic =_that.orderList[i].zfb_pic
                            _that.orderList[i].list[1].pic =_that.orderList[i].wx_pic
                             _that.orderList[i].list[2].pic =_that.orderList[i].my_pic
                        }

                        // console.log(_that.orderList)
                        _that.$store.commit('hideLoading')
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
            .c_list
               margin-bottom: 20px
               background: #f5f5f5;
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
            width 50%
            height 88px
            background-color #ff4d4d
            border-radius 44px
            color #fff
            font-size 30px
            letter-spacing 5px
            display block
            margin 20px auto
            // position fixed
            // bottom 24px
            // left 24px
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

