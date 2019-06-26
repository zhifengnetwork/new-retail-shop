<template>
    <div class="TopHeader" :style="{'position':customFixed ? 'fixed' : 'relative' }">
        <div class="backBtn" @click="backAction">
            <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="title">{{customTitle}}</div>
        <div class="rightBtn">
            <slot name="rightBtn"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'TopHeader',
    props:{
        "backUrl":{
            type:String
        },
        'customTitle':{
            type:String,
            default:'标题'
        },
        'customFixed':{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{

        }
    },
    methods:{
        // 后退按钮
        backAction(){
            if(this.backUrl){
                this.$router.push(this.backUrl)
            }else{
                this.$router.go(-1)
            }
        }
    }

}
</script>

<style lang="stylus" scoped>
.TopHeader
    width 100%
    height 120px
    line-height 120px
    color #fff
    font-size 36px
    background-color #10903d
    display flex
    justify-content space-between
    align-items center
    .backBtn
        width 10%
        text-align center
        .iconfont 
            font-size 36px
    .title
        text-align center
        flex 1 1 auto
    .rightBtn
        padding-right 30px
        box-sizing border-box
        .iconfont
            font-size 46px


</style>
