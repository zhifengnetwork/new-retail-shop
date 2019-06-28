<template>
    <div class="sell">
      	<!-- 头部组件 -->
		<TopHeader custom-title="出售区" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
            <span slot="rightBtn" class="right-msg">选择</span>
		</TopHeader>
        <div class="height-88"></div>
        <!-- CONTENT START -->
        <div class="content">
            <a href="javascript:void(0)" class="sell-list">
                <div class="-list-msg">
                    <p>风风火火</p>
                    <p>DI:58962</p>
                </div>
                <img class="-list-img" src="/static/images/sell/sell1.png" />

                <div class="-list-radus-box">
                    <span class="-radus-1">11</span>
                    <!-- <i class="-radus-check iconfont icon-dagou"></i> -->
                    <i class="iconfont icon-dagou1"></i>
                    <!--  -->
                </div>
            </a>
        </div>
        <div class="footer-height"></div>
        <div class="footer">
            <div class="footer-a">
                <strong class="f-a-a">
                    已选商品: 0
                </strong>
            </div>
            <div class="footer-b">付款</div>
        </div>

    </div>
</template>
<script>
    import TopHeader from "@/pages/common/header/TopHeader";
    export default {
        components:{
            TopHeader
        }
    }
</script>
<style lang="stylus">
    .sell
        .right-msg
            font-size:26px;
        .content
            padding:0 24px 24px;
            .sell-list
                display:block;
                width:100%;
                // height:280px; 
                border-radius: 10px;
                position relative;
                .-list-img
                    width:100%;
                    max-height :100%;
                .-list-msg
                    position absolute;
                    top:20px;
                    left :25px; 
                    font-size:26px;
                    color:#fff;
                    width :180px;
                    p:nth-child(1)
                        margin-bottom:4px;
                
                .-list-radus-box
                    position :absolute;
                    right:20px;
                    bottom :16px;
                    .-radus-1
                        display:block;
                        width :50px;
                        height 50px;
                        line-height:50px;
                        text-align:center;
                        font-size:26px;
                        color:#f30c0c;
                        border-radius:50%;
                        background: #fff;
                        box-sizing: border-box;
                        border:1px solid #000;
        .footer-height
            width :100%;
            height:220px;
        .footer
            position :fixed;
            bottom:98px;
            width :100%;
            height:120px;
            left:0;
            background:#fff;
            z-index :2;
            box-shadow: 0px 0px 5px 0px #cccccc;
            display :flex;
            .footer-a
                width:530px;
                display :flex;
                padding-left:28px;
                .f-a-a
                    display:flex;
                    margin-right:96px;
                .f-a-b
                    margin :14px 26px 8px 0;
                .f-a-b p:nth-child(1)  
                    margin-bottom :2px;
            .footer-b
                width:221px;
                background:#f30c0c;
                color:#fff;
                line-height:120px;
                text-align: center;
                font-size:30px;
                font-weight:bold;
        
</style>

