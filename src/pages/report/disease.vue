<template>
  <view class="ronin-report">
    <view class="head">
      <view class="head-back">
        <u-icon name="arrow-left" @click="onClickBack" color="#fff" size="32"></u-icon>
        <text>健康报告</text>
        <text class="head-back-right"></text>
      </view>

      <view class="head-title">
        <view>
          <view class="title">糖尿病风险</view>
        </view>
      </view>
    </view>
    <view class="content">
      <view class="ronin-title">
        <view class="ronin-title-icon"></view>
        <text class="ronin-title-name">风险概况</text>
      </view>

      <view class="content-grade">
        <view class="item">
          <u-icon class="icon" name="arrow-down-fill"></u-icon>
          <view class="bg"></view>
          <text>低风险</text>
        </view>

        <view class="item item-center">
          <u-icon class="icon" name="arrow-down-fill"></u-icon>
          <view class="bg"></view>
          <text>中风险</text>
        </view>

        <view class="item item-end">
          <u-icon class="icon" name="arrow-down-fill"></u-icon>
          <view class="bg"></view>
          <text>高风险</text>
        </view>
      </view>
    </view>

    <view class="content content-item">
      <view class="ronin-title">
        <view class="ronin-title-icon"></view>
        <text class="ronin-title-name">疾病简介</text>
      </view>

      <text>
        糖尿病是一种以高血糖为特征的代谢性疾病。高血糖则是由于胰岛素分泌缺陷或其生物作用受损，或两者兼有引起。长期存在的高血糖，导致各种组织，特别是眼、肾、心脏、血管、神经的慢性损害、功能障碍。
      </text>
    </view>

    <view class="content content-item">
      <view class="ronin-title">
        <view class="ronin-title-icon"></view>
        <text class="ronin-title-name">疾病危害</text>
      </view>

      <canvas
        id="canvas"
        canvas-id="canvas"
        :style="{
          width: 300 + 'px',
          height: 110 + 'px',
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
          <u-th width="20%" class="u-th">风险因素</u-th>
          <u-th width="40%" class="u-th">我的数据</u-th>
          <u-th width="40%" class="u-th">理想水平</u-th>
        </u-tr>
        <u-tr class="u-tr">
          <u-td class="u-td">年龄</u-td>
          <u-td class="u-td check">57岁</u-td>
          <u-td class="u-td"> >45岁 </u-td>
        </u-tr>
        <u-tr class="u-tr">
          <u-td class="u-td">空腹血糖</u-td>
          <u-td class="u-td">5.01mmol/L</u-td>
          <u-td class="u-td"> 2.9~5.01mmol/L </u-td>
        </u-tr>
        <u-tr class="u-tr">
          <u-td class="u-td">总胆固醇</u-td>
          <u-td class="u-td">5.01mmol/L</u-td>
          <u-td class="u-td"> 2.9~5.01mmol/L </u-td>
        </u-tr>
      </u-table>
    </view>

      <view class="content content-item">
      <view class="ronin-title">
        <view class="ronin-title-icon"></view>
        <text class="ronin-title-name">预防要点</text>
      </view>
     <view>
         <view class='text-item'>
             1. 糖尿病患者应多元化及适量地进食谷物类丶蔬菜丶水果丶肉丶鱼丶蛋及代替品和奶类及代替品，并减少进食含高脂肪丶高糖分和高盐分的食物
         </view>

          <view class='text-item'>
            2. 多吃含高纤维素的食物. 糖尿病患者宜多进食含高纤维素的食物。. 纤维素可分水溶性和非水溶性两类。. 含较高水溶性纤维的食物包括麦皮丶水果和乾豆；含较高非水溶性纤维的食物包括全麦包丶蔬菜及水果。
         </view>

          <view class='text-item'>
             3. 选用健康煮食方法. 采用低脂肪的煮食方法包括白灼丶蒸丶炆丶炖丶焗和少油快炒。
         </view>
     </view>
    
    </view>

    <view class="bottom">
      <u-button type="primary" shape="circle" @click='onClickToHint'> 制定健康管理计划</u-button>
    </view>
  </view>
</template>

<script>
import {
  drawRect,
  drawText,
  drawImage,
  textPrewrap,
} from "@/utils/canvasImg.js";
export default {
  data() {
    return {
      ctx: null,
    };
  },
  onReady() {
 
    var ctx = uni.createCanvasContext("canvas", this);
    ctx.setFillStyle("rgba(255, 255, 255, 0.3)"); // 背景透明色

    // ctx.fillRect(0, 0, canvaswidth, canvasheight); // fillRect(x,y,宽度，高度)

    ctx.setFillStyle("#565656"); // 颜色
    ctx.fillText("神经的慢性损害", 20, 20, 200); //将文字写如入图片  x y
    ctx.fillText("眼损害", 20, 40, 200); //将文字写如入图片  x y
    ctx.fillText("冠心病", 20, 60, 200); //将文字写如入图片  x y
    ctx.fillText("肾炎", 20, 80, 200); //将文字写如入图片  x y
    ctx.fillText("皮肤发炎", 20, 100, 200); //将文字写如入图片  x y
    ctx.fillText("糖尿病", 240, 20);

    ctx.beginPath();
    ctx.moveTo(240, 16);
    ctx.quadraticCurveTo(100, 30, 90, 80);
    ctx.strokeStyle = "#89A2B4";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(240, 16);
    ctx.quadraticCurveTo(100, 30, 90, 100);
    ctx.strokeStyle = "#89A2B4";
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(240, 16);
    ctx.quadraticCurveTo(240, 14, 90, 16);
    ctx.strokeStyle = "#89A2B4";
    ctx.stroke();
    ctx.draw(); //绘制

    //
  },
  methods: {
       onClickBack(){
        uni.navigateBack()
    },
     onClickToHint(){
         uni.navigateTo({
        url: `/pages/report/hint`,
      });
    }
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

    .text-item{
        color:#383838;
        font-size: 28rpx;
        margin-bottom: 40rpx;
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
    margin-bottom: 10rpx;
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