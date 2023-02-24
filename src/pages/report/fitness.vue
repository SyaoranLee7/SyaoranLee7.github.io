<template>
  <view class="ronin-report">
    <view class="head">
      <view class="head-back">
        <u-icon
          name="arrow-left"
          @click="onClickBack"
          color="#fff"
          size="32"
        ></u-icon>
        <text>健康</text>
        <text class="head-back-right"></text>
      </view>
      <view class="img-box">
        <view class="img-item img-item-check">
          <u-image
            shape="circle"
            width="88rpx"
            height="88rpx"
            src="http://pic.imeitou.com/uploads/allimg/220914/3-2209141F341.png"
          ></u-image>
          <u-icon class="icon" name="arrow-down-fill" color="#fff"></u-icon>
          <u-tag
            class="tag"
            text="本人"
            shape="circle"
            mode="dark"
            size="mini"
          />
        </view>

        <view class="img-item">
          <u-image
            shape="circle"
            width="88rpx"
            height="88rpx"
            src="http://pic.imeitou.com/uploads/allimg/220914/3-2209141F341.png"
          ></u-image>
        </view>

        <view class="img-add">
          <u-icon name="plus"></u-icon>
        </view>
      </view>
    </view>

    <view class="card card-margin-top">
      <view class="card-head">
        <view class="name">李梦杰</view>
        <u-button class="des" type="primary" shape="circle" size="mini"
          >健康报告有更新，快去看看吧
          <u-icon name="play-right-fill" color="#fff" size="24"></u-icon
        ></u-button>
      </view>
      <view class="card-content">
        <view class="card-content-des">健康目标：</view>
        <view class="tag-box">
          <u-tag class="tag" text="血压管理" />
          <u-tag class="tag" text="血压管理" />
          <u-tag class="tag" text="血压管理" />
        </view>
        <u-button size="mini" shape="circle">调整目标</u-button>
      </view>
      <view class="card-des">
        <u-image
          class="img"
          width="36rpx"
          height="36rpx"
          src="/static/img/icon3.png"
        ></u-image>
        <text class="des">
          您目前空腹血糖是8mmol/L，餐后血糖是16mmol/L血压是：150/90mmHg，建议重点关注
        </text>
      </view>
    </view>

    <view class="cell">
      <view class="item">
        <u-image
          class="img"
          shape="circle"
          width="66rpx"
          height="66rpx"
          src="/static/img/icon4.png"
        ></u-image>
        <view class="item-content">
          <text>健康计划</text>
          <view class="check-icon"></view>
        </view>
      </view>

      <view class="item">
        <u-image
          class="img"
          shape="circle"
          width="66rpx"
          height="66rpx"
          src="/static/img/icon5.png"
        ></u-image>
        <view class="item-content">
          <text>健康计划</text>
          <view class="check-icon"></view>
        </view>
      </view>

      <view class="item">
        <u-image
          class="img"
          shape="circle"
          width="66rpx"
          height="66rpx"
          src="/static/img/icon6.png"
        ></u-image>
        <view class="item-content">
          <text>健康计划</text>
          <view class="check-icon"></view>
        </view>
      </view>
    </view>

    <view class="card-next">
      <view class="reminder">根据您的健康测评报告推荐，可定期更新报告></view>

      <u-tabs
        :list="list"
        :is-scroll="false"
        :current="current"
        @change="change"
        class="tab"
      ></u-tabs>
      <view class="content">
        <view class="item">
          <view class="item-head">
            <u-image
              class="img"
              width="44"
              height="44"
              src="/static/img/run.png"
            ></u-image>
            <text>运动建议提醒</text>
            <u-checkbox></u-checkbox>
          </view>
          <view class="item-content">
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
          </view>
        </view>
      </view>
    </view>

    <view class="card">
      <view class="title">疾病知识</view>
      <view class="list">
        <view class="list-item" v-for="(item, index) in 6" :key="index + 'a'">
          <u-image
            class="img"
            width="100%"
            height="210rpx"
            src="/static/img/bg.jpg"
          ></u-image>

          <view class="item-title">慢性胃炎</view>
          <view class="item-sub-title">胃炎的并发症</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "所有计划",
        },
        {
          name: "糖尿病",
        },
        {
          name: "冠心病",
        },
      ],
      current: 0,
    };
  },
  methods: {
    change(index) {
      this.current = index;
    },

    onClickBack() {
      uni.navigateBack();
    },
  },
};
</script>

<style lang='scss' scoped>
.ronin-report {
  padding-bottom: 200rpx;
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
      position: relative;
      z-index: 10;
      .head-back-right {
        width: 100rpx;
      }
    }

    .img-box {
      padding: 0 36rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      z-index: 10;
      .img-item {
        width: 96rpx;
        height: 96rpx;

        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 44rpx;
        position: relative;
        .icon {
          position: absolute;
          bottom: -30rpx;
        }
        .tag {
          position: absolute;
          bottom: -4rpx;
          right: 0;
        }
      }
      .img-item-check {
        background: #fff;
      }

      .img-add {
        width: 52rpx;
        height: 52rpx;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        text-align: center;
        line-height: 52rpx;
        color: #fff;
        border: 2rpx dashed #adadad;
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
    z-index: 1;
    /*层叠顺序，最底层显示*/
    content: "";

    /*分别对应 左上 右上 右下 左下*/
    background: #0049de;
    /* 将这个伪类水平居中 */
  }

  .card {
    margin: 0 28rpx;
    background: #fff;
    padding: 36rpx 24rpx;
    border-radius: 6rpx;
    margin-bottom: 20rpx;
    overflow: hidden;
    .card-head {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40rpx;
      .name {
        font-size: 36rpx;
      }
    }

    .card-content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 28rpx;
      .card-content-des {
        color: #333;
      }
      .tag-box {
        flex: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .tag {
          margin-right: 20rpx;
          margin-bottom: 16rpx;
        }
      }
    }

    .card-des {
      background: #f6f6f6;
      display: flex;
      flex-direction: row;
      padding: 20rpx;
      border-radius: 4rpx;
      .img {
        margin-right: 20rpx;
      }
      .des {
        flex: 1;
        font-size: 24rpx;
      }
    }

    .title {
      font-size: 32rpx;
      margin-bottom: 30rpx;
    }
    .list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      .list-item {
        width: 48%;
        height: 210rpx;

        margin-bottom: 20rpx;
        position: relative;
        padding: 20rpx 16rpx;
        .img {
          position: absolute;

          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          width: 100%;
          height: 100%;
        }
        view {
          position: relative;
          z-index: 10;
        }
        .item-title {
          color: #3f576a;
          margin-bottom: 6rpx;
        }
        .item-sub-title {
          font-size: 24rpx;
          color: #3f576a;
        }
      }
    }

    //下个东西
  }

  .card-next {
    margin: 0 28rpx;
    background: #fff;

    border-radius: 6rpx;
    margin-bottom: 20rpx;
    overflow: hidden;
    .reminder {
      background: #fff3dd;
      height: 70rpx;
      line-height: 70rpx;
      text-align: center;
      color: #ffab00;
      font-size: 24rpx;
    }
    .tab {
    }
    .content {
      padding: 0 24rpx;
      margin-top: 56rpx;
      .item {
        padding-bottom: 32rpx;
        margin-bottom: 50rpx;
        .item-head {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin-bottom: 20rpx;
          .img {
            margin-right: 32rpx;
          }
          text {
            flex: 1;
            color: #333;
            font-weight: 500;
            font-size: 30rpx;
          }
        }
        .item-content {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-left: 74rpx;

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
  }

  .cell {
    padding: 20rpx 28rpx;
    background: #fff;
    border-radius: 4rpx;
    display: flex;
    flex-direction: row;
    padding-top: 0rpx;
    margin-bottom: 20rpx;
    .item {
      flex: 1;
      display: flex;
      flex-direction: row;

      padding-top: 20rpx;
      .img {
        margin-right: 4rpx;
      }
      .item-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 74rpx;
        padding-top: 16rpx;

        .check-icon {
          width: 80rpx;
          height: 6rpx;
          background: #3873fe;
          border-radius: 3rpx;
        }
      }
    }
  }

  .card-margin-top {
    margin-top: -100rpx;
  }
}
</style>