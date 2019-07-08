<template>
    <div class="AddressView">
        <TopHeader custom-title="收货地址" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>

        <div class="content">
            <div class="address-list" v-for="(item,index) in siteList" :key="index">
                <div class="address-item">
                    <div class="item-name">
                        <span class="name">{{item.consignee}}</span>
                        <span class="tel">{{item.mobile}}</span>
                    </div>
                    <div class="item-address">
                        <div class="isDefault" v-if="item.is_default===1">默认</div>
                        <div class="exact-address">
                            <p>{{item.c_cn}}&nbsp;{{item.p_cn}}&nbsp;{{item.d_cn}}</p>
                            <p>{{item.address}}</p>
                        </div>
                    </div>
                    <div class="operation-bar">
                        <router-link to="/user/AddAddress">
                            <span class="iconfont icon-bianji1 edit" @click="xiugai()"></span>
                        </router-link>
                        <span class="iconfont icon-guanbi del-icon" @click="delSite(item,index)"></span>
                    </div>
                </div>
            </div>
            <router-link to="/user/AddAddress">
                <div class="add-address">
                    <span class="plus-icon"><img src="/static/images/user/address/plus-icon.png" /></span>
                    <span>新建收货地址</span>
                </div>
            </router-link>

        </div>

    </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
import { Dialog,Toast  } from 'vant'
export default {
    name:'AddressView',
    components: {
        TopHeader
    },
    data(){
        return {
           siteList:[]
        }
    },
    // mounted(){
    //     this.requestData();//请求数据
    // },
    created() {
        // 获取用户地址列表
        var url = '/address/addressList'
        var params = new URLSearchParams();
        params.append('token', this.$store.getters.optuser.Authorization);       //你要传给后台的参数值 key/value
        this.$axios({
            method:"post",
            url:url,
            data:params
        }).then((res)=>{
            if(res.data.status === 200){
                this.siteList = res.data.data
                console.log(this.siteList)
            } else if (res.data.status === -200){  
                Dialog.alert({
                    message:res.data.msg
                }).then(()=>{
                store.commit('del_token'); //token，清除它;
                    setTimeout(() => {
                        this.$router.push("/Login");  
                    })
                })
            } else {
                Dialog.alert({
                    message:res.data.msg
                })
            }
        })
    },
    methods:{
        // // 请求数据
        // requestData(){
        //     var _that =this;
        //     _that.$axios.post('/address/addressList',{
        //         token:this.$store.getters.optuser.Authorization             
        //     })
        //     .then((res)=>{
        //         var list = res.data;
        //         if(list.status == 200){
        //             _that.addressList =list.data
        //         }else{
        //             _that.$toast(list.msg)
        //         }
        //     })
        // },
        //修改地址
        xiugai() {        
            this.$router.push({
            name: 'AddAddress',
                params: {
                    address_id: 1055
                }
            })
        },

        //删除地址
        delSite(item,index) {
            var url = '/address/delAddress'
            var params = new URLSearchParams();
                params.append('id',item.address_id);       //传给后台的参数值 key/value
                params.append('token', this.$store.getters.optuser.Authorization); //传给后台的参数值 key/value
            Dialog.confirm({
                title: '温馨提示',
                message: '你确定要删除当前地址吗?',
            }).then(() => {
                this.$axios({
                    method:"post",
                    url:url,
                    data:params
                }).then((res)=>{
                    if (res.data.status === 200){
                        Toast(res.data.msg);
                        this.siteList.splice(index,1)
                    } else {
                        Dialog.alert({
                            message:res.data.msg
                        })
                    }
                })
            }).catch(() => {
                // on cancel
            }); 
        },
    }

}
</script>

<style lang="stylus" scoped>
.AddressView
    min-height 100vh
    background-color #ffffff
    .content
        padding 108px 24px 0
        box-sizing border-box
        background-color #ffffff
        .address-list   
            .address-item
                width 100%
                // height 205px
                font-size 30px
                box-shadow 1px 1px 8px #ccc
                padding 30px 80px 28px 30px
                box-sizing border-box
                margin-bottom 10px
                position relative
                .item-name
                    display flex
                    align-items center
                    margin-bottom 20px
                    .name   
                        margin-right 50px
                    .tel
                        flex 1
                .item-address
                    display flex
                    .isDefault
                        width 54px
                        height 28px
                        line-height 28px
                        text-align center
                        font-size 24px
                        color #ffffff
                        background-color #43c439
                        border-radius 3px
                        margin-right 20px
                        margin-top 5px
                    .exact-address
                        flex 1
                        font-size 0
                        p
                            line-height 40px
                            font-size 30px
                            // overflow hidden
                            // display -webkit-box
                            // -webkit-line-clamp 2
                            // -webkit-box-orient vertical
                .operation-bar
                    position absolute
                    right 10px
                    top 16px
                    span 
                        color #7f7f7f
                        font-size 36px
                    .del-icon
                        margin-left 30px
        .add-address
            width 92%
            height 88px
            line-height 88px
            text-align center
            font-size 36px
            color #ffffff
            background-color #ff4d4d
            position fixed
            left 50%
            bottom 25px
            margin-left -46%
            border-radius 40px
            .plus-icon
                width 37px
                display inline-block
                vertical-align middle
                margin-right 15px
                img 
                    width 100%

   

            

</style>
