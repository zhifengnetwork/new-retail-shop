<template>
    <div class="cart">
      	<!-- 头部组件 -->
		<TopHeader custom-title="收藏" custom-fixed>
			<i slot="rightBtn" class="iconfont icon-lajitong" @click="deletOption()"></i>
		</TopHeader>
        <div class="height-88"></div>
       
        <div class="conter">
            <div class="c-list-" v-for="(item,key) in list" :key="key">
                <van-checkbox v-model="item.isCheck" :check ="item.isCheck" @click="selectGoods($event,key)"></van-checkbox>
                <div class="-list-img">
                    <router-link to="/Details"><img :src="item.img" /></router-link>
                </div>
                <div class="goods-info">
                     <router-link to="/Details"><p class="-info-msg">{{item.text}}</p></router-link>
                    <div class="-info-option"> 
                        <span class="price">
                            ￥<strong>{{item.price}}</strong>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader";
import { Dialog } from 'vant';
import { Toast } from 'vant';
export default {
    data(){
        return {
            list:[
                {
                    text:'自然堂化妆品补水防晒虎虎生风',
                    img:'/static/images/user/goods_3.png',
                    price:'360.00',
                    isCheck:false
                },
               {
                    text:'自然堂化妆品补水防晒虎虎生风',
                    img:'/static/images/user/goods_3.png',
                    price:'380.00',
                    isCheck:false
                },
                {
                    text:'自然堂化妆品补水防晒虎虎生风',
                    img:'/static/images/user/goods_3.png',
                    price:'360.00',
                    isCheck:false
                }
            ],
            allChecked: false,
        };
    },
    components: {
        [Dialog.Component.name]: Dialog.Component
    },
    methods:{
        selectGoods(e,key){
            var data =this.list[key];
             this.$set(data,'isCheck',!data.isCheck);
            if(!data.isCheck){
                this.allChecked=false
            }
        },
        deletOption(){
            if(this.updateNumber < 1){
                Toast('亲，还没有选择要删除的商品哦!');
                return
            }
            Dialog.confirm({
            title: '信息提醒',
            message: '亲，再考虑考虑吧?'
            }).then(() => {
                let newArry=[];
                this.list.forEach((data,index)=>{
                    if(!data.isCheck){
                        newArry.push(data)
                    }
                })
                this.list =newArry;

            // on confirm
            }).catch(() => {
            // on cancel
            });
        }
    },
    components: {
        TopHeader
	}

}
</script>

<style lang="stylus">
        .colorRed
            color:#ff112f
        .size-35
            font-size:35px
        .size-30
            font-size:30px
        .van-checkbox__icon--checked .van-icon
            background-color: #f30c0c
            border-color: #fff
        .cart
            width:100%
            min-height:100%
            color:#151515
            .conter
                margin : 10px 24px
                //  background:#ccc
                .c-list-
                    width:100%
                    margin-bottom:12px
                    border-radius:6px
                    padding: 20px 40px 20px 6px
                    height:238px
                    display:flex
                    align-items :center
                    box-sizing: border-box
                    .-list-img
                        width:201px
                        height:176px
                        margin:0 10px 0 4px
                        img
                            max-width:100%
                            max-height 100%
                    .goods-info
                        width:445px
                        .-info-msg
                            width:100%
                            height:80px
                            font-size:24px
                            color #151515
                            overflow:hidden
                            text-overflow: ellipsis
                            -webkit-line-clamp: 2
                            text-overflow: ellipsis
                            white-space: nowrap
                            margin-bottom:10px
                            word-break: break-all
                        .-info-option
                            display:flex
                            justify-content:space-between
                            align-items center
                            .price
                                color:#ff112f
                                font-size:20px
                                strong
                                    font-size:30px
</style>    

