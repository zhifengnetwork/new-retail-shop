<template>
    <div class="-payment-code">
      	<!-- 头部组件 -->
		<TopHeader custom-title="编辑收款码" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <!-- CONTENT START --> 
        <div class="content">
            <div class="-code-list">
                <van-dropdown-menu>
                    <van-dropdown-item v-model="aValue" :options="option1" />
                </van-dropdown-menu>
            </div>
            <div class="v-wrap">
                <van-uploader
                    v-model="fileList"
                    multiple
                    upload-text="上传收款码"
                    :max-count="1"
                    />
            </div>
        </div>
        <input class="submit" type="button" value="确定" @click="setPaymentCode()" />
    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader";
export default {
    data() {
        return {
            fileList: [],
            aValue:2,
            option1: [
                { text: '云闪付二维码', value: 1 },
                { text: '微信二维码', value:2 },
                { text: '支付宝二维码', value: 3 },
            ],
            token:this.$store.getters.optuser.Authorization   
        }
    },
    methods:{
        setPaymentCode(){
            var _that =this;
            var post =_that.fileList[0];
            if(post=="" || 'undefined'==typeof(post)){
               return  _that.$toast('亲,还没有选择上传的凭证哦!')
            }else{
                post =_that.fileList[0].content;
            }
            _that.$axios.post('pay/set_payment',{
                'image':post,
                'type':_that.aValue,
                'token':this.$store.getters.optuser.Authorization            
            })
            .then((res)=>{
                var list = res.data;
                if(list.status == 200){
                    // _that.$toast('上传成功...')
                    setTimeout(() => {
                        _that.$router.go(-1)
                    },2000)
                }else{
                    _that.$toast(list.msg)
                }
            })
        }
    },
    components:{
        TopHeader
    }
}
</script>
<style lang="stylus" scoped>
    .-payment-code
        .content
            width 100%
            padding 24px 24px 30px
            height 1000px
            background #fff
            border-radius 10px
            border solid 2px #e5e5e5
            margin-bottom 20px
            position relative
            box-sizing border-box
        .submit
            width 702px
            height 88px
            background-color #ff4d4d
            border-radius 44px
            color #fff
            font-size 30px
            letter-spacing 5px
            position fixed
            bottom 24px
            left 24px

</style>
<style lang="stylus">
.-payment-code
    .-code-list
        position absolute
        top 24px
        left 24px
        font-size 26px
        .van-dropdown-menu__item
            width: 702px
            position: relative
            justify-content: flex-start
        .van-dropdown-menu__title
            display: block
            width: 94%
            text-align: left
            font-size 28px
        .van-cell
            text-align left 
    .v-wrap 
        margin 155px auto 0
        width 370px
        height 600px 
        .van-uploader
            display block
            margin 0 auto
            .van-uploader__upload
                margin 260px auto       
    .van-uploader__upload
        width 200px
        height 200px
    .van-uploader__preview-image 
        display block
        width 370px
        height 600px
    .van-uploader__upload-icon 
        color #969799
        font-size 80px
        font-weight bold
    .van-uploader__upload-text
        font-size 30px
</style>


