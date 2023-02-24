<template>
  <view
    class="ronin-report"
    :style="{
      backgroundImage: `url(${homeBackgroundImage})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <view class="head">
      <view class="head-title">
        <view class="title">{{ details.name }}风险</view>
      </view>
    </view>
    <view class="content">
      <view class="ronin-title">
        <view class="ronin-title-icon"></view>
        <text class="ronin-title-name">风险概况</text>
      </view>

      <view class="app-risk">
        <view class="app-risk-tips">
          <view class="app-risk-tips-item">
            <view class="app-risk-tips-item-box">
              <view class="info color-health" v-if="details.grade == '低'"
                >低风险
                <view><u-icon name="arrow-down-fill"></u-icon></view>
              </view>
            </view>
          </view>
          <view class="app-risk-tips-item">
            <view class="app-risk-tips-item-box">
              <view class="info color-warning" v-if="details.grade == '中'"
                >中风险
                <view><u-icon name="arrow-down-fill"></u-icon></view>
              </view>
            </view>
          </view>
          <view class="app-risk-tips-item">
            <view class="app-risk-tips-item-box">
              <view class="info color-danger" v-if="details.grade == '高'"
                >高风险
                <view><u-icon name="arrow-down-fill"></u-icon></view>
              </view>
            </view>
          </view>
        </view>
        <view class="app-risk-level">
          <view class="app-risk-level-item bg-health">低风险</view>
          <view class="app-risk-level-item bg-warning">中风险</view>
          <view class="app-risk-level-item bg-danger">高风险</view>
        </view>
      </view>
    </view>

    <view class="content content-item">
      <view class="ronin-title">
        <view class="ronin-title-icon"></view>
        <text class="ronin-title-name">疾病简介</text>
      </view>

      <text class="info">
        {{ details.remark || "" }}
      </text>
    </view>

    <view class="content content-item">
      <view class="ronin-title">
        <view class="ronin-title-icon"></view>
        <text class="ronin-title-name">疾病危害</text>
      </view>

      <canvas
        id="canvas"
        v-if="height"
        canvas-id="canvas"
        :style="{
          width: 330 + 'px',
          height: height + 'px',
        }"
      >
      </canvas>
    </view>

    <view class="content content-item">
      <view class="ronin-title">
        <view class="ronin-title-icon"></view>
        <text class="ronin-title-name">风险因素</text>
      </view>

      <u-table border-color="rgba(0,0,0,0)" font-size="24">
        <u-tr class="u-tr">
          <u-th width="30%" class="u-th">风险因素</u-th>
          <!-- <u-th width="35%" class="u-th">我的数据</u-th> -->
          <u-th width="70%" class="u-th">理想水平</u-th>
        </u-tr>
        <u-tr class="u-tr" v-for="(item, index) in factors" :key="index + 7819">
          <u-td width="30%" class="u-td">{{ item.metadataName }}</u-td>
          <u-td width="35%" class="u-td check" :class="item | dataColor">{{
            item.dataVal || "暂无"
          }}</u-td> -->
          <u-td width="70%" class="u-td"> {{ item | showName }} </u-td>
        </u-tr>
        <!-- <u-tr class="u-tr">
          <u-td width="30%" class="u-td" v-for="(item,index) in factors" :key='index+7829'>空腹血糖</u-td>
          <u-td width="35%" class="u-td">5.01mmol/L</u-td>
          <u-td width="35%" class="u-td"> 2.9~5.01mmol/L </u-td>
        </u-tr>
        <u-tr class="u-tr">
          <u-td width="30%" class="u-td" v-for="(item,index) in factors" :key='index+7839'>总胆固醇</u-td>
          <u-td width="35%" class="u-td">5.01mmol/L</u-td>
          <u-td width="35%" class="u-td"> 2.9~5.01mmol/L </u-td>
        </u-tr> -->
      </u-table>
    </view>

    <view class="content content-item">
      <view class="ronin-title">
        <view class="ronin-title-icon"></view>
        <text class="ronin-title-name">预防要点</text>
      </view>
      <view>
        <text class="text-item">
          {{ details.prevention || "" }}
        </text>
      </view>
    </view>

    <!-- <view class="bottom">
      <u-button type="primary" shape="circle" @click="onClickToHint">
        制定健康管理计划</u-button
      >
    </view> -->
  </view>
</template>

<script>
import homeBackgroundImage from "@/static/img/home/imgs-home-head-bg.png";
import {
  drawRect,
  drawText,
  drawImage,
  textPrewrap,
} from "@/utils/canvasImg.js";

import { myRiskInfo } from "@/api/plan";
export default {
  data() {
    return {
      ctx: null,
      homeBackgroundImage,
      details: {},
      factors: [],
      height: 0,
    };
  },
  onLoad(e) {
    if (e.id) {
      this.id = e.id;
      this.getDetails();
    }
  },
  onReady() {
    //
  },
  filters: {
    showName(data) {
      if (data.op == "eq") {
        return `=${data.val.v}`;
      }
      if (data.op == "ge") {
        return `>=${data.val.v}`;
      }
      if (data.op == "lt") {
        return `<${data.val.v}`;
      }
      if (data.op == "between") {
        return `${data.val.v1} ~  ${data.val.v2}`;
      }
      if (data.op == "between_cl") {
        return `>=${data.val.v1} ,  <${data.val.v2}`;
      }
      if (data.op == "between_cr") {
        return `>${data.val.v1} ,  <=${data.val.v2}`;
      }
      if (data.op == "between_c") {
        return `>=${data.val.v1} ,  <=${data.val.v2}`;
      }
    },
    dataColor(data) {
      let className = "";
      if (data.dataVal) {
        let item = data.val;
        if (data.op == "eq") {
          if (data.dataVal != item.v) {
            className = "dataRed";
          }
        }
        if (data.op == "ge") {
          if (data.dataVal < item.v) {
            className = "dataRed";
          }
        }
        if (data.op == "lt") {
          if (data.dataVal >= item.v) {
            className = "dataRed";
          }
        }
        if (data.op == "between") {
          if (data.dataVal < item.v1 || data.dataVal < item.v2) {
            className = "dataRed";
          }
        }
        if (data.op == "between_cl") {
          if (data.dataVal < item.v1 || data.dataVal <= item.v2) {
            className = "dataRed";
          }
        }
        if (data.op == "between_cr") {
          if (data.dataVal <= item.v1 || data.dataVal < item.v2) {
            className = "dataRed";
          }
        }
        if (data.op == "between_c") {
          if (data.dataVal < item.v1 || data.dataVal < item.v2) {
            className = "dataRed";
          }
        }
      }

      return className;
    },
  },
  methods: {
    getDetails() {
      myRiskInfo({ id: this.id }).then((res) => {
        this.details = res.data;
        this.factors = res.data.factors;

        if (this.details.harm?.length > 5) {
          this.height = this.details.harm.length * 24;
        } else {
          this.height = 110;
        }
        let that = this;
        this.$nextTick((res) => {
          that.createCanvas();
        });
      });
    },
    createCanvas() {
      let arr = this.details.harmList;
      var ctx = uni.createCanvasContext("canvas", this);
      ctx.setFontSize(13);
      ctx.setFillStyle("rgba(255, 255, 255, 0.3)"); // 背景透明色
      // ctx.fillRect(0, 0, canvaswidth, canvasheight); // fillRect(x,y,宽度，高度)
      ctx.setFillStyle("#565656"); // 颜色
      let num = 20;
      arr.forEach((element) => {
        ctx.fillText(element.name, 20, num, 200);
        num = num + 20;
      });
      // ctx.fillText("神经的慢性损害", 20, 20, 200); //将文字写如入图片  x y
      // ctx.fillText("眼损害", 20, 40, 200); //将文字写如入图片  x y
      // ctx.fillText("冠心病", 20, 60, 200); //将文字写如入图片  x y
      // ctx.fillText("肾炎", 20, 80, 200); //将文字写如入图片  x y
      // ctx.fillText("皮肤发炎", 20, 100, 200); //将文字写如入图片  x y
      ctx.fillText(this.details.name, 240, 20, 220);
      let lineNum = 16;
      arr.forEach((element) => {
        ctx.beginPath();
        ctx.moveTo(240, 16);
        ctx.quadraticCurveTo(240, 14, 90, lineNum);
        ctx.strokeStyle = "#89A2B4";
        ctx.stroke();

        lineNum = lineNum + 20;
      });

      // ctx.beginPath();
      // ctx.moveTo(240, 16);
      // ctx.quadraticCurveTo(100, 30, 90, 100);
      // ctx.strokeStyle = "#89A2B4";
      // ctx.stroke();

      // ctx.beginPath();
      // ctx.moveTo(240, 16);
      // ctx.quadraticCurveTo(240, 14, 90, 16);
      // ctx.strokeStyle = "#89A2B4";
      // ctx.stroke();
      ctx.draw(); //绘制
    },
    onClickBack() {
      uni.navigateBack();
    },
    onClickToHint() {
      uni.navigateTo({
        url: `/pages/risk/hint?id=${this.id}`,
      });
    },
  },
};
</script>

<style lang='scss' scoped>
@import "@/styles/common.scss";
.ronin-report {
  padding-bottom: 400rpx;
  .head {
    position: relative;
    width: 100%;
    height: 280rpx;
    padding-top: 38rpx;
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
    padding: 0 24rpx;
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
  .content {
    margin: 0 28rpx;
    padding: 28rpx;
    min-height: 200rpx;
    background: #fff;
    margin-top: -116rpx;
    border-radius: 24rpx;
    margin-bottom: 24rpx;
    color: #656565;
    line-height: 1.6;
    .content-grade {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        margin: 0 6rpx;
        .icon {
          color: #38cb89;
        }
        .bg {
          background: #38cb89;
          width: 100%;
          height: 14rpx;
          margin-top: 10rpx;
          margin-bottom: 6rpx;
        }
      }

      .item-center {
        .icon {
          color: #ffab00;
        }
        .bg {
          background: #ffab00;
        }
      }

      .item-end {
        .icon {
          color: #ff5630;
        }
        .bg {
          background: #ff5630;
        }
      }
    }
    

    .text-item {
      color: #383838;
      font-size: 28rpx;
      margin-bottom: 40rpx;
      line-height: 1.8;
    }
  }

  .content-item {
    margin-top: 0rpx;
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
    margin-bottom: 20rpx;

    .ronin-title-icon {
      height: 36rpx;
      width: 10rpx;
      border-radius: 6rpx;
      background: linear-gradient(to bottom, #769fff, #3873fe);
      margin-right: 12rpx;
    }
    .ronin-title-name {
      font-size: 32rpx;
      color: #333;
      font-weight: 600;
    }
  }
}
.app-risk {
  padding-bottom: 30rpx;
  .app-risk-tips {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .app-risk-tips-item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 33.33%;
      height: 50px;
      .app-risk-tips-item-box {
        .info {
          width: 100%;
          text-align: center;

          line-height: 1.8;
        }
        .arrows {
          margin-top: 0px;
          width: 0;
          height: 0;
          margin: 2px auto;
        }
      }

      .app-risk-tips-item-box:nth-child(0) {
        .arrows {
          border: 6px solid transparent;
          border-top: 6px solid #4dad9b;
        }
      }

      .app-risk-tips-item-box:nth-child(3) .arrows {
        border: 6px solid transparent;
        border-top: 6px solid #ea6d2c;
      }
    }
  }
  .app-risk-info {
    text-align: center;
    font-size: 16px;
    width: 100%;
    height: 60px;
  }
  .app-risk-info-num {
    padding-top: 6px;
    position: absolute;
  }
  .app-risk-level {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .app-risk-level-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33.33%;
      height: 24px;
      color: #fff;
    }
    .actived {
      height: 32px;
    }
    .app-risk-level-item:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .app-risk-level-item:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }
}

.u-th {
  font-size: 24rpx;
}

.dataRed{
      color:#ff5630
    }
</style>