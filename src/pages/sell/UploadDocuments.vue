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
                    :after-read="uploadImg"
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
            fileList: [],
            imgSize:0
        }
    },
    
    methods:{

        uploadImg(file) {
            // 大于1.5MB的jpeg和png图片都缩小像素上传
            if(/\/(?:jpeg|png)/i.test(file.file.type)&&file.file.size>1500000) {
                console.log(file.file.size)
                let canvas =  document.createElement('canvas')        // 创建Canvas对象(画布)
                let context = canvas.getContext('2d') 
                let img = new Image()                   // 创建新的图片对象 
                // 指定图片的DataURL(图片的base64编码数据)
                img.src = file.content
                // 监听浏览器加载图片完成，然后进行进行绘制
                img.onload = () => {
                    // 指定canvas画布大小，该大小为最后生成图片的大小
                    canvas.width = 400
                    canvas.height = 300
                    /* drawImage画布绘制的方法。(0,0)表示以Canvas画布左上角为起点，400，300是将图片按给定的像素进行缩小。
                    如果不指定缩小的像素图片将以图片原始大小进行绘制，图片像素如果大于画布将会从左上角开始按画布大小部分绘制图片，最后的图片就是张局部图。*/ 
                    context.drawImage(img, 0, 0, 400, 300)
                    // 将绘制完成的图片重新转化为base64编码，file.file.type为图片类型，0.92为默认压缩质量
                    file.content = canvas.toDataURL(file.file.type, 0.92) 
                }                       
            }
        },
        setDocuments(){
            console.log(this.fileList[0])
            var _that =this;
            var post =_that.fileList[0];
            if(post=="" || 'undefined'==typeof(post)){
               return  _that.$toast('亲,还没有选择上传的凭证哦!')
            }else{
                if(this.imgSize>1048576){

                }
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
            margin 0 auto
            width 370px
            box-sizing border-box
            .van-uploader
                display block
                margin 170px auto 0
                width 370px
                height 600px
                .van-uploader__preview
                    margin 0
                    width 370px
                    height 600px
                .van-uploader__upload
                    margin 280px auto 0
                .van-uploader__preview-image
                    margin 0 auto
                    width 370px
                    height 600px
                                
</style>


