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
        <text>健康报告</text>
        <text class="head-back-right"></text>
      </view>

      <view class="head-title">
        <view>
          <view class="title">潘婷的健康报告</view>
          <view class="sub-title">
            <u-icon name="clock" style="margin-right: 4rpx"></u-icon>
            生成时间:2022年12月25日</view
          >
        </view>

        <u-button class="botton" size="mini" shape="circle">重新测评</u-button>
      </view>
    </view>
    <view class="content">
      <view class="ronin-title">
        <view class="ronin-title-icon"></view>
        <text class="ronin-title-name">风险概况</text>
      </view>

      <view class="content-hint">
        <view class="content-hint-left">
          <u-image
            width="54rpx"
            height="54rpx"
            class="img"
            src="/static/img/hint.png"
          ></u-image>
          <text>风险小贴士</text>
        </view>
        <view class="content-hint-right">
          <view class="item">
            <view class="icon"></view>
            <view class="type">已确诊疾病</view>
            <view class="des">建议尽早就医</view>
          </view>
          <view class="item item-center">
            <view class="icon"></view>
            <view class="type">体检异常</view>
            <view class="des">建议定期筛查</view>
          </view>
          <view class="item item-end">
            <view class="icon"></view>
            <view class="type">低</view>
            <view class="des">筛查优先级较低</view>
          </view>
        </view>
      </view>

      <u-image
        width="636rpx"
        height="820rpx"
        class="img"
        src="/static/img/people.png"
      ></u-image>
    </view>

    <view class="list">
      <view class="item" v-for="(item, index) in 2" :key="index + 'item'">
        <view class="item-head">
          <view>
            <text>糖尿病</text>
            <text class="type">高</text>
          </view>

          <view class="details" @click="onClickToDetails"
            >详情 <u-icon name="arrow-right" size="28"></u-icon
          ></view>
        </view>
        <view class="item-center">
          <view class="item-center-title">影响因素：</view>
          <view class="tag-box">
            <u-tag class="tag" text="糖尿病家族病史" mode="dark" type="info" />
            <u-tag class="tag" text="高血压病史" mode="dark" type="info" />
          </view>
        </view>

        <view class="item-bottom">
          <text>推荐检验项：</text>
          <text class="check">空腹血糖、餐后2小时血糖</text>
        </view>
      </view>
    </view>

    <view class="bottom">
      <u-button type="primary" shape="circle" @click='onClickToHint'> 一键定制健康管理</u-button>
    </view>
  </view>
</template>

<script>
import{getRiskByScaleResult} from"@/api/questionnaire"
export default {
  data() {
    return {
        id:''
    };
  },
  onLoad(e){
      if(e?.id){
          this.id = e.id
          this.init()
      }
  },
  methods: {
    init(){
        getRiskByScaleResult({scaleResultId:this.id})
    },
    onClickToDetails() {
      uni.navigateTo({
        url: `/pages/report/disease`,
      });
    },
    onClickBack(){
        uni.navigateBack()
    },
    onClickToHint(){
         uni.navigateTo({
        url: `/pages/report/hint`,
      });
    }
    //--------------------------------------
  },
};
</script>

<style lang='scss' scoped>
.ronin-report {
  padding-bottom: 400rpx;
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
     position: relative;
      z-index: 10;
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
  .content {
    margin: 0 28rpx;
    padding: 24rpx;
    min-height: 200rpx;
    background: #fff;
    margin-top: -116rpx;
    border-radius: 6rpx;
    margin-bottom: 24rpx;
     position: relative;
      z-index: 10;
    .content-hint {
      margin-top: 26rpx;
      height: 162rpx;
      background: #f6f6f6;
      border-radius: 4rpx;
      padding-left: 64rpx;
      padding-right: 58rpx;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .content-hint-left {
        width: 140rpx;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .img {
          width: 56rpx;
          height: 56rpx;
        }
      }
      .content-hint-right {
        .item {
          display: flex;
          flex-direction: row;
          align-items: center;
          .icon {
            width: 40rpx;
            height: 24rpx;
            background: #ff4c30;
            border-radius: 4rpx;
          }
          .type {
            margin-left: 12rpx;
            margin-right: 24rpx;
            color: #ff4c30;
          }
          .des {
            color: #333;
            font-size: 24rpx;
          }
        }
        .item-center {
          .icon {
            background: #ffab00;
          }
          .type {
            color: #ffab00;
          }
        }

        .item-end {
          .icon {
            background: #38cb89;
          }
          .type {
            color: #38cb89;
          }
        }
      }
    }
  }
  .list {
    .item {
      margin: 0 28rpx;
      background: #fff;
      border-radius: 4rpx;
      padding: 32rpx 0rpx;
      padding-bottom: 0;
      margin-bottom: 24rpx;
      .item-head {
        display: flex;
        justify-content: space-between;
        margin-bottom: 22rpx;
        padding: 0 28rpx;
        .type {
          color: #ff5630;
          margin-left: 16rpx;
        }
        .details {
          color: #999;
        }
      }
      .item-center {
        padding: 0 28rpx;
        padding-bottom: 28rpx;
        .item-center-title {
          color: #999;
          margin-bottom: 10rpx;
        }
        .tag-box {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .tag {
            margin-right: 20rpx;
            margin-bottom: 6rpx;
            ::v-deep.u-tag {
              background: #f6f6f6;
              color: #666666;
            }
          }
        }
      }
      .item-bottom {
        height: 100rpx;
        line-height: 100rpx;
        border-top: 1px solid #f0f0f0;
        padding: 0 28rpx;
        .check {
          color: #3873fe;
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

  .ronin-title {
    display: flex;
    flex-direction: row;
    align-items: center;
    .ronin-title-icon {
      height: 36rpx;
      width: 10rpx;
      border-radius: 6rpx;
      background: linear-gradient(to bottom, #769fff, #3873fe);
      margin-right: 12rpx;
    }
    .ronin-title-name {
      font-size: 36rpx;
      color: #333;
    }
  }
}
</style>