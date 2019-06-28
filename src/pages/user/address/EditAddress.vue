<template>
    <div class="editAddress">
        <TopHeader custom-title="收货地址" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>

        <div class="content">
            <div class="address-info">
                <div class="form-group">
                    <div class="label">收货人</div>
                    <div class="input-group">
                        <input type="text" placeholder="小腊肉">
                    </div>
                </div>
                <div class="form-group">
                    <div class="label">手机号码</div>
                    <div class="input-group">
                        <input type="number" placeholder="17875592633">
                    </div>
                </div>
                <router-link to="/user/selectPoint">
                    <div class="form-group">
                        <div class="label">收货地址 </div>
                            <div class="input-group">
                                <h3>嘉禾汇大厦</h3>
                                <p>点击选择地址</p>
                            </div>
                        <div class="right-arrow"></div>
                    </div>
                </router-link>
                <div class="form-group">
                    <div class="label">详细地址</div>
                    <div class="input-group">
                        <textarea placeholder="嘉禾汇726" rows="1"></textarea>
                    </div>
                </div>
            </div>

            <div class="set-default">
                <div class="label">设置默认地址</div>
                <van-switch
                    v-model="checked"
                    size="24px"
                    @change="onCheack"
                />
            </div>

            <!-- 保存按钮 -->
            <div class="saveBtn">保存</div>
            
        </div>

    </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'EditAddress',
    components: {
        TopHeader
    },
    data(){
        return {
            checked: false 
        }
    },
    methods:{
        //选择默认地址时触发
        onCheack(val){
            console.log(val)
        }
    }

}
</script>

<style lang="stylus" scoped>
.editAddress
    min-height 100vh
    background-color #ffffff
    .content
        padding 108px 24px 0
        box-sizing border-box 
        .address-info
            padding 0 28px
            box-sizing border-box  
            box-shadow 1px 1px 8px #ccc
            margin-bottom 14px   
            .form-group
                height 56px
                display flex
                align-items center
                border-bottom 1px solid #e6e6e6
                padding-top 22px
                padding-bottom 10px
                .label
                    width 145px
                    font-size 24px
                    color #151515
                    margin-right 10px
                .input-group
                    flex 1
                    input
                        width 100%
                        height 30px
                        border none
                    textarea   
                        width 100%
                        border none
                    h3
                        color #151515
                        font-weight normal
                    p
                        color #838383  
                .right-arrow
                    width 8px
                    height 14px
                    background url("/static/img/user/address/right-arrow.png") no-repeat
                    background-size cover
                    margin-left 20px   
        .set-default
            height 88px
            display flex
            justify-content space-between
            align-items center 
            padding 0 28px
            box-sizing border-box  
            box-shadow 1px 1px 8px #ccc
            .label
                width 145px
                font-size 24px
                color #151515
                margin-right 25px 
        .saveBtn
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

</style>
