<template>
    <div class="noticeDetails">
        <!-- 头部组件 -->
		<TopHeader custom-title="公告详情" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <div class="content">
            <h1>{{NotiList.title}}</h1>
            <p>{{NotiList.desc}}</p>
        </div>

    </div>
</template>

<script>
// 公共头部
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'NoticeDetails',
    data(){
       return{
           announceId:this.$route.query.item_id,
           NotiList:[],
        }
    },
    mounted() {
        this.NotiData()
    },
    methods:{
        NotiData() {
            var url = "user/announce_edit"
            this.$axios.post(url,{
                token:this.$store.getters.optuser.Authorization,
                'announce_id':this.announceId
            })
            .then((res)=>{                 
                var that = this
                if(res.data.status === 200){
                    that.NotiList = res.data.data;
                }else{
                    that.$toast(res.msg)
                }
            })
        },
    },
    components:{
        TopHeader
    }
}
</script>

<style lang="stylus" scoped>
.noticeDetails
    background-color #fff
    min-height 100vh
    .content
        width 80%
        margin 50px auto 0
        h1
            text-align center
            font-size 38px
            font-weight normal
            margin-bottom 10px
        p
            line-height 36px
            font-size 26px
</style>
