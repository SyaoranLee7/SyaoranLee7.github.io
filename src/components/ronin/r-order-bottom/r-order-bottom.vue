<template>
  <view class="ronin-bottom">
    <view class="bottom-left">
      <u-button v-if="btnType == '100'" shape="circle">取消订单</u-button>
      <view class="home-box" v-else @click='onClickHome'>
        <u-icon size="48" name="home"></u-icon>
        <text> 回首页</text>
      </view>
    </view>

    <view class="btn">
      <view v-if="btnType == '100'" class="btn-box">
        <u-button type="success" class="left">患者支付</u-button>
        <u-button type="primary" class="right">支付</u-button>
      </view>
      <view> </view>

      <u-button class="btn-item" v-if="btnType == 'notest'" shape="circle"
        >取消订单</u-button
      >
      <u-button class="btn-item" v-if="btnType == 'complete'" shape="circle"
        >查看报告</u-button
      >
       <u-button
        class="btn-item"
        v-if="btnType == '120' && upStateType"
        type="primary"
        shape="circle"
        @click="onClickSubmit"
        >提交样本</u-button
      >
      <!-- <u-button
        class="btn-item"
        v-if="btnType != '100'"
        type="primary"
        shape="circle"
        @click="onClickOrder"
        >再来一单</u-button
      > -->
    </view>
  </view>
</template>

<script>
export default {
  props: {
    btnType: {
      type: String,
      default: "nopay",
    },
    upStateType:{}
  },
  data() {
    return {};
  },
  methods: {
    onClickHome(){
      uni.navigateTo({
          url: "/pages/home/home",
      })
       uni.switchTab({
        url: "/pages/home/home",
      });
    },
    onClickCart() {
      this.$emit("CLICKCAR");
    },
    onClickOrder() {
      this.$emit("CLICKORDER");
    },
    onClickSubmit(){
      this.$emit("CLICKSUBMIT");
    }
  },
};
</script>

<style lang="scss" scoped>
.ronin-bottom {
  height: 140rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 10rpx -14rpx 14rpx -14rpx rgba(0, 0, 0, 0.1);
  padding: $u-padding-width-within $u-padding-width-within 0 60rpx;
  position: relative;
  background: #fff;
  .bottom-left {
    display: flex;
    flex-direction: row;
    .home-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: $u-font-size-small-mini;
      color: $u-font-color-gray;
    }
  }
  .img-box {
    position: relative;
  }
  .price {
    color: $u-type-error;
    margin-top: 28rpx;
    margin-left: $u-padding-text;
    font-size: $u-font-size-bg;
    font-weight: 600;
    .icon {
      font-size: $u-font-size-small;
      font-weight: 500;
    }
  }
  ::v-deep.btn {
    display: flex;
    flex-direction: row;
    .btn-box {
      display: flex;
      flex-direction: row;

      .u-btn {
        width: 180rpx;
        border-radius: 0;
      }
      .left {
        border-top-left-radius: 50rpx !important;
        border-bottom-left-radius: 50rpx !important;
        button {
          width: 180rpx;
          border-radius: 0;
          border-top-left-radius: 50rpx !important;
          border-bottom-left-radius: 50rpx !important;
        }
      }
      .right {
        border-top-right-radius: 50rpx !important;
        border-bottom-right-radius: 50rpx !important;
        button {
          width: 180rpx;
          border-radius: 0;
          border-top-right-radius: 50rpx !important;
          border-bottom-right-radius: 50rpx !important;
        }
      }
    }
    .btn-item{
        margin-left: 20rpx;
    }
  }
}
</style>