<template>
    <div class="Login">
        <h1>登录</h1>
        <div class="login-container">
            <div class="form-group">
                <i class="icon tel-icon"></i>
                <input type="text" placeholder="输入手机号" >
            </div>
            <div class="form-group">
                <i class="icon password-icon"></i>
                <input type="password" placeholder="输入密码" >
            </div>
        </div>
       
    </div>
</template>

<script>
export default {

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

</style>
