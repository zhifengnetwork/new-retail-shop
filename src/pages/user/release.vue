<template>
    <div class="MyRelease">
        <!-- 头部组件 -->
		<Rel-Header custom-title="我的发布" custom-fixed class="head">
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
            <span slot="rightBtn"><router-link class="rigBtn" to="/user/PaycodeList">修改信息</router-link></span>
		</Rel-Header>
        <div class="content">
            <div class="main_wrap">
                <router-link :to="'/user/ByInfo?fz_id='+item.fz_id" class="main" v-for="(item,index) in releaseList" :key="index">
                    <div class="time">
                        <span>{{item.ymdTime}}</span>
                        <span>{{item.hisTime}}</span>
                    </div>
                    <div class="img_wrap">
                        <img :src="item.img"/>
                    </div>
                    <div class="num">剩余商品数量{{item.stock}}</div>
                </router-link>
            </div>
            <!-- 无数据 -->
            <div class="none" v-show="isShow">
                <img src="/static/images/public/none.png"/>
                <p>当前还没有发布信息</p>
            </div>

        </div>
    </div>
</template>

<script>
    import RelHeader from "@/pages/common/header/TopHeader"
    export default {
	name: "release",
	data() {
		return {
            releaseList:'',
            isShow:false,
        };
    },
    mounted(){
        this.shop_list()
    },
    methods: {
        // 接口
        shop_list() {
            var url = 'user/shop_list'
            var params = new URLSearchParams();
            params.append('token', this.$store.getters.optuser.Authorization);  
            this.$axios({
                method:"post",
                url:url,
                data:params
            }).then((res)=>{
                if(res.data.status === 200){
                    if(res.data.data==""){
                        this.isShow=true
                    }else{
                        this.isShow=false
                    }
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
                .main
                    margin 0 0 10px
                    background #fff
                    border-radius 10px
                    padding 0 20px
                    box-sizing border-box 
                    .time 
                        line-height 65px
                        color #151515  
                    .img_wrap     
                        img    
                            width 660px
                            height 280px
                            border-radius 10px
                    .num 
                        font-size 26px
                        line-height 75px
                        color #151515        
            .none
                text-align center
                margin-top 50%
                font-size 28px
                img
                    width 80px
                p
                    margin 20px auto

img 
    display block
    margin 0 auto 
    max-width 100%
    height 100% 
</style>