<template>
    <div class="documents">
      	<!-- 头部组件 -->
		<TopHeader custom-title="上传凭证" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <!-- CONTENT START --> 
        <div class="content">
            <van-uploader
                v-model="fileList"
                multiple
                upload-text="上传凭证"
                :max-count="1"
                />
        </div>
        <input class="submit" type="button" value="提交" />
    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader";
export default {
    data() {
        return {
            fileList: []
        }
    },
    methods:{
    },
    components:{
        TopHeader
    }
}
</script>
<style lang="stylus">
    .documents
        .content
            padding 24px 24px 30px
            width 702px
            height 1000px
            background #fff
            border-radius 10px
            border solid 2px #e5e5e5
            text-align center
            margin-bottom 20px
            align-items center
            display flex
            justify-content center
            .van-uploader__upload
                width 370px
                height 370px
            .van-uploader__preview-image 
                display block
                width 100%
                height 100%
            .van-uploader__upload-icon 
                color #969799
                font-size 80px
                font-weight bold
            .van-uploader__upload-text
                font-size 30px
        .submit
            width 702px
            height 88px
            background-color #ff4d4d
            border-radius 44px
            color #fff
            position fixed
            bottom 24px
            left 24px


</style>

