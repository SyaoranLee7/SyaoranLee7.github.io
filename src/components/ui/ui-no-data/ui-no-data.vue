<template>
  <view class="page-no-data" :style="{'margin-top': top+'vh'}">
    <view class="page-no-data-img">
      <image
        class="img"
        mode="widthFix"
        src="https://rr-app.oss-cn-shanghai.aliyuncs.com/icons/icon-no-data.png"
      />
    </view>
    <view class="page-no-data-tips">
      <text class="title">{{title}}</text>
      <text class="tips">{{tips}}</text>
      <view class="button">
        <slot name="btns"></slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "ui-no-data",
  data() {
    return {};
  },
  props: {
    top: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "提示",
    },
    tips: {
      type: String,
      default: "没有数据",
    },
    width: {
      type: Number,
      default: 80,
    },
  },
};
</script>

<style lang="scss">
.page-no-data {
  display: block;
  width: 100%;
  padding-bottom: 20px;
  .page-no-data-img {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    .img {
      width: 70vw;
      height: calc(80vw * 0.588);
      margin: 20rpx;
    }
  }

  .page-no-data-tips {
    width: 100%;
    text-align: center;
    .title {
      font-size: 32rpx;
      font-weight: 400;
      width: 100%;
      color: #444;
      display: block;
      line-height: 2;
    }
    .tips {
      width: 100%;
      display: block;
      font-weight: 300;
      color: #444;
      font-size: 24rpx;
    }
    .button {
      margin-top: 48rpx;
    }
  }
}
</style>
