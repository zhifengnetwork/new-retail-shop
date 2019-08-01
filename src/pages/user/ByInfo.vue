<template>
    <div class="byInfo-wrap">
        <!-- 头部组件 -->
		<Rel-Header custom-title="购买信息" custom-fixed class="head">
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Rel-Header>
        <div class="content">
            <div class="main_wrap">

                <!-- <div class="main">
    
                    <div class="num">
                        <span>
                            <p>ID:20172 </p>
                            <p>1365478987</p>
                        </span>
                        <span class="audit-btn">未付款</span>

                    </div>
                </div> -->


                <div class="main" v-for="(item,index) in auditList" :key="index">
                    <div class="time">
                        <!-- <span>{{item.add_time | formatDate}}</span> -->
                        <!-- <span>{{item.hisTime}}</span> -->
                    </div>
                    <!-- <div class="img_wrap">
                        <img :src="item.img"/>
                    </div> -->
                    <div class="num">
                        <span>
                            <p>ID:{{item.user_id}} </p>
                            <p>{{item.mobile}} </p>
                        </span>
                        
                        <span class="audit-btn" v-if="item.user_confirm ==1 && item.shop_confirm ==1">已完成</span>
                        <span class="audit-btn" v-if="item.user_confirm ==1 && item.shop_confirm ==0">待审核</span>
                        <span class="audit-btn" v-if="item.user_confirm ==0 && item.shop_confirm ==0">未付款</span>
                        <!-- <button class="audit-btn" v-if="item.user_confirm!=0 && item.shop_confirm!=1" @click="submitAudit(item.fz_order_id,index)" :ref="'tpi_'+index">审核</button> -->
                    </div>
                </div>
            </div>

            <!-- 无数据 -->
            <!-- <div class="none" v-show="isShow">
                <img src="/static/images/public/none.png"/>
                <p>当前还没有购买信息</p>
            </div> -->

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
            page:1,
            isShow:false,
            token:this.$store.getters.optuser.Authorization
        };
    },
    created(){
        this.requestShopAudit()
        this.$store.commit('showLoading')  
    },
    mounted(){ 
        
        // 
    },
    methods: {
        requestShopAudit() {     // 接口
            var url = 'user/my_shop_detail'
            var params = new URLSearchParams();
            params.append('token',this.token);  
            params.append('fz_id',this.$route.query.fz_id); 
            this.$axios({
                method:"post",
                url:url,
                data:params
            }).then((res)=>{
                console.log(res)
                if(res.data.status === 200){
                    if(res.data.data==""){
                        this.isShow=true
                    }
                    this.auditList = res.data.data      
                }
                else if(res.data.status == 999){
					this.$store.commit('del_token'); //清除token
					setTimeout(()=>{
						this.$router.push('/Login')
					},1000)
				}
                else {
                    this.$toast(res.data.msg)
                }
                this.$store.commit('hideLoading')
            })
        }
    },
	components: {
        RelHeader,
    },
};
</script>

<style lang="stylus" scoped>
    .byInfo-wrap
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
                    .num 
                        font-size 28px
                        line-height 60px
                        color #151515 
                        display flex
                        align-items center
                        justify-content space-between 
                        padding-top 10px    
                        .audit-btn
                            color:#f66716
                            font-size 32px
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