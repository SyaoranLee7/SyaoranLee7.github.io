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
        <view>
          <view class="title">{{ vuex_user.realName }}的健康风险</view>
          <!-- <view class="sub-title">
            <u-icon name="clock" style="margin-right: 4rpx"></u-icon>
            生成时间:2022年12月25日</view
          > -->
        </view>

        <view class="app-home-plan-info-btn" @click="onClickAgain"
          >重新评测</view
        >
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
            src="@/static/img/hint.png"
          ></u-image>
          <text>风险小贴士</text>
        </view>
        <view class="content-hint-right">
          <view class="item">
            <view class="icon"></view>
            <view class="type">已确诊疾病</view>
            <!-- <view class="des">建议尽早检验筛查</view> -->
          </view>
          <view class="item item-center">
            <view class="icon"></view>
            <view class="type">健康异常</view>
            <!-- <view class="des">建议定期筛查</view> -->
          </view>
          <!-- <view class="item item-end">
            <view class="icon"></view>
            <view class="type">低</view>
            <view class="des">筛查优先级较低</view>
          </view> -->
        </view>
      </view>

      <!-- <u-image
        width="636rpx"
        height="820rpx"
        class="img"
        src="/static/img/people.png"
      ></u-image> -->
      <view class="img-box">
        <ImgBox :imgList="imgList"></ImgBox>
      </view>
    </view>

    <view class="list">
      <view
        class="item"
        v-for="(item, index) in data"
        :key="index + 'item'"
        @click="onClickToDetails(item)"
      >
        <view class="item-head">
          <view>
            <text class="title">{{ item.name }}</text>
            <text :class="[getState(item.grade)]">{{
              item.grade | filterGrade
            }}</text>
          </view>

          <view class="details"
            >详情 <u-icon name="arrow-right" size="28"></u-icon
          ></view>
        </view>
        <view class="item-center">
          <view class="item-center-title">影响因素：</view>
          <view class="tag-box" v-if="item.factors">
            <u-tag
              class="tag"
              v-for="(element, eleIndex) in item.factors"
              :key="eleIndex + 'ces'"
              :text="element.metadataName"
              mode="light"
              type="primary"
            />
          </view>
        </view>

        <!-- <view class="item-bottom">
          <text>推荐检验项：</text>
          <text class="check">空腹血糖、餐后2小时血糖</text>
        </view> -->
      </view>
    </view>

    <view class="bottom">
      <u-button type="primary" shape="circle" @click="onClickToHint">
        一键定制健康管理</u-button
      >
    </view>
  </view>
</template>

<script>
import homeBackgroundImage from "@/static/img/home/imgs-home-head-bg.png";
import { getRiskByScaleResult } from "@/api/questionnaire";

import { myRiskList, getRiskListByScaleResult } from "@/api/plan";
import ImgBox from "./img";
export default {
  components: { ImgBox },
  data() {
    return {
      id: "",
      homeBackgroundImage,
      data: [],
      imgList: [],
    };
  },
  onLoad(e) {
    if (e.id) {
      this.id = e.id;
      this.getResultData();
    } else {
      this.init();
    }
  },
  filters: {
    filterGrade(name) {
      if (name === "高") {
        return "确诊疾病";
      }
      if (name === "中") {
        return "体检异常";
      }
    },
  },
  methods: {
    getResultData() {
      getRiskListByScaleResult({ scaleResultId: this.id }).then((res) => {
        if (res.code == "0") {
          this.data = res.data;
          this.updateImgList();
        }
      });
    },
    updateImgList() {
      let data = [];
      this.data.forEach((element) => {
        data.push({ code: element.diseaseGroupCode, type: element.grade });
      });

      // js数组去重
      data = this.setList(data);
      // data = [...new Set(data)];

      this.pushFront(data, "PMUS", "SKIN");
      this.imgList = data;
      console.log(this.imgList, "图片");
    },
    setList(list) {
      let arr = [];
      list.forEach((item) => {
        let check = true;
        arr.forEach((element) => {
          if (element.code == item.code) {
            if (item.type == "高") {
              element.type = "高";
            }
            if (item.type == "中") {
              if (element.type == "低" || element.type == "中") {
                element.type = "中";
              }
            }
            check = false;
          }
        });

        if (check) {
          arr.push(item);
        }
      });
      return arr;
    },
    pushFront(arr, ...strings) {
      strings.forEach((el) => {
        // arr.indexOf(el)
        const index = this.getArrIndex(el, arr);
        if (index !== -1) {
          arr.unshift(arr.splice(index, 1)[0]);
        }
      });
    },
    getArrIndex(str, list) {
      let index = -1;
      list.forEach((item, index) => {
        if (item.type == str) {
          index = index;
        }
      });

      return index;
    },
    init() {
      this.getList();
      // getRiskByScaleResult({ scaleResultId: this.id });
    },
    getList() {
      myRiskList({}).then((res) => {
        if (res.code == "0" && res.data) {
          this.data = res.data;
          this.updateImgList();
        } else {
          this.data = [];
        }
      });
    },
    onClickAgain() {
      uni.navigateTo({
        url: `/pages/health-records/index`,
      });
    },
    onClickToDetails(item) {
      uni.navigateTo({
        url: `/pages/risk/disease?id=${item.id}`,
      });
    },
    onClickBack() {
      uni.navigateBack();
    },
    getState(item) {
      if (item === "高") {
        return "type type-high";
      }
      if (item === "中") {
        return "type type-middle";
      }
    },
    onClickToHint() {
      uni.navigateTo({
        url: `/pages/risk/hint`,
      });
    },
    //--------------------------------------
  },
};
</script>

<style lang='scss' scoped>
.ronin-report {
  padding-bottom: 200rpx;
  .head {
    position: relative;
    width: 100%;
    height: 300rpx;
    padding-top: 48rpx;
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
  .content {
    margin: 0 28rpx;
    padding: 24rpx;
    min-height: 200rpx;
    background: #fff;
    margin-top: -116rpx;
    border-radius: 24rpx;
    margin-bottom: 24rpx;
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
      margin-bottom: 26rpx;
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
          }
          .type-high {
            color: #ff4c30;
          }
          .type-middle {
            color: #ffab00;
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

    .img-box {
      width: 660rpx;
      height: 660rpx;
      margin: 60rpx auto;
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
        .title {
          font-size: 32rpx;
          font-weight: bold;
        }
        .type {
          margin-left: 16rpx;
        }
        .type-high {
          color: #ff4c30;
        }
        .type-middle {
          color: #ffab00;
        }
        .details {
          color: #999;
        }
      }
      .item-center {
        padding: 0 28rpx;
        padding-bottom: 38rpx;
        .item-center-title {
          color: #999;
          margin-bottom: 20rpx;
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
.app-home-plan-info-btn {
  border: 1px #e8e8e8 solid;
  border-radius: 14px;
  height: 28px;
  font-size: 14px;
  padding: 0 10px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>