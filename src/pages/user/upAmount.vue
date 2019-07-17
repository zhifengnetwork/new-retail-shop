<template>
    <div class="Up_wrap">
        <!-- 头部组件 -->
		<Up-Header custom-title="充值金额" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Up-Header>
        <div class="content">
            <div class="item_wrap">
                <div class="inp"> 
                    <input type="text" placeholder="请输入充值金额"/>
                </div>
                <van-radio-group v-model="radio">
                    <van-radio name="1" checked-color="#f30c0c">微信</van-radio>
                    <van-radio name="2" checked-color="#f30c0c">支付宝</van-radio>
                </van-radio-group>
            </div>
            <!-- 充值按钮 -->
            <div class="btn">立即充值</div>
        </div>    
    </div>
</template>

<script>
    import UpHeader from "@/pages/common/header/TopHeader"
    import { Checkbox, CheckboxGroup } from 'vant'
    export default {
		name: 'upAmount',
		data(){
            return{
                radio: '1',
            }
			
        },
        mounted() {
            //this.PopData();
        },
        methods: {
            // PopData(){
            //     var url = "user/estimate_list"
            //     this.$axios.post(url,{
            //         token:this.$store.getters.optuser.Authorization
            //     })
            //     .then((res)=>{                  
            //         var that = this
            //         var item = res.data.data;
            //         if(res.data.status === 200){
            //             that.list = item.data;
            //         }else{
            //             that.$toast(res.msg)
            //         }
            //     })
            // }
        },
        components:{
            UpHeader,
        },
        
    }
</script>

<style lang="stylus" scoped>
    .Up_wrap
       .content
            padding 88px 24px 0
            .item_wrap
                padding 25px 0 135px
                .inp 
                    line-height 65px
                    border-bottom 1.5px solid #ff4d4d
                    input 
                        padding 0 0 0 15px 
                        width 500px
                        color #151515
                        font-size 24px
                .van-radio-group
                    padding 26px 0
                    display flex
                    .van-radio
                        padding-left 123px
                        flex 1 
            .btn 
                width 702px
                height 88px
                background-color #ff4d4d
                border-radius 44px
                color #fff
                font-size 30px
                text-align center
                line-height 88px                 


</style>
