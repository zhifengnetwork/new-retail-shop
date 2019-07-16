<template>
    <div class="MyAudidt-wrap">
        <!-- 头部组件 -->
		<Rel-Header custom-title="商家审核" custom-fixed class="head">
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Rel-Header>
        <div class="content">
            <div class="main_wrap">
                <div class="main" v-for="(item,index) in auditList" :key="index">
                    <div class="time">
                        <span>{{item.ymdTime}}</span>
                        <span>{{item.hisTime}}</span>
                    </div>
                    <div class="img_wrap">
                        <img :src="item.img"/>
                    </div>
                    <div class="num">剩余商品数量{{item.stock}}</div>
                </div>
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
            auditList:'',
        };
    },
    mounted(){
        this.requestShopAudit()
    },
    methods: {
        // 接口
        requestShopAudit() {
            var url = 'fifty_zone/shop_que_list'
            var params = new URLSearchParams();
            params.append('token', this.$store.getters.optuser.Authorization);  
            this.$axios({
                method:"post",
                url:url,
                data:params
            }).then((res)=>{
                if(res.data.status === 200){
                    this.auditList = res.data.data
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
    .MyAudidt-wrap
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


img 
    display block
    margin 0 auto 
    max-width 100%
    height 100% 
</style>