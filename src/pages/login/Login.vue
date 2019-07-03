<template>
    <div class="Login">
        <h1>登录</h1>
        <div class="login-container">
            <div class="form-group">
                <i class="icon tel-icon"></i>
                <input type="text" placeholder="输入手机号" v-model="phone">
            </div>
            <div class="form-group">
                <i class="icon password-icon"></i>
                <input :type="isHide?'password':'text' " placeholder="输入密码" v-model="password">
                <div class="eyes" @click="handleEyes()">
                    <i :class="isHide?'close-eyes':'open-eyes'"></i>
                </div>
            </div>
            <div class="btn" @click="loginClick()">登录</div>

            <div class="jump-link">
                <router-link to="/Register">注册账号</router-link>
                <router-link to="/EditPassword">忘记密码</router-link>
            </div>

        </div>
       
    </div>
</template>

<script>
import md5 from 'js-md5';
export default {
    name:'Login',
    data(){
        return{
            phone:'',//手机号
            password:'',//密码
            isHide:true,  //是否显示密码
            disabled:false
        }
    },
    mounted(){
        var $mobile = '11223344556';
        var $temp = 'reg';
        var a = md5($mobile+$temp)
        console.log(a)
    },
    methods:{
        /**
         * 密码显示开关
         */
        handleEyes(){
            this.isHide = !this.isHide
        },

        /**
         * 校验登录
         */
        loginClick(){
            if(this.phone == ''){
                this.$toast('手机号码不能为空')
                return false
            }else if(!/^1[345678]\d{9}$/.test(this.phone)){
                this.$toast('请填写正确的手机号码')
                return false
            }else if(this.password == ''){
                this.$toast('密码不能为空')
                return false
            }else if(!/^[a-z0-9_-]{6,18}$/.test(this.password)){
                this.$toast('密码长度为6-18位')
                return false
            }else{
                // 请求数据
                this.$toast('校验成功，请求接口数据再次验证')
            }

        }

    }

}
</script>

<style lang="stylus" scoped>
.Login
    width 100%
    min-height 100vh
    background-color #ffffff
    h1
        height 208px
        line-height 208px
        text-align center
        font-weight normal
        font-size 36px
    .login-container
        padding 0 24px
        box-sizing border-box
        .form-group
            width 100%
            height 90px
            border-bottom 1px solid #f56817
            display flex
            align-items center
            .icon
                width 56px
                height 100%
                display inline-block
                margin-right 20px
            .tel-icon
                background url(/static/images/login/tel-icon.png) no-repeat center center
                background-size 20px 30px
            .password-icon
                background url(/static/images/login/password-icon.png) no-repeat center center
                background-size 24px 28px
            input 
                height 50px
                flex 1
                font-size 26px
            .eyes
                width 82px
                height 100%
                i 
                    width 100%
                    height 100%
                    display inline-block
                .close-eyes
                    width 82px
                    background url(/static/images/login/close-eyes.png) no-repeat center center
                    background-size 36px 17px
                .open-eyes
                    width 82px
                    background url(/static/images/login/open-eyes.png) no-repeat center center
                    background-size 36px 24px
        .btn
            width 100%
            height 88px
            text-align center
            line-height 88px
            border-radius 40px
            font-size 36px
            color #ffffff
            background linear-gradient(to right, #f9a775,#fb946a)
            margin-top 88px
        .jump-link
            width 100%
            font-size 28px
            margin-top 20px
            padding 0 38px
            box-sizing border-box
            display flex
            justify-content space-between
            a
                // color #1e82d2
                color #fa9f71


</style>
