<template>
    <div class="det_wrap">
        <!-- 头部组件 -->
		<Det-Header custom-title="佣金明细" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Det-Header>
        <div class="content">
            <div class="item_wrap">

                <div class="title_wrap">
                    <ul class="title">
                        <li>订单号</li>
                        <li>金额</li>
                        <li>描述</li>
                    </ul>
                </div>

                <div class="list_wrap" v-for="item in list">
                    <ul class="bound">
                        <li>410{{item.order_sn}}</li>
                        <li>00{{item.money}}</li>
                        <li>44{{item.desc}}</li>
                    </ul>
                    <!-- <ul class="not_bound">
                        <li>201909061256301</li>
                        <li>￥12356.00</li>
                        <li>分享返佣</li>
                    </ul> -->
                </div>

            </div>
        </div>    
    </div>
</template>

<script>
	import DetHeader from "@/pages/common/header/TopHeader"
    export default {
		name: 'detailed',
		data(){
            return{
                list:[],
            }
			
        },
        methods:{
            
            seveData(){
                let url = '/user/distribut_list'
                this.$axios.post(url,{
                    page:1,
                    token:this.$store.getters.optuser.Authorization
                })
                .then((res)=>{
                   
                    var that = this
                    var item = res.data;
                    console.log(res.data)
                    if(item.status==200){
                        that.list = item.data;
                    }else{
                        // that.$toast(list.msg)
                    }
                })
            }
        },
        mounted(){
            this.seveData()
        },
        components:{
            DetHeader,
        },
        
    }
</script>

<style lang="stylus" scoped>
    .det_wrap
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

</style>
