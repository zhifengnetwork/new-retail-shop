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
                        <!-- <span>{{item.add_time | formatDate}}</span> -->
                        <!-- <span>{{item.hisTime}}</span> -->
                    </div>
                    <div class="img_wrap">
                        <img :src="item.img"/>
                    </div>
                    <div class="num">
                        <span>{{item.mobile}} </span>
                        <button class="audit-btn" @click="submitAudit(item.fz_order_id,index)" :ref="'tpi_'+index">审核</button>
                    </div>
                </div>
            </div>

            <!-- 无数据 -->
            <div class="none" v-show="isShow">
                <img src="/static/images/public/none.png"/>
                <p>当前还没有审核信息</p>
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
            page:1,
            isShow:false,
            token:this.$store.getters.optuser.Authorization
        };
    },
    created(){
        this.requestShopAudit()
        this.$store.commit('showLoading')  
        // window.addEventListener('scroll', this.scrollBottom);
    },
    mounted(){ 
        
        // 
    },
    methods: {
        scrollBottom(){
            let _this = this;
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if(scrollTop + windowHeight == scrollHeight){
                _this.requestShopAudit()
                // this.page++;
            }
        },
        submitAudit(fz_order_id,key){
            var url = 'fifty_zone/shop_que'
            var params = new URLSearchParams();
            params.append('token',this.token);  
            params.append('fz_order_id', fz_order_id);  
            this.$axios({
                method:"post",
                url:url,
                data:params
            }).then((res)=>{
                if(res.data.status === 200){
                    this.$toast(res.data.msg)
                    setTimeout(()=>{
						location.reload() 
					},2000)
                    
                } else {
                    this.$toast(res.data.msg)
                }
            })
        },
        requestShopAudit() {     // 接口
            var url = 'fifty_zone/shop_que_list'
            var params = new URLSearchParams();
            params.append('token',this.token);  
            params.append('page',this.page); 
            this.$axios({
                method:"post",
                url:url,
                data:params
            }).then((res)=>{
                // this.isShow=false
                if(res.data.status === 200){
                    if(res.data.data==""){
                        this.isShow=true
                    }else{
                        // this.page =this.page+1
                    }

                    if(this.page == 1){ 
                        this.auditList = res.data.data                       
                    }else{
                        if(res.data.data.length > 0){        //如果有数据,拼接数组
                            this.auditList = this.auditList.concat(res.data.data); 
                            //  this.auditList = [...this.auditList, ...res.data.data]
                        }else{
                            
                        }
                    }
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
    destroyed: function () {
        window.removeEventListener('scroll', this.scrollBottom);
    },

    filters: {
        // 日期格式化
        formatDate: function (time) {
            let date = new Date(time*1000);
            let y = date.getFullYear();

            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;

            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;

            let h = date.getHours();
            h = h < 10 ? ('0' + h) : h;

            let m = date.getMinutes();
            m = m < 10 ? ('0' + m) : m;

            let s = date.getSeconds();
            s = s < 10 ? ('0' + s) : s;

            return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
        },
        //格式化金钱
        formatMoney:function(val){
            return "¥" + Number(val).toFixed(2)
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
                        display flex
                        justify-content space-between 
                        padding-top 10px    
                        .audit-btn
                            width 150px
                            height 52px
                            line-height 52px
                            border:1px solid #cccccc
                            background #f66716
                            color:#fff
                            border-radius 10px
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