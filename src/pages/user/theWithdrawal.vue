<template>
	<div class="tx_wrap">
		<!-- 头部组件 -->
		<Tx-Header custom-title="提现明细" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Tx-Header>
		<div class="content">
			<div class="bd_wrap">
				<div class="title_wrap">
					<ul>
						<li>申请日期</li>
						<li>金额</li>
						<li>手续费</li>
						<li>审核状态</li>
					</ul>
				</div>
				<div class="list_wrap">
					<ul v-for="(item,index) in detList" :key="index">
						<li>{{item.createtime | formatDate}}</li>
						<li>￥{{item.money}}</li>
						<li>￥{{item.taxfee}}</li>
						<li class="state" v-if="item.status === -1">审核失败</li>
						<li class="status" v-if="item.status === 2">审核成功</li>
						<li class="review" v-if="item.status === 1">审核中</li>
					</ul>
				</div>
			</div>
			<!--  -->
			<p class="none">没有数据哦~~</p>
		</div>

    </div>    
</template>

<script>
	import TxHeader from "@/pages/common/header/TopHeader"
	import { Toast } from 'vant'
	export default {
        name: 'theWithdrawal',
		data() {
			return{
				detList:[],
			}
		},
		components: {
			TxHeader,
		},
		mounted() {
			this.detailList();
		},
		created() {
			this.$store.commit('hideLoading')
		},
		methods: {
			// 提现明细列表
			detailList() {
                var url = "user/withdrawal_list"
                var params = new URLSearchParams();
				params.append('token', this.$store.getters.optuser.Authorization);// 要传给后台的参数值token
                this.$axios({
                    method:"post",
                    url:url,
                    data:params
                })
                .then((res)=>{
                    console.log(res)
                    if(res.data.status ===200){
						this.detList = res.data.data.list;
						this.$store.commit('hideLoading')
                        console.log(this.detList)
                    }else{
                        Toast(res.data.msg)
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
        }
	}
</script>

<style lang="stylus" scoped>
.tx_wrap
    width 100%
    height 100%
    .content
        padding 88px 0 0
        .bd_wrap
            margin 20px 24px
            color #151515
            .title_wrap
                background #ffd7c7
                font-size 0
            .title_wrap ul li
                display inline-block
                width 25%
                font-size 26px
                font-weight 550
                text-align center
                line-height 75px
            .list_wrap
                background #fff4f0
                font-size 0
            .list_wrap ul li
                display inline-block
                width 25%
                font-size 18px
                text-align center
                line-height 65px
            .list_wrap ul:nth-child(even)
                background #ffede7	
            .state
                color #f70a0a
            .status
                color #12eb22
				.review
					color #1989fa	
    .none
        margin 20px 0 0	
        font-size 20px
        color #909090
        text-align center
        line-height 75px					

</style>