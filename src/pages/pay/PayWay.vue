<template>
    <div class="PayWay">
      	<!-- 头部组件 -->
        <!-- <TopHeader custom-title="支付方式" custom-fixed>
			<span class="infl"><i class="iconfont icon-fanhui" @click="linkCategory()"></i></span>
		</TopHeader> -->
        <div class="TopHeader">
            <div class="backBtn" @click="linkCategory()">
                <i class="iconfont icon-fanhui"></i>
            </div>
            <div class="title">支付方式</div>
        </div>

        <div class="height-88"></div>
        <div class="content">
            <div class="pay-way">
                <van-radio-group v-model="payDefault">
                    <van-cell-group>
                        <van-cell v-for="(item,index) in pay_type" :key="index" :title="item.pay_name" clickable @click="selectPay(item)">
                            <van-radio :name="item.pay_name"/>
                        </van-cell>
                    </van-cell-group>    
                </van-radio-group>
            </div>
        </div>
       <div class="payment-btn" @click="payment(order_id,pay_id)">立即付款</div>

        <!-- 密码输入框 -->
        <!-- <van-popup v-model="showPwd" class="popup"  @click-overlay="hidePwd()">
        <van-password-input
        :value="payPassword"
        info="密码为 6 位数字"
        @focus="showKeyboard = true"
        />
        </van-popup> -->
        <!-- 数字键盘 -->
        <div v-show="paswPopup" class="pasw-popup">
            <div class="-popup-cont">
                <van-password-input
                :value="payPassword"
                @focus="showKeyboard = true"
                />
                <div class="fg-password"><router-link to="/user/SetPassword">忘记密码</router-link></div>
                <van-number-keyboard
                :show="showKeyboard"
                @input="onInput"
                @delete="onDelete"
                @blur="showKeyboard = true"
                />
            </div>
        </div>
    </div>
</template>
<script>
// import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'PayWay',
    data() {
        return {
            payDefault:'微信支付',
            order_id:this.$route.query.order_id,
            pay_id:'',//支付方式id
            pay_type:[],//所有支付方式
            payPassword:'',//支付密码
            showPwd:false,
            showKeyboard: true,
            paswPopup:false
        }
    },
    created(){
        // this.order_id = this.$route.query.order_id;
        this.requestData();
    },
    methods:{

        linkCategory(){
            this.$router.push('/Category')
        },
        /**
         * 获取支付方式
         */
        requestData(){
              var type=""
              if(typeof(this.order_id)=='undefined'){
                  type=1
            }
            let url = 'Order/get_pay_type';
            this.$axios.post(url,{
                token:this.$store.getters.optuser.Authorization,
                type:type
            }).then((res) => {
                if(res.data.status === 200){
                    this.pay_type = res.data.data;
                    this.pay_id = res.data.data[0].pay_type;//当前选中支付方式id
                } 
                else if(res.data.status == 999){
					this.$store.commit('del_token'); //清除token
					setTimeout(()=>{
						this.$router.push('/Login')
					},1000)
				}
                else{
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
                this.paswPopup =true
            }
            else if(pay_id == 2){
                 if(typeof(this.order_id)=='undefined'){
                    this.topPayServiceCharge()
                }else{
                     
                    this.requestInfo()                  // 请求数据
                }
            //    this.$toast("调用微信支付接口");
               // this.requestInfo()               //拉起微信链接
            }
            else if(pay_id == 3){
                 if(typeof(this.order_id)=='undefined'){
                    this.topPayServiceCharge()
                }else{
                     
                    this.requestInfo()                  // 请求数据
                }
                // this.$toast("调用支付宝支付接口");
                // this.requestInfo()               //拉起支付宝链接
            }
        },

        topPayServiceCharge(){
            var _that =this;
            _that.$axios.post('pay/release_wx_pay',{
                token:this.$store.getters.optuser.Authorization,
                pay_type:this.pay_id,
                pwd:this.payPassword        
            })
            .then((res)=>{
                var list = res.data;
                if(list.status == 200){
                    _that.$toast(list.msg)
                    setTimeout(()=>{
                        this.$router.push('/sell/Sell')
                    },1500)
                }else if(list.status == 308){
                    this.$router.push('/user/upAmount')
                }
                else if(list.status == 310){
                    this.$router.push('/Payment')
                }
                else if(res.data.status == 999){
					this.$store.commit('del_token'); //清除token
					setTimeout(()=>{
						this.$router.push('/Login')
					},1000)
				}else if(res.data.status == 311){
				     window.location.href =res.data.data.url 
				}
                else{
                    _that.$toast(list.msg)
                }
            })
        },


        /**
         * 余额支付:输入密码
         */
        requestInfo(){
            let url = 'pay/payment';
            this.$axios.post(url,{
                token:this.$store.getters.optuser.Authorization,
                order_id:this.$route.query.order_id,
                pay_type:this.pay_id, 
                pwd:this.payPassword
            }).then((res) => {
                if(res.data.status === 200){  
                    if(this.pay_id==1){
                         // 余额支付成功               
                        this.$toast.success({message:res.data.msg,duration: 2000});
                        this.requestData();
                        setTimeout(() => {                   //支付成功，2s跳转到订单详情页
                            this.$router.push('/Order/OrderDetails?order_id=' + res.data.data.order_id)
                        },2000)
                    }
                    if(this.pay_id==2 || this.pay_id==3){           //拉起支付宝链接，暂时注解
                        window.location.href =res.data.data.url 
                    }
                    // else if(this.pay_id==3){             
                    //     window.location.href =res.data.data.url
                    // }
                    
                } 
                else if(res.data.status == 308){
                    return this.$router.push('/user/upAmount')
                }  
                else if(res.data.status === 888){
                    // 设置支付密码
                    this.$toast.fail(res.data.msg);
                    this.$router.push('/user/SetPassword')
                }else if(res.data.status == 999){               // token过期
                    this.$store.commit('del_token');              //清除token
                    setTimeout(()=>{
                        this.$router.push('/Login')
                    },1000)
                }
                else{
                    // 支付失败
                    this.$toast.fail(res.data.msg);
                }
            })
        },
        onInput(key) {
            this.payPassword = (this.payPassword + key).slice(0, 6);
            if(this.payPassword.length === 6){ 
                if(typeof(this.order_id)=='undefined'){
                    this.topPayServiceCharge()
                }else{
                     
                    this.requestInfo()                  // 请求数据
                }

                // 关闭密码输入
                this.showKeyboard = false
                this.showPwd = false
                this.paswPopup =false
                this.payPassword = ''
            }
        },

        // onInput(key) {
        //     this.payPassword = (this.payPassword + key).slice(0, 6);
        //     if(this.payPassword.length === 6){ 
        //         // 请求数据
        //         let url = 'pay/payment';
        //         this.$axios.post(url,{
        //             token:this.$store.getters.optuser.Authorization,
        //             order_id:this.$route.query.order_id,
        //             pay_type:this.pay_id, 
        //             pwd:this.payPassword
        //         }).then((res) => {
        //             if(res.data.status === 200){  
        //                 // 余额支付成功               
        //                 this.$toast.success({message:res.data.msg,duration: 2000});
        //                 this.requestData();
        //                 setTimeout(() => {
        //                     // console.log("支付成功，2s跳转到订单详情页")
        //                     this.$router.push('/Order/OrderDetails?order_id=' + res.data.data.order_id)
        //                 },2000)
        //             }else if(res.data.status === 888){
        //                 // 设置支付密码
        //                 this.$toast.fail(res.data.msg);
        //                 this.$router.push('/user/SetPassword')
        //             }else if(res.data.status == 999){
        //                 // token过期
        //                 this.$toast(res.data.msg)
        //                 this.$store.commit('del_token'); //清除token
        //                 setTimeout(()=>{
        //                     this.$router.push('/Login')
        //                 },1000)
        //             }
        //             else{
        //                 // 支付失败
        //                 this.$toast.fail(res.data.msg);
        //             }
        //         })


        //          // 关闭密码输入
        //         this.showKeyboard = false
        //         this.showPwd = false
        //         this.paswPopup =false
        //         this.payPassword = ''
        //     }
        // },
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
    .TopHeader
        width 100%
        height 88px
        line-height 88px
        color #151515
        font-size 30px
        background-color #ffffff
        display flex
        justify-content space-between
        align-items center
        position fixed
        top 0
        left 0
        z-index 9
        .backBtn
            width 10%
            text-align center
            position absolute
            left 0
            top 0
            .iconfont 
                font-size 36px
        .title
            text-align center
            width 70%
            margin 0 auto
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
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
    .pasw-popup
        position fixed
        width 100%
        height 100%
        bottom 0
        left 0
        z-index 9999
        background rgba(0,0,0,0.5)
        .-popup-cont
            position absolute
            bottom 0
            z-index 1
            left 0
            width 100%
            background #fff
            padding-top 40px
            .fg-password
                text-align right
                margin: 30px
                a
                    color: #1a89fa
            .van-password-input__security 
                height: 100px
            .van-password-input__security li
                border 1px solid #bdbdbd
                border-left 0
            .van-password-input__security li:first-child
                    border-left 1px solid #bdbdbd
            .van-password-input__security li:first-child
                // border-left 1px solid #999
            .van-number-keyboard
                position relative
    // .popup
    //     width 100%
        
    //     .van-password-input__security li
    //         border 1px solid #999
    //         border-left 0
    //     .van-password-input
    //         padding 30px 0 20px
    // .van-number-keyboard
    //     z-index 3000!important
</style>



