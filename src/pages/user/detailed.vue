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

                <div class="list_wrap">
                    <ul class="bound" v-for="item in list">
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
	import DetHeader from "@/pages/common/header/TopHeader"
    export default {
		name: 'detailed',
		data(){
            return{
                page:1,
                list:[],
            }
			
        },
        methods:{
            
            seveData(){
                let url = '/user/distribut_list'
                this.$axios.post(url,{
                    token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJEQyIsImlhdCI6MTU1OTYzOTg3MCwiZXhwIjoxNTU5Njc1ODcwLCJ1c2VyX2lkIjo3Nn0.YUQ3hG3TiXzz_5U594tLOyGYUzAwfzgDD8jZFY9n1WA'
                })
                .then((res)=>{                  
                    var that = this
                    var item = res.data.data;
                    console.log(res.data.data)
                    if(res.data.status === 200){
                        that.list = item.data;
                        console.log(that.list)
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
                .list_wrap ul:nth-child(even)
                    background #ecf4fc                            

</style>
