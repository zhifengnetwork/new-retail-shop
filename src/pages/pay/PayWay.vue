<template>
    <div class="PayWay">
      	<!-- 头部组件 -->
        <TopHeader custom-title="支付方式" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <div class="content">
            <div class="pay-way">
                <van-radio-group v-model="payDefault">
                    <van-cell-group>
                        <van-cell v-for="(item,index) in pay_type" :key="item.pay_type" :title="item.pay_name" clickable @click="selectPay(item)">
                            <van-radio :name="item.pay_name"/>
                        </van-cell>
                    </van-cell-group>    
                </van-radio-group>
            </div>
        </div>
       <div class="payment-btn" @click="payment(order_id,pay_id)">立即付款</div>

        <!-- 密码输入框 -->
        <van-popup v-model="showPwd" class="popup"  @click-overlay="hidePwd()">
        <van-password-input
        :value="payPassword"
        info="密码为 6 位数字"
        @focus="showKeyboard = true"
        />
        </van-popup>

        <!-- 数字键盘 -->
        <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
        />

    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'PayWay',
     components:{
        TopHeader
    },
    data() {
        return {
            payDefault:'微信支付',
            pay_id:'',//支付方式id
            pay_type:[],//所有支付方式
            payPassword:'',//支付密码
            showPwd:false,
            showKeyboard: false
        }
    },
    mounted(){
        this.order_id = this.$route.query.order_id;
        this.requestData();
    },
    methods:{
        /**
         * 获取支付方式
         */
        requestData(){
            let url = 'Order/get_pay_type';
            this.$axios.post(url,{
                token:this.$store.getters.optuser.Authorization
            }).then((res) => {
                if(res.data.status === 200){
                    this.pay_type = res.data.data;
                    this.pay_id = res.data.data[0].pay_type;//当前选中支付方式id
                }else{
                    this.$toast(res.data.msg)
                }
            })
        },
        /**
         * 选择支付方式
         */
        selectPay(item){
            this.payDefault = item.pay_name;//当前选中
            this.pay_id = item.pay_type;//当前选中支付方式id
        },
        /**
         * 立即付款
         */
        payment(order_id,pay_id){
            if(pay_id == 1){
                this.showPwd = true;
                this.showKeyboard = true;
            }
            else if(pay_id == 2){
               this.$toast("调用微信支付接口");
            }
            else if(pay_id == 3){
                this.$toast("调用支付宝支付接口");
            }
            // else if(pay_id == 4){
            //     this.$toast("货到付款");
            // }
        },
        /**
         * 余额支付:输入密码
         */
        onInput(key) {
            this.payPassword = (this.payPassword + key).slice(0, 6);
            if(this.payPassword.length === 6){
                // let url = 'user/check_pwd';
                // this.$axios.post(url,{
                //     token:this.token,
                //     pwd:this.payPassword
                // }).then((res)=>{
                //     console.log(66)
                // })
                // 关闭密码输入
                this.showKeyboard = false;
                this.showPwd = false;
                this.payPassword = '';
 
                // 请求数据
                let url = 'pay/payment';
                this.$axios.post(url,{
                    token:this.$store.getters.optuser.Authorization,
                    order_id:this.$route.query.order_id,
                    pay_type:this.pay_id 
                }).then((res) => {
                    console.log(res.data)
                    if(res.data.status === 200){   
                        // 余额支付成功                   
                        // this.$toast(res.data.msg)
                        this.requestData();
                        setTimeout(() => {
                            console.log("支付成功，2s跳转到支付成功页面")
                            this.$router.push('/Pay/PaySucceed')
                        },2000)
                        
                    }else{
                        // 支付失败
                        this.$toast(res.data.msg);
                    }
                })
 


            }
        },
        /**
         * 删除密码
         */
        onDelete() {
            this.payPassword = this.payPassword.slice(0, this.payPassword.length - 1);
        },
        /**
         * 关闭密码蒙层，清空密码
         */
        hidePwd(){
            this.showPwd=false;
            this.payPassword = '';
        },
    },
    
}
</script>

<style lang="stylus" scoped>
.PayWay
    .content
        margin-top 20px
        padding 0 24px
        box-sizing border-box
        .pay-way /deep/ .van-cell__value
            flex none
    .payment-btn
        width 70%
        height 70px
        line-height 70px
        text-align center
        color #fff
        font-size 30px
        background-color #f70a0a
        border-radius 10px
        position fixed
        left 50%
        bottom 50px
        margin-left -35%
        z-index 9
    .popup
        width 100%
        .van-password-input__security li:first-child
            border-left 1px solid #999
        .van-password-input__security li
            border 1px solid #999
            border-left 0
        .van-password-input
            padding 30px 0 20px
    .van-number-keyboard
        z-index 3000!important
</style>



