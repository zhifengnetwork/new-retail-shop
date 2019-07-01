<template>
    <div class="ReturnRequest">
        <TopHeader custom-title="退款申请" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <!-- 主内容 -->
        <div class="content">
            <!-- 商品信息 -->
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
                    <div class="count">x2</div>
                </div>
            </div>

            <!-- 退款原因 -->
            <div class="reason-wrap">
                <textarea placeholder="退款原因"></textarea>
            </div>

            <!-- 退款金额 -->
            <div class="refund-amount">
                <span class="label">退款金额</span>
                <span class="amount">￥736.00</span>
            </div>

            <!-- 按钮 -->
            <div class="refundBtn">提交申请</div>

        </div>

    </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'ReturnRequest',
    components: {
        TopHeader
    },
 
}
</script>

<style lang="stylus" scoped>
.content
    padding 28px 24px
    box-sizing border-box
    .goods-item
        display flex
        background-color #ffffff
        box-shadow 0 0 8px #e6e6e6
        margin-bottom 20px
        padding 35px 40px
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
    .reason-wrap
        width 100%
        min-height 360px
        background-color #f8f8f8
        margin-bottom 20px
        textarea
            width 100%
            min-height 360px
            font-size 26px
            color #151515
            border-radius 10px
            resize none
            padding 20px 
            box-sizing border-box
            &::-webkit-input-placeholder
                color #a4a4a4
                opacity 1
    .refund-amount
        height 80px
        font-size 30px
        color #151515
        background-color #ffffff
        display flex
        align-items center
        justify-content space-between
        padding 0 30px
        box-sizing border-box
        .amount
            color #f20c0c
    .refundBtn
        width 92%
        height 88px
        line-height 88px
        color #ffffff
        font-size 30px
        text-align center
        background-color #ff4d4d
        border-radius 40px
        position fixed
        left 50%
        bottom 68px
        margin-left -46%



</style>
