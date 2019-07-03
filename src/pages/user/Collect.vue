<template>
    <div class="collect-wrap">
      	<!-- 头部组件 -->
		<TopHeader custom-title="收藏" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
			<i slot="rightBtn" v-show="!showTrash" class="iconfont icon-lajitong" @click="showDelectBtn()"></i>
            <span slot="rightBtn" v-show="showTrash"  @click="showDelectBtn()">完成</span>
		</TopHeader>
        <div class="height-88"></div>
       
        <!-- NO INFO START -->
        <div v-show="list.length<1">
            <Nodata :nodatas="nodatas"></Nodata>
        </div>
        <!-- GOODS INFO START -->
        <div  v-show="list.length>0" class="conter">
            <div class="c-list-" v-for="(item,key) in list" :key="key">
                <van-checkbox  v-show="showTrash" v-model="item.isCheck" :check ="item.isCheck" @click="selectGoods($event,key)"></van-checkbox>
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
        <!-- CART FOOT START -->
        <div v-show="showTrash">
            <div class="footer-height"></div>
            <div class="footer">
                <div class="footer-a">
                    <van-checkbox ref="allCheck" v-model="allChecked" @click="selectAll(allChecked)"><strong>全选</strong></van-checkbox>
                </div>
                <div class="footer-b" @click="deletOption()">删除({{updateNumber}})</div>
            </div>
        </div>
    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader";
import Nodata from "@/pages/common/nodata/Nodata";
export default {
    data(){
        return {
            nodatas:{
                'imgSrc':'/static/images/public/none.png',
                'text':'收藏夹空空如也~',
                'link':'/Hone'
            },
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
            showTrash: false
        };
    },
    computed:{
        updateNumber(){
            let count =0;
            this.list.forEach((data)=>{
                if(data.isCheck){
                    count ++
                }
            })
            return count;
        }
    },
    methods:{
        showDelectBtn(){
            this.showTrash =! this.showTrash;
        },
        selectAll(_flag){
            for(var i =0;i<this.list.length;i++){
                this.list[i].isCheck = ! _flag;
            }
        },
        selectGoods(e,key){
            var data =this.list[key];
             this.$set(data,'isCheck',!data.isCheck);
            if(!data.isCheck){
                this.allChecked=false
            }else{
                if(this.countNumberCheckBoxes().length === this.list.length){
                    this.allChecked=true
                }
            }
        },
        countNumberCheckBoxes(){    //计算选中的复选框的总数
            let counts =[];
            this.list.forEach((data)=>{
                if(data.isCheck){
                    counts.push('a')    // a 可为任何数，在这里仅用于占位
                }
            })
            return counts;
        },
        deletOption(){
            if(this.updateNumber < 1){
                this.$toast('亲，还没有选择要删除的商品哦!');
                return
            }
            this.$dialog.confirm({
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
                if(this.list.length<1){
                    this.showTrash=false
                }
            // on confirm
            }).catch(() => {
            // on cancel
            });
        }
    },
    components: {
        TopHeader,
        Nodata
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
        .collect-wrap
            width:100%
            min-height:100%
            color:#151515
            .van-checkbox__icon--checked .van-icon
                background-color: #f30c0c
                border-color: #fff
            .conter
                margin : 10px 24px
                .c-list-
                    width:100%
                    margin-bottom:12px
                    border-radius:6px
                    padding: 20px 40px 20px 12px
                    height:238px
                    display:flex
                    align-items :center
                    box-sizing: border-box
                    background #fff
                    .van-checkbox__icon 
                         margin-right: 17px
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
            .footer-height
                width :100%;
                height:120px;
            .footer
                position :fixed;
                bottom:0;
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

