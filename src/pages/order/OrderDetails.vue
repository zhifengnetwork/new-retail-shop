<template>
    <div class="orderDetails">
        <TopHeader custom-title="订单详情" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <div class="content">
            <!-- 商品信息 -->
            <div class="goods-list">
                <div class="single-item" v-for="(item,index) in orderDetails.goods_res">
                    <router-link :to="'/Details?goods_id='+ item.goods_id">
                        <div class="img-wrap">
                            <img :src="item.img" />
                        </div>
                        <div class="main">
                            <h3 class="goodsName">{{item.goods_name}}</h3>
                            <p class="specs">{{item.spec_key_name}}</p>
                            <p>
                                <span class="price">{{item.goods_price | formatMoney}}</span>
                                <span class="goodsNum">x{{item.goods_num}}</span>    
                            </p>
                        </div>
                    </router-link>
                </div>
                <!-- <div class="single-item">
                    <div class="img-wrap">
                        <img src="/static/images/order/00order-goods-img01.png" />
                    </div>
                    <div class="main">
                        <h3 class="goodsName">商品简介商品简介商品简介商品商品简介商品简介商品简介商品简介商品商品简介商品简介商品简介商品简介商品商品简介</h3>
                        <p>
                            <span class="price">82.00</span>
                            <span class="goodsNum">x2</span>    
                        </p>
                    </div>
                </div> -->
            </div>

            <!-- 基本信息 -->
            <div class="group-wrap">
                <h2 class="heading">基本信息</h2>
                <div class="group-line">
                    <div class="fl">订单编号</div>
                    <div class="fr">{{orderDetails.order_sn}}</div>
                </div>
                <div class="group-line">
                    <div class="fl">下单时间</div>
                    <div class="fr">{{orderDetails.add_time | formatDate}}</div>
                </div>
                <div class="group-line">
                    <div class="fl">收货地址</div>
                    <div class="fr">{{orderDetails.address}}</div>
                </div>
                <div class="group-line">
                    <div class="fl">收货人</div>
                    <div class="fr">{{orderDetails.consignee}}</div>
                </div>
                <div class="group-line">
                    <div class="fl">支付方式</div>
                    <div class="fr">{{pay_name}}</div>
                </div>
                <div class="group-line">
                    <div class="fl">配送方式</div>
                    <div class="fr">普通配送</div>
                </div>
                <div class="group-line">
                    <div class="fl">买家备注</div>
                    <div class="fr">{{orderDetails.user_note}}</div>
                </div>
            </div>

            <!-- 价格信息 -->
            <div class="group-wrap">
                <h2 class="heading">价格信息</h2>
                <div class="group-line">
                    <div class="fl">商品总价</div>
                    <div class="fr">{{orderDetails.goods_price | formatMoney}}元</div>
                </div>
                <div class="group-line">
                    <div class="fl">余额</div>
                    <div class="fr">{{orderDetails.user_money | formatMoney}}元</div>
                </div>
                <div class="group-line">
                    <div class="fl">运费</div>
                    <div class="fr">{{orderDetails.shipping_price | formatMoney}}元</div>
                </div>
                <div class="group-line">
                    <div class="fl">订单总额</div>
                    <div class="fr">{{orderDetails.order_amount | formatMoney}}元</div>
                </div>
            </div>

            <div class="height-120"></div>

        </div>
        <div class="action-bar" v-if="orderDetails.status === 1">
            <router-link :to="'/Pay/PayWay?order_id='+ orderDetails.order_id"><div class="payment-btn">立即付款</div></router-link>
        </div>
    </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'OrderDetails',
    components: {
        TopHeader
    },
    data(){
        return {
            orderDetails:{},
            pay_name:'',//支付方式
        }
    },
    mounted(){
        this.requestData();
    },
    methods:{
        requestData(){
            let url = 'Order/order_detail';
            let order_id = this.$route.query.order_id;
            this.$axios.post(url,{
                token:this.$store.getters.optuser.Authorization,
                order_id:order_id
            }).then((res) => {
                if(res.data.status === 200){
                    this.orderDetails = res.data.data;
                    this.pay_name = res.data.data.pay_type.pay_name;
                    console.log(this.orderDetails)
                }else{
                    this.$toast(res.data.msg)
                }
            })
        }
    },
    filters: {
        // 日期格式化
        formatDate: function (time) {
            let date = new Date(time*1000);
            let y = date.getFullYear();

            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;

            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;

            let h = date.getHours();
            h = h < 10 ? ('0' + h) : h;

            let m = date.getMinutes();
            m = m < 10 ? ('0' + m) : m;

            let s = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;

            return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
        },
        //格式化金钱
        formatMoney:function(val){
            return "¥" + parseInt(val).toFixed(2)
        }
    }
}
</script>

<style lang="stylus" scoped>
.orderDetails
    .TopHeader
        background-color #f2f2f2
    .content
        padding 0 24px
        box-sizing border-box
        .goods-list
            background-color #fff
            border-radius 10px
            margin-bottom 10px
            .single-item
                a
                    height 170px
                    display flex
                    padding 14px
                    box-sizing border-box
                    border-bottom 1px solid #f2f2f2
                    &:last-child
                        border-bottom none
                    .img-wrap
                        width 140px
                        height 140px
                        overflow hidden
                        display flex
                        justify-content center
                        align-items center
                        margin-right 25px
                        img
                            max-width 100%
                            max-height 100%
                            display block
                    .main
                        flex 1
                        .goodsName
                            color #151515
                            font-size 26px
                            line-height 36px
                            font-weight normal
                            display -webkit-box
                            -webkit-box-orient vertical
                            -webkit-line-clamp 2
                            overflow hidden
                            margin-bottom 25px
                        .specs
                            margin-bottom 10px
                            color #ccc
                        p
                            .price
                                color #fa0606
                                font-size 30px
                                margin-right 50px
                            .goodsNum
                                font-size 24px
                                color #151515
        .group-wrap
            width 100%
            background-color #fff
            border-radius 10px
            margin-bottom 10px
            padding 14px 14px 2px 
            box-sizing border-box
            .heading
                height 50px
                line-height 50px
                font-size 28px
                margin-bottom 10px
            .group-line
                height 50px
                font-size 26px
                color #151515
                display flex
                justify-content space-between
                align-items center
                margin-bottom 10px
        .height-120
            width 100%
            height 120px
    .action-bar
        width 100%
        height 120px
        background-color #ffffff
        position fixed
        left 0
        bottom 0
        z-index 9
        .payment-btn
            width 218px
            height 120px
            line-height 120px
            text-align center
            color #fff
            font-size 30px
            background-color #f70a0a
            float right 
            



</style>
