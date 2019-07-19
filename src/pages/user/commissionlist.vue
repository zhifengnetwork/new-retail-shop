<template>
    <div class="comm_wrap">
        <!-- 头部组件 -->
		<Comm-Header custom-title="团队列表" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Comm-Header>
        <div class="content">
            <div class="item_wrap">
                <div class="tit_wrap">
					<ul>
						<li @click="seveData(1)" :class="[isOn?'on':'']">一级直推</li>
						<li @click="seveData(2)" :class="[isOn?'':'on']">其他成员</li>
					</ul>
				</div>

                <div class="title_wrap">
                    <ul class="title">
                        <li>用户ID</li>
                        <li>名称</li>
                        <li>电话</li>
                        <li>订单</li>
                    </ul>
                </div>

                <div class="list_wrap" v-show="nowIndex === 0">
                    <ul class="bound" v-for="(item,key) in teamList" :key="key">
                        <li>{{item.id}}</li>
                        <li>{{item.realname}}</li>
                        <li>{{item.mobile}}</li>
                        <li>
                            <router-link class="my_look" :to="'/user/myTeam/commissionlist/viewOrders?user_ids='+item.id">查看</router-link>
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
                teamList:[],
                nowIndex:0,
				isOn:true,
            }
			
        },
        mounted(){
            this.seveData(1);
        },
        methods:{
            seveData(typeId){
                var that =this;
                var url = 'user/team_list'
                if(typeId==1){
					that.isOn=true;
				}else{
					that.isOn=false;
                }
                var params = new URLSearchParams();
				params.append('token', that.$store.getters.optuser.Authorization);// 要传给后台的参数值token
				params.append('type', typeId)
                that.$axios({
                    method:"post",
                    url:url,
                    data:params
                })
                .then((res)=>{
                    if(res.data.status ===200){
						this.teamList = res.data.data;                       
                    }else{
                        Toast(res.data.msg)
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
                .tit_wrap
                    font-size 0
                    background #fff
                .tit_wrap ul li
                    display inline-block
                    width 50%
                    font-size 30px
                    text-align center
                    line-height 65px
                    font-weight 550
                .tit_wrap ul li.on
                    color #ef1010
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
