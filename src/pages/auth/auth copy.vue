<!-- 登录页面 -->
<template>
  <view class="app-login">
    <view class="app-login-box">
      <!-- <view class="app-login-title">
        <view class="title">您好，</view>
        <!-- <view class="des">欢迎使用三明普惠医联保健康权益服务</view> -->
        <view class="des">欢迎健康管理服务</view>
      </view> -->
      <view class="app-login-imgs">
        <image
          src="@/static/img/login/login-guide.jpg"
          class="imgs"
          mode="widthFix"
        />
      </view>

      <view class="app-login-btn" @click="onTap">
        <u-icon name="weixin-fill" class="icon"></u-icon>
        微信授权
      </view>
      <!-- <view class="app-login-agreement">
        <u-checkbox
          @change="checkboxChange"
          v-model="item.checked"
          v-for="(item, index) in list"
          :key="index"
          :name="item.name"
          style="margin-right: 0px"
        >
        </u-checkbox>
        <view class="agreement">
          <view>我已详细阅读并同意</view>
          <view class="txt">《健康管理用户协议》</view>
          <view>及</view><view class="txt">《个人隐私保护声明》</view>
        </view>
      </view> -->
    </view>
  </view>
</template>


<script>
import { login } from "@/api/login";
export default {
  data() {
    return {
      code: "",

      list: [
        {
          name: "agreed",
          checked: false,
          disabled: false,
        },
      ],
    };
  },
  onLoad(option) {
    this.pageLoad();
  },
  methods: {
    GetQueryString(name) {
      var url = window.location.href;
      try {
        var cs = url.split("?")[1]; //获取?之后的参数字符串
        var cs_arr = cs.split("&"); //参数字符串分割为数组
        for (var i = 0; i < cs_arr.length; i++) {
          //遍历数组，拿到json对象
          if (cs_arr[i].split("=")[0] == name) {
            return cs_arr[i].split("=")[1];
          }
        }
        return null;
      } catch {
        return null;
      }
    },
    getwx_authorize() {
      debugger;
      //授权的回调地址https://dev1.cloud-seal.com/questionnaire/#/pages/auth/auth
      let redirect_uri = encodeURIComponent(
        "https://dev1.cloud-seal.com/questionnaireDev/#/pages/auth/auth"
      );

      //这是我们公众号的appid
      let appid = "wx3cf98c292baf4eb3";
      //静默授权
      let url =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
        appid +
        "&redirect_uri=" +
        redirect_uri +
        "&response_type=code&scope=snsapi_base&state=123#wechat_redirect" +
        "&t=" +
        new Date().getTime();
      console.log(url);
      window.location.href = url;
      //非静默授权调取下面的这个地址，弹出授权接口，获取到用户信息
      // window.location.href =
      //   "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
      //   appid +
      //   "&redirect_uri=" +
      //   redirect_uri +
      //   "&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect" +
      //   "&t=" +
      //   new Date().getTime();
    },

    pageLoad() {
      this.code = this.GetQueryString("code");
      console.log("code:" + this.code);
      console.log("vuex_code:" + this.vuex_code);
      let shareCode = this.GetQueryString("sharecode");
      if (shareCode && shareCode != "") {
        this.$u.vuex("vuex_share_code", shareCode);
      }
      console.log("vuex_share_code:" + this.vuex_share_code);
      let that = this;
      //有code说明是腾讯回调用直接登录
      if (this.code && this.code != this.vuex_code) {
        let params = {
          appNo: "H",
          code: this.code,
          thirdAppCode: "t_wx_mp_yz",
          userTypeOne: "customer",
        };
        if (this.vuex_share_code && this.vuex_share_code !== "") {
          params.referralCode = this.vuex_share_code;
        }

        login(params).then((res) => {
          that.$u.vuex("vuex_code", that.code);
          if (res.code == "0") {
            that.$u.vuex("vuex_token", res.data.token);
            if (res.data.realName) {
              // userData = res.data;
            }
            that.$u.vuex("vuex_user", res.data);
            if (res.data.id == "-1") {
              if (this.vuex_share_code && this.vuex_share_code != "") {
                uni.navigateTo({ url: "/pages/login/newLogin?mode=open" });
              } else {
                uni.navigateTo({ url: "/pages/login/newLogin?mode=invate" });
              }
            } else {
              uni.switchTab({ url: "/pages/home/home" });
            }
          }
        });
      }
    },
    onTap() {
      this.getwx_authorize();
    },
  },
};
</script>

<style lang="scss">
page {
  background-color: #ffffff;
}
.app-login {
  padding: 14px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .app-login-box {
    .app-login-title {
      width: 100%;
      padding: 20px;
      .title {
        font-size: 56rpx;
        font-weight: 600;
      }
      .des {
        font-size: 32rpx;
        line-height: 1.6;
      }
    }
    .app-login-imgs {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60vh;
      .img {
        width: 100%;
        object-fit: cover;
      }
    }
    .app-login-agreement {
      padding: 20px 20px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      font-size: 12px;
      color: #999;
      flex-wrap: wrap;
      .agreement {
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        .txt {
          color: #3873fe;
          line-height: 1.4;
        }
      }
    }
    .app-login-btn {
      background: #3873fe;
      height: 44px;
      color: #fff;
      width: 90vw;
      font-size: 18px;
      text-align: center;
      display: flex;
      align-items: center;
      border-radius: 22px;
      justify-content: center;

      .icon {
        font-size: 24px;
        margin-right: 8px;
      }
    }
  }
}
</style>
