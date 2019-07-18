<template>
    <div class="noticeList">
        <!-- 头部组件 -->
		<TopHeader custom-title="公告列表" custom-fixed>
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
		<div class="height-88"></div>

        <div class="content">
            <div class="notice-list">
                <ul>
                    <router-link to="/notice/NoticeDetails" tag="li">
                        <h3>关于销售国家开发银行2019七期金融债券发的销售通告</h3>
                        <span class="date">2019-05-15</span>
                    </router-link>
                    <router-link to="/notice/NoticeDetails" tag="li">
                        <h3>关于销售国家开发银行2019七期金融债券发的销售通告</h3>
                        <span class="date">2019-05-15</span>
                    </router-link>
                    <router-link to="/notice/NoticeDetails" tag="li">
                        <h3>关于销售国家开发银行2019七期金融债券发的销售通告</h3>
                        <span class="date">2019-05-15</span>
                    </router-link>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
// 公共头部
import TopHeader from "@/pages/common/header/TopHeader"
export default {
    name:'NoticeList',
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
.noticeList
    background-color #fff
    min-height 100vh
    .content
        .notice-list
            ul
                li
                    font-size 28px
                    line-height 50px
                    border-bottom 1px solid #efefef
                    padding 0 30px
                    box-sizing border-box
                    margin-top 10px
                    h3
                        display -webkit-box
                        overflow hidden
                        -webkit-line-clamp 2
                        -webkit-box-orient vertical
                        font-weight normal
                    .date
                        display block
                        color #999999
                        font-size 24px
                        text-align right 


</style>


