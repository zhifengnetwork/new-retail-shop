<template>
    <div class="cart">
      	<!-- 头部组件 -->
		<TopHeader custom-title="购物车" custom-fixed>
			<i slot="rightBtn" class="iconfont icon-lajitong" @click="deletOption()"></i>
		</TopHeader>
        <div class="height-88"></div>
       
        <!-- No INFO START -->
        <div v-show="list.length<1" class="no-info">
            <Nodata :nodatas="nodatas"></Nodata>
        </div>
       <!-- GOODS LIST START -->
       <div v-show="list.length>0" class="c-wrap">
            <div class="conter">
                <div class="c-list-" v-for="(item,key) in list" :key="key">
                    <div class="check"><van-checkbox v-model="item.isCheck" :check ="item.isCheck" @click="selectGoods($event,key)"></van-checkbox></div>
                    <div class="-list-img">
                        <router-link to="/Details"><img :src="item.img" /></router-link>
                    </div>
                    <div class="goods-info">
                        <router-link to="/Details"><p class="-info-msg">{{item.text}}</p></router-link>
                        <div class="-info-option"> 
                            <span class="price">
                                ￥<strong>{{item.price}}</strong>
                            </span>
                            <span class="-option-">
                                <i class="subling iconfont icon-jian-" @click="reducingNumber(key)"></i>
                                <input class="inp" type="number" :value="item.number" @change="changNumber($event,key)"/>
                                <i class="puls iconfont icon-jia" @click="addNumber(key)" ></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CART FOOT START -->
            <div class="footer-height"></div>
            <div class="footer">
                <div class="footer-a">
                    <span class="f-a-a">
                        <van-checkbox ref="allCheck" v-model="allChecked" @click="selectAll(allChecked)"><strong class="size-30">全选</strong></van-checkbox>
                    </span>
                    <div class="f-a-b">
                        <p class="size-30">
                            <strong>总计：</strong>
                            <span class="colorRed">￥<strong class="size-35">{{updatePrice}}</strong></span>
                        </p>
                        <p class="size-24">
                            节省: <span class="size-20">￥</span><span class="size-30">10.00</span>
                        </p>
                    </div>
                </div>
                <div class="footer-b" @click="toPay()">结算({{updateNumber}})</div>
            </div>
            <Navigate></Navigate>
        </div>
    </div>
</template>

<script>
import TopHeader from "@/pages/common/header/TopHeader";
import Navigate from "@/pages/common/footer/Navigate";
import Nodata from "@/pages/common/nodata/Nodata";
export default {
    data(){
        return {
            nodatas:{
                'imgSrc':'/static/images/cart/cart_icon.png',
                'text':'购物车空空如也~',
                'link':'/Hone'
            },
            list:[
                {
                    text:'自然堂化妆品补水防晒虎虎生风',
                    img:'/static/images/cart/goods_img.jpg',
                    price:'360.00',
                    number:1,
                    isCheck:true
                },
               {
                    text:'自然堂化妆品补水防晒虎虎生风',
                    img:'/static/images/cart/goods_img.jpg',
                    price:'380.00',
                    number:6,
                    isCheck:false
                },
                {
                    text:'自然堂化妆品补水防晒虎虎生风',
                    img:'/static/images/cart/goods_img.jpg',
                    price:'360.00',
                    number:1,
                    isCheck:true
                }
            ],
            allChecked: false,
        };
    },
    computed:{
        updatePrice(){
            let totalPrice=0;
            this.list.forEach((data)=>{
                if(data.isCheck){
                    totalPrice += new Number(data.price) * new Number(data.number);
                }
            })
            return totalPrice;
        },
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

        reducingNumber(key){
            var data =this.list[key];
            var val =parseInt(data.number - 1) 
           if(val<=1){
               val =1
           }
           this.$set( data,'number',val )
        },
        changNumber(e,key){
            var val =e.target.value;
            var data =this.list[key]; 
            if(val<=1 || isNaN(val)){
                return this.$toast('请输入正确的数量');
            }
            this.$set( data,'number',val)
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

            // on confirm
            }).catch(() => {
            // on cancel
            });
        },
        addNumber(key){
            var data =this.list[key];
            var val =parseInt(data.number) 
            val =new Number(val+ 1)
            this.$set( data,'number',val);
        },
        toPay(){
            if(this.countNumberCheckBoxes().length<1){
                return this.$toast("请选择商品")
            }
            this.$router.push({path: '/pay/ConfirmOrder',name:'ConfirmOrder'})
        }
    },
    components: {
        TopHeader,
        Navigate,
        Nodata
	}

}
</script>

<style lang="stylus">
        .colorRed
            color:#ff112f
        .size-35
            font-size:35px;
        .size-30
            font-size:30px;
        .van-checkbox__icon--checked .van-icon
            background-color: #f30c0c;
            border-color: #fff;
        .cart
            width:100%;
            min-height:100%;
            color:#151515;
            .no-info
                text-align :center
                .-info-img
                    width:290px
                    height:290px
                    margin:145px 0 50px
                .-info-txt
                    color:#6c6c6c
                    font-size:36px
                    margin-bottom:90px
                .-info-btn
                    width: 460px
                    height: 100px
                    background: #ea2028
                    border-radius: 50px
                    font-size 50px
                    color:#fff
            .conter
                margin : 10px 24px;
                .c-list-
                    width:100%;
                    margin-bottom:12px;
                    border-radius:6px;
                    padding: 20px 40px 20px 6px;
                    height:238px;
                    background-color #ffffff
                    display:flex;
                    align-items :center;
                    box-sizing: border-box;
                    .check
                        margin-right: 8px;
                    .-list-img
                        width:201px;
                        height:176px;
                        margin:0 10px 0 0;
                        img
                            max-width:100%;
                            max-height 100%;
                    .goods-info
                        width:445px;
                        .-info-msg
                            width:100%;
                            height:80px;
                            font-size:24px;
                            color #151515;
                            overflow:hidden;
                            text-overflow: ellipsis;
                            -webkit-line-clamp: 2;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            margin-bottom:10px;
                            word-break: break-all;
                        .-info-option
                            display:flex;
                            justify-content:space-between;
                            align-items center;
                            .price
                                color:#ff112f;
                                font-size:20px;
                                strong
                                    font-size:30px;
                            .-option-
                                border: 2px solid #e6e6e6;
                                width: 192px;
                                height: 40px;
                                line-height :40px;
                                display :flex;
                                align-items :center;
                                justify-content:space-between;
                                border-radius: 20px;
                                text-align:center;
                                .iconfont
                                    width:50px;
                                    height:100%;
                                    font-size: 12px;
                                .puls
                                    border-left:1px solid #e6e6e6;
                                .subling
                                    border-right:1px solid #e6e6e6;
                                .inp
                                    width:92px;
                                    text-align: center;
                                    height:inherit;
                                    font-size:24px;
                                    font-weight:bold;
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

