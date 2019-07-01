<template>
    <div class="Register">
        <h1>注册</h1>
        <div class="register-container">
            <div class="form-group">
                <i class="icon tel-icon"></i>
                <input type="text" placeholder="输入手机号" >
            </div>
            <div class="form-group">
                <i class="icon verify-icon"></i>
                <input type="password" placeholder="输入验证码" >
                <div class="verifyCode">获取验证码</div>
            </div>
            <div class="form-group">
                <i class="icon password-icon"></i>
                <input type="password" placeholder="输入密码" >
            </div>
            <div class="form-group">
                <i class="icon password-icon"></i>
                <input type="password" placeholder="再次输入密码" >
            </div>

            <div class="btn">注册</div>
            <div class="jump-link">
                <router-link to="/Login">登录</router-link>
                <router-link to="/EditPassword">忘记密码</router-link>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
    name:'Register',

}
</script>

<style lang="stylus" scoped>
.Register
    width 100%
    min-height 100vh
    background-color #ffffff
    h1
        height 208px
        line-height 208px
        text-align center
        font-weight normal
        font-size 36px
    .register-container
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
            .verify-icon
                background url(/static/images/login/verifyCode-icon.png) no-repeat center center
                background-size 14px 30px
            input 
                height 50px
                flex 1
                font-size 26px
            .verifyCode
                font-size 30px
                color #f4550b
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
                color #fa9f71
        

</style>
