<template>
    <div class="addAddress">
        <TopHeader custom-title="收货地址" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>

        <div class="content">
            <div class="address-info">
                <div class="form-group">
                    <div class="label">收货人</div>
                    <div class="input-group">
                        <input type="text" placeholder="收货人姓名">
                    </div>
                </div>
                <div class="form-group">
                    <div class="label">手机号码</div>
                    <div class="input-group">
                        <input type="number" placeholder="输入电话号码">
                    </div>
                </div>
                <router-link to="/user/selectPoint">
                    <div class="form-group">
                        <div class="label">收货地址 </div>
                            <!-- <div class="input-group">
                                <p v-if="!this.$route.params.poiname">点击选择地址</p>
                                <h3 v-if="this.$route.params.poiname">{{this.$route.params.poiname}}</h3>
                                <p v-if="this.$route.params.poiaddress">{{this.$route.params.poiaddress}}</p>
                            </div> -->
                             <div class="input-group">
                                <p v-if="!this.location">点击选择地址</p>
                                <template v-else>
                                    <h3>{{this.location.poiname}}</h3>
                                    <p>{{this.location.poiaddress}}</p>
                                </template>
                                
                            </div>
                        <div class="right-arrow"></div>
                    </div>
                </router-link>
                <div class="details-address">
                    <div class="label">详细地址</div>
                    <div class="textarea" contenteditable="true" placeholder ="详细地址，例D座726"></div>
                </div>
            </div>

            <!-- 设置默认地址 -->
            <div class="set-default">
                <div class="label">设置默认地址</div>
                <van-switch
                    v-model="checked"
                    size="24px"
                    @change="onCheack"
                />
            </div>

            <!-- 保存按钮 -->
            <div class="saveBtn" @click="onSave()">保存</div>
            
        </div>

    </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'addAddress',
    components: {
        TopHeader
    },
    data(){
        return {
            checked: false,
            location:{}
        }
    },
     created: function(){
        // 返回的位置信息赋值
        this.location = this.$route.params.location
        console.log(this.location)
    },
    methods:{
        // 点击保存按钮时触发
        onSave(addressData){
        
        },
        // 请求数据
        // requestData(){
        //     this.$axios.post('user/add_address',{
        //         consignee:"",
        //         token:window.sessionStorage.getItem("token")
        //     })
        //     .then( (res)=>{
        //         console.log(res)
        //     })
        //     .catch( (error) => {
        //         alert("请求错误:" + error)
        //     })

        // },
        //选择默认地址时触发
        onCheack(val){
            console.log(val)
        },
      
    }

}
</script>

<style lang="stylus" scoped>
.addAddress
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
                    width 460px
                    font-size 24px
                    input
                        width 100%
                        height 30px
                        border none
                    h3
                        font-size 24px
                        color #151515
                        font-weight normal
                    p
                        color #838383
                        font-size 22px
                        overflow hidden
                        text-overflow ellipsis
                        white-space nowrap  
                .right-arrow
                    width 8px
                    height 14px
                    background url("/static/img/user/address/right-arrow.png") no-repeat
                    background-size 100%
                    margin-left 20px
            .details-address
                min-height 56px
                display flex
                padding-top 22px
                padding-bottom 10px 
                .label
                    width 145px
                    font-size 24px
                    color #151515
                    margin-right 10px 
                .textarea
                    flex 1
                    font-size 24px
                    color #858585
                    min-height 30px
                    line-height 30px
                    max-height 140px
                    _height 120px
                    margin-left auto
                    margin-right auto
                    padding 3px
                    outline 0                    
                    padding 2px
                    word-wrap break-word
                    overflow-x hidden
                    overflow-y auto
                    _overflow-y visible
                    -webkit-user-modify read-write-plaintext-only // 只是编辑text文本，只能解决webkit内核里面问题，手机端适用
                    -webkit-user-select text // 解决IOS部分手机不支持contenteditable=true属性问题               
                .textarea[placeholder]:empty:before 
                    content attr(placeholder) 
                // 焦点时内容为空
                .textarea[placeholder]:empty:focus:before 
                    content ""
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
