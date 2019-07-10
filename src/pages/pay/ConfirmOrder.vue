<template>
    <div class="confrim-order">
      	<!-- 头部组件 -->
		<TopHeader custom-title="订单确认" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <div v-if="carId!=''" class="com-list">
            <div class="content">
                <div class="user-info-wrap mb-10">
                    <div @click="toEditAddress(addrRes.address_id)"  class="user-info">
                        <i class="iconfont icon-ditu"></i>
                        <div class="-info-list">
                            <p class="-list-a">
                                <strong class="mr-44">{{addrRes.consignee}}</strong>
                                <strong>{{addrRes.mobile}}</strong>
                            </p>
                            <p class="-list-b">
                                {{addrRes.address}}
                            </p>
                        </div>
                        <div class="-list-edit"><i class="iconfont icon-bianji"></i></div>
                    </div>
                    <img class="-info-img" src="/static/images/order/color_line.png" />
                </div>
                <!-- GOODS START -->
                <div class="goods-list">
                    <router-link :to="'/Details?goods_id='+item.goods_id"  v-for="(item,index) in goodsList.goods_res" :key="index" class="g-list-a">
                        <img class="-list-img" :src="item.img" />
                        <div class="-detial-">
                            <p class="-d-msg apostrophe">{{item.goods_name}} {{item.spec_key_name}}</p>
                            <p class="-d-msg2">
                                <span>￥ {{item.goods_price}}</span>
                                <span>x {{item.goods_num}}</span>
                            </p>
                        </div>
                    </router-link>
                    <div class="g-list-b">
                        <!-- <div class="-list-1">
                            <span class="-b-subtitle">购买数量</span>
                            <span class="-option-">
                                <i class="subling iconfont icon-jian-" @click="reducingNumber()"></i>
                                <input class="inp" type="number" :value="goodsNumber" @change="changNumber($event)"/>
                                <i class="puls iconfont icon-jia"  @click="addNumber()"></i>
                            </span>
                        </div> -->
                        <div class="-list-1">
                            <span class="-b-subtitle">配送方式</span>
                            <span class="-b-msg">普通配送</span>
                            <span class="">快递 {{goodsList.shipping_price}} 元</span>
                        </div>
                        <div class="-list-1">
                            <span class="-b-subtitle">订单备注</span>
                            <input type="text"  placeholder-class="placehor" v-model="userNote" placeholder="选填 请先和商家协商一致" />  
                        </div>
                        <div class="goods-price">
                            <span>共 {{count}} 件</span>
                            <span>共计：</span>
                            <span>￥ {{updatePrice}} </span>
                        </div>
                    </div>
                </div>
                <!--  -->
                <!-- <div class="goods-list goods-list2">
                    <div class="goods-list-a" v-for="(pay,key) in goodsList.pay_type" :key="key">
                        <div class="-list-a-">
                            <span>{{pay.pay_name}}</span>
                            <div v-show="pay_type==1 && key==1">
                                <p  class="-list2-msg">余额：{{goodsList.remainder_money}}</p>
                            </div>
                        </div>
                        <van-radio-group v-model="pay_type">
                            <van-radio  @change="this.pay_type ==pay.pay_type" :name="pay.pay_type"></van-radio>
                        </van-radio-group>
                    </div>
                </div> -->
            </div>

            <!-- 密码输入框 -->
            <!-- <van-popup v-model="showPwd" class="popup"  @click-overlay="hidePwd()">
            <van-password-input
            :value="payPassword"
            info="密码为 6 位数字"
            @focus="showKeyboard = true"
            />
            </van-popup> -->

            <!-- 数字键盘 -->
            <!-- <van-number-keyboard
            :show="showKeyboard"
            @input="onInput"
            @delete="onDelete"
            @blur="showKeyboard = false"
            /> -->

            <!-- FOOTER START -->
            <div class="footer-height"></div>
            <div class="footer">
                <div class="footer-a">
                    <strong class="f-a-a"> 实付款：</strong>
                    <div class="f-a-b">
                        <span class="colorRed size-20">￥<strong class="size-36">{{updatePrice}}</strong></span>
                        <span class="-freight" v-show="goodsList.shipping_price ==0">免运费</span>
                        <!-- <span class="-freight">{if goodsList.shipping_price ==0} 免运费 {else} {{goodsList.shipping_price}} {/if}</span> -->
                    </div>
                </div>
                <div class="footer-b" @click="topay()">提交订单</div>
            </div>
        </div>
    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    data() {
        return {
            checked: true,
            count:0,             //下单商品件数
            goodsList:[],        //商品列表
            userNote:"",         //下单备注
            addrRes:{},          //地址列表
            pay_type:1,         //支付方式
            carId:"",           //购物车id
            // order_id:'',         //订单id
            // payPassword:'',      //支付密码
            // showPwd:false,
            // showKeyboard: false,
            token:this.$store.getters.optuser.Authorization,
        };
    },
    created(){
        var info =JSON.parse(sessionStorage.getItem('cartInfo'))
        if(typeof(info.cart_id)!="undifined"){
            this.carId=info.cart_id
            console.log(this.carId)
        }
    },
    mounted(){  
       
        this._getCartInfo()
        
    },
    methods:{
        _getCartInfo(){
            var _that =this
            _that.$axios.post('Order/temporary',{
                'cart_id':this.carId,
                'token':_that.token
            })
            .then((res)=>{
                var list = res.data;
                if(list.status == 200){
                    _that.goodsList =list.data
                    _that.addrRes =_that.goodsList.addr_res
                    _that.count =_that.goodsList.goods_res.length
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
        toEditAddress(address_id){
            this.$router.push({
                path: '/user/Address',
                params: {'address_id': address_id}
            })
        },
        topay(){
            var _that =this
            _that.$axios.post('Order/submitOrder',{
                'cart_id': _that.carId,
                'address_id': _that.addrRes.address_id,
                'pay_type':_that.pay_type,
                'user_note':_that.userNote,
                'token': _that.token
            })
            .then((res)=>{
                var list = res.data;
                if(list.status == 200){
                    this.order_id = list.data
                   
                    // if(_that.pay_type == 1){
                    //     this.showPwd = true;
                    //     this.showKeyboard = true;
                    // }else{
                        
                    // }

                    // _that.$toast({message:"下单成功,正在跳转...",duration:1000})
                    this.$router.push({
                        path: '/Pay/PayWay?order_id=' +this.order_id,
                        // name: 'PayWay',
                        // params: {'cart_id': this.getSlectedGoodsCartID()}
                    })
                    
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

        /**
         * 余额支付:输入密码
         */
        // onInput(key) {
        //     var _that =this
        //     _that.payPassword = (_that.payPassword + key).slice(0, 6);
        //     if(_that.payPassword.length === 6){
        //         // 关闭密码输入
        //         _that.showKeyboard = false;
        //         _that.showPwd = false;
        //         _that.payPassword = '';
 
        //         // 请求数据
        //         let url = 'pay/payment';
        //         _that.$axios.post(url,{
        //             token:_that.token,
        //             order_id:_that.order_id,
        //             pay_type:_that.pay_type
        //         }).then((res)=>{
        //             if(res.data.status === 200){    
        //                 setTimeout(() => {
        //                     _that.$router.push('/Pay/PaySucceed')
        //                 },2000)
                        
        //             }else{
        //                 // 余额支付失败
        //                 // this.$toast(res.data.msg);
        //                 // setTimeout(() => {
        //                 //     console.log("支付失败，2s跳转到支付失败页面")
        //                 //     this.$router.push('/Pay/PayFail')
        //                 // },2000)
                           
        //             }
        //         })


        //     }
        // },
        /**
         * 删除密码
         */
        onDelete() {
            this.payPassword = this.payPassword.slice(0, this.payPassword.length - 1);
        },
        /**
         * 关闭密码蒙层，清空密码
         */
        hidePwd(){
            this.showPwd=false;
            this.payPassword = '';
        }
    },
    computed:{
        updatePrice(){
            var _that =this
            var goods_res = _that.goodsList.goods_res,
                price =0,
                subtotal =0,
                totalPrice
            for(var i in goods_res){
               
                price = new Number(price) + new Number(goods_res[i].subtotal_price) 
                 console.log(price)
            }
            totalPrice = price + new Number(_that.goodsList.shipping_price)
            return totalPrice.toFixed(2)
        }
    },
    components:{
        TopHeader
    }
}
</script>

<style lang="stylus" scoped>
    .confrim-order
        .colorRed
            color:#f70a0a
        .size-20
            font-size:20px
        .size-36
            font-size:36px
        .placehor
            font-size 18px
            color:#999
        .mr-44
            margin-right :44px
        .mb-10
            margin-bottom:10px
        .content
            padding:24px
            color:#151515
            .user-info-wrap
                position:relative
                padding:20px 20px 25px
                background: #fff
                border-radius:10px
                .user-info
                    display:flex
                    align-items :center
                    .icon-ditu
                        font-size:40px
                        color: #43c439
                        margin-right:55px
                    .-info-list
                        margin-right:20px
                        .-list-a
                            color:#151515
                            font-size:28px
                            margin-bottom:25px
                        .-list-b
                            font-size 24px
                            color:#555555
                    .-list-edit
                        margin-left :auto
                        .iconfont
                            font-size:30px;
                            color: #7f7f7f;
                .-info-img
                    width :94%
                    height:10px
                    position:absolute
                    bottom :0
            .goods-list      
                padding 20px
                border-radius:10px
                .g-list-a
                    display :flex
                    align-items :center
                    color: #151515;
                    margin-bottom: 15px
                    .-list-img
                        width: 220px
                        height: 221px
                    .-detial-
                        margin-left:25px
                        .-d-msg
                            font-size 28px
                            font-weight:bold
                            margin-bottom :30px
                            oeverflow:hidden
                        .-d-msg2
                            font-size 24px
                        
                .g-list-b
                    margin-top:25px
                    .-list-1
                        display :flex
                        align-items :center
                        margin-bottom:50px
                        .-b-subtitle
                            margin:0 25px 0 138px
                            font-size:26px
                        .-option-
                            border: 2px solid #e6e6e6;
                            width: 200px;
                            height: 40px;
                            line-height :40px;
                            display :flex;
                            align-items :center;
                            justify-content:space-between;
                            border-radius: 20px;
                            text-align:center;
                            margin-left:115px
                            .iconfont
                                width:41px;
                                height:100%;
                                font-size: 12px;
                            .puls
                                border-left:1px solid #e6e6e6;
                            .subling
                                border-right:1px solid #e6e6e6;
                                
                            .inp
                                width:121px;
                                text-align: center;
                                height:inherit;
                                font-size:24px;
                                font-weight:bold;
                        .-b-msg
                            color:#999
                            margin-right:40px
                    .goods-price
                        font-size:26px
                        text-align:center
                        span:nth-child(1)
                            color:#9d9d9d
                        span:nth-child(3)
                            font-size: 30px;
                            color: #ff112f;
            .goods-list2
                margin-top:25px
                display:flex
                align-items :center
                justify-content:space-between
                flex-wrap :wrap
                font-size:30px
                .goods-list-a
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 15px;
                    font-size:28px
                    .-list-a-
                        width:89%
                        .van-field__control
                        .-list-a-a
                            display flex
                            align-items center
                            color #757575
                            font-size:28px
                            .van-cell
                                padding 0
                                color: #151515;
                            
            .-list2-msg
                color:#757575
                margin-top:25px
            .van-radio__icon .van-icon
                border-color:#434343
            .van-radio__icon--checked .van-icon
                background-color: #ff7800;
                border-color: #ff7800;
        .popup
            width 100%
            .van-password-input__security li:first-child
                border-left 1px solid #999
            .van-password-input__security li
                border 1px solid #999
                border-left 0
            .van-password-input
                padding 30px 0 20px
        .van-number-keyboard
            z-index 3000!important

        .footer-height
            width :100%;
            height:140px;
        .footer
            position :fixed;
            bottom:0;
            width :100%;
            height:120px;
            left:0;
            background:#fff;
            z-index :2;
            box-shadow: 0px 0px 5px 0px #cccccc;
            display :flex;
            align-items:center
            .footer-a
                width:530px;
                padding-left:28px;
                display:flex;
                .f-a-a
                    display:flex;
                    align-items:center;
                    margin-right: 40px;
                .f-a-b
                    .-freight
                        margin:0 35px
                        font-size 24px
                        color: #757575;
            .footer-b
                width:221px;
                background:#f30c0c;
                color:#fff;
                line-height:120px;
                text-align: center;
                font-size:30px;
                font-weight:bold;
         
</style>



