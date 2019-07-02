<template>
    <div class="mask-panel" v-show="popShow" @touchmove.prevent>
        <div class="popup">
            <div class="thead">
                <p>发布商品需缴纳30元服务费？</p>
            </div>
            <div class="tbody"></div>
            <div class="tfoot">
                <span class="btn" @click="handleCancel">取消</span>
                <span class="confirm-btn btn"><router-link to="/Sell">去付款</router-link></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Popup',
    data(){
        return {
            popShow: true,//弹窗是否显示
        }
    },
    methods:{
        //点击取消
        handleCancel(){
            this.popShow = false
        }
    }
}
</script>

<style lang="stylus" scoped>
.mask-panel
    width 100%
    height 100%
    background: rgba(0,0,0,0.6)
    position fixed
    left 0
    bottom 0
    z-index 99
    .popup
        min-width 480px
        padding 48px 30px
        box-sizing border-box
        background-color #ffffff
        border-radius 14px
        position absolute
        left 50%
        top 50%
        z-index 3
        transform translate(-50%,-50%)
        .thead
            text-align center
            p
                font-size 30px
        .tfoot
            display flex
            justify-content space-between
            margin-top 90px
            .btn    
                width 180px
                height 60px
                line-height 60px
                font-size 30px
                color #f94e08
                text-align center
                display block
                border 1px solid #f66314
                border-radius 26px
            .confirm-btn
                background-color #f56917
                background linear-gradient(to right, #f56b18 , #f94c07)
                border none 
                a
                    color #ffffff


</style>
