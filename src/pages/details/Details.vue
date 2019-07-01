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
            <div class="price">
                <span class="discount-price">￥569.00</span>
                <span class="original-price">原价￥569.00</span>
            </div>
            <div class="goodsInfo">
                <!-- 商品名称 -->
                <div class="goodsName">
                    <h1>青年说是你发手机话费连衣裙连衣裙青年说是你发手机话费连衣裙连衣裙</h1>
                </div>

                <div class="group-warp">
                    <!-- 配送地区 -->
                    <div class="sendArea module-wrap">
                        <van-cell-group class="goods-cell-group">
                            <van-cell is-link @click="areaSelect">
                                <template slot="title">
                                    <span class="label">配送</span>
                                    <span class="text">{{this.address}}</span>
                                </template>
                            </van-cell>
                        
                            <van-popup v-model="areaShow" position="bottom">
                                <van-area :area-list="areaList" @confirm="onAddrConfirm" @cancel="onAddrCancel" />
                            </van-popup>
                        </van-cell-group>
                    </div>

                    <!-- 运费 -->
                    <div class="postArea module-wrap">
                        <van-cell-group class="goods-cell-group">
                            <van-cell is-link  @click="freightShow = true">
                                <template slot="title">
                                    <span class="label">运费</span>
                                    <span class="text">免运费</span>
                                </template>
                            </van-cell>
                        </van-cell-group>
                    </div>

                    <!-- 优惠券 -->
                    <div class="detailCoupons module-wrap">
                        <van-cell-group class="goods-cell-group">
                            <van-cell is-link @click="couponShow = true">
                                <template slot="title">
                                    <span class="label">优惠券</span>
                                    <span class="text size22">领券</span>
                                </template>
                            </van-cell>
                            
                            <!-- 领取优惠券上拉菜单 -->
                            <!-- <van-actionsheet v-model="couponShow" title="优惠券"  style="display:none">
                                <div class="coupon-list">
                                    <ul>
                                        <li>
                                            <div class="full-reduction">
                                                <div class="coupon-amount">5<span class="unit">元</span></div>
                                                <div class="coupon-condition">
                                                    <p>满100减5元</p>
                                                </div>
                                            </div>
                                            <div class="couponInfo">
                                                <h2 class="coupon-name">商品优惠劵</h2>
                                                <p class="validity-date">有效期：2019.05.10-2019.05.20</p>
                                                <span class="useBtn">去使用</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="full-reduction">
                                                <div class="coupon-amount">200<span class="unit">元</span></div>
                                                <div class="coupon-condition">
                                                    <p>满1000减200元</p>
                                                </div>
                                            </div>
                                            <div class="couponInfo">
                                                <h2 class="coupon-name">商品优惠劵</h2>
                                                <p class="validity-date">有效期：2019.05.10-2019.05.20</p>
                                                <span class="useBtn">去使用</span>
                                            </div>
                                        </li>
                                        <li class="new">
                                            <div class="full-reduction">
                                                <div class="coupon-amount">300<span class="unit">元</span></div>
                                                <div class="coupon-condition">
                                                    <p>满100减5元</p>
                                                </div>
                                            </div>
                                            <div class="couponInfo">
                                                <h2 class="coupon-name">新人专享</h2>
                                                <p class="validity-date">有效期：2019.05.10-2019.05.20</p>
                                                <span class="useBtn">去使用</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div> -->
                                <!-- 暂无可使用优惠券 -->
                                <!-- <div class="none" style="display:none">
                                    <img src="/static/img/public/none.png" >
                                    <p>暂无可使用优惠券</p>
                                </div> -->
                            <!-- </van-actionsheet> -->

                        </van-cell-group>
                    </div>

                    <!-- 规格 -->
                    <div class="sku-wrap module-wrap">
                        <van-cell-group class="goods-cell-group">
                            <van-cell is-link>
                                <template slot="title">
                                    <span class="label">规格</span>
                                    <span class="wayText size22">S M L XL</span>
                                </template>
                            </van-cell>
                        </van-cell-group>
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
        <!-- <div class="sku-wrap" style="display:none">
            <van-actionsheet v-model="skuShow" title="商品规格">
                <div class="sku-content"> -->
                    <!-- 尺寸 -->
                    <!-- <div class="sku-row">
                        <div class="sku-row-title">尺寸</div>
                        <div class="sku-row-con">
                            <span class="sku-row-item active">S</span>
                            <span class="sku-row-item">M</span>
                            <span class="sku-row-item">L</span>
                        </div>
                    </div> -->

                    <!-- 颜色 -->
                    <!-- <div class="sku-row">
                        <div class="sku-row-title">颜色分类</div>
                        <div class="sku-row-con">
                            <span class="sku-row-item active">墨绿色</span>
                            <span class="sku-row-item">粉红色</span>
                            <span class="sku-row-item">红色</span>
                            <span class="sku-row-item">黑色</span>
                        </div>
                    </div> -->

                    <!-- 颜色分类 -->
                    <!-- <div class="sku-row">
                        <div class="sku-row-title" style="padding-bottom:.25rem">购买数量</div>
                        <div class="stepper">
                            <van-stepper v-model="value" />
                        </div>
                    </div> -->

                    <!-- 按钮 -->
                    <!-- <button class="confirmBtn" @click="confirm()">确定</button>

                </div>
            </van-actionsheet>
        </div> -->

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
        <!-- <div class="bottom-bar">
            <van-goods-action>
                <goods-action-mini-btn
                icon="like-o"
                text="关注"
                />
                <goods-action-mini-btn
                icon="service"
                text="客服"
                />
                <goods-action-big-btn
                type="warning"
                text="加入购物车"
                @click="handleBtn"
                />
                <goods-action-big-btn
                type="danger"
                text="马上抢购"
                @click="handleBtn"
                />
            </van-goods-action>
        </div> -->

    </div>
</template>

<script>
import Vue from 'vue'
import AreaList from './area'
// import {GoodsAction,GoodsActionBigBtn,GoodsActionMiniBtn,Toast,Sku } from 'vant'
import {GoodsAction,Toast,Sku } from 'vant'

import TopHeader from "@/pages/common/header/TopHeader"

Vue.use(
    GoodsAction,
    // GoodsActionBigBtn,
    // GoodsActionMiniBtn,
    Toast,
    Sku 
    )

export default {
    name:'Details',
    components:{
        TopHeader,
        GoodsAction,
        // GoodsActionBigBtn,
        // GoodsActionMiniBtn,
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
        // 省市区上拉
        areaSelect(){
            this.areaShow = true
        },
        //配送地区确定选择
        onAddrConfirm(val){  
            this.areaShow = false;
            this.address = val[0].name+ val[1].name +val[2].name
        },
        //配送地区取消选择
        onAddrCancel(){  
            this.areaShow = false
        },
        // 显示规格
        handleBtn(){
            // this.skuShow = true
            this.showBase = true
        },
        // 关闭规格选择
        close(){
            this.skuShow = false
        },
        // 商品规格选择确定
        confirm(){
            this.close()
        }


    }
}
</script>

<style lang="stylus" scoped>
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
            .original-price
                font-size 26px
                color #838383
        .goodsInfo
            padding 0 25px 25px
            box-sizing border-box
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
                // 优惠券
                .detailCoupons
                    .van-actionsheet__content
                        padding-top 88px
                    .van-actionsheet__header
                        width 100%
                        height 88px
                        background #ffffff
                        position absolute
                        top 0
                        left 0
                    .coupon-list
                        height 600px
                        overflow-y auto
                        li
                            width 714px
                            height 222px
                            font-size 30px
                            display flex
                            align-items center
                            margin 0 auto
                            background url("~/static/images/details/coupon-bg.png") no-repeat
                            background-size 100%
                            margin-bottom 14px
                            &.new
                                background url("~/static/images/details/new-coupon-bg.png") no-repeat
                                background-size 100%
                            .full-reduction
                                width 260px
                                color #ffffff
                                text-align center
                                margin-right 30px
                                .coupon-amount
                                    font-size 90px
                                    .unit
                                        font-size 30px
                            .couponInfo
                                color #383838
                                .coupon-name
                                    font-size 30px
                                    margin-bottom 20px
                                .validity-date
                                    font-size 24px
                                    margin-bottom 30px
                                .useBtn
                                    width 366px
                                    height 50px
                                    line-height 50px
                                    font-size 24px
                                    text-align center
                                    color #ffffff
                                    background #ff5f58
                                    display block
                                    border-radius 5px
                    .none
                        text-align center
                        margin 50px auto
                        img
                            width 80px
                        p
                            font-size 24px
                            line-height 50px
        .tab-content
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
    .sku-wrap
        .sku-content
            padding 0 25px
            box-sizing border-box
            .sku-row
                border-bottom 1px solid #e6e6e6
                position relative
                .sku-row-title
                    font-size 30px
                    color #151515
                    margin 30px auto
                .sku-row-con
                    .sku-row-item
                        width 160px
                        height 40px
                        line-height 40px
                        background-color #f3f3f3
                        text-align center
                        margin-right 100px
                        margin-bottom 28px
                        display inline-block
                        border-radius 8px
                        &.active
                            background-color #ff0000
                            color #ffffff
                        &:nth-child(3n+3)
                            margin-right 0
                .stepper
                    position absolute
                    right 0
                    top 0
                        
            .confirmBtn
                width 100%
                height 50px
                line-height 50px
                border none
                border-radius 20px
                color #ffffff
                background linear-gradient(to right, #ff2d10 , #fa1c2c)
                margin 30px auto 10px

    .bottom-bar
        .van-goods-action
            z-index 99
            
    
        
</style>
