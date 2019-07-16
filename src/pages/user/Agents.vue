<template>
  <div class="agents-wrap">
    <!-- 头部组件 -->
    <TopHeader custom-title="申请代理" custom-fixed>
      <i slot="backBtn" class="iconfont icon-fanhui"></i>
    </TopHeader>
    <!-- CONTENT START -->
    <div class="content">
      <div class="-code-list">
        <p class="attention">注：达到相应条件即可申请县市省代理！</p>
        <van-dropdown-menu class="van-drop">
          <van-dropdown-item v-model="aValue" :options="option1" />
        </van-dropdown-menu>
        <div>
          <input type="text" class="a-inp" v-model="userName" placeholder="请输入用户名" />
        </div>
        <div>
          <input type="number" class="a-inp" v-model="mobile" placeholder="请输入手机号码" />
        </div>
      </div>
      <div class="vmod-vat">
        <van-uploader v-model="fileList" multiple upload-text="上传凭证" :max-count="1" />
      </div>
      <input class="submit" type="button" value="提交申请" @click="setAgents()" />
    </div>
  </div>
</template>
<script>
import TopHeader from "@/pages/common/header/TopHeader";
export default {
  data() {
    return {
      fileList: [],
      aValue: "",
      userName: "",
      mobile: "",
      token: this.$store.getters.optuser.Authorization,
      option1: [
        // { text: '县级代理', value: 0 },
      ]
    };
  },
  created() {
    this.$store.commit("showLoading"); //加载login
    this.getUserAgent();
  },
  methods: {
    getUserAgent() {
      var _that = this;
      _that.$axios
        .post("user/agent_res", {
          token: _that.token
        })
        .then(res => {
          var list = res.data;
          _that.$store.commit("hideLoading");
          if (list.status == 200) {
            var newarrys = [];
            for (var i in list.data) {
              newarrys.push({
                text: list.data[i].levelname,
                value: list.data[i].id
              });
            }
            _that.aValue = newarrys[0].value;
            _that.option1 = newarrys;
          } else if (list.status == 999) {
            _that.$store.commit("del_token"); //清除token
            setTimeout(() => {
              _that.$router.push("/Login");
            }, 1000);
          } else {
            _that.$toast(list.msg);
          }
        });
    },

    setAgents() {
      var _that = this;
      var post = _that.fileList[0],
        pimg = "";
      var mobile_reg = /^1[345678]\d{9}$/;
      if (_that.userName == "") {
        return _that.$toast("亲,还没有输入用户名哦!");
      }
      if (_that.mobile == "" || !mobile_reg.test(_that.mobile)) {
        return _that.$toast("亲,请正确输入号码!");
      }
      if (post == "" || "undefined" == typeof post) {
        return _that.$toast("亲,还没有选择上传的凭证哦!");
      } else {
        pimg = _that.fileList[0].content;
      }
      _that.$axios
        .post("user/agent_handle", {
          level_id: _that.aValue,
          image: pimg,
          realname: _that.userName,
          mobile: _that.mobile,
          token: _that.token
        })
        .then(res => {
          var list = res.data;
          if (list.status == 200) {
            _that.$toast(list.msg);
            setTimeout(() => {
              _that.$router.push('/User')
            },1000)
          } else {
            _that.$toast(list.msg);
          }
        });
    }
  },
  components: {
    TopHeader
  }
};
</script>
<style lang="stylus" scoped>
.agents-wrap {
  width: 100%;
  height: 100%;

  .content {
    padding: 88px 24px 100px;
    background: #fff;
    border-radius: 10px;
    border: solid 2px #e5e5e5;
    text-align: center;
    margin-bottom: 20px;
    overflow: hidden;
    .-code-list {
      padding: 25px 0 0;
      text-align: left;
      font-size: 26px;
      .attention {
        color: #f40808;
        font-size: 26px;
        line-height: 65px;
      }

      .van-dropdown-menu__item {
        width: 702px;
        position: relative;
        justify-content: flex-start;
      }

      .van-dropdown-menu__title {
        display: block;
        width: 94%;
        text-align: left;
        font-size: 28px;
      }

      .a-inp {
        width: 100%;
        height: 60px;
        font-size: 26px;
        margin-bottom: 12px;
      }

      .van-cell {
        text-align: left;
      }
    }

    .van-uploader__upload {
      margin: 70px auto;
      width: 370px;
      height: 370px;
    }

    .van-uploader__preview-image {
      width: 370px;
      height: 370px;
    }

    .van-uploader__preview-image img {
      display: block;
      max-width: 100%;
      height: 100%;
    }

    .van-uploader__upload-icon {
      color: #969799;
      font-size: 80px;
      font-weight: bold;
    }

    .van-uploader__upload-text {
      font-size: 30px;
    }

    .van-uploader__preview {
      margin: 0;
    }
  }

  .submit {
    position fixed
    bottom 35px
    left 24px
    width: 702px;
    height: 88px;
    background-color: #ff4d4d;
    border-radius: 44px;
    font-size: 30px;
    color: #fff;
    letter-spacing: 5px;
  }
}

.van-dropdown-menu__item >>> .van-dropdown-menu__title {
  width: 100%;
}
</style>
<style lang="stylus">
.agents-wrap {
  .van-drop {
    .van-dropdown-menu__item {
      .van-dropdown-menu__title {
        width: 100%;
        display: inline-block;

        &:after {
          right: 12px !important;
        }
      }
    }
  }
  .vmod-vat {
    padding 160px 0 0
    margin 0 auto
    width 370px
    box-sizing border-box
    .van-uploader {
      
      .van-uploader__preview-image {
        margin 0 auto
        width 370px
        height 540px
      } 
    }
  }
}
</style>



