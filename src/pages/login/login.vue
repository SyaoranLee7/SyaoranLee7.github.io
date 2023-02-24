<!-- 登录页面 -->
<template>
  <view class="login">
    <view class="login-main">
      <view class="login-title">绑定手机！</view>
      <view class="login-list flex border-all">
        <u-icon name="phone-fill" size="32"></u-icon>
        <view class="login-input">
          <input
            type="number"
            maxlength="11"
            placeholder="请输入手机号"
            class="is-input1"
            v-model="phone"
          />
        </view>
      </view>
      <view class="login-list flex border-all">
        <!-- <u-icon name="lock-fill" size="32"></u-icon> -->
        <view class="login-input">
          <input
            type="number"
            maxlength="4"
            placeholder="请输入验证码"
            class="is-input1"
            v-model="code"
          />
        </view>
        <view class="code-sx"></view>
        <view class="codeimg" @click.stop="getCode()">{{ getCodeText }}</view>
      </view>

      <!-- <u-button type="primary" class="m-t-10" @click="onLogin">登录/注册</u-button> -->

      <view class="login-tip">
        点击登录表示同意
        <navigator>软件许可及服务协议</navigator>
      </view>
    </view>
  </view>
</template>


<script>
// import Verify from "@/components/verify/verify";
import { loginByThirdBindMobile, sendLoginCode } from "@/api/login";
export default {
  // components: { Verify },
  data() {
    return {
      phone: "",
      code: "",
      key: "",
      show: false,
      getCodeText: "获取验证码",
      getCodeBtnColor: "#ffffff",
      getCodeisWaiting: false,
      keyObj: undefined,
      companyNo: "",
    };
  },
  onLoad(option) {
    if (option) {
      this.companyNo = option.companyNo;
      console.log(option.companyNo, "扫码过来登录");
    }
  },
  methods: {
    success(keyObj) {
      this.show = false;
      this.keyObj = keyObj;
      this.onSpendVcode();
    },

    getCode() {
      let _this = this;
      uni.hideKeyboard();
      if (_this.getCodeisWaiting) {
        return;
      }
      //判断手机是否合法
      if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(_this.phone)) {
        uni.showToast({
          title: "请填写正确手机号码",
          icon: "none",
        });
        return false;
      }

      this.onSpendVcode();
      return;

      this.show = true;
    },
    onSpendVcode() {
      this.getCodeText = "发送中...";
      this.getCodeisWaiting = true;
      this.getCodeBtnColor = "rgba(255,255,255,0.5)";
      let params = {
        mobile: this.phone,
        type: 1,
      };

      sendLoginCode(params).then((res) => {
        if (res?.code === "0") {
          this.setTimer();
        }
      });
    },
    setTimer() {
      let holdTime = 59,
        _this = this;
      _this.getCodeText = "重新获取(60)";
      _this.Timer = setInterval(() => {
        if (holdTime <= 0) {
          _this.getCodeisWaiting = false;
          _this.getCodeBtnColor = "#ffffff";
          _this.getCodeText = "获取验证码";
          clearInterval(_this.Timer);
          return;
        }
        _this.getCodeText = "重新获取(" + holdTime + ")";
        holdTime--;
      }, 1000);
    },
    onLogin() {
      if (!this.code) {
        uni.showToast({
          title: "验证码不能为空",
          duration: 2000,
        });
        return;
      }
      if (!this.phone) {
        uni.showToast({
          title: "手机不能为空",
          duration: 2000,
        });
        return;
        return;
      }
      let params = {
        mobile: this.phone,
        vcode: this.code,
      };
      loginByThirdBindMobile(params).then((res) => {
        if (res?.code === "0") {
          this.$u.vuex("vuex_user", res.data);
          uni.switchTab({
            url: "/pages/home/home",
          });
        }
      });
    },
  },
};
</script>



<style lang="scss">
page {
  background-color: #ffffff;
}

.verify-box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.login {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.login-main {
  flex: 1;
  padding: 0 70upx;

  .login-logo {
    width: 248upx;
    height: 242upx;
    padding-bottom: 50upx;
    margin: 200upx auto 0 auto;

    image {
      width: 100%;
      height: 100%;
    }
  }

  .login-title {
    margin: 200upx auto 0 auto;
    font-size: 48upx;
  }

  .logo-tip {
    text-align: center;
    padding-top: 25upx;
    font-size: 32upx;
    font-weight: 200;
    color: rgba(51, 51, 51, 1);
    padding-bottom: 50upx;
  }

  .login-list {
    margin-top: 18upx;
    margin-bottom: 18upx;
    height: 100upx;
    align-items: center;
    justify-content: center;
    padding: 0 30upx;
    display: flex;
    border-bottom: 1px solid #efeded;
    &.border-all {
      &:after {
        border: 1px solid #d0d0d0;
        border-radius: 100upx;
      }
    }

    .login-input {
      flex: 1;
      height: 40upx;
      input {
        font-size: 28upx;
        color: #333333;
        padding-left: 20upx;
      }
    }

    .code-sx {
      content: "";
      width: 2upx;
      height: 25upx;
      background: #d0d0d0;
      margin-right: 25upx;
    }

    .codeimg {
      font-size: 24upx;
      color: $u-type-primary;
    }
  }

  .login-btn {
    margin-top: 70upx;
    height: 96upx;
    line-height: 96upx;
    width: 100%;
    background: linear-gradient(90deg, #fea434, #fa476a);
    border-radius: 46upx;
    font-size: 34upx;
    color: #ffffff;
  }

  .login-tip {
    padding-top: 26upx;
    font-size: 22upx;
    color: #666666;
    text-align: center;

    navigator {
      margin-left: 10upx;
      display: inline-block;
      color: #5055a8;
    }
  }
}

.login-footer {
  padding: 0 70upx;

  .footer-tip {
    align-items: center;
    font-size: 24upx;
    color: #999999;
    text-align: center;

    &:before {
      flex: 1;
      content: "";
      height: 2upx;
      background: #d0d0d0;
      margin-right: 30upx;
    }

    &:after {
      margin-left: 30upx;
      flex: 1;
      content: "";
      height: 2upx;
      background: #d0d0d0;
    }
  }

  .footer-other {
    padding: 40upx 0 100upx 0;
    justify-content: center;

    .other-list {
      width: 80upx;
      height: 80upx;
      margin: 0 75upx;

      image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
