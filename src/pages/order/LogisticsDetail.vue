<template>
    <div class="logisstics-wrap">
      	<!-- 头部组件 -->
		<TopHeader custom-title="物流详情" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
            <!-- <span slot="rightBtn"><router-link class="fontRe" to="/user/EditPaymentCode"><i class="iconfont icon-bianji"></i></router-link></span> -->
		</TopHeader>
        <div class="height-88"></div>
        <!-- CONTENT START --> 

        <div class="content">
            <div class="box pt">
                <div class="order-info">
                    <div class="left-pro-pic">
                        <img src="__PUBLIC__/images/nomore.png">
                        <p class="shadow">一件商品</p>
                    </div>
                    <div class="right-detail">
                        <p><b>物流状态：</b><span class="txt-success">已签收</span></p>
                        <p>快递公司：顺丰快递</p>
                        <p>快递单号：1234567892512</p>
                        <p>官方电话：1234567892512</p>
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="box mt">
                <div class="logistics-info">
                    <ul>
                        <!-- 当前状态 li addClass active-->
                        <li class="active">
                            <i></i>
                            <p class="txt">商家已发货</p>
                            <p class="time">2017-10-10 10:10:10</p>
                        </li>
                        <li>
                            <i></i>
                            <p class="txt">商家已发货</p>
                            <p class="time">2017-10-10 10:10:10</p>
                        </li>
                        <li>
                            <i></i>
                            <p class="txt">商家已发货</p>
                            <p class="time">2017-10-10 10:10:10</p>
                        </li>
                        <li>
                            <i></i>
                            <p class="txt">商家已发货</p>
                            <p class="time">2017-10-10 10:10:10</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader";
export default {
    data() {
        return {
            imgList: [],
            token:this.$store.getters.optuser.Authorization
        }
    },
    created(){
        this.$store.commit('showLoading')       //加载login
        this.getPayCodeInfo()
    },
    methods:{

        getPayCodeInfo(){
            var _that =this
            _that.$axios.post('pay/get_user_payment',{
                'token':_that.token         
            })
            .then((res)=>{
                var list = res.data;
                console.log(list)
                _that.$store.commit('hideLoading')
                if(list.status == 200){
                    _that.imgList =list.data
                }
                // else if(list.status === 999){
                //     _that.$store.commit('del_token'); //清除token
                //     setTimeout(()=>{
                //         _that.$router.push('/Login')
                //     },1000)
                // }
                else{
                    _that.$toast(list.msg)
                }
            })
        }, 

        // setAgents(){
        // }
    },
    components:{
        TopHeader
    }
}
</script>
<style lang="stylus">
    html,body
        background:#e0e0e0
    .logisstics-wrap
        padding :24px
        .box
            width:100%
            background:#fff
            .order-info
                width:94%
                margin:0 auto
                padding:15px 0
                .left-pro-pic
                    width:30%;
                    float:left;
                    position: relative;
                    padding: 5px;
                    border:1px solid #ddd;
                    img
                        height:60px;
                        max-width: 80px;
                        display: block;
                        margin:0 auto;
                    p
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width:100%;
                        background:#000;
                        opacity: .8;
                        color:#fff;
                        padding:2px 0;
                        text-align: center;
                        font-size:26px;
                    
           .logistics-info
                width:90%;
                margin-left:5%;
                padding:25px 0;
                min-height: 500px;
                ul
                    li
                        position: relative;
                        i
                            display: inline-block;
                            height: 70px;
                            width:3px;
                            background:#afafaf;
                            :after
                                content:'';
                                position: absolute;
                                left:-3px;
                                top:-3px;
                                width:8px;
                                height: 8px;
                                background:#868686;
                                box-shadow: 0 0 8px 2px #828282;
                                border-radius: 50%
                            .active
                                width:11px;
                                height:11px;
                                background:#41a8fd;
                                box-shadow: 0 0 8px 2px #41a8fd;
                                i
                                    :after
                                        width:11px;
                                        height:11px;
                                        background:#41a8fd;
                                        box-shadow: 0 0 8px 2px #41a8fd;
                        .txt
                            top:-8px;
                        .time
                            top:10px;
                            border-bottom:1px solid #ccc;
                            padding-bottom: 10px;
    	    .clearfix
                clear:both;
    	.box .order-info p{}
    	.box .order-info .right-detail{width:69%;float:right;}
    	.box .order-info .right-detail p{margin-bottom: 3px}
    .txt-success
        color:#5cb85c;
    .mt
        margin-top:15px;
    .pt
        padding-top:40px;
</style>

