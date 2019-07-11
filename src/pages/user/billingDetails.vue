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
						<li @click="getType(0)" :class="[isOn?'on':'']">消费</li>
						<li @click="getType(1)" :class="[isOn?'':'on']">赚取</li>
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
						<ul v-for="(item,index) in detItem" :key="index">
							<li>
								<div>{{item.source_id}}</div>
								<div>{{item.note}}</div>
							</li>
							<li>{{item.create_time}}</li>
							<li>{{item.balance}}</li>
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
				nowIndex:0,
				index:0,
				detItem:[],
				flag:false,
				type:'',
				isOn:true,
			}
		},
		components: {
			BillHeader,
		},
		mounted() {
			this.getType(0);
		},
		methods: {
            handleClick(index){
				this.nowIndex = index;
				this.flag = false;
				this.det();
			},
			getType(typeId){
				var that = this
				var url = "user/remainder_list"
				if(typeId==0){
					that.isOn=true;
				}else{
					that.isOn=false;
				}
                var params = new URLSearchParams();
				params.append('token', that.$store.getters.optuser.Authorization);// 要传给后台的参数值token
				params.append('log_type', typeId)
                that.$axios({
                    method:"post",
                    url:url,
                    data:params
                })
                .then((res)=>{
                    console.log(res)
                    if(res.data.status ===200){
						this.detItem= res.data.data.list;
						
                        
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