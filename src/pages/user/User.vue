<template>
    <div class="user">
        <div class="header">
            <div class="info_wrap">
                <router-link class="my_look" to="/user/personalData">
                    <div class="portrait">
                        <img :src="userList.avatar"/>
                    </div>
                </router-link>    
                <div class="name_wrap">
                    <p class="name">{{userList.realname}}</p>
                    <p class="id">ID：{{userList.id}}</p>
                    <p class="joinDate">加入时间：{{userList.createtime | formatDate}}</p>
                </div>
            </div>

            <div class="members">普通会员</div>

            <div class="article">
                <div class="user_item">
                    <div class="earnings">
                        <router-link class="look" to="/user/shouyilist">
                            <div class="number">{{userList.estimate_money}}</div>
                            <div>
                                预计收益
                                <i class="right_arrow"></i>
                            </div>
                        </router-link>
                    </div>
                    <div class="balance">
                        <router-link class="look" to="/user/theAccountBalance">
                            <div class="number">{{userList.remainder_money}}</div>
                            <div>
                                余额
                                <i class="right_arrow"></i>
                            </div>
                        </router-link>
                    </div>
                    <router-link to="/user/Collect" class="collection">
                        <div class="number">{{userList.collection}}</div>
                        <div>
                            收藏
                            <i class="right_arrow"></i>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="content">
            <!-- 我的订单 -->
            <div class="order_wrap">
                <div class="title_wrap">
                    <h2>我的订单</h2>
                    <div class="check">
                        <router-link class="look" to="/order?type=0">
                            查看全部订单
                            <i class="right_icon"></i>
                        </router-link>
                    </div>
                </div>
                <div class="item_wrap">
                    <ul class="item">
                        <li v-for="(item,index) in orderIcon" :key="index">
                            <router-link :to="item.ar" class="look">
                                <div class="img">
                                    <img :src="item.imgUrl"/>
                                    <div class="info-icon van-info" v-if="index===0">{{userList.not_pay}}</div>
                                    <div class="info-icon van-info" v-if="index===1">{{userList.not_delivery}}</div>
                                    <div class="info-icon van-info" v-if="index===2">{{userList.not_receiving}}</div>
                                    <div class="info-icon van-info" v-if="index===3">{{userList.not_evaluate}}</div>
                                    <div class="info-icon van-info" v-if="index===4">{{userList.refund}}</div>
                                </div>
                                <div>{{item.name}}</div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!--  -->
            <div class="list_wrap">
                <div class="arr_wrap">
                    <router-link class="my_look" to="/user/myTeam">
                        <span>我的团队</span>
                        <span class="right_ico"></span>
                    </router-link>
                </div>
                <div class="arr_wrap">
                    <router-link class="my_look" to="/user/receiptInformation">
                        <span>收款信息</span>
                        <span class="right_ico"></span>
                    </router-link> 
                </div>
                <div class="arr_wrap">
                    <router-link class="my_look" to="/user/detailed">
                        <span>佣金明细</span>
                        <span class="right_ico"></span>
                    </router-link>
                </div>
                <div class="arr_wrap">
                    <span>手机号绑定</span>
                    <span class="cell">{{userList.mobile}}</span>
                    <span class="right_ico"></span>
                </div>
                <div class="arr_wrap">
                    <router-link class="my_look" to="/user/Address">
                        <span>地址管理</span>
                        <span class="right_ico"></span>
                    </router-link>
                </div>
                <div class="arr_wrap">
                    <router-link class="my_look" :to="'/register?uid='+personalList.id">
                    <span>邀请链接</span>
                    <span class="right_ico"></span>
                    </router-link>
                </div>
                <div class="arr_wrap">
                    <router-link class="my_look" to="/user/release">
                        <span>我的发布</span>
                        <span class="right_ico"></span>
                    </router-link>
                </div>                
                <div class="arr_wrap">
                    <router-link class="my_look" to="/user/mySharing">
                        <span>我的推广</span>
                        <span class="right_ico"></span>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <user-Footer></user-Footer>
    </div>
</template>

<script>
    import userFooter from "@/pages/common/footer/Navigate";
    export default {
        name: "user",
        data() {
            return {
                userList:[],
                personalList:[],
                nowIndex:0,
                orderIcon:[
                    {id:1,name:'待付款',imgUrl:'/static/images/user/payment.png',ar:'/order?type=1'},
                    {id:2,name:'待发货',imgUrl:'/static/images/user/dropShipping.png',ar:'/order?type=2'},
                    {id:3,name:'待收货',imgUrl:'/static/images/user/goods.png',ar:'/order?type=3'},
                    {id:4,name:'代评价',imgUrl:'/static/images/user/evaluation.png',ar:'/order?type=4'},
                    {id:5,name:'退货',imgUrl:'/static/images/user/return.png',ar:'/Order/ReturnGoods'}
                ],
            };
        },
        created(){
            this.$store.commit('showLoading')
            this.userData();
        },
        mounted() {
            this.personalData();
        },
        methods: {
            userData() {
                let url = '/user/user_info'
                this.$axios.post(url,{
                    token:this.$store.getters.optuser.Authorization
                })
                .then((res)=>{                  
                    var that = this
                    var item = res.data.data;
                    if(res.data.status === 200){
                        that.userList = item;
                        this.$store.commit('hideLoading')
                    }else{
                        that.$toast(res.msg)
                    }
                })
            },
            personalData() {
                let url = 'user/personal'
                this.$axios.post(url,{
                    token:this.$store.getters.optuser.Authorization
                })
                .then((res)=>{                  
                    var that = this
                    var item = res.data.data;
                    if(res.data.status === 200){
                        that.personalList = item;
                        console.log(that.personalList)
                    }else{
                        that.$toast(res.msg)
                    }
                })
            },
        },
        components: {
            userFooter,
        },
        filters: {
            // 日期格式化
            formatDate: function (time) {
                let date = new Date(time*1000);
                let y = date.getFullYear();

                let MM = date.getMonth() + 1;
                MM = MM < 10 ? ('0' + MM) : MM;

                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;

                let h = date.getHours();
                h = h < 10 ? ('0' + h) : h;

                let m = date.getMinutes();
                m = m < 10 ? ('0' + m) : m;

                let s = date.getSeconds();
                s = s < 10 ? ('0' + s) : s;

                return y + '-' + MM + '-' + d ;
            }
        }
    };
</script>

<style lang="stylus" scoped>
    .user
        width 100%
        height 100%
        .header
            position relative
            height 339px
            background url(/static/images/user/top_bj.png) no-repeat
            background-size 100% 100%
            .info_wrap
                padding 56px 0 0 24px
            .info_wrap .portrait,.name_wrap
                display inline-block
                vertical-align middle
            .portrait
                width 110px
                height 100px
                border-radius 50%
                img
                    border-radius 50%
            .name_wrap
                margin 0 0 0 22px
                p
                    color #fff
            .name_wrap .name,.id
                font-size 30px
                .joinDate
                    font-size 24px
            .members
                position absolute
                top 85px
                right 0
                width 155px
                height 50px
                background-image linear-gradient(0deg, 
                    #1791e7 0%, 
                    #26bfff 100%), 
                linear-gradient(
                    #f77383, 
                    #f77383)
                background-blend-mode normal, 
                    normal
                border-radius 25px 0px 0px 25px
                font-size 24px
                color #fff
                text-align center
                line-height 50px
            .article
                margin 70px 24px 0
                background #ffffff
                border-radius 10px
                font-size 0
                .user_item
                    padding 30px 0 35px 0
                .user_item .earnings,.balance,.collection
                    display inline-block
                    vertical-align top
                    width 33.18%
                    font-size 28px
                    color #151515
                    text-align center
                    line-height 55px    
                    .right_arrow 
                        margin 0 0 0 10px
                        display inline-block
                        vertical-align middle
                        width 7px
                        height 11px
                        background url(/static/images/user/leftArrow1.png) no-repeat
                        background-size 100% 100%
                .user_item .earnings,.balance
                    border-right 1.5px solid #efece9    
                .number
                    font-size 36px
                    color #e06f14
        .content
            .order_wrap
                margin 87px 24px 14px 24px
                background #fff
                border-radius 10px           
                .title_wrap
                    margin 0 18px
                    border-bottom 1.5px solid #e6e6e6
                    h2
                        display inline-block
                        font-size 28px
                        line-height 65px
                    .check
                        float right
                        display inline-block
                        font-size 24px
                        color #525252
                        line-height 65px
                        .right_icon
                            margin 0 0 0 17px
                            display inline-block
                            vertical-align middle
                            width 8px
                            height 14px
                            background url(/static/images/user/leftArrow.png) no-repeat
                            background-size 100% 100%
            .item_wrap
                margin 16px 0 0
                padding 0 0 22px
                font-size 0
                .item li 
                    display inline-block
                    width 19.8%
                    color #2f2f2f
                    font-size 26px
                    text-align center
                    line-height 55px
                    border-right 1.5px solid #e6e6e6
                .item li:last-child
                    border none   
                .img 
                    position relative
                    margin 0 auto
                    width 48px
                    height 38px 
                    .info-icon
                        position absolute
                        border 2px solid #fc822e
                        right 15%
                        top -35%
                        font-size 20px
                        color #fea15a
                        background #ffffff
                        text-align center
        .list_wrap
            margin 0 24px 116px 24px
            padding 16px 22px
            background #fff                               
            border-radius 10px
            font-size 28px
            color #525252
            line-height 80px
            .my_look
                display block
                color #525252
            .arr_wrap
                border-bottom 1.5px solid #e6e6e6
                .right_ico
                    margin 34px 0 0
                    float right
                    display inline-block
                    width 8px
                    height 14px
                    background url(/static/images/user/leftArrow.png) no-repeat
                    background-size 100% 100%
                .cell 
                    margin-left 282px
            .arr_wrap:last-child
                border none



img
    display block
    margin 0 auto
    max-width 100%
    height 100%
.look
    color #525252    
</style>
