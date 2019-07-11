<template>
    <div class="Fifty">
        <!-- 头部组件 -->
		<Fifty-Header custom-title="专区订单详情" custom-fixed class="head">
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Fifty-Header>
        <div class="content">
            <div class="main_wrap">
                <!-- <div class="main" v-for="(item,index) in releaseList" :key="index">
                    <div class="time">
                        <span>{{item.ymdTime}}</span>
                        <span>{{item.hisTime}}</span>
                    </div>
                    <div class="img_wrap">
                        <img :src="item.img"/>
                    </div>
                    <div class="num">剩余商品数量{{item.stock}}</div>
                </div> -->

                <div class="main">
                    <div class="img_wrap">
                        <img src="/static/images/home/banner01.png"/>
                    </div>
                    <div class="nickname">
                        <p>昵称</p>
                        <p>ID:5955665</p>
                    </div>
                    <div class="num">商家1</div>
                </div>

                <div class="main">
                    <div class="img_wrap">
                        <img src="/static/images/home/banner01.png"/>
                    </div>
                    <div class="nickname">
                        <p>昵称</p>
                        <p>ID:5955666</p>
                    </div>
                    <div class="num">商家2</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import FiftyHeader from "@/pages/common/header/TopHeader"
    export default {
	name: "fiftyDetails",
	data() {
		return {
            // releaseList:'',
        };
    },
    mounted(){
        // this.shop_list()
    },
    methods: {
        // 接口
        // shop_list() {
        //     var url = '/user/shop_list'
        //     var params = new URLSearchParams();
        //     params.append('token', this.$store.getters.optuser.Authorization);  
        //     this.$axios({
        //         method:"post",
        //         url:url,
        //         data:params
        //     }).then((res)=>{
        //         if(res.data.status === 200){
        //             this.releaseList = res.data.data
        //             // console.log(this.siteList)
        //         } else {
        //             Dialog.alert({
        //                 message:res.data.msg
        //             })
        //         }
        //     })
        // }
    },
	components: {
        FiftyHeader,
    },
};
</script>

<style lang="stylus" scoped>
    .Fifty
        .rigBtn
            font-size 26px
            color #ee0e0e
        .content
            padding 88px 0 0
            .main_wrap
                margin 24px
                padding 0 24px 
                .main
                    position relative
                    margin 0 0 10px
                    padding 25px 20px 0
                    background #fff
                    border-radius 10px
                    box-sizing border-box  
                    .img_wrap     
                        img    
                            width 660px
                            height 280px
                            border-radius 10px
                    .nickname
                        padding 10px 15px
                        position absolute
                        top 25px
                        left 20px
                        background rgba(0,0,0,0.5)
                        font-size 26px 
                        color #151515
                        border-radius 10px
                        p 
                            text-align center
                            line-height 35px       
                    .num 
                        line-height 85px
                        font-size 26px
                        color #151515        


img 
    display block
    margin 0 auto 
    max-width 100%
    height 100% 
</style>