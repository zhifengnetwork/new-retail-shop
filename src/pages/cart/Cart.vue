<template>
    <div class="cart">
        <!-- <TopHeader custom-title="购物车" custom-fixed>
            <div class="rightBtn">
                <span class="iconfont icon-lajitong">11</span>  
            </div>
              
        </TopHeader> -->
        <div class="header">
            购物车
            <span class="iconfont icon-lajitong"></span>
        </div>
       
        <div class="conter">
            <div class="c-list-">
                <van-checkbox v-model="checked"></van-checkbox>
                <img src="/static/images/cart/goods_img.png" />
            </div>
        </div>
    </div>



</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader";
export default {
    data(){
        return {
            checked: true
        };
    },
    components: {
		TopHeader
	}

}
</script>

<style lang="stylus">
        .cart
            width:100%;
            min-height:100%;
            .header
                width:100%;
                line-height:88px;
                height:88px;
                font-size:30px;
                font-weight:bold;
                text-align: center;
                position: relative;
                background:green;
            .conter
                margin : 10px 24px;
                .c-list-
                    width:100%;
                    margin-bottom:10px;
                    border-radius:6px;
                    background:#fff;
                    background:#ccc;
                    padding: 50px 6px;
                    display:flex;
                    .van-checkbox__icon--checked .van-icon
                        background-color: #f30c0c;
                        border-color: #fff;

</style>
