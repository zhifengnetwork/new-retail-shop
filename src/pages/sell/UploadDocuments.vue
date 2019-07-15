<template>
    <div class="documents">
      	<!-- 头部组件 -->
		<TopHeader custom-title="上传凭证" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <!-- CONTENT START --> 
        <div class="content">
            <div class="vat_wrap">
                <van-uploader
                    v-model="fileList"
                    multiple
                    upload-text="上传凭证"
                    :max-count="1"
                    />
            </div>
        </div>
        <input class="aniu" type="button" value="提交" @click="setDocuments()" />
    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader";
import { Uploader } from 'vant'
export default {
    data() {
        return {
            fileList: []
        }
    },
    methods:{
        setDocuments(){
            var _that =this;
            var post =_that.fileList[0];
            if(post=="" || 'undefined'==typeof(post)){
               return  _that.$toast('亲,还没有选择上传的凭证哦!')
            }else{
                post =_that.fileList[0].content;
            }
            _that.$axios.post('fifty_zone/upload_proof',{
                'proof':post,
                'fz_order_id':this.$route.query.fz_order_id,
                'token':this.$store.getters.optuser.Authorization            
            })
            .then((res)=>{
                var list = res.data;
                if(list.status == 200){
                    _that.$toast('上传成功...')
                    setTimeout(() => {
                        _that.$router.push('/Payment')
                    },2000)
                }
                else if(res.data.status == 999){
					this.$store.commit('del_token'); //清除token
					setTimeout(()=>{
						this.$router.push('/Login')
					},1000)
				}
                else{
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
    .documents
        width 100%
        .content
            margin 24px 24px 30px
            height 1000px
            background #fff
            border-radius 10px
            border solid 2px #e5e5e5
            box-sizing border-box
            .vat_wrap
                margin 90px auto 0
                width 100%
                height 800px
            .van-uploader__upload-icon 
                color #969799
                font-size 80px
                font-weight bold
            .van-uploader__upload-text
                font-size 30px
        .aniu
            width 702px
            height 88px
            background-color #ff4d4d
            border-radius 44px
            color #fff
            position fixed
            bottom 24px
            left 24px
            font-size 30px
            letter-spacing 5px   

</style>
<style lang="stylus">
    .documents
        .vat_wrap
            .van-uploader
                width 100%
                height 100%
                .van-uploader__upload
                    margin 50% auto 0
                    .van-uploader__wrapper
                        .van-uploader__wrapper >>> .van-uploader__preview
                            margin 0 !important
                            .van-uploader__preview-image
                                width 390px
                                height 390px


</style>


