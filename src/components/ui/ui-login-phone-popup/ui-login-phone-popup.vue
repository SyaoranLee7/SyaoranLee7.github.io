<template>
  <u-popup
    v-model="isShow"
    mode="bottom"
    height="360px"
    border-radius="30"
    @close="onClose"
  >
    <view class="ui-login-phone-popup-box">
      <view class="ui-login-phone-popup-box-head">
        <view class="ui-login-phone-popup-box-head-name">云章应用程序</view>
        <view class="ui-login-phone-popup-box-head-text">申请</view>
      </view>
      <view class="ui-login-phone-popup-box-title"
        >获取以下全选为你提供服务</view
      >
      <view class="ui-login-phone-popup-box-content">
        <view class="clause">
          <view class="clause-icon">·</view>
          <view
            >获取你的手机号提供更好的账户安全,物流等服务(在接下来微信授权手机号的弹窗中选择“允许”)</view
          >
        </view>
        <view class="clause">
          <view class="clause-icon">·</view>
          <view
            >使用应用程序的相关服务,需要将你的手机号授权给应用程序和商家</view
          >
        </view>
      </view>
      <view class="ui-login-phone-popup-box-check">
        <u-checkbox
          v-model="checkbox"
          shape="circle"
          size="30rpx"
          class="checkbox"
          :check-style="iconBlock"
        ></u-checkbox>
        <view class="check-title">
          同意
          <text class="blue">应用程序用户协议</text>与
          <text class="blue">隐私协议</text>
        </view>
      </view>

      <view class="ui-login-phone-popup-box-bottom">
        <u-button class="button but-left" shape="circle" @click="onClickLogin"
          >手动添加</u-button
        >

        <u-button
          class="button"
          type="primary"
          open-type="getPhoneNumber"
          @getphonenumber="getPhoneNumber"
          shape="circle"
          >默认绑定</u-button
        >
      </view>
    </view>
  </u-popup>
</template>

<script>
import { bindMobileStepByWx } from "@/api/login";
export default {
  name: "ui-login-phone-popup",
  props: {
    // 是否显示
    show: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    show: {
      handler(val) {
        this.isShow = val;
      },
      immediate: true,
    },
  },
  data() {
    return {
      iconBlock: {
        display: "block",
        "margin-right": "10rpx",
      },
      isShow: false,
      checkbox: true,
    };
  },
  methods: {
    onClose(){
      this.$emit("ON-CLOSE");
    },
    onClickLogin() {
      uni.navigateTo({
        url: "/pages/login/login",
      });
     
    },
    getPhoneNumber(res) {
      let that = this;
      let params = {
        encryptedData: res.detail.encryptedData,
        iv: res.detail.iv,
      };

      bindMobileStepByWx(params).then((res) => {
        if (res.code == "0") {
          this.isShow = false;
          let user = res.data;
          that.$emit("ON-CLOSE");
          that.$u.vuex("vuex_user", user);
        }
      });
    },
  },
};
</script>

<style lang="scss">
.ui-login-phone-popup-box {
  width: 100%;
  height: 100%;
  position: relative;
  background: #fff;
  display: flex;
  padding: 30rpx;
  font-size: 28rpx;
  flex-direction: column;
  &-head {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
   
    &-name {
      margin: 0 10rpx;
    }
  }
  &-title {
    font-size: 38rpx;
  
    font-weight: 600;
    padding: 40rpx 0;
  }
  &-content {
    width: 100%;
  
    padding: 20rpx 30rpx;
    .clause {
      font-size: 24rpx;
     
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 10rpx;
      .clause-icon {
        font-size: 30rpx;
        font-weight: 900;
       
        margin-right: 10rpx;
      }
    }
  }
  &-check {
    padding: 20rpx 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    .checkbox {
      display: flex;
    }
    .check-title {
      font-size: 24rpx;
      .blue {
        color: rgb(51, 91, 177);
      }
    }
  }
  &-bottom {
    position: absolute;
    bottom: 0px;
    width: calc(100% - 60rpx);
    background: #fff;
    padding: 20px 0;
    height: 100px;
    display: flex;
    flex-direction: row;
    .but-left {
      margin-right: 10rpx;
    }
    .button {
      flex: 1;
    }
  }
}
</style>