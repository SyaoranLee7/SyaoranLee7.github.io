<template>
  <view class="ronin-mine">
    <view class="head">
      <view class="head-back">
        <text></text>
        <text>个人中心</text>
        <text class="head-back-right"></text>
      </view>
    </view>

    <view class="mine-section">
      <view class="user-info-box">
        <u-avatar
          class="user-info-box-logo"
          size="large"
          src="http://pic.imeitou.com/uploads/allimg/220914/3-2209141F341.png"
        ></u-avatar>
        <text class="user-text">您好,</text>
        <text class="user-text"> 游客 </text>
        <!-- <open-data type="userNickName" class="user-text"></open-data> -->
      </view>
    </view>

    <!-- 浏览历史 -->
    <view class="mine-section-card">
      <u-cell-group title="我的">
        <u-cell-item title="个人问卷" value="" @click="onClickToList('/pages/mine/questionnaire')">
          <u-icon
            name="setting-fill"
            class="icon-setting"
            slot="icon"
            size="38"
          ></u-icon>
        </u-cell-item>
        <u-cell-item title="消息列表" value=""   @click="onClickToList('/pages/mine/message')">
          <u-icon
            name="car-fill"
            class="icon-integral"
            slot="icon"
            size="38"
          ></u-icon>
        </u-cell-item>
        <u-cell-item title="收藏" value="">
          <u-icon
            name="heart-fill"
            class="icon-fav"
            slot="icon"
            size="38"
          ></u-icon>
        </u-cell-item>
      </u-cell-group>
    </view>

    <u-tabbar
      :list="vuex_company_tabbar"
      active-color="#3873fe"
inactive-color="#B1AFB8"
      :mid-button-size="168"
      fontSize="8px"
      :icon-size="42"
    ></u-tabbar>
  </view>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
    };
  },

  methods: {
    onClickToList(url) {
      uni.navigateTo({
        url,
      });
    },
  },
};
</script>

<style lang="scss">
.ronin-mine {
  .head {
    position: relative;
    width: 100%;
    height: 440rpx;
    padding-top: 88rpx;
    .head-back {
      padding: 0 28rpx;
      height: 88rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #fff;
      font-size: 32rpx;
      justify-content: space-between;
      .head-back-right {
      }
    }
  }
  .head:after {
    /* 这个伪类的作用就是一个圆弧的背景色 */
    width: 140%;
    height: 440rpx;
    position: absolute;
    left: -20%;
    /* 之所以left:20%,是因为width:140%，宝贝可以是是别的值，例如width:160%，那么left:30%才能水平居中，可以发现规律的 */
    top: 0;
    z-index: -1;
    /*层叠顺序，最底层显示*/
    content: "";
    border-radius: 0 0 50% 50%;
    /*分别对应 左上 右上 右下 左下*/
    background: #0049de;
    /* 将这个伪类水平居中 */
  }

  .head-title {
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 0 52rpx;
    padding-top: 18rpx;
    .title {
      font-size: 48rpx;
      margin-bottom: 4rpx;
    }
    .sub-title {
      font-size: 28rpx;
      opacity: 0.6;
    }
    .botton {
      ::v-deep.u-btn {
        background: rgba(0, 0, 0, 0);
        color: #fff;
      }
    }
  }

  .mine-section {
    margin-top: -250rpx;
    padding-left: 38rpx;
    .user-info-box {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #fff;
      .user-info-box-logo {
        margin-right: 20rpx;
      }
    }
  }

  .mine-section-card {
    margin-top: 10px;
    background: #fff;
    border-radius: 20rpx;
    overflow: hidden;
    .order-icon {
      pointer-events: none;
      color: #f44a8d;
    }
  }
}
</style>