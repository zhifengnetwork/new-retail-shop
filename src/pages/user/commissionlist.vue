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
                    <ul class="bound">
                        <li>4584554</li>
                        <li>冷漠之秋二小姐</li>
                        <li>15588229900</li>
                        <li>
                            <router-link class="my_look" to="/user/myTeam/commissionlist/viewOrders">查看</router-link>
                        </li>
                    </ul>
                    <ul class="not_bound">
                        <li>4584554</li>
                        <li>二小姐</li>
                        <li>未绑定</li>
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
                
            }
			
        },
        mounted(){
            this.seveData()
        },
        methods:{
            seveData(){

                this.$axios.post('user/team_list',{
                    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJEQyIsImlhdCI6MTU2MjIyMTEzOCwiZXhwIjoxNTYyMjU3MTM4LCJ1c2VyX2lkIjo4M30.RZ7zvjlGZgiJhF2yf3Z26_wpqqQ6oLcbLiOtuvC90AM'               
                })
                .then((res)=>{
                    var list = res.data;
                    console.log(list)
                    if(list.status == 200){
                        // _that.$toast("登陆成功,正在跳转...")
                    }else{
                        // _that.$toast(list.msg)
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
                .list_wrap .not_bound
                    background #ecf4fc                         

.my_look
    display block
    color #151515
</style>
