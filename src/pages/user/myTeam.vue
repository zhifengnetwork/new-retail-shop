<template>
    <div class="MyTeam">
        <!-- 头部组件 -->
		<Team-Header custom-title="我的团队" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Team-Header>
        <div class="content">
            <div class="main">
                <div class="list_wrap">
                    <router-link class="look" to="/user/myTeam/commissionlist">
                        <div class="group">
                            <span>团队列表</span>
                            <i class="iconfont icon-xiangyoujiantou"></i>
                        </div>
                        <p>8</p>
                        <p>总人数</p>
                    </router-link>    
                </div>

                <div class="list_wrap_1">
                    <div class="group">
                        <span>佣金明细</span>
                        <i class="iconfont icon-xiangyoujiantou"></i>
                    </div>
                    <p>2.88</p>
                    <p>总收益</p>
                </div>

                <div class="list_wrap_2">
                    <router-link class="look" to="/user/shouyilist">
                        <div class="group">
                            <span>预计收益</span>
                            <i class="iconfont icon-xiangyoujiantou"></i>
                        </div>
                        <p>547.54</p>
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import TeamHeader from "@/pages/common/header/TopHeader"
    export default {
	name: "myTeam",
	data() {
		return {};
	},
	components: {
		TeamHeader,
	}
};
</script>

<style lang="stylus" scoped>
    .MyTeam
        width 100%
        height 100%
        .head
            background none
        .content
            padding-top 88px
            .main
                margin 18px 24px
                background #fff 
                .list_wrap 
                    margin-bottom 20px
                    padding 31px 36px 45px
                    background url(/static/images/user/back1.png) no-repeat
                    background-size 100% 100% 
                    .group
                        line-height 65px 
                        color #28678e
                        .icon-xiangyoujiantou
                            font-size 12px
                            vertical-align middle 
                    p 
                        font-size 30px
                        text-align center
                        line-height 65px 
                        color #151515
                .list_wrap_1 
                    margin-bottom 20px
                    padding 31px 36px 45px
                    background url(/static/images/user/back2.png) no-repeat
                    background-size 100% 100% 
                    .group
                        line-height 65px 
                        color #8e4a28
                        .icon-xiangyoujiantou
                            font-size 12px
                            vertical-align middle 
                    p 
                        font-size 30px
                        text-align center
                        line-height 65px
                        color #151515 
                .list_wrap_2
                    margin-bottom 20px
                    padding 31px 36px 105px
                    background url(/static/images/user/back3.png) no-repeat
                    background-size 100% 100% 
                    .group
                        line-height 65px 
                        color #8e2862
                        .icon-xiangyoujiantou
                            font-size 12px
                            vertical-align middle 
                    p 
                        font-size 30px
                        text-align center
                        line-height 65px 
                        color #151515

.my_look
    display block
    color #151515
                                                             
</style>