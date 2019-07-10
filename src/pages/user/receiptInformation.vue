<template>
    <div class="rece">
        <!-- 头部组件 -->
		<Rece-Header custom-title="收款信息" custom-fixed>
			<!-- 返回按钮 -->
			<i slot="backBtn" class="iconfont icon-fanhui"></i>
		</Rece-Header>
        <div class="content">
            <div class="main">
                <div class="item">
                    <div class="title">收款人：</div>
                    <div class="name">{{bankInfo.title}}</div>
                </div>
                <div class="item">
                    <div class="title">电话：</div>
                    <div class="name">{{bankInfo.name}}</div>
                </div>
                <div class="item">
                    <div class="title">账号：</div>
                    <div class="name">{{bankInfo.value}}</div>
                </div>
                <div class="item">
                    <div class="title">银行：</div>
                    <div class="name">{{bankInfo.remark}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ReceHeader from "@/pages/common/header/TopHeader"
    export default {
	name: "receiptInformation",
	data() {
		return {
            bankInfo:'52555',
        };
    },
    created(){
            this.receiptInfo();//请求数据
    },
    amount(){
      
    },
    methods:{
        receiptInfo(){  
            var _that=this
            var url ='/user/bank_card' 
            _that.$axios.post(url,{
                // 传给后台的参数
                'token':this.$store.getters.optuser.Authorization,
            })
            .then((res)=>{
                    _that.bankInfo=res.data.data;
            })
            .catch( (error) => {
                Toast("请求错误:" + error)
            })
        },
    },
	components: {
		ReceHeader,
	}
};
</script>

<style lang="stylus" scoped>
    .rece
        width 100%
        height 100%
        .head
            background none
        .content
            padding-top 88px
            .main
                margin 18px 24px
                background #fff
                .item
                    line-height 65px

                .item .title,.name
                    display inline-block 
                .title
                    margin-right 15px
                    width 25%
                    text-align right                                  
</style>