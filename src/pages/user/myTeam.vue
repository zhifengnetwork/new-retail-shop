<template>
    <div class="MyTeam">
        <!-- 头部组件 -->
		<Team-Header custom-title="我的团队" custom-fixed class="head">
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Team-Header>
        <div class="content">
            <div class="main">
                <div class="list_wrap">
                    <div class="list">
                        <div class="group">
                            <span>团队列表</span>
                            <i class="iconfont icon-xiangyoujiantou"></i>
                        </div>
                        <p>8</p>
                        <p>总人数</p>
                    </div>
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
                    padding 31px 36px 45px
                    background url(/static/images/user/back1.png) no-repeat
                    background-size 100% 100% 
                    .list 
                        .group
                            line-height 65px 
                        p 
                            font-size 30px
                            text-align center
                            line-height 65px                                   
</style>