<template>
    <div class="sell">
      	<!-- 头部组件 -->
		<TopHeader custom-title="50元专卖区" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
           <span slot="rightBtn" class="" @click="toPay()">未付款</span>
            <!-- <router-link to="/Payment"> </router-link> -->
		</TopHeader>
        <div class="height-88"></div>
        <!-- CONTENT START -->
        <div class="content">
            
            <a href="javascript:void(0)" class="sell-list" v-for="(item,key) in list" :key="key">
                <div class="sell-cont">
                    <div class="-list-msg">
                        <p>ID: {{item.user_id}}</p>
                        <p>{{item.realname}}</p>
                    </div>
                    <img class="-list-img" :src="item.img" @click="showPopup(item.pay_code)"/>
                    <div class="-list-radus-num">{{item.stock}}</div>
                </div>
                <div class="-list-right">
                    <!-- <div class="-list-radus-box">
                        <van-checkbox v-model="item.isCheck" :check ="item.isCheck"></van-checkbox>
                    </div> -->
                    <span class="-option-">
                        <i class="subling iconfont icon-jian-" @click="reducingNumber(key,item.fz_id)"></i>
                        <input class="inp"  disabled type="number" :value="item.goods_num" @change="changNumber($event,key,item.fz_id)"/>
                        <i class="puls iconfont icon-jia" @click="addNumber(key,item.fz_id)" ></i>
                    </span>
                </div>
            </a>
        </div>
        <div class="footer-height"></div>
        <div class="footer">
            <div class="footer-a">
                <strong class="f-a-a">
                    已选商品: {{numArray.length}}
                </strong>
            </div>
            <div class="footer-b" :class="{'activeColor':numArray.length==10}" @click="toPayment">付款</div>
        </div>
        <!-- 弹出层 -->
        <van-popup v-model="show"><img :src="shopsCode" /></van-popup>
        <!-- 弹窗 -->
		<Popup :popShow = "isShow" v-on:handleCancel="hidePopup"></Popup>
    </div>
</template>
<script>
    import Popup from "@/pages/home/Popup"
    import TopHeader from "@/pages/common/header/TopHeader";
    export default {
        data(){
            return {
                list:[],
                shopsCode:'/static/images/sell/payCode.png',
                show: false,
                isShow:false,//弹窗是否显示
                iswoo:false,
                token:this.$store.getters.optuser.Authorization,
                numArray:[]    //存放选中的数量
            }
        },
        created(){
            this.$store.commit('showLoading')       //加载loading
            this._getSellList()
        },
        methods:{
            computedNum(){
                var info =this.numArray
                var t =0
                for(var i in info){
                    t =t+info[i]
                    if(t>=10){
                         this.$toast.fail('限制只能购买10个');
                         return false
                    }
                }
                return true
            },

            reducingNumber(key,sku_id){     //减数量
                var _that =this,
                    data =_that.list[key],
                    val =parseInt(data.goods_num - 1),
                    oldVal =val
                if(val<=0){
                    val =0
                }
                if(data.goods_num!=0){  //有数量的前提下，存放数量的数组减1
                    var newarr=_that.numArray.slice(0);
                    newarr.shift();
                     _that.numArray =newarr
                }
                var data =_that.list[key];
                _that.$set( data,'goods_num',val)
            },
            addNumber(key,sku_id){
                if(!this.computedNum()){return}
                var _that =this,
                    data =_that.list[key],
                    val =parseInt(data.goods_num), 
                    val =new Number(val+ 1)
                if(val>9){
                    _that.$set(data,'goods_num',9)
                    this.$forceUpdate();
                    return _that.$toast('该商品限购9件');
                }else{
                    if(val>data.stock){
                        _that.$set(data,'goods_num',data.stock)
                        this.$forceUpdate();
                        return _that.$toast('该商品库存为:'+data.stock+'件');
                    }
                }
                var data =_that.list[key];
                _that.$set( data,'goods_num',val)
                _that.numArray.push(1)          //数量加1 存放数量的数组插入一个1 用于占位
            },
            toPay(){
                this.$router.push('/Payment')
            },
            _getSellList(){         //获取商品信息
                var _that =this
                _that.$axios.post('fifty_zone/shop_list',{
                    'token':this.token,   
                })
                .then((res)=>{
                    var list = res.data;
                    if(list.status == 200){
                        var info =list.data
                        for(var i in info){         //往数组里面追加一个数量默认为0
                            info[i].goods_num =0
                        }
                        _that.list =info
                        _that.$store.commit('hideLoading')
                    }else if(list.status == 304){
                        _that.$toast(list.msg)
                        _that.iswoo =true
                        setTimeout(()=>{
                            this.$router.push('/Payment')
                        },1000)
                    }else if(res.data.status == 999){
                        this.$toast(res.data.msg)
                        this.$store.commit('del_token'); //清除token
                        setTimeout(()=>{
                            this.$router.push('/Login')
                        },1000)
                    }
                    else{
                        _that.$toast(list.msg)
                    }
                })
            },
            hidePopup(){
                this.isShow = false
            },
            toPayment(){
                if(this.numArray.length!=10){
                    return this.$toast.fail('限制只能购买10个')
                }
                var _that =this,fzids='';
                for(var i in _that.list){
                    var goods_num =_that.list[i].goods_num
                    if(goods_num>0){
                        for(var j=0; j<goods_num; j++){
                            if(fzids==""){
                                fzids =_that.list[i].fz_id
                            }else{
                                fzids = fzids+','+_that.list[i].fz_id
                            }
                        }
                    }
                }
                console.log(fzids)
                _that.$axios.post('fifty_zone/fiftySubmitOrder',{
                    'token':_that.token,
                    'fz_id':fzids    
                })
                .then((res)=>{
                    var list = res.data;
                    if(list.status == 200){
                        this.$router.push({name:'Payment'})
                    }
                    else if(list.status==302){
                        return _that.isShow = true
                    } 
                    else if(list.status==304){
                        _that.$toast(list.msg)
                        setTimeout(()=>{
                            this.$router.push('/Payment')
                        },1000)
                    } 
                    else if(list.status==309){
                        // _that.$toast(list.msg)
                        // console.log(111)
                        setTimeout(()=>{
                            this.$router.push('/user/PaycodeList')
                        },1000)
                        //  _that.$toast(222)
                    } 
                    else if(res.data.status == 999){
                        _that.$store.commit('del_token'); //清除token
                        setTimeout(()=>{
                            _that.$router.push('/Login')
                        },1000)
                    }
                    else{
                        _that.$toast(list.msg)
                    }
                })
            },
            changStatus(key){
                this.$set(this.list[key],'isCheck',!this.list[key].isCheck)
            },
            showPopup(paycode) {
                this.show = true;
                this.shopsCode =paycode
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
            TopHeader,
            Popup
        }
    }
</script>
<style lang="stylus" scoped>
    .sell
        .-list-radus-box /deep/ .van-checkbox__icon
            width 60px !important
            height 60px !important
        .-list-radus-box /deep/ .van-checkbox__icon .van-icon
            width 60px !important
            height 60px !important
            line-height 60px
            border-color #151515
        .-list-radus-box /deep/ .van-checkbox__icon--checked .van-icon
            background-color #f30c0c
            border-color #fff
            border none
        .right-msg
            font-size 26px
        .content
            padding 24px 24px
            .sell-list
                display block
                width 100%
                border-radius 10px
                display flex
                align-items center
                justify-content space-between
                .sell-cont
                    width 450px
                    height 280px
                    margin-bottom 15px
                    position relative
                    .-list-img
                        width 100%
                        height 100%
                    .-list-msg
                        position absolute
                        top 20px
                        left 25px 
                        font-size 26px
                        color #fff
                        width 180px
                        text-align center
                        background rgba(0,0,0,0.3)
                        padding 6px 3px
                        box-sizing border-box
                        border-radius 8px
                        p:nth-child(1)
                            margin-bottom 4px
                            .msg-a
                                background red
                                padding 5px
                                width 21px
                                text-align center
                                border-radius 3px
                    .-list-radus-num
                        position absolute
                        bottom 20px
                        left 0
                        width 100px
                        height 60px
                        line-height 60px
                        // background #e5233e
                        background: rgba(173, 29, 29, 0.7)
                        color #fff
                        border-bottom-right-radius 30px
                        border-top-right-radius 30px
                        text-align center
                .-list-right
                    display flex
                    flex-wrap wrap
                    justify-content flex-end
                    .-list-radus-box
                        color #f30c0c
                        width 60px
                        height 60px
                        .-radus-1
                            display block
                            width 50px
                            height 50px
                            line-height 50px
                            text-align center
                            font-size 26px
                            border-radius 50%
                            background #fff
                            box-sizing border-box
                            border 1px solid #000
                        .-radus-check
                            background #f30c0c
                            border-radius 50%
                            color #fff
                            padding 5px
                            box-sizing border-box
                    .-option-
                        border 2px solid #ccc
                        width 200px
                        height 48px
                        line-height 48px
                        display flex
                        align-items center
                        justify-content space-between
                        border-radius 20px
                        text-align center
                        margin-top 30px
                        color:#151515
                        .iconfont
                            width 100px
                            height 100%
                            font-size 30px
                        .puls
                            border-left 1px solid #ccc
                        .subling
                            border-right 1px solid #ccc
                            
                        .inp
                            width 100px
                            text-align center
                            height inherit
                            font-size 28px
                            font-weight bold
        .footer-height
            width 100%
            height 130px
        .footer
            position fixed
            bottom 0
            width  100%
            height 120px
            left 0
            background #fff
            z-index 2
            box-shadow 0px 0px 5px 0px #cccccc
            display flex
            justify-content space-between
            align-items center
            font-size 30px
            font-weight bold
            .f-a-a
                margin 0 96px 0 24px
            .footer-b
                width 221px
                background #858585
                color #fff
                line-height 120px
                text-align center
            .activeColor
                background #f30c0c
</style>

