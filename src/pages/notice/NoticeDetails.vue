<template>
    <div class="noticeDetails">
        <!-- 头部组件 -->
		<TopHeader custom-title="公告详情" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <div class="content">
            <h1>砍价免费下线通知</h1>
            <p>砍价免费下线通知:尊敬的用户，因活动调整，火车砍价免单活动暂时下线，砍价成功未提现用户可以联系客服进行人工提现，带来不便，敬请谅解！</p>
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
           
        }
    },
    methods:{
        
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
