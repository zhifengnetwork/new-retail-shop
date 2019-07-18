<template>
    <div class="view_wrap">
        <!-- 头部组件 -->
		<View-Header custom-title="查看订单" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</View-Header>
        <div class="content">
            <div class="item_wrap">

                <div class="title_wrap">
                    <ul class="title">
                        <li>下单时间</li>
                        <li>订单号</li>
                        <li>金额</li>
                        <li>描述</li>
                    </ul>
                </div>

                <div class="list_wrap">
                    <ul class="bound" v-for="(item,index) in viewList" :key="index">
                        <li>{{item.pay_time | formatDate}}</li>
                        <li>{{item.order_sn}}</li>
                        <li>{{item.order_amount}}</li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </div>    
    </div>
</template>

<script>
	import ViewHeader from "@/pages/common/header/TopHeader"
    export default {
		name: 'viewOrders',
		data(){
            return{
                viewList:[],
            }
			
		},
        components:{
            ViewHeader,
        },
        mounted() {
            this.viewData();
        },
        methods: {
            viewData(){
                var _that =this;
                _that.$axios.post('user/user_order',{
                    token:this.$store.getters.optuser.Authorization            
                })
                .then((res)=>{
                    var list = res.data;
                    if(list.status == 200){
                        _that.viewList =list.data
                    }else{
                        _that.$toast(list.msg)
                    }
                })
            }
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
    }
</script>

<style lang="stylus" scoped>
    .view_wrap
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
