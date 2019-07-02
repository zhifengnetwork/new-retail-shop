<template>
    <div class="Details">
        <!-- 头部组件 -->
		<TopHeader custom-title="商品详情" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <!-- 产品图轮播 -->
        <div class="detailsSwiper">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <img src="/static/images/details/00detailsSwiper-img01.png" />
                </van-swipe-item>
                <van-swipe-item>
                    <img src="/static/images/details/00detailsSwiper-img01.png" />
                </van-swipe-item>
                <van-swipe-item>
                    <img src="/static/images/details/00detailsSwiper-img01.png" />
                </van-swipe-item>
                <van-swipe-item>
                    <img src="/static/images/details/00detailsSwiper-img01.png" />
                </van-swipe-item>
            </van-swipe>
        </div>

         <!-- 主内容 -->
        <div class="content">
            <div class="goodsInfo">
                <div class="price">
                    <span class="discount-price">￥569.00</span>
                    <span class="original-price">原价￥569.00</span>
                </div>
                <!-- 商品名称 -->
                <div class="goodsName">
                    <h1>青年说是你发手机话费连衣裙连衣裙青年说是你发手机话费连衣裙连衣裙</h1>
                </div>
                <div class="group-warp">
                    <div class="g-option">
                        <span class="-subtitle"> 配送</span>
                        <div class="-text"> 广州白云区</div>
                    </div>
                    <div class="g-option">
                        <span class="-subtitle"> 运费</span>
                        <div class="-text"> 免运费</div>
                    </div>
                    <div class="g-option">
                        <span class="-subtitle"> 规格</span>
                        <div class="-text"> 显示默认规格</div>
                    </div>
                </div>

            </div>

            <!-- tab切换 -->
            <div class="tab-content">
                <van-tabs v-model="tabActive">
                    <van-tab title="商品详情">
                        <div class="details-wrap">
                            <img src="/static/images/details/00details-img01.png" />
                        </div>
                    </van-tab>
                    <van-tab title="参数">
                        <div class="params-wrap">
                            <ul class="param-list">
                                <li>
                                    <div class="param-name">商品编号 </div>
                                    <div class="param-value">55666666</div>
                                </li>
                                <li>
                                    <div class="param-name">面料</div>
                                    <div class="param-value">蕾丝</div>
                                </li>
                                <li>
                                    <div class="param-name">使用尺寸</div>
                                    <div class="param-value">S M L XL</div>
                                </li>
                                <li>
                                    <div class="param-name">款式</div>
                                    <div class="param-value">中长款</div>
                                </li>
                                <li>
                                    <div class="param-name">风格</div>
                                    <div class="param-value">其他</div>
                                </li>
                                <li>
                                    <div class="param-name">图案</div>
                                    <div class="param-value">碎花</div>
                                </li>
                            </ul>
                        </div>

                    </van-tab>
                    <van-tab title="商品评价(891)">
                        <div class="comment-wrap">
                            <ul class="comment-list">
                                <li>
                                    <div class="eval-user">
                                        <div class="user">
                                            <div class="avatar">
                                                <img src="/static/images/details/00avatar01.png" />
                                            </div>
                                            <div class="text">
                                                <span class="name">小腊肉</span>
                                                <span class="date">2019-05-06</span>
                                            </div>
                                        </div>
                                        <div class="score">
                                            <van-rate
                                                v-model="rateVal"
                                                icon="like-o"
                                                void-icon="like-o"
                                                color="#f70a0a"
                                                readonly
                                            />
                                        </div>
                                    </div> 
                                    <div class="eval-content">
                                        <p>你的衣服最好的 快递也好快</p>
                                    </div>
                                    <div class="imgView">
                                        <span><img src="static/images/details/evaluation-img01.png"></span>
                                        <span><img src="static/images/details/evaluation-img01.png"></span>
                                        <span><img src="static/images/details/evaluation-img01.png"></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="eval-user">
                                        <div class="user">
                                            <div class="avatar">
                                                <img src="/static/images/details/00avatar01.png" />
                                            </div>
                                            <div class="text">
                                                <span class="name">小腊肉</span>
                                                <span class="date">2019-05-06</span>
                                            </div>
                                        </div>
                                        <div class="score">
                                            <van-rate
                                                v-model="rateVal"
                                                icon="like-o"
                                                void-icon="like-o"
                                                color="#f70a0a"
                                                readonly
                                            />
                                        </div>
                                    </div> 
                                    <div class="eval-content">
                                        <p>你的衣服最好的 快递也好快</p>
                                    </div>
                                     <div class="imgView">
                                        <span><img src="static/images/details/evaluation-img01.png"></span>
                                        <span><img src="static/images/details/evaluation-img01.png"></span>
                                        <span><img src="static/images/details/evaluation-img01.png"></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="eval-user">
                                        <div class="user">
                                            <div class="avatar">
                                                <img src="/static/images/details/00avatar01.png" />
                                            </div>
                                            <div class="text">
                                                <span class="name">小腊肉</span>
                                                <span class="date">2019-05-06</span>
                                            </div>
                                        </div>
                                        <div class="score">
                                            <van-rate
                                                v-model="rateVal"
                                                icon="like-o"
                                                void-icon="like-o"
                                                color="#f70a0a"
                                                readonly
                                            />
                                        </div>
                                    </div> 
                                    <div class="eval-content">
                                        <p>你的衣服最好的 快递也好快</p>
                                    </div>
                                     <div class="imgView">
                                        <span><img src="static/images/details/evaluation-img01.png"></span>
                                        <span><img src="static/images/details/evaluation-img01.png"></span>
                                        <span><img src="static/images/details/evaluation-img01.png"></span>
                                    </div>
                                </li>
                                <li>
                                    <div class="eval-user">
                                        <div class="user">
                                            <div class="avatar">
                                                <img src="/static/images/details/00avatar01.png" />
                                            </div>
                                            <div class="text">
                                                <span class="name">小腊肉</span>
                                                <span class="date">2019-05-06</span>
                                            </div>
                                        </div>
                                        <div class="score">
                                            <van-rate
                                                v-model="rateVal"
                                                icon="like-o"
                                                void-icon="like-o"
                                                color="#f70a0a"
                                                readonly
                                            />
                                        </div>
                                    </div> 
                                    <div class="eval-content">
                                        <p>你的衣服最好的 快递也好快</p>
                                    </div>
                                     <div class="imgView">
                                        <span><img src="static/images/details/evaluation-img01.png"></span>
                                        <span><img src="static/images/details/evaluation-img01.png"></span>
                                        <span><img src="static/images/details/evaluation-img01.png"></span>
                                    </div>
                                </li>
                            </ul>

                             <!-- 数据加载完提示 -->
                            <div class="end-wrap">
                                <p>我是有底线哦~~</p>
                            </div>

                        </div>
                    </van-tab>
                </van-tabs>
            </div>

        </div>
        
        <!-- 商品规格1 -->


        <!-- 商品规格2 -->
        <!-- <van-sku
            v-model="showBase"
            :sku="sku"
            :goods="sku.goods"
        >
            <template slot="sku-actions" slot-scope="props">
                <div class="van-sku-actions">
                    <van-button
                        square
                        size="large"
                        type="danger"
                    >
                        确定
                    </van-button>
                </div>
            </template>
        </van-sku> -->

        <!-- 底部菜单 -->
        <div class="bottom-height"></div>
        <div class="bottom-bar">
            <ul class="-bar-list">
                <li class="-list-a">
                    <router-link to="/user/Collect">
                        <i class="iconfont icon-aixin"></i>
                        <span>收藏</span>
                    </router-link>
                    
                </li>
                <li class="-list-a">
                    <i class="iconfont icon-54"></i>
                    <span>客服</span>
                </li>
            </ul>
            <div class="-bar-list">
                <input class="bar-btn-1" type="button" @click="addToCart()" value="加入购物车"/>
                <input class="bar-btn-2" type="button" @click="toBay()" value="立即购买"/>
            </div>
        </div>

    </div>
</template>

<script>
import Vue from 'vue'
import AreaList from './area'
import TopHeader from "@/pages/common/header/TopHeader"

export default {
    name:'Details',
    components:{
        TopHeader,
        // GoodsAction,
    },
    data(){
        return {
            goodsId:this.$route.query.goods_id,//商品id
            tabActive: 0,//tab选中
            rateVal: 3,//评分当前分值
            areaShow:false,//省市区上拉
            address:'广州白云区',//地址
            areaList:AreaList,// 指定数据源
            couponShow:false,//优惠券上拉菜单
            skuShow:false,//规格
            value: 1,//步进器默认值
            
            showBase:false,
            sku: {
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                        k: '颜色', // skuKeyName：规格类目名称
                        v: [
                            {
                            id: '30349', // skuValueId：规格值 id
                            name: '红色', // skuValueName：规格值名称
                            imgUrl: 'https://img.yzcdn.cn/1.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
                            },
                            {
                            id: '1215',
                            name: '蓝色',
                            imgUrl: 'https://img.yzcdn.cn/2.jpg'
                            }
                        ],
                        k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    },
                    {
                        k: '尺码',
                        v: [
                            {
                                id: '1193',
                                name: 'S',
                            },
                            {
                                id: '222',
                                name: 'M',
                            }
                        ],
                        k_s: 's2'
                    }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                    id: 2259, // skuId，下单时后端需要
                    price: 100, // 价格（单位分）
                    s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
                    s2: '1193', // 规格类目 k_s 为 s2 的对应规格值 id
                    s3: '0', // 最多包含3个规格值，为0表示不存在该规格
                    stock_num: 110 // 当前 sku 组合对应的库存
                    }
                ],
                price: '1.00', // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                hide_stock: false, // 是否隐藏剩余库存
                goods: {
                    // 商品标题
                    title: '测试商品',
                    // 默认商品 sku 缩略图
                    picture: 'https://img.yzcdn.cn/2.jpg'
                },
            },

        }
    },
    methods:{
        addToCart(){
            this.$toast("添加成功,可直接去购物车下单")
        },
        toBay(){
            this.$router.push({path: '/pay/ConfirmOrder',name:'ConfirmOrder'})
        }


    }
}
</script>

<style lang="stylus" scoped>
a
    color:#151515
.Details
    background-color #ffffff
    // 产品主图轮播
    .detailsSwiper
        img 
            width 100%
            display block
    .content
        padding-bottom 128px
        box-sizing border-box
        .price
            height 60px
            line-height 60px
            .discount-price
                font-size 30px
                color #f30c0c
                margin-right:40px
            .original-price
                font-size 26px
                color #838383
        .goodsInfo
            padding 0 25px 25px
            box-sizing border-box
            .g-option
                display:flex
                align-items: center
                font-size:26px
                margin-bottom:25px
                color:#3a3a3a
                .-subtitle
                    display:inline-block
                    width:96px
            .goodsName
                margin 0 auto 30px
                h1
                    font-size 26px
                    color #151515
                    line-height 36px
                    font-weight normal
                    display -webkit-box
                    -webkit-box-orient vertical
                    -webkit-line-clamp 2
                    overflow hidden
            .group-warp
                background #f8f8f8
                border-radius 8px
                padding 10px 20px
                box-sizing border-box
                .van-cell-group
                    background-color #f8f8f8
                    font-size 24px
                    .van-cell
                        background-color #f8f8f8
                        padding 4px 0
                        .label
                            width 100px
                            font-size 26px
                            margin-right 10px
                            display inline-block
                        .text
                            font-size 26px
                            color #575757
                        .size22
                            font-size 22px
                            float right
                .van-hairline--top-bottom::after,.van-cell:not(:last-child)::after
                    border none
                .select-wrap /deep/ .van-cell__value
                    flex none
        .tab-content
            color:#151515
            .van-tabs >>> .van-hairline--top-bottom::after
                border none
            .van-tabs >>> .van-tabs__content
                margin-top 30px
            .van-tabs >>> .van-ellipsis
                width 100%
                height 100%
                font-size 30px
                background url("/static/images/details/line-right.png") right  center no-repeat
                background-size 2px 27px
            .van-tabs >>> .van-tab--active
                color #f70a0a
            .van-tabs >>> .van-tab:last-child span
                background none
            // 商品详情
            .details-wrap
                img
                    width 100% 
            // 参数
            .params-wrap
                width 100%
                padding 0 25px
                box-sizing border-box
                .param-list
                    li  
                        height 58px
                        font-size 26px
                        color #414040
                        display flex
                        align-items center
                        border 1px solid #c1c1c1
                        border-bottom none
                        &:last-child
                            border-bottom 1px solid #c1c1c1
                        .param-name
                            width 175px
                            height 100%
                            line-height 58px
                            border-right  1px solid #c1c1c1
                            padding-left 34px
                            box-sizing border-box
                        .param-value
                            flex 1
                            padding-left 28px
                            box-sizing border-box
            // 商品评论
            .comment-wrap
                // padding 0 25px
                // box-sizing border-box
                .comment-list
                    li
                        color #4a4949
                        background-color #ffffff
                        border-radius 8px
                        margin-bottom 10px
                        border-bottom 2px solid #eeeeee
                        padding 30px 40px
                        box-sizing border-box
                        .eval-user
                            height 60px
                            display flex
                            justify-content space-between
                            align-items center
                            margin-bottom 20px
                            .user
                                display flex
                                align-items center
                                .avatar
                                    width 60px
                                    height 60px
                                    margin-right 20px
                                    img 
                                        width 100%
                                        display block
                                .text
                                    font-size 26px
                                    span 
                                        display block
                                        line-height 30px
                                    .date
                                        font-size 20px
                                        color #999 
                                        margin-top 10px
                        .eval-content
                            margin-bottom 20px
                            p
                                font-size 22px
                        .imgView
                            overflow hidden
                            span
                                width 100px
                                height 100px
                                display flex
                                align-items center
                                justify-content center
                                float left
                                margin-right 20px
                                border-radius 5px
                                overflow hidden
                                img
                                    max-width 100%
                                    max-height 100%
                .end-wrap
                    font-size 20px
                    color #888888
                    text-align center
                    margin 30px auto

    .bottom-height
        width:100%
        height:100px
        align-items: center
    .bottom-bar
        border-top:1px solid #eee
        position:fixed
        width:100%
        height:98px
        line-height:98px
        background:#fff
        bottom:0
        left:0
        z-index:100
        display:flex
        .-bar-list
            flex:0 0 50%
            display:flex
            text-align:center
            font-size:28px
            .-list-a
                width:50%
                .iconfont
                    vertical-align :middle  
                .icon-54
                    font-size:41px
            input
                width:50%
                color:#fff
            .bar-btn-1
                background:#ff4d4d
            .bar-btn-2
                background:#f70a0a

                    
                    

            
    
        
</style>
