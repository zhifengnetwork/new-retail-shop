<template>
    <div class="Fifty">
        <!-- 头部组件 -->
		<Fifty-Header custom-title="专区订单详情" custom-fixed class="head">
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Fifty-Header>
        <div class="content">
            <div class="main_wrap" v-for="(item,key) in fiftyList" :key="key">
                <div class="main">
                    <div class="img_wrap">
                        <img :src="item.img"/>
                    </div>
                    <div class="nickname">
                        <p>{{item.shop_name}}</p>
                        <p>ID:{{item.shop_user_id}}</p>
                    </div>
                    <div class="num">{{item.shop_name}}</div>
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
            fiftyList:'',
            // addTime:this.$route.query.add_time
        };
    },
    mounted(){
        // this.shop_list()
        // this.$store.commit('showLoading')
        this.requestData()
    },
    methods: {
        // 页面数据渲染
        requestData(){
            var url = 'Order/fifty_detail';
            this.$axios.post(url,{
                token:this.$store.getters.optuser.Authorization,
                add_time:this.$route.query.add_time
            })
            .then( (res)=>{
                if(res.data.status == 200){
                    this.fiftyList =res.data.data
                    this.$store.commit('hideLoading')                      
                }else if(res.data.status == 999){
                    this.$store.commit('del_token'); //清除token
                    setTimeout(()=>{
                        this.$router.push('/Login')
                    },1000)
                }else{
                    this.$toast(res.data.msg)
                }
            })
            .catch((error) => {
                alert('请求错误:'+ error)
            })
        }
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
                        color #ffffff
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