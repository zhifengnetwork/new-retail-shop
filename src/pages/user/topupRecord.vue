<template>
    <div class="popup_wrap">
        <!-- 头部组件 -->
		<Pop-Header custom-title="充值记录" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Pop-Header>
        <div class="content">
            <div class="item_wrap">

                <div class="title_wrap">
                    <ul class="title">
                        <li>申请日期</li>
                        <li>金额</li>
                    </ul>
                </div>

                <div class="list_wrap">
                    <ul class="bound">
                        <li>2019-09-06</li>
                        <li>￥9155.00</li>
                    </ul>
                    <ul class="bound">
                        <li>2019-09-06</li>
                        <li>￥9155.00</li>
                    </ul>
                </div>
                <div class="none">没有数据哦~~</div>
            </div>
        </div>    
    </div>
</template>

<script>
	import PopHeader from "@/pages/common/header/TopHeader"
    export default {
		name: 'topupRecord',
		data(){
            return{
                //page:1,
                //list:[],
            }
			
        },
        mounted() {
            //this.PopData();
        },
        methods: {
            // PopData(){
            //     var url = "user/estimate_list"
            //     this.$axios.post(url,{
            //         token:this.$store.getters.optuser.Authorization
            //     })
            //     .then((res)=>{                  
            //         var that = this
            //         var item = res.data.data;
            //         if(res.data.status === 200){
            //             that.list = item.data;
            //         }else{
            //             that.$toast(res.msg)
            //         }
            //     })
            // }
        },
        components:{
            PopHeader,
        },
        
    }
</script>

<style lang="stylus" scoped>
    .popup_wrap
        .content
            padding-top 88px
            .item_wrap
                margin 28px 24px 0
                .title_wrap
                    background #ffd7c7
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
                    line-height 65px 
                .list_wrap .bound
                    background #ffede7
                .list_wrap ul:nth-child(even)
                    background #fff4f0
                .none 
                    font-size 20px
                    color #909090
                    text-align center
                    line-height 55px


</style>
