<template>
  <view class="ronin-hint">
    <view class="hint-head">
      <view class="head-icon-box">
        <view class="icon-box" >
          <u-icon
            class="icon"
            name="checkmark-circle-fill"
            color="#3873FE"
            size="36"
          ></u-icon>
        </view>
        <view class="line-box">
          <view class="line"></view>
        </view>
        <view class="icon-box"></view>
      </view>

      <view class="head-text-box">
        <view class="text-box check">
          <view>第一步</view>
          <view>定制健康目标</view>
        </view>
        <view class="text-box">
          <view>第二步</view>
          <view>定制健康目标</view>
        </view>
      </view>
    </view>

    <view class="hint-content">
      <view class="title">目标设定</view>
      <view class="item">
        <view class="item-head">
          <u-image
            class="img"
            width="44"
            height="44"
            src="/static/img/run.png"
          ></u-image>
          <text>运动建议提醒</text>
        </view>
        <view class="item-content">
          <view class="icon-box">
              <u-icon class='icon' name="checkmark-circle-fill" size='52' color='#3873FE'></u-icon>
          </view>
          <view class="text-box">
            <view class="top">建议适量轻量运动</view>
            <view class="down">
              <u-image
                class="icon"
                width="24"
                height="30"
                src="/static/img/icon.png"
              ></u-image>
              如散步、快走等运动</view
            >
          </view>

          <view class="hint">
            <u-icon name="setting-fill" color="#707070"></u-icon>
            <text class="text">每周提醒</text>
          </view>
        </view>

        <view class="item-content">
          <view class="icon-box"></view>
          <view class="text-box">
            <view class="top">建议适量轻量运动</view>
            <view class="down">
              <u-image
                class="icon"
                width="24"
                height="30"
                src="/static/img/icon.png"
              ></u-image>
              如散步、快走等运动</view
            >
          </view>

          <view class="hint">
            <u-icon name="setting-fill" color="#707070"></u-icon>
            <text class="text">每周提醒</text>
          </view>
        </view>
      </view>

      <view class="item">
        <view class="item-head">
          <u-image
            class="img"
            width="44"
            height="44"
            src="/static/img/review.png"
          ></u-image>
          <text>定期复查提醒</text>
        </view>
        <view class="item-content">
          <view class="icon-box"></view>
          <view class="text-box">
            <view class="top">建议适量轻量运动</view>
            <view class="down">
              <u-image
                class="icon"
                width="24"
                height="30"
                src="/static/img/icon1.png"
              ></u-image>
              如散步、快走等运动</view
            >
          </view>

          <view class="hint">
            <u-icon name="setting-fill" color="#707070"></u-icon>
            <text class="text">每周提醒</text>
          </view>
        </view>
      </view>
    </view>


     <view class="bottom">
      <u-button type="primary" shape="circle" @click='onClickToHint'> 制定健康管理计划</u-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods:{
      onClickToHint(){
           uni.navigateTo({
        url: `/pages/report/fitness`,
      });
      }
  }
};
</script>

<style lang="scss" scoped>
.ronin-hint {
  .hint-head {
    background: #fff;
    height: 180rpx;
    padding-top: 26rpx;
    margin-bottom: 20rpx;
    .head-icon-box {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 120rpx;

      .icon-box {
        width: 32rpx;
        height: 32rpx;
        border-radius: 50%;
        background: #f0f0f0;
        .icon {
          top: -4rpx;
          left: -2rpx;
        }
      }
      .line-box {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        .line {
          width: 100%;
          height: 2px;
          background: #f0f0f0;
        }
      }
    }

    .head-text-box {
      padding: 0 32rpx;
      padding-top: 20rpx;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .text-box {
        width: 200rpx;
        text-align: center;
      }
      .check {
        color: #3873fe;
      }
    }
  }
  .hint-content {
    background: #fff;
    padding: 0 52rpx;
    .title {
      padding: 32rpx 0;
      font-size: 36rpx;
      color: #242938;
    }
    .item {
      padding-bottom: 32rpx;
      margin-bottom: 50rpx;
      .item-head {
        display: flex;
        flex-direction: row;
        margin-bottom: 30rpx;
        .img {
          margin-right: 32rpx;
        }
        text {
          color: #333;
          font-weight: 500;
        }
      }
      .item-content {
        display: flex;
        flex-direction: row;
        align-items: center;

        .icon-box {
          border: 1px solid #ccc;
          width: 44rpx;
          height: 44rpx;
          border-radius: 50%;
          margin-left: 20rpx;
          margin-right: 34rpx;
          .icon{
              position: relative;
              top:-6rpx;
              left: -6rpx;
          }
        }
        .text-box {
          flex: 1;
          height: 112rpx;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-bottom: 1px solid #f0f0f0;
          .down {
            color: #999;
            display: flex;
            flex-direction: row;
            margin-top: 6rpx;
            .icon {
              position: relative;
              top: 6rpx;
              margin-right: 4rpx;
            }
          }
        }
        .hint {
          color: #707070;
          height: 112rpx;
          line-height: 112rpx;
          border-bottom: 1px solid #f0f0f0;
          .text {
            color: #3873fe;
          }
        }
      }
    }
  }

    .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    padding: 28rpx;
  }
}
</style>