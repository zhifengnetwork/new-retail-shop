<template>
    <div class="Order">
        <TopHeader custom-title="我的订单" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <div class="tab-wrap">
            <!-- tab切换标题 -->
            <div class="tab-tit">
                <ul>
                    <li v-for="(item,index) in tabList"
                        :class="{active:index === nowIndex}"
                        @click="handleClick(index)"
                        :key="index">
                        {{item.tabTitle}}
                    </li>
                </ul>
            </div>

            <div class="tab-con">
                <ul>
                    <li v-show="nowIndex === 0">
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">交易成功</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/images/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                    <div class="good-sku">
                                        <span class="sku-coll">颜色:蓝色；尺寸:M码</span>
                                        <span class="price">￥368</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn">删除订单</span>
                                <span class="btn red">查看物流</span>
                            </div>
                        </div>
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待付款</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/images/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                    <div class="good-sku">
                                        <span class="sku-coll">颜色:蓝色；尺寸:M码</span>
                                        <span class="price">￥368</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn">取消订单</span>
                                <span class="btn red">去付款</span>
                            </div>
                        </div>
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待发货</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/images/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                    <div class="good-sku">
                                        <span class="sku-coll">颜色:蓝色；尺寸:M码</span>
                                        <span class="price">￥368</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn red">退款</span>
                            </div>
                        </div>
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待收货</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/images/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                    <div class="good-sku">
                                        <span class="sku-coll">颜色:蓝色；尺寸:M码</span>
                                        <span class="price">￥368</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn red">查看物流</span>
                                <span class="btn red">确认收货</span>
                            </div>
                        </div>
                    </li>
                    <li v-show="nowIndex === 1">
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待付款</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/images/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                    <div class="good-sku">
                                        <span class="sku-coll">颜色:蓝色；尺寸:M码</span>
                                        <span class="price">￥368</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn">取消订单</span>
                                <span class="btn red">去付款</span>
                            </div>
                        </div>
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待付款</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/images/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                    <div class="good-sku">
                                        <span class="sku-coll">颜色:蓝色；尺寸:M码</span>
                                        <span class="price">￥368</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn">取消订单</span>
                                <span class="btn red">去付款</span>
                            </div>
                        </div>
                    </li>
                    <li v-show="nowIndex === 2">
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待发货</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/images/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                    <div class="good-sku">
                                        <span class="sku-coll">颜色:蓝色；尺寸:M码</span>
                                        <span class="price">￥368</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn red">退款</span>
                            </div>
                        </div>
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待发货</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/images/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                    <div class="good-sku">
                                        <span class="sku-coll">颜色:蓝色；尺寸:M码</span>
                                        <span class="price">￥368</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn red">退款</span>
                            </div>
                        </div>
                    </li>
                    <li v-show="nowIndex === 3">
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待收货</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/images/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                    <div class="good-sku">
                                        <span class="sku-coll">颜色:蓝色；尺寸:M码</span>
                                        <span class="price">￥368</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn red">查看物流</span>
                                <span class="btn red">确认收货</span>
                            </div>
                        </div>
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待收货</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/images/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                    <div class="good-sku">
                                        <span class="sku-coll">颜色:蓝色；尺寸:M码</span>
                                        <span class="price">￥368</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn red">查看物流</span>
                                <span class="btn red">确认收货</span>
                            </div>
                        </div>
                    </li>
                    <li v-show="nowIndex === 4">
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待评价</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/images/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                    <div class="good-sku">
                                        <span class="sku-coll">颜色:蓝色；尺寸:M码</span>
                                        <span class="price">￥368</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn red">查看物流</span>
                                <span class="btn red">去评价</span>
                            </div>
                        </div>
                        <div class="item-card">
                            <div class="card-head">
                                <span class="order-date">2019-02-03 00:28:20</span>
                                <span class="order-state">待评价</span>
                            </div>
                            <div class="goods-item">
                                <div class="img-wrap">
                                    <img src="/static/images/order/00order-goods-img01.png" />
                                </div>
                                <div class="text">
                                    <h3>Haoduoyi2018秋季新品女装 欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣欧美宽松休闲套头卫衣</h3>
                                    <div class="good-sku">
                                        <span class="sku-coll">颜色:蓝色；尺寸:M码</span>
                                        <span class="price">￥368</span>
                                    </div>
                                </div>
                            </div>
                            <div class="total-bar">
                                <div class="total-count">共2件商品 </div>
                                <div class="payment">
                                    <span class="label">合计 : </span>
                                    <span class="price">￥736.00</span>
                                </div>
                            </div>
                            <div class="order-btn">
                                <span class="btn red">查看物流</span>
                                <span class="btn red">去评价</span>
                            </div>
                        </div>
                    </li>
                </ul>

                 <!-- 数据加载完提示 -->
                <div class="end-wrap">
                    <p>我是有底线哦~~</p>
                </div>

                <!-- 无数据 -->
                <div class="none" style="display:none">
                    <img src="/static/images/order/orderNone.png"/>
                    <p>亲，订单空空如也~</p>
                </div>
                <div class="addBtn" style="display:none">去添加订单</div>
            </div>

        </div>

    </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'Order',
    components: {
        TopHeader
    },
    data(){
        return{
            nowIndex:0,
            type:this.$route.query.type,
            // tab切换标题
            tabList:[
                {
                    tabTitle:"全部"
                },
                {
                    tabTitle:"待付款"
                },
                {
                    tabTitle:"待发货"
                },
                {
                    tabTitle:"待收货"
                },
                {
                    tabTitle:"待评价"
                }
            ],
            baseUrl:[],// 商品图片路径
            page:1,//页数
            ispage:true,//是否请求数据
            token:window.sessionStorage.getItem("token")
        }
    },
    methods:{
        // tab切换标题
        handleClick(index){
            this.nowIndex = index
            this.$router.push('/order?type='+index)
            this.type = this.$route.query.type
            this.dataRendering()
        },
        // 页面数据渲染
        dataRendering(){
            this.baseUrl = this.url
            this.nowIndex = parseInt(this.type)
            var type;
            if (this.nowIndex === 0) {
                type = "all"
            }
            if (this.nowIndex === 1) {
                type = "dfk"
            }
            if (this.nowIndex === 2) {
                type = "dfh"
            }
            if (this.nowIndex === 3) {
                type = "dsh"
            }
            if (this.nowIndex === 4) {
                type = "dpj"
            }
            if(this.ispage){

                var url = 'Order/order_list'
                var token = window.sessionStorage.getItem("token")
                this.$axios.get( url +'?type='+ type +'&page=' + this.page + '&token='+ token)
                .then( (res)=>{
                    console.log(res)
                })
                .catch((error) => {
                    alert('请求错误:'+ error)
                })

                // var params = new URLSearchParams()
                    // params.append('type', type)
                    // params.append('page', this.page)
                    // params.append('token', this.token)

                // this.$axios({
                //     method: "post",
				// 	   url: url,
				// 	   data: params
                // })
               
            }
        }
    }

}
</script>

<style lang="stylus" scoped>
.Order
    .tab-wrap
        .tab-tit
            border-top 2px solid #e6e6e6
            ul
                height 70px
                line-height 70px
                font-size 30px
                background-color #ffffff
                display flex
                align-items center
                justify-content space-between
                padding 0 24px
                box-sizing border-box
                margin-bottom 20px
                li
                    color #151515
                    border-bottom 4px solid transparent
                    &.active
                        border-color #f11010
                        color #f11010
        .tab-con
            padding 0 24px
            box-sizing border-box
            .item-card
                background-color #ffffff
                border-radius 8px
                box-shadow 0 0 8px #e6e6e6
                margin-bottom 14px
                .card-head
                    height 55px
                    border-bottom 2px solid #e6e6e6
                    display flex
                    align-items center
                    justify-content space-between
                    padding 0 36px
                    box-sizing border-box
                    .order-date
                        font-size 22px
                        color #151515
                    .order-state
                        font-size 24px
                        color #f20c0c
                .goods-item
                    display flex
                    padding 17px 38px 10px
                    box-sizing border-box
                    .img-wrap
                        width 160px
                        height 160px
                        text-align center
                        margin-right 44px
                        img 
                            max-width 100%
                    .text
                        flex 1
                        h3
                            font-size 24px
                            line-height 34px
                            font-weight normal
                            overflow hidden
                            text-overflow ellipsis
                            display -webkit-box
                            -webkit-line-clamp 2
                            -webkit-box-orient vertical
                            margin-bottom 15px
                        .good-sku
                            color #151515
                            font-size 24px
                            display flex
                            justify-content space-between
                            .sku-coll
                                font-size 22px
                        .count
                            text-align right 
                            font-size 24px
                .total-bar
                    height 40px
                    color #6f6f6f
                    display flex
                    justify-content flex-end
                    align-items center
                    margin-bottom 10px  
                    padding 0 38px
                    box-sizing border-box
                    .total-count
                        line-height 40px
                    .payment
                        margin-left 20px
                        font-size 30px
                        line-height 40px
                        .label
                            font-size 22px
                            position relative
                            top -2px
                        .price
                            color #151515
                            font-size 30px
                .order-btn
                    display flex
                    justify-content flex-end
                    padding 0 38px 36px
                    box-sizing border-box
                    .btn
                        width 130px
                        height 40px
                        line-height 40px
                        color #888888
                        text-align center
                        display inline-block
                        font-size 26px
                        border-radius 15px
                        border 2px solid #888888
                        margin-left 26px
                        &.red
                            color #f20c0c
                            border-color #f20c0c
                            background-color #faf8f5
            .end-wrap
                font-size 18px
                color #888888
                text-align center
                margin 30px auto
            .none
                text-align center
                margin-top 70px
                font-size 36px
                img
                    width 308px
                p
                    margin 70px auto
            .addBtn
                width 460px
                height 100px
                line-height 100px
                text-align center
                color #ffffff
                font-size 50px
                background-color #ea2028 
                margin 0 auto
                border-radius 46px              
                                


                

</style>
