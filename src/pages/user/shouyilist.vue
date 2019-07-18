<template>
    <div class="shou_wrap">
        <!-- 头部组件 -->
		<Shou-Header custom-title="预计收益" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Shou-Header>
        <div class="content">
            <div class="item_wrap">

                <div class="title_wrap">
                    <ul class="title">
                        <li>订单号</li>
                        <li>佣金</li>
                        <li>描述</li>
                    </ul>
                </div>

                <div class="list_wrap">
                    <ul class="bound" v-for="(item,index) in list" :key="index">
                        <li>{{item.order_sn}}</li>
                        <li>{{item.money}}</li>
                        <li>{{item.desc}}</li>
                    </ul>
                </div>

            </div>
        </div>    
    </div>
</template>

<script>
	import ShouHeader from "@/pages/common/header/TopHeader"
    export default {
		name: 'shouyilist',
		data(){
            return{
                page:1,
                list:[],
            }
			
        },
        mounted() {
            this.shouData();
        },
        methods: {
            shouData(){
                var url = "user/estimate_list"
                this.$axios.post(url,{
                    token:this.$store.getters.optuser.Authorization
                })
                .then((res)=>{                  
                    var that = this
                    var item = res.data.data;
                    if(res.data.status === 200){
                        that.list = item.data;
                    }else{
                        that.$toast(res.msg)
                    }
                })
            }
        },
        components:{
            ShouHeader,
        },
        
    }
</script>

<style lang="stylus" scoped>
    .shou_wrap
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

</style>
