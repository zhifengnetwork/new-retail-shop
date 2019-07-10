<template>
	<div class="zd_wrap">
		<!-- 头部组件 -->
		<Bill-Header custom-title="账单明细" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Bill-Header>
		<div class="content">
			<div class="ft_wrap">
				<div class="tit_wrap">
					<ul>
						<li v-for="(item,index) in tabList" 
						:key="index" 
						:class="{on:index === nowIndex}" 
						@click="handleClick(index)">{{item.tabTitle}}</li>
					</ul>
				</div>
				<div class="item_wrap">
					<div class="title">
						<ul>
							<li>订单</li>
							<li>日期</li>
							<li>金额</li>
						</ul>
					</div>
					<div class="list" v-show="nowIndex === 0">
						<ul v-for="(tes,index) in detItem" :key="index">
							<li>
								<div>{{tes.source_id}}</div>
								<div v-if="tes.log_type === 0">{{tes.note}}</div>
							</li>
							<li>{{tes.create_time}}</li>
							<li>-{{tes.balance}}</li>
						</ul>
					</div>
					<div class="list" v-show="nowIndex === 1">
						<ul v-for="(list,index) in detList" :key="index">
							<li>
								<div>{{list.source_id}}</div>
								<div v-if="list.log_type === 1">{{list.note}}</div>
							</li>
							<li>{{list.create_time}}</li>
							<li>{{list.balance}}</li>
						</ul>
					</div>

				</div>
				<div class="foot" v-if="flag">我是有底线的哦~~</div>
			</div>
		</div>
    </div>    
</template>

<script>
	import BillHeader from "@/pages/common/header/TopHeader"
	import { Toast } from 'vant'
	export default {
        name: 'billingDetails',
		data() {
			return{
                tabList:[
					{
						tabTitle:"消费"
					},
					{
						tabTitle:"赚取"
					}
				],
				nowIndex:0,
				detItem:[],
				detList:[],
				flag:false,
				type:'',
			}
		},
		components: {
			BillHeader,
		},
		mounted() {
			this.det();
		},
		methods: {
            handleClick(index){
				this.nowIndex = index;
				this.flag = false;
				this.det();
			},
			// 账单列表
			det() {
				var that = this
                var url = "user/remainder_list"
                var params = new URLSearchParams();
				params.append('token', that.$store.getters.optuser.Authorization);// 要传给后台的参数值token
				params.append('log_type', that.type)
                that.$axios({
                    method:"post",
                    url:url,
                    data:params
                })
                .then((res)=>{
                    console.log(res)
                    if(res.data.status ===200){
						this.detItem= res.data.data.list;
						if(that.nowIndex === 0) {
							that.detItem= res.data.data.list;
						} else {
							that.detList= res.data.data.list;
						}
                        
                    }else{
                        Toast(res.data.msg)
                    }
                })
            },
		}
	}
</script>

<style lang="stylus" scoped>
.zd_wrap
    width 100%
    height 100%
    .content
        padding 88px 0 0
        .ft_wrap
            margin 20px 24px
            .tit_wrap
                font-size 0
                background #fff
            .tit_wrap ul li
                display inline-block
                width 50%
                font-size 30px
                text-align center
                line-height 65px
                font-weight 550
            .tit_wrap ul li.on
                color #ef1010
            .item_wrap .title
                background #ffc9b4
                color #151515
                font-size 0
            .item_wrap .title ul li
                display inline-block
                width 33.3%
                font-size 26px
                text-align center
                line-height 50px
            .item_wrap .list
                background #fff4f0
                color #151515
                font-size 0
            .item_wrap .list ul li
                display inline-block
                vertical-align middle	
                width 33.3%
                font-size 18px
                text-align center
                line-height 40px
            .item_wrap .list ul:nth-child(even)
                background #ffede7

</style>