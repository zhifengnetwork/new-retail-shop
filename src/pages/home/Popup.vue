<template>
    <div class="mask-panel" v-show="popShow" @touchmove.prevent>
        <div class="popup">
            <div class="thead">
                <p>发布商品需缴纳30元服务费？</p>
            </div>
            <div class="tbody"></div>
            <div class="tfoot">
                <span class="btn" @click="handleCancel">取消</span>
                <!-- <span class="confirm-btn btn"><input type="button" value="去付款" @click="topPayServiceCharge()"/></span> -->
                <router-link to="/Pay/PayWay" class="confirm-btn btn"><input type="button" value="去付款"/></router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'Popup',
    props:{
        popShow:{
            type:Boolean,
            required:true
        }
    },
    
    data(){
        return {
            // popShow: true,//弹窗是否显示
            flag:false
        }
    },
    methods:{
        //给平台支付30服务费
        /*topPayServiceCharge(){
            var _that =this;
            _that.$axios.post('pay/release_wx_pay',{
                token:this.$store.getters.optuser.Authorization,
                pay_type:3          
            })
            .then((res)=>{
                var list = res.data;
                // console.log(list)
                if(list.status == 200){
                    this.$router.push({
                        path: '/Pay/PayWay'
                    })
                    // window.location.href =res.data.data.url    //拉起支付宝链接，暂时注解
                }
                else if(res.data.status == 999){
					this.$store.commit('del_token'); //清除token
					setTimeout(()=>{
						this.$router.push('/Login')
					},1000)
				}
                else{
                    _that.handleCancel()
                    _that.$toast(list.msg)
                }
            })
        },*/

        //点击取消
        handleCancel(){
            var _that =this;
            this.$emit('handleCancel',false)    
            _that.$axios.post('fifty_zone/cancel_order',{
                token:this.$store.getters.optuser.Authorization,        
            })
            .then((res)=>{

            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.mask-panel
    width 100%
    height 100%
    background: rgba(0,0,0,0.6)
    position fixed
    left 0
    bottom 0
    z-index 99
    .popup
        min-width 480px
        padding 48px 30px
        box-sizing border-box
        background-color #ffffff
        border-radius 14px
        position absolute
        left 50%
        top 50%
        z-index 3
        transform translate(-50%,-50%)
        .thead
            text-align center
            p
                font-size 30px
        .tfoot
            display flex
            justify-content space-between
            margin-top 90px
            .btn    
                width 180px
                height 60px
                line-height 60px
                font-size 30px
                color #f94e08
                text-align center
                display block
                border 1px solid #f66314
                border-radius 26px
            .confirm-btn
                background-color #f56917
                background linear-gradient(to right, #f56b18 , #f94c07)
                border none 
                color #ffffff


</style>
