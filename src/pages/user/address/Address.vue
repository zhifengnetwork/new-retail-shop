<template>
    <div class="AddressView">
        <TopHeader custom-title="收货地址" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>

        <div class="content">
            <div class="address-list">
                <div class="address-item">
                    <div class="item-name">
                        <span class="name">小腊肉</span>
                        <span class="tel">17875592622</span>
                        <router-link to="/user/editAddress">
                            <span class="edit"></span>
                        </router-link>
                    </div>
                    <div class="item-address">
                        <div class="isDefault">默认</div>
                        <div class="exact-address">
                            <p>广东省广州市番禺区荷光路快递收藏路15栋28层28层28层28层28层28层28层28层28层</p>
                        </div>
                    </div>
                    <span class="del-icon"></span>
                </div>
                <div class="address-item">
                    <div class="item-name">
                        <span class="name">荷包蛋</span>
                        <span class="tel">17875592622</span>
                        <router-link to="/user/editAddress">
                            <span class="edit"></span>
                        </router-link>
                    </div>
                    <div class="item-address">
                        <div class="exact-address">
                            <p>广东省广州市番禺区荷光路快递收藏路15栋28层</p>
                        </div>
                    </div>
                    <span class="del-icon"></span>
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
export default {
    name:'AddressView',
    components: {
        TopHeader
    },
    data(){
        return {
           
        }
    },
   
    mounted(){
        this.requestData();//请求数据
    },
    methods:{
        // 请求数据
        requestData(){
            // this.$axios.post('user/address_list',{
            //     token:window.sessionStorage.getItem("token")
            // })
            // .then( (res)=>{
            //     console.log(res)
            // })
            // .catch( (error) => {
            //     alert("请求错误:" + error)
            // })

        }
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
                height 205px
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
                    .edit
                        width 27px
                        height 27px
                        display block
                        background url('/static/images/user/address/address-edit-icon.png') no-repeat
                        background-size cover   
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
                            overflow hidden
                            display -webkit-box
                            -webkit-line-clamp 2
                            -webkit-box-orient vertical
                .del-icon
                    width 22px
                    height 22px
                    display block
                    background url('/static/images/user/address/del-icon.png') no-repeat
                    background-size cover
                    position absolute
                    right 10px
                    top 10px 
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
