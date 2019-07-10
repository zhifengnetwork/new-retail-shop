<template>
    <div class="MySharing">
        <!-- 头部组件 -->
		<My-Header custom-title="我的分享" custom-fixed class="head">
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</My-Header>
        <div class="content">
            <div class="main">
                <div class="img_head">
                    <div class="img">
                        <img :src="siteList.avatar"/>
                    </div>
                    <div class="name">
                        <span>我是</span>
                        <span>{{siteList.realname}}</span>
                    </div>
                </div>
                <div class="mark_wrap">
                    <div class="mark">
                        <div class="mark_img">
                            <!-- <img src="/static/images/user/mark.png"/> -->
                            <!-- 必须是id 和实例化的第一参数对应 -->
                            <div id="qrcode"></div>
                        </div>
                    </div>
                </div>
                <p class="touch">长按二维码保存</p>
            </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from "@/pages/common/header/TopHeader"
    import QRCode from 'qrcodejs2'
    export default {
	name: "mySharing",
	data() {
		return {
            link: 'http://new_retail_web.zhifengwangluo.com/Register+url',// 要跳转的路径或者显示的文字
            siteList:[]
        };
    },
    methods: {
        qrcode () {
            // 和div的id相同 必须是id  class类名会报错
            // 第二参数是他的配置项
            let that = this
            let qrCode = new QRCode('qrcode', {
                width: 160,
                height: 160,
                text: that.link,//可以写路径或者文字，扫描后想要跳转的路径或者显示的文字
            })
        },
        // 接口
        sharing() {
            var url = '/user/personal'
            var params = new URLSearchParams();
            params.append('token', this.$store.getters.optuser.Authorization);  
            this.$axios({
                method:"post",
                url:url,
                data:params
            }).then((res)=>{
                if(res.data.status === 200){
                    this.siteList = res.data.data
                    console.log(this.siteList)
                } else {
                    Dialog.alert({
                        message:res.data.msg
                    })
                }
            })
        }
    },
    mounted () {
        this.qrcode(); //调用二维码生成的方法
        this.sharing();
    },
	components: {
        MyHeader,
    },
};
</script>

<style lang="stylus" scoped>
    .MySharing
        width 100%
        height 100vh
        background url(/static/images/user/bnner.png) no-repeat
        background-size 100% 100%
        .head
            color #fff
            background none
        .content
            padding 232px 0 0
            .main
                position relative
                margin 0 auto
                width 702px
                background rgba(255,255,255,0.9)
                border-radius 10px
            .img_head
                padding 82px 0 0
                .img 
                    margin 0 auto
                    position absolute
                    top -85px
                    left 271px
                    width 160px
                    height 160px
                    border 2px solid #fff
                    border-radius 50%
                    img 
                        border-radius 50%
                .name 
                    font-size 30px
                    line-height 75px
                    text-align center
                .name span:nth-child(1)
                    margin 0 20px 0 0 
                    color #ff4d4d
            .mark_wrap
                margin 50px auto 0
                padding 51px
                width 480px
                height 480px
                background #fff
                border-radius 10px
                box-sizing border-box
                .mark
                    padding 28px 0
                    margin 0 auto
                    width 378px
                    height 378px
                    background url(/static/images/user/ber.png) no-repeat
                    background-size 100% 100%
                    box-sizing border-box
                    .mark_img
                        margin 0 auto
                        width 318px
                        height 318px
                        #qrcode
                            margin 0 auto
                            width 318px
                            height 318px
            .touch
                font-size 30px
                text-align center
                line-height 105px            


img
    display block
    margin 0 auto
    max-width 100%
    height 100%                        
</style>