<template>
    <div class="confrim-order">
      	<!-- 头部组件 -->
		<TopHeader custom-title="订单确认" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <div class="content">
            <div class="user-info-wrap mb-10">
                <router-link to="/user/Address" class="user-info">
                    <i class="iconfont icon-ditu"></i>
                    <div class="-info-list">
                        <p class="-list-a">
                            <strong class="mr-44">周鹏</strong>
                            <strong>18000001882</strong>
                        </p>
                        <p class="-list-b">广东省广州市州市白云区嘉禾汇726</p>
                    </div>
                    <div class="-list-edit"><i class="iconfont icon-bianji"></i></div>
                </router-link>
                <img class="-info-img" src="/static/images/order/color_line.png" />
            </div>
            <!-- GOODS START -->
            <div class="goods-list">
                <router-link to="/Details" class="g-list-a">
                    <img class="-list-img" src="/static/images/order/goods_4.png" />
                    <div class="-detial-">
                        <p class="-d-msg apostrophe">商品简介商品简介商品简介商品简介商品简介</p>
                        <p class="-d-msg2">
                            <span>￥ {{goodsPrice}}</span>
                            <span>x 2</span>
                        </p>
                    </div>
                </router-link>
                <div class="g-list-b">
                    <div class="-list-1">
                        <span class="-b-subtitle">购买数量</span>
                        <span class="-option-">
                            <i class="subling iconfont icon-jian-" @click="reducingNumber()"></i>
                            <input class="inp" type="number" :value="goodsNumber" @change="changNumber($event)"/>
                            <i class="puls iconfont icon-jia"  @click="addNumber()"></i>
                        </span>
                    </div>
                    <div class="-list-1">
                        <span class="-b-subtitle">配送方式</span>
                        <span class="-b-msg">普通配送</span>
                        <span class="">快递 免费</span>
                    </div>
                    <div class="-list-1">
                        <span class="-b-subtitle">订单备注</span>
                        <input type="text"  placeholder-class="placehor" placeholder="选填 请先和商家协商一致" />  
                    </div>
                    <div class="goods-price">
                        <span>共2件</span>
                        <span>共计：</span>
                        <span>￥ {{updatePrice}}</span>
                    </div>
                </div>
            </div>
            <!--  -->
            <div class="goods-list goods-list2">
                <div>
                    <strong>使用余额</strong>
                    <p  v-show="checked" class="-list2-msg">余额：5630.00</p>
                </div>
                <van-checkbox v-model="checked"></van-checkbox>
            </div>
        </div>
        <!-- FOOTER START -->
        <div class="footer-height"></div>
        <div class="footer">
            <div class="footer-a">
                <strong class="f-a-a"> 实付款：</strong>
                <div class="f-a-b">
                    <span class="colorRed size-20">￥<strong class="size-36">{{updatePrice}}</strong></span>
                    <span class="-freight">免运费</span>
                </div>
            </div>
            <div class="footer-b">立即付款</div>
        </div>
    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    data() {
        return {
            checked: true,
            goodsNumber:2,
            goodsPrice:'3860.00'
        };
    },
    methods:{
        reducingNumber(){
            var val =parseInt(this.goodsNumber) - 1 
           if(val<=1){val =1}
           this.goodsNumber=val
        },
        changNumber(e){
            var val =e.target.value;
            if(val<1 || isNaN(val)){
                return this.$toast('请输入正确的数量');
            }
            this.goodsNumber=val
        },
        addNumber(){
            var val =parseInt(this.goodsNumber) + 1
            this.goodsNumber=val
        }
    },
    computed:{
        updatePrice(){
            var totalPrice =new Number(this.goodsNumber) * new Number(this.goodsPrice)
            return totalPrice.toFixed(2)
        }
    },
    components:{
        TopHeader
    }
}
</script>

<style lang="stylus">
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
            font-size:30px
        .-list2-msg
            color:#757575
            margin-top:25px
        .van-checkbox__icon .van-icon
            border-color:#434343
        .van-checkbox__icon--checked .van-icon 
            background-color: #ff7800;
            border-color: #ff7800;

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



