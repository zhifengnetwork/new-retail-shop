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
                        <li>充值日期</li>
                        <li>金额</li>
                    </ul>
                </div>

                <div class="list_wrap">
                    <ul class="bound" v-for="(items,index) in dataList" :key="index">
                        <li>{{items.pay_time | formatDate}}</li>
                        <li>{{items.amount}}</li>
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
                dataList:[],
            }
			
        },
        mounted() {
            this.PopData();
        },
        methods: {
            PopData(){
                var url = "user/recharge_list"
                this.$axios.post(url,{
                    token:this.$store.getters.optuser.Authorization
                })
                .then((res)=>{                 
                    var that = this
                    if(res.data.status === 200){
                        that.dataList = res.data.data.list;
                    }else{
                        that.$toast(res.msg)
                    }
                })
            },
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
                    display none
                    font-size 20px
                    color #909090
                    text-align center
                    line-height 55px


</style>
