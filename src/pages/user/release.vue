<template>
    <div class="MyRelease">
        <!-- 头部组件 -->
		<Rel-Header custom-title="我的发布" custom-fixed class="head">
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
            <span slot="rightBtn" class="rigBtn">修改信息</span>
		</Rel-Header>
        <div class="content">
            <div class="main_wrap">
                <div class="main" v-for="(item,index) in releaseList" :key="index">
                    <div class="time">
                        <span>{{item.ymdTime}}</span>
                        <span>{{item.hisTime}}</span>
                    </div>
                    <div class="img_wrap">
                        <img :src="item.img"/>
                    </div>
                    <div class="num">剩余商品数量{{item.stock}}</div>
                </div>

                <!-- <div class="main">
                    <div class="time">
                        <span>2019-06-07</span>
                        <span>14:55:02</span>
                    </div>
                    <div class="img_wrap">
                        <img src="/static/images/home/banner01.png"/>
                    </div>
                    <div class="num">剩余商品数量11</div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
    import RelHeader from "@/pages/common/header/TopHeader"
    export default {
	name: "mySharing",
	data() {
		return {
            releaseList:'',
        };
    },
    mounted(){
        this.shop_list()
    },
    methods: {
        // 接口
        shop_list() {
            var url = '/user/shop_list'
            var params = new URLSearchParams();
            params.append('token', this.$store.getters.optuser.Authorization);  
            this.$axios({
                method:"post",
                url:url,
                data:params
            }).then((res)=>{
                if(res.data.status === 200){
                    this.releaseList = res.data.data
                    // console.log(this.siteList)
                } else {
                    Dialog.alert({
                        message:res.data.msg
                    })
                }
            })
        }
    },
	components: {
        RelHeader,
    },
};
</script>

<style lang="stylus" scoped>
    .MyRelease
        .rigBtn
            font-size 26px
            color #ee0e0e
        .content
            padding 88px 0 0
            .main_wrap
                margin 24px
                padding 0 24px 
                background #fff
                .main
                    margin  0 0 10px
                    .time 
                        line-height 65px
                        color #151515  
                    .img_wrap     
                        img    
                            width 660px
                            height 280px
                            border-radius 10px
                    .num 
                        line-height 75px
                        color #151515        


img 
    display block
    margin 0 auto 
    max-width 100%
    height 100% 
</style>