<template>
    <div class="Evaluate">
        <TopHeader custom-title="提交评价" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <div class="content">
            <div class="evaluate-wrap">
                <!-- 评价框 -->
                <div class="textBox">
                    <textarea placeholder="物流真快"></textarea>
                </div>
                <!-- 添加图片 -->
                <div class="addPic">
                    <span class="camera-icon"></span>
                    <span>添加图片</span>
                    <input type="file" class="input-file" multiple="multiple" @change="onRead($event)" accept="image/gif,image/jpeg,image/jpg,image/png" >
                </div>
            </div>

            <div class="rate-wrap">
                <h2>商品评分</h2>
                <div class="rate-item">
                    <div class="label">描述相符</div>
                    <van-rate
                        v-model="rateVal"
                        icon="like-o"
                        void-icon="like-o"
                        color="#f70a0a"
                    />
                </div>
                <div class="rate-item">
                    <div class="label">物流服务</div>
                    <van-rate
                        v-model="rateVal2"
                        icon="like-o"
                        void-icon="like-o"
                        color="#f70a0a"
                    />
                </div>
                <div class="rate-item">
                    <div class="label">服务态度</div>
                    <van-rate
                        v-model="rateVal3"
                        icon="like-o"
                        void-icon="like-o"
                        color="#f70a0a"
                    />
                </div>
            </div>
            
            <div class="btn">发布评价</div>

        </div>

    </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'Evaluate',
    components: {
        TopHeader
    },
    data(){
        return {
            rateVal:5,   
            rateVal2:0,  
            rateVal3:2   
        }
    },
    methods:{
        onRead(e){
            console.log(e)
    
        }
    }

}
</script>

<style lang="stylus" scoped>
.content
    padding 0 24px 
    box-sizing border-box
    .evaluate-wrap
        width 100%
        height 450px
        border 1px solid #a7a7a7
        border-radius 8px
        padding 30px
        box-sizing border-box
        .textBox
            width 100%
            margin-bottom 20px
            textarea
                width 100%
                height 240px
                font-size 26px
                color #888888
                border none 
                background none
                resize none
        .addPic
            width 120px
            height 120px
            display flex
            flex-direction column
            align-items center
            justify-content center
            font-size 26px
            color #888888
            border 1px dashed #595959
            border-radius 5px
            position relative
            .camera-icon
                width 46px
                height 38px
                display block
                background url("/static/img/order/camera-icon.png") no-repeat
                background-size cover
                margin-bottom 20px
            .input-file
                width 100%
                height 100%
                position absolute
                left 0
                top 0
                opacity 0
    .rate-wrap
        h2
            font-size 30px
            margin 30px auto 70px
        .rate-item
            font-size 30px
            height 36px
            line-height 30px
            display flex
            margin-bottom 40px
            .label
                margin-right 44px
    .btn
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
