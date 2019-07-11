<template>
    <div class="agents-wrap">
      	<!-- 头部组件 -->
		<TopHeader custom-title="申请代理" custom-fixed>
            <i slot="backBtn" class="iconfont icon-fanhui"></i>
		</TopHeader>
        <div class="height-88"></div>
        <!-- CONTENT START --> 
        <div class="content">
            <div class="-code-list">
                <p class="attention">注：达到相应条件即可申请县市省代理！</p>
                <van-dropdown-menu>
                    <van-dropdown-item v-model="aValue" :options="option1" />
                </van-dropdown-menu>
                <div>
                    <input type="text" class="a-inp" v-model="userName" placeholder="请输入用户名" />
                </div>
                <div>
                    <input type="number" class="a-inp" v-model="mobile" placeholder="请输入手机号码" />
                </div>
            </div>
            <van-uploader
                v-model="fileList"
                multiple
                upload-text="上传凭证"
                :max-count="1"
                />
        </div>
        <input class="submit" type="button" value="提交" @click="setAgents()" />
    </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader";
export default {
    data() {
        return {
            fileList: [],
            aValue:'',
            userName:'',
            mobile:'',
            token:this.$store.getters.optuser.Authorization,
            option1: [
                // { text: '县级代理', value: 0 },
            ],
        }
    },
    created(){
        this.$store.commit('showLoading')       //加载login
        this.getUserAgent()
    },
    methods:{
        getUserAgent(){
            var _that =this
            _that.$axios.post('user/agent_res',{
                'token':_that.token         
            })
            .then((res)=>{
                var list = res.data;
                if(list.status == 200){
                    var newarrys =[];
                    for(var i in list.data){
                        newarrys.push({text:list.data[i].levelname,value:list.data[i].id})
                    }
                    _that.aValue =newarrys[0].value
                    _that.option1 =newarrys
                    _that.$store.commit('hideLoading')
                }else if(list.status == 999){
                    _that.$store.commit('del_token'); //清除token
                    setTimeout(()=>{
                        _that.$router.push('/Login')
                    },1000)
                }else{
                    _that.$toast(list.msg)
                }
            })
        },

        setAgents(){
            var _that =this;
            var post =_that.fileList[0],pimg="";
            var mobile_reg=/^1[345678]\d{9}$/
            if(_that.userName==""){
                return  _that.$toast('亲,还没有输入用户名哦!')
            }
            if(_that.mobile=="" || !mobile_reg.test(_that.mobile)){
                return  _that.$toast('亲,请正确输入号码!')
            }
            if(post=="" || 'undefined'==typeof(post)){
               return  _that.$toast('亲,还没有选择上传的凭证哦!')
            }else{
                pimg =_that.fileList[0].content;
            }
            _that.$axios.post('user/agent_handle',{
                'level_id':_that.aValue,
                'image':pimg,
                'realname':_that.userNam, 
                'mobile':_that.mobile,  
                'token':_that.token              
            })
            .then((res)=>{
                var list = res.data;
                if(list.status == 200){
                    _that.$toast(list.msg)
                    // setTimeout(() => {
                    //     _that.$router.push('/Payment')
                    // },2000)
                }else{
                    _that.$toast(list.msg)
                }
            })
        }
    },
    components:{
        TopHeader
    }
}
</script>
<style lang="stylus">
    .agents-wrap
        .content
            padding 24px 24px 30px
            width 702px
            height 1000px
            background #fff
            border-radius 10px
            border solid 2px #e5e5e5
            text-align center
            margin-bottom 20px
            align-items center
            display flex
            justify-content center
            position relative
            .-code-list
                position absolute
                top 24px
                left 24px
                text-align: left
                font-size 26px
                .attention
                    color: #f40808
                    font-size 26px
                    // margin-bottom 20px
                .van-dropdown-menu__item
                    width: 702px
                    position: relative
                    justify-content: flex-start
                .van-dropdown-menu__title
                    display: block
                    width: 94%
                    text-align: left
                    font-size 28px
                .a-inp
                    width:100%
                    height: 60px
                    font-size: 26px
                    margin-bottom 12px
                .van-cell
                    text-align left 
            .van-uploader__upload
                width 370px
                height 370px
            .van-uploader__preview-image 
                display block
                width 100%
                height 100%
            .van-uploader__upload-icon 
                color #969799
                font-size 80px
                font-weight bold
            .van-uploader__upload-text
                font-size 30px
        .submit
            width 702px
            height 88px
            background-color #ff4d4d
            border-radius 44px
            color #fff
            position fixed
            bottom 24px
            left 24px


</style>

