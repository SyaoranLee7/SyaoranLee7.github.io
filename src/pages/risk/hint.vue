<template>
  <view class="ronin-hint">
    <view class="hint-head">
      <u-steps :list="numList" :current="step" mode="number"></u-steps>
    </view>

    <view v-if="step != 1">
      <view
        class="hint-content"
        v-for="(element, elementIndex) in data"
        :key="elementIndex + '7189'"
      >
        <view class="title">
          <u-icon
            class="icon"
            name="checkmark-circle-fill"
            size="52"
            @click="onClickCheck(elementIndex)"
            :color="element.check ? '#3873FE' : '#ccc'"
          ></u-icon>
          <view class="text">{{ element.name || "暂无" }}</view>
        </view>
        <view
          class="item"
          v-for="(item, index) in element.list"
          :key="index + '789'"
        >
          <view class="item-content">
            <u-image
              class="img"
              width="64"
              height="64"
              :src="
                'https://htl001.oss-cn-hangzhou.aliyuncs.com/icon/icon_' +
                item.contentType +
                '%403x.png'
              "
            ></u-image>
            <view class="text-box">
              <view class="top">{{ item.name }}</view>
              <!-- <view class="down"> {{ item.remark }}</view> -->
            </view>

            <view class="hint">
              <text class="text">{{ item.sendStrategy | showName }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="hint-content" v-if="step == 1">
      <view class="no-data">
        <view class="no-date-item">
          <image
            src="https://htl001.oss-cn-hangzhou.aliyuncs.com/images/no-data.png"
            mode="widthFix"
          />
          <view class="no-date-title"> 添加目标成功 </view>
        </view>
      </view>
    </view>
    <!-- <view class="hint-content">
      <view class="title">
        <u-icon
          class="icon"
          name="checkmark-circle-fill"
          size="52"
          color="#3873FE"
        ></u-icon>
        <view class="text">糖尿病健康管理</view>
      </view>
      <view class="item">
        <view class="item-content">
          <u-image
            class="img"
            width="64"
            height="64"
            src="/static/img/run.png"
          ></u-image>
          <view class="text-box">
            <view class="top">建议适量轻量运动</view>
            <view class="down"> 如散步、快走等运动</view>
          </view>

          <view class="hint">
            <text class="text">每日提醒</text>
          </view>
        </view>

        <view class="item-content">
          <u-image
            class="img"
            width="64"
            height="64"
            src="/static/img/review.png"
          ></u-image>
          <view class="text-box">
            <view class="top">建议适量轻量运动</view>
            <view class="down"> 如散步、快走等运动</view>
          </view>
          <view class="hint">
            <text class="text">每日提醒</text>
          </view>
        </view>
      </view>
    </view> -->

    <view class="bottom">
      <u-button type="primary" shape="circle" @click="onClickToHint">
        {{ step == 1 ? "完成" : "添加目标" }}</u-button
      >
    </view>
  </view>
</template>

<script>
import {
  serviceListByRisk,
  serviceAddBatch,
  userServiceGroupAdd,
} from "@/api/plan";
export default {
  data() {
    return {
      data: [],
      step: 0,
      id: "",
      numList: [
        {
          name: "定制健康计划",
        },
        {
          name: "开启健康服务",
        },
      ],
    };
  },
  onLoad(e) {
    if (e.id) {
      this.id = e.id;
    }
    this.getDetails();
  },

  filters: {
    showName(data) {
      if (data.type == "one") {
        let item = data.one;
        let name = `${item.num}${item.unit == "day" ? "天" : "时"}后 发送`;
        return name;
      }

      if (data.type == "loop") {
        let item = data.loop;
        let name = `每间隔${item.loopNum}${
          item.loopUnit == "day" ? "天" : "时"
        }发送,共${item.maxLoopNum}次`;
        return name;
      }
      if (data.type == "custom") {
        let item = data.custom;
        let val = "";
        item.num.forEach((element) => {
          val = val + element + ",";
        });
        let name = `${val}${item.loopUnit == "day" ? "天" : "时"}发送`;
        return name;
      }
    },
  },

  methods: {
    onClickCheck(index) {
      this.data[index].check = !this.data[index].check;
    },
    getDetails() {
      serviceListByRisk({ riskCode: this.id }).then((res) => {
        if (res.code == "0" && res.data) {
          this.data = this.updateDaata(res.data);
          this.data.forEach((element) => {
            element.check = true;
          });
        }
      });
    },

    updateDaata(data) {
      let arr = [];
      data.forEach((element) => {
        let check = true;
        arr.forEach((item) => {
          if (item.code == element.groupCode) {
            item.list.push(element);
            check = false;
          }
        });
        if (check) {
          arr.push({
            name: element.groupName,
            code: element.groupCode,
            check: false,
            list: [element],
          });
        }
      });
      return arr;
    },
    onClickToHint() {
      // let data = this.getData()

      if (this.step == 0) {
        this.data.forEach((ele) => {
          userServiceGroupAdd({ serviceGroupCode: ele.code }).then((res) => {
            if (res.code == "0") {
              this.step = 1;
            }
          });
        });
      } else {
        uni.switchTab({ url: "/pages/home/home" });
      }
    },
    getData() {
      let data = [];
      this.data.forEach((item) => {
        item.list.forEach((element) => {
          data.push({
            healthyServiceCode: element.code,
          });
        });
      });

      return data;
    },
  },
};
</script>

<style lang="scss" scoped>
.ronin-hint {
  .hint-head {
    background: #fff;

    padding: 44rpx 0rpx;

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
    padding: 0 28rpx;
    .title {
      padding: 32rpx 0;
      font-size: 36rpx;
      color: #242938;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-weight: 600;
    }
    .text {
      margin-left: 10px;
    }
    .item {
      padding-left: 72rpx;
      padding-bottom: 32rpx;
      margin-bottom: 24rpx;
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
        .img {
          margin-right: 32rpx;
        }
        .icon-box {
          border: 1px solid #ccc;
          width: 44rpx;
          height: 44rpx;
          border-radius: 50%;
          margin-left: 20rpx;
          margin-right: 34rpx;
          .icon {
            position: relative;
            top: -6rpx;
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
            font-size: 24rpx;
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

.no-data {
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .no-date-item {
    width: 80vw;
    .no-date-title {
      text-align: center;
      font-size: 20px;
      margin-bottom: 14px;
      font-weight: bold;
    }
  }
}
</style>