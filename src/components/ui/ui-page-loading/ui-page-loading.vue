<template>
  <view v-if="show" class="ui-page-loading" >
    <view class="ui-page-loading-box">
      <slot name="loading"></slot>
    </view>
    <view class="ui-page-loading-text">
      <slot name="text"></slot>
    </view>
  </view>
</template>

<script>
/**
 * 页面加载
 * @description 警此组件为一个小动画，目前用在uView的loadmore加载更多和switch开关等组件的正在加载状态场景。
 * @tutorial
 * @property {Boolean} show 是否显示动画（默认true）
 * @example <m-page-loading></m-page-loading>
 */
export default {
  name: "ui-page-loading",
  props: {
    // 是否显示动画
    show: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    // pageStyle() {
    // 	let style = {};
    // 	style.width = this.size + 'rpx';
    // 	style.height = this.size + 'rpx';
    // 	return style;
    // },
  },
};
</script>

<style lang="scss" scoped>
.ui-page-loading {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  &-box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  &-text {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 24rpx;
    padding: 10rpx;
  }
}
</style>
