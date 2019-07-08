<template>
    <div class="Details">
        <!-- 头部组件 -->
		<TopHeader custom-title="商品详情" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <!-- 产品图轮播 -->
        <div class="detailsSwiper">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(img,key) in this.goodsData.img" :key="key">
                    <img :src="img.picture" />
                </van-swipe-item>
            </van-swipe>
        </div>

         <!-- 主内容 -->
        <div class="content">
            <div class="goodsInfo">
                <div class="price">
                    <span class="discount-price">￥{{this.goodsData.price}}</span>
                    <span class="original-price">原价￥{{this.goodsData.original_price}}</span>
                </div>
                <!-- 商品名称 -->
                <div class="goodsName">
                    <h1>{{this.goodsData.goods_name}}</h1>
                </div>
                <div class="group-warp">
                    <div class="g-option">
                        <span class="-subtitle"> 配送</span>
                        <div class="-text"> 广州白云区</div>
                    </div>
                    <div class="g-option">
                        <span class="-subtitle"> 运费</span>
                        <div class="-text"> {{this.goodsData.shipping_price}}</div>
                    </div>
                    <div class="g-option">
                        <span class="-subtitle"> 规格</span>
                        <div class="-text" v-for="(item,key) in this.goodsData.attr_name" :key="key"> {{item}} </div>
                    </div>
                </div>

            </div>

            <!-- tab切换 -->
            <div class="tab-content">
                <van-tabs v-model="tabActive">
                    <van-tab title="商品详情">
                        <div class="details-wrap">
                            <!-- <img src="/static/images/details/00details-img01.png" /> -->
                            <p class="-desc">{{this.goodsData.desc}}</p>
                            <img v-for="(img,key) in this.goodsData.img" :key="key" :src="img.picture"/>
                        </div>
                    </van-tab>
                    <van-tab title="参数">
                        <div class="params-wrap">
                            <ul class="param-list">
                                <li>
                                    <div class="param-name">商品编号 </div>
                                    <div class="param-value">55666666</div>
                                </li>
                                <li>
                                    <div class="param-name">面料</div>
                                    <div class="param-value">蕾丝</div>
                                </li>
                                <li>
                                    <div class="param-name">使用尺寸</div>
                                    <div class="param-value">S M L XL</div>
                                </li>
                                <li>
                                    <div class="param-name">款式</div>
                                    <div class="param-value">中长款</div>
                                </li>
                                <li>
                                    <div class="param-name">风格</div>
                                    <div class="param-value">其他</div>
                                </li>
                                <li>
                                    <div class="param-name">图案</div>
                                    <div class="param-value">碎花</div>
                                </li>
                            </ul>
                        </div>

                    </van-tab>
                    <van-tab :title="'商品评价('+this.goodsData.comment_count+')'">
                        <div class="comment-wrap">
                            <ul class="comment-list">
                                <li v-for="(list,key) in commentList" :key="key">
                                    <div class="eval-user">
                                        <div class="user">
                                            <div class="avatar">
                                                <img src="/static/images/details/00avatar01.png" />
                                            </div>
                                            <div class="text">
                                                <span class="name">用户：{{list.comment_id}}</span>
                                                <span class="date">2019-05-06</span>
                                            </div>
                                        </div>
                                        <div class="score">
                                            <van-rate
                                                v-model="list.star_rating"
                                                icon="like-o"
                                                void-icon="like-o"
                                                color="#f70a0a"
                                                readonly
                                            />
                                        </div>
                                    </div> 
                                    <div class="eval-content">
                                        <p>{{list.content}}</p>
                                        <p class="-e-c">{{list.spec}}</p>
                                    </div>
                                    <div class="imgView">
                                        <span v-for="(imgs,key) in list.img" :key="key"><img :src="imgs"></span>
                                        <!-- <span><img src="static/images/details/evaluation-img01.png"></span> -->
                                    </div>
                                </li>
                            </ul>
                            <p v-show="commentList.length<1" class="none-comment">暂无评论</p>
                             <!-- 数据加载完提示 -->
                            <div class="end-wrap">
                                <p v-show="commentList.length>1">我是有底线哦~~</p>
                            </div>

                        </div>
                    </van-tab>
                </van-tabs>
            </div>
        </div>

        <!-- 规格框开始 -->
        
        <div class="sku-box" v-show="sizeBox">
            <div class="sku-box-bg" @click="sizeBox=false">
            </div>
            <transition name="slide-fade">
                <div v-show="sizeBox" class="sku-box-inner" :class="{'box-active':sizeBox}">
                    <span class="-close-"  @click="sizeBox=false"> &times;</span>
                    <div class="sku-box-cont">
                        <div class="box-list mb-30" v-for="(list,index) in this.newSpecAttr" :key="index"> 
                            <p class="-list-title" :spec-id="list.spec_id">{{list.spec_name}}</p>
                            <ul class="-list-info">
                                <li v-for="(item,key) in list.res" :key="key"  :ref="'id_'+key"   class="-info-a" :class="{'sku-active':sel[index] == key,'no-sku':item.skuDisable==0 ,'order-sku':item.skuDisable==3 }" :attr-id="item.attr_id" @click="selectGoods(index,key,item.sku)">{{item.attr_name}}</li>
                            </ul>
                        </div>
                        <div class="box-list2 mb-30"> 
                            <span class="-list-title"> 购买数量</span>
                            <span class="-option-">
                                <i class="subling iconfont icon-jian-" @click="reducingNumber()"></i>
                                <input class="inp" type="number" :value="goodsNumber" @change="changNumber($event)"/>
                                <i class="puls iconfont icon-jia"  @click="addNumber()"></i>
                            </span>
                        </div>
                    </div>
                    <input class="sku-btn" type="button" value="确定" @click="confirmSize()"/>
                </div>
            </transition>
        </div>
       
        <!-- 底部菜单 -->
        <div class="bottom-height"></div>
        <div class="bottom-bar">
            <ul class="-bar-list">
                <li class="-list-a" @click="changCollect()">
                    <i class="iconfont icon-aixin" :class="{'c-active':isCollect}"></i>
                    <span>收藏</span>
                </li>
                <li class="-list-a">
                    <i class="iconfont icon-54"></i>
                    <span>客服</span>
                </li>
            </ul>
            <div class="-bar-list">
                <input class="bar-btn-1" type="button" @click="showSizeBox(0)" value="加入购物车"/>
                <input class="bar-btn-2" type="button" @click="showSizeBox(1)" value="立即购买"/>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
// import AreaList from './area'
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'Details',
    components:{
        TopHeader
    },
    data(){
        return {
            goodsData:[],
            newSpecAttr:[],
            goodsSkuData:[],
            selectSku:[],
            sel:[],
            stars:[],
            commentList:[],
            sizeKey:0,
            goodsId:this.$route.query.goods_id,//商品id
            tabActive: 0,//tab选中
            isCollect:0,
            goodsNumber:2,
            sizeBox:false,
            optionFlag:"",
            token:"",
            page:'1'
        }
    },
    created(){
        this.token =this.$store.getters.optuser.Authorization
        this._getGoodsData()
        this._getCommentList()
    },
    mounted(){
    },
    methods:{
        _timeStampForwardAate(time){
            var date = new Date(time);
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = date.getDate() ;
            // console.log(Y+M+D);
            return Y+M+D
        },
        _getCommentList(){
            var _that =this;
            _that.$axios.post('Goods/comment_list',{
                'goods_id':_that.goodsId,
                'page':_that.page,
                'token':_that.token         
            })
            .then((res)=>{
                var list = res.data;
                if(list.status == 1){
                    _that.commentList =list.data
                    for(var i in _that.commentList){
                        _that.commentList[i].times =_that._timeStampForwardAate(_that.commentList[i].add_time)
                    }
                    var star = _that.commentList.star_rating
                    for(var i=0; i<star;i++){
                        stars.push(1);
                    }
                }else{
                    _that.$toast(list.msg)
                }
            })
        },
        _selecetSku(){
            var _that =this
            var newSku =this._matchGoodsSku();
            var goodsAttr=[]
            var info,skujson;
            var noSku=[];
            _that.goodsSkuData.forEach((data)=>{
                var sku_attr =data.sku_attr1.split(",");
                if(sku_attr==newSku.sort().toString()){
                    info =data
                    skujson =sku_attr
                }
                // else{
                //     noSku.push(newSku)
                // }
            })
            // console.log(info)
            return {'info':info,'skujson':skujson}
        },
        _matchGoodsSku(){
           var newArry=''
           var newArry=[]
           var _that =this
           for(var i in _that.newSpecAttr){
               var res =_that.newSpecAttr[i].res
               for(var j in res){
                   if(res[j].isHeightL){
                    var t =res[j].attr_id
                    newArry.push(t)
                   }
               }
           }
           return newArry
        },

        selectGoods(pKey,key,sku){
            this.sel[pKey] = key;
            this.$set(this.sel,pKey, key)
            this._isHeightLine(pKey,key)
            var skujson = this. _selecetSku().skujson;
            this._hasSku()
        },

        _isHeightLine(pKey,key){
            var _that=this
            var goods =_that.newSpecAttr
            goods.forEach((data) =>{
                goods[pKey].res.forEach((res) =>{
                    _that.$set(res,'isHeightL',false);
                })
                _that.$set(goods[pKey].res[key],'isHeightL',true)
            })
        },
        matchSpecifications(sku){
            // console.log(sku)
            var skujson = this. _selecetSku().skujson;
            for(var i in skujson){
                // console.log(skujson[i])
                if(skujson[i] ==sku){
                    return true
                }
            }
        },
        _hasSku(){
            var _that=this
            var goods =_that.newSpecAttr
            var skujson = this. _selecetSku().skujson;
            // console.log(skujson)
            var oldArry =[]
            goods.forEach((data) =>{
                data['res'].forEach((res) =>{
                    if(_that.matchSpecifications(res.attr_id)){
                        // console.log('attr_id')
                        _that.$set(res,'skuDisable',1)
                    }else{
                        // console.log('flas-attr_id')
                        oldArry.push(res.attr_id)
                    }

                })
            })
            // console.log(oldArry)
        },
        _initGoodsData(){
            var _that=this,
                newArry=[],
                goods =_that.goodsData.spec.spec_attr
                goods.forEach((data) =>{
                    data.res.forEach((res,i)=>{
                        res.isHeightL =false
                        res.skuDisable=3
                        // res.sku ="+data.spec_id++""+':'+res.attr_id
                        res.sku =data.spec_id+':'+res.attr_id
                    })
                    newArry.push(data)
                })
                _that.newSpecAttr =newArry; 
        },
        _getGoodsData(){
            var _that =this;
            _that.$axios.post('goods/goodsDetail',{
                'goods_id':this.goodsId,
                'token':this.token         
            })
            .then((res)=>{
                var list = res.data;
                console.log(list)
                if(list.status == 200){
                    _that.goodsData =list.data
                    _that.goodsSkuData=_that.goodsData.spec.goods_sku
                    _that.isCollect=this.goodsData.collection
                    this._initGoodsData()
                }else{
                    _that.$toast(list.msg)
                }
            })
        },
        changCollect(){
            var _that =this;
            _that.isCollect=!_that.isCollect
            _that.$axios.post('Collection/collection',{
                'goods_id':_that.goodsId,
                'token':_that.token         
            })
            .then((res)=>{
                var list = res.data;
                console.log(list)
                if(list.status == 200){
           
                }else{
                    _that.$toast(list.msg)
                }
            })
        },
        showSizeBox(flag){
            this.sizeBox=true
            this.optionFlag =flag
        },
        confirmSize(){
            var _that=this;
            var sku_id =this. _selecetSku().info.sku_id
            if(sku_id==""){ this.$toast("改规格已售完"); return}
            _that.$axios.post('cart/addCart',{
                'sku_id':sku_id,
                'cart_number':this.goodsNumber,
                'token':this.$store.getters.optuser.Authorization 
            })
            .then((res)=>{
                var list = res.data;
                if(list.status == 200){
                    if(this.optionFlag==0){
                        this.$toast("添加成功,可直接去购物车下单");
                    }else{
                        sessionStorage.setItem('cartInfo',JSON.stringify({'cart_id': list.data.cart_id}))
                        this.$router.push({
                            path: '/pay/ConfirmOrder',
                            name:'ConfirmOrder',
                            // params: {'cart_id': list.data.cart_id}
                        })
                    }
                    this.sizeBox=false
                }else{
                    _that.$toast(list.msg)
                }
            })
        },
        reducingNumber(){
            var val =parseInt(this.goodsNumber) - 1 
           if(val<=1){val =1}
           this.goodsNumber=val
        },
        changNumber(e){
            var val =e.target.value;
            if(val<1 || isNaN(val)){
                return this.$toast('请输入正确的数量');
            }
            this.goodsNumber=val
        },
        addNumber(){
            var val =parseInt(this.goodsNumber) + 1
            this.goodsNumber=val
        }

    }
}
</script>
<style lang="stylus" scoped>
.slide-fade-enter-active 
  transition all .3s ease

.slide-fade-leave-active 
  transition all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);

.slide-fade-enter, .slide-fade-leave-to
  transform translateY(100px)
.slide-fade-enter, .slide-fade-leave-to .sku-box-inner
    // bottom 24px
.mb-30
    margin-bottom 30px
a
    color:#151515
.Details
    background-color #ffffff
    .none-comment
        font-size:28px
        color:#151515
        padding:30px
        text-align center
    // 产品主图轮播
    .detailsSwiper
        img 
            width 100%
            display block
    .content
        padding-bottom 128px
        box-sizing border-box
        .-desc
            padding 20px
        .price
            height 60px
            line-height 60px
            .discount-price
                font-size 30px
                color #f30c0c
                margin-right 40px
            .original-price
                font-size 26px
                color #838383
        .goodsInfo
            padding 0 25px 25px
            box-sizing border-box
            .g-option
                display flex
                align-items center
                font-size 26px
                margin-bottom 25px
                color #3a3a3a
                .-subtitle
                    display inline-block
                    width 96px
            .goodsName
                margin 0 auto 30px
                h1
                    font-size 26px
                    color #151515
                    line-height 36px
                    font-weight normal
                    display -webkit-box
                    -webkit-box-orient vertical
                    -webkit-line-clamp 2
                    overflow hidden
            .group-warp
                background #f8f8f8
                border-radius 8px
                padding 10px 20px
                box-sizing border-box
                .van-cell-group
                    background-color #f8f8f8
                    font-size 24px
                    .van-cell
                        background-color #f8f8f8
                        padding 4px 0
                        .label
                            width 100px
                            font-size 26px
                            margin-right 10px
                            display inline-block
                        .text
                            font-size 26px
                            color #575757
                        .size22
                            font-size 22px
                            float right
                .van-hairline--top-bottom::after,.van-cell:not(:last-child)::after
                    border none
                .select-wrap /deep/ .van-cell__value
                    flex none
       
        .tab-content
            color:#151515
            .van-tabs >>> .van-hairline--top-bottom::after
                border none
            .van-tabs >>> .van-tabs__content
                margin-top 30px
            .van-tabs >>> .van-ellipsis
                width 100%
                height 100%
                font-size 30px
                background url("/static/images/details/line-right.png") right  center no-repeat
                background-size 2px 27px
            .van-tabs >>> .van-tab--active
                color #f70a0a
            .van-tabs >>> .van-tab:last-child span
                background none
            // 商品详情
            .details-wrap
                img
                    width 100% 
            // 参数
            .params-wrap
                width 100%
                padding 0 25px
                box-sizing border-box
                .param-list
                    li  
                        height 58px
                        font-size 26px
                        color #414040
                        display flex
                        align-items center
                        border 1px solid #c1c1c1
                        border-bottom none
                        &:last-child
                            border-bottom 1px solid #c1c1c1
                        .param-name
                            width 175px
                            height 100%
                            line-height 58px
                            border-right  1px solid #c1c1c1
                            padding-left 34px
                            box-sizing border-box
                        .param-value
                            flex 1
                            padding-left 28px
                            box-sizing border-box
            // 商品评论
            .comment-wrap
                .comment-list
                    li
                        color #4a4949
                        background-color #ffffff
                        border-radius 8px
                        margin-bottom 10px
                        border-bottom 2px solid #eeeeee
                        padding 30px 40px
                        box-sizing border-box
                        .eval-user
                            height 60px
                            display flex
                            justify-content space-between
                            align-items center
                            margin-bottom 20px
                            .user
                                display flex
                                align-items center
                                .avatar
                                    width 60px
                                    height 60px
                                    margin-right 20px
                                    img 
                                        width 100%
                                        display block
                                .text
                                    font-size 26px
                                    span 
                                        display block
                                        line-height 30px
                                    .date
                                        font-size 20px
                                        color #999 
                                        margin-top 10px
                        .eval-content
                            margin-bottom 20px
                            p
                                font-size 22px
                            .-e-c
                                color:#888
                                margin-top:10px
                        .imgView
                            overflow hidden
                            span
                                width 100px
                                height 100px
                                display flex
                                align-items center
                                justify-content center
                                float left
                                margin-right 20px
                                border-radius 5px
                                overflow hidden
                                img
                                    max-width 100%
                                    max-height 100%
                .end-wrap
                    font-size 20px
                    color #888888
                    text-align center
                    margin 30px auto
    .sku-box
        position fixed
        width 100%
        height 100%
        left 0
        bottom 0
        z-index 101
        .sku-box-bg
            width 100%
            height 100%
            background rgba(0,0,0,0.4)
        .sku-box-inner
            position absolute
            bottom 0
            left 0
            z-index 1
            padding 24px
            box-sizing border-box
            background #fff
            border-top-left-radius 10px
            border-top-right-radius 10px
            height 60%
            width 100%
            color:#151515
            .-close-
                font-size 60px
                padding 0 10px
                position absolute
                right 5px
                top 0px
                color #666
            .sku-box-cont
                overflow-y auto
                max-height 91%
                .-list-title
                    font-size 30px
                    font-weight bold
                    margin-bottom 30px
                .-list-info
                    display flex
                    align-items center
                    flex-wrap wrap
                    .-info-a
                        flex 0 0 31%
                        margin 0 3.5% 3% 0
                        text-align center 
                        border-radius 6px
                        height 55px  
                        line-height 55px 
                        background #f3f3f3  
                        font-size 26px
                        box-sizing border-box
                    :nth-child(3n)
                        margin-right 0
                    .order-sku
                         background #f3f3f3  
                         color:#151515
                    .sku-active
                        background #ff0000
                        color #fff
                    .no-sku
                        background: #cacaca;
                        color: #fff;
                .box-list2
                    display flex
                    justify-content space-between 
                    align-items center
                    .-option-
                        border 2px solid #e6e6e6
                        width 200px
                        height 50px
                        line-height 50px
                        display flex
                        align-items center
                        justify-content space-between
                        border-radius 20px
                        text-align center
                        .iconfont
                            width 55px
                            height 100%
                            font-size 16px
                        .puls
                            border-left 1px solid #e6e6e6
                        .subling
                            border-right 1px solid #e6e6e6
                            
                        .inp
                            width 121px
                            text-align center
                            height inherit
                            font-size 24px
                            font-weight bold
            .sku-btn
                width 702px
                height 70px
                color #fff
                border-radius 10px
                background #ff2d10
                font-size 30px
                position absolute
                bottom 20px

    .bottom-height
        width 100%
        height 100px
        align-items  center
    
    .bottom-bar
        border-top 1px solid #eee
        position fixed
        width 100%
        height 98px
        line-height 98px
        background #fff
        bottom 0
        left 0
        z-index 100
        display flex
        .-bar-list
            flex 0 0 50%
            display flex
            text-align center
            font-size 28px
            .-list-a
                width 50%
                .iconfont
                    vertical-align: middle;
            .c-active
                color #f70a0a
                .icon-54
                    font-size 41px
            input
                width 50%
                color #fff
                border-radius 0
            .bar-btn-1
                background #ff4d4d
            .bar-btn-2
                background #f70a0a
</style>
