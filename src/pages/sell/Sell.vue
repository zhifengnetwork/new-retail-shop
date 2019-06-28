<template>
    <div class="sell">
      	<!-- 头部组件 -->
		<TopHeader custom-title="50元专卖区" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <!-- CONTENT START -->
        <div class="content">
            <a href="javascript:void(0)" class="sell-list" v-for="(item,key) in list" :key="key">
                <div class="-list-msg">
                    <p>{{item.title}}</p>
                    <p>{{item.msg}}</p>
                </div>
                <img class="-list-img" :src="item.img" @click="showPopup"/>
                <div class="-list-radus-num">{{item.number}}</div>
                <div class="-list-radus-box">
                    <van-checkbox v-model="item.isCheck" :check ="item.isCheck"></van-checkbox>
                </div>
            </a>
        </div>
        <div class="footer-height"></div>
        <div class="footer">
            <div class="footer-a">
                <strong class="f-a-a">
                    已选商品: {{totalCount}}
                </strong>
            </div>
            <div class="footer-b" :class="{'activeColor':totalCount==10}" @click="toPayment">付款</div>
        </div>
        <!-- 弹出层 -->
        <van-popup v-model="show"><img :src="shopsCode" /></van-popup>
    </div>
</template>
<script>
    import TopHeader from "@/pages/common/header/TopHeader";
    // import { List } from 'vant';
    import { Toast } from 'vant';
    export default {
        data(){
            return {
                list:[
                    {
                        title:'风风火火',
                        msg:'DI:58962',
                        img:'/static/images/sell/sell1.png',
                        number:11,
                        isCheck:false
                    },
                    {
                        title:'风风火火',
                        msg:'DI:58962',
                        img:'/static/images/sell/sell2.png',
                        number:11,
                        isCheck:false
                    },
                   {
                        title:'风风火火',
                        msg:'DI:58962',
                        img:'/static/images/sell/sell3.png',
                        number:11,
                        isCheck:false
                    },
                    {
                        title:'风风火火',
                        msg:'DI:58962',
                        img:'/static/images/sell/sell1.png',
                        number:11,
                        isCheck:false
                    },
                    {
                        title:'风风火火',
                        msg:'DI:58962',
                        img:'/static/images/sell/sell1.png',
                        number:11,
                        isCheck:false
                    },
                    {
                        title:'风风火火',
                        msg:'DI:58962',
                        img:'/static/images/sell/sell2.png',
                        number:11,
                        isCheck:false
                    },
                   {
                        title:'风风火火',
                        msg:'DI:58962',
                        img:'/static/images/sell/sell3.png',
                        number:11,
                        isCheck:false
                    },
                    {
                        title:'风风火火',
                        msg:'DI:58962',
                        img:'/static/images/sell/sell1.png',
                        number:11,
                        isCheck:false
                    },
                    {
                        title:'风风火火',
                        msg:'DI:58962',
                        img:'/static/images/sell/sell1.png',
                        number:11,
                        isCheck:false
                    },
                    {
                        title:'风风火火',
                        msg:'DI:58962',
                        img:'/static/images/sell/sell2.png',
                        number:11,
                        isCheck:false
                    },
                   {
                        title:'风风火火',
                        msg:'DI:58962',
                        img:'/static/images/sell/sell3.png',
                        number:11,
                        isCheck:false
                    },
                    {
                        title:'风风火火',
                        msg:'DI:58962',
                        img:'/static/images/sell/sell1.png',
                        number:11,
                        isCheck:false
                    },
                ],
                shopsCode:'/static/images/sell/payCode.png',
                show: false
            }
        },
        methods:{
            changStatus(key){
                this.$set(this.list[key],'isCheck',!this.list[key].isCheck)
            },
            showPopup() {
                this.show = true;
            },
            toPayment(){
                if(this.totalCount != 10){
                    return Toast.fail('只能购买10个');
                }
                this.$router.push({name:'Payment'})
                
            }
        },
        computed:{
            totalCount(){
                let count = 0;
                this.list.forEach((data)=>{
                    if(data.isCheck){
                        count ++;
                    }
                })
                return count;
            }
        },
        components:{
            TopHeader
        }
    }
</script>
<style lang="stylus">
    .sell
        .van-checkbox__icon
            height:60px
        .van-checkbox__icon .van-icon
            width:60px
            height:60px
            line-height:60px
            border: 1px solid #151515;
            background: #fff;
        .van-checkbox__icon--checked .van-icon
            background-color: #f30c0c;
            border-color: #fff;
            border: none;
        .right-msg
            font-size:26px
        .content
            padding:24px 24px
            .sell-list
                display:block
                width:100%
                border-radius: 10px
                position relative
                .-list-img
                    width:100%
                    max-height :100%
                .-list-msg
                    position absolute
                    top:20px
                    left :25px 
                    font-size:26px
                    color:#fff
                    width :180px
                    text-align: center
                    background: rgba(0,0,0,0.3)
                    padding: 6px 3px
                    box-sizing: border-box
                    border-radius: 8px
                    p:nth-child(1)
                        margin-bottom:4px
                        .msg-a
                            background: red
                            padding: 5px
                            width: 21px
                            text-align: center
                            border-radius: 3px
                .-list-radus-num
                    position: absolute
                    top: 0.24rem
                    right: 0
                    width: 100px
                    height: 60px
                    line-height :60px
                    background: #e5233e
                    color: #fff
                    border-bottom-left-radius:30px
                    border-top-left-radius:30px
                    text-align :center
                .-list-radus-box
                    position :absolute
                    right:20px
                    bottom :22px
                    color:#f30c0c
                    width :60px
                    height:60px
                    .-radus-1
                        display:block
                        width :50px
                        height 50px
                        line-height:50px
                        text-align:center
                        font-size:26px
                        border-radius:50%
                        background: #fff
                        box-sizing: border-box
                        border:1px solid #000
                    .-radus-check
                        background: #f30c0c
                        border-radius: 50%
                        color: #fff
                        padding: 5px
                        box-sizing: border-box
        .footer-height
            width :100%
            height:130px
        .footer
            position :fixed
            bottom:0
            width :100%
            height:120px
            left:0
            background:#fff
            z-index :2
            box-shadow: 0px 0px 5px 0px #cccccc
            display :flex
            justify-content :space-between
            align-items:center
            font-size:30px
            font-weight:bold
            .f-a-a
                margin:0 96px 0 24px
            .footer-b
                width:221px
                background:#858585
                color:#fff
                line-height:120px
                text-align: center
            .activeColor
                background:#f30c0c
</style>

