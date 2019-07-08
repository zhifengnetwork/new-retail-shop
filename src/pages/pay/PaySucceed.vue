<template>
    <div class="paySucceed">
        <TopHeader custom-title="支付" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
        </TopHeader>

        <div class="content">
            <div class="pay-tips">
                <i class="iconfont icon-zhifuchenggong"></i>
                <span>订单支付成功</span>
            </div>
        </div>
    </div>
</template>

<script>
    import TopHeader from "@/pages/common/header/TopHeader";
    export default {
    name: "PaySucceed",
    components: {
        TopHeader
    }
    }
</script>


<style lang="stylus" scoped>
.content
    padding-top 88px
    box-sizing border-box
    height 100vh
    background #ffffff
    .pay-tips 
        display flex
        justify-content center
        align-items center
        font-size 38px
        margin 80px 0
    i 
      font-size 55px
      color #3bb000
      margin-right 15px
    

  
</style>


