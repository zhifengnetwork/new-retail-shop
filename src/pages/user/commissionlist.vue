<template>
    <div class="comm_wrap">
        <!-- 头部组件 -->
		<Comm-Header custom-title="团队列表" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Comm-Header>
        <div class="content">
            <div class="item_wrap">
                <div class="title_wrap">
                    <ul class="title">
                        <li>用户ID</li>
                        <li>名称</li>
                        <li>电话</li>
                        <li>订单</li>
                    </ul>
                </div>

                <div class="list_wrap">
                    <ul class="bound" v-for="(item,key) in teamList" :key="key">
                        <li>{{item.id}}</li>
                        <li>{{item.realname}}</li>
                        <li>1{{item.mobile}}</li>
                        <li>
                            <router-link class="my_look" to="/user/myTeam/commissionlist/viewOrders">查看</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
	import CommHeader from "@/pages/common/header/TopHeader"
    export default {
		name: 'commissionlist',
		data(){
            return{
                teamList:[]
            }
			
        },
        mounted(){
            this.seveData()
        },
        methods:{
            seveData(){
                var _that =this;
                _that.$axios.post('user/team_list',{
                    // token:this.$store.getters.optuser.Authorization
                    token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJEQyIsImlhdCI6MTU1OTYzOTg3MCwiZXhwIjoxNTU5Njc1ODcwLCJ1c2VyX2lkIjo3Nn0.YUQ3hG3TiXzz_5U594tLOyGYUzAwfzgDD8jZFY9n1WA'             
                })
                .then((res)=>{
                    var list = res.data;
                    if(list.status == 200){
                        _that.teamList =list.data
                    }else{
                        _that.$toast(list.msg)
                    }
                })
            }
        },

        components:{
            CommHeader,
        },
        
    }
</script>

<style lang="stylus" scoped>
    .comm_wrap
        .content
            padding-top 88px
            .item_wrap
                margin 28px 24px 0
                .title_wrap
                    background #c6e1ff
                    .title
                        display flex
                        li 
                            flex 1
                            text-align center
                            line-height 55px
                .list_wrap ul
                    display flex
                .list_wrap ul li 
                    flex 1
                    text-align center  
                    line-height 50px 
                .list_wrap .bound
                    background #f3f9ff
                .list_wrap ul:nth-child(even)
                    background #ecf4fc                          

.my_look
    display block
    color #151515
</style>
