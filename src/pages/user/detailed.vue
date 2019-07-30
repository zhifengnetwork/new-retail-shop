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
                    <ul class="bound" v-for="(item,index) in list" :key="index">
                        <li>{{item.order_sn}}</li>
                        <li>{{item.money}}</li>
                        <li>{{item.desc}}</li>
                    </ul>
                </div>

            </div>
        </div>  
        <!-- 无数据 -->
        <div class="none" v-show="isShow">
            <img src="/static/images/public/none.png"/>
            <p>当前还没有佣金信息</p>
        </div>
         <!-- 数据加载完提示 -->
                <div class="end-wrap" v-show="isBotom" style="text-align: center; color: #838386; line-height: 60px;">
                    <p>我是有底线哦~~</p>
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
                isShow:false,
                isBotom:false,
                flag:false,
                // countpage:0,

                scrollTop:0,   //滚动条位置 
                offsetHeight:0,    //可视区高 
                scrollHeight:0,    //滚动区域 
            }
        },

        created(){
            this.seveData()
        },
        mounted(){
              window.addEventListener('scroll', this.scrollBottom);
        },
        methods:{
            scrollBottom(){
                var scr = document.documentElement.scrollTop || document.body.scrollTop;                            // 向上滚动的那一部分高度
                var clientHeight = document.documentElement.clientHeight || document.body.clientHeight ;            // 屏幕高度也就是当前设备静态下你所看到的视觉高度
                var scrHeight = document.documentElement.scrollHeight || document.body.scrollHeight;                // 整个网页的实际高度，兼容Pc端
                if(scr + clientHeight + 10 >= scrHeight){
                    // console.log("距顶部"+scr+"可视区高度"+clientHeight+"滚动条总高度"+scrHeight);
                    // this.$toast('加载中...')
                    this.page++; 
                    this.seveData();
                }
            },
            seveData(){
                // if(this.page == this.countpage){
                //     return;
                // }

                if(this.flag){
                    return
                }
                // this.flag = true;

                let url = 'user/distribut_list'
                this.$axios.post(url,{
                    token:this.$store.getters.optuser.Authorization,
                    page:this.page
                })
                .then((res)=>{
                    // this.countpage = res.data.last_page;
                    
                    // this.flag = false;                  
                    var that = this
                    var item = res.data.data;
                    if(res.data.status === 200){
                        this.isBotom=false
                        if(item.data.length<0){
                            this.isShow=true
                        }else{
                            
                        }
                        if(this.page == 1){ 
                            that.list = item.data                
                        }else{
                            if(item.data.length > 0){        //如果有数据,拼接数组
                                // that.list = that.list.concat(item.data); 
                                 that.list = [...that.list, ...item.data]
                            }else{
                                this.isBotom=true
                            }
                        }
                    }else{
                        that.$toast(res.msg)
                    }
                })
            }
        },
        components:{
            DetHeader,
        },
        destroyed: function () {
            window.removeEventListener('scroll', this.scrollBottom);
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
                    margin-bottom 20px
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
