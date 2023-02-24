<template>
  <view class="ronin-details-new">
    <view class="head">
      <view class="head-content">
        <view class="title">饮食提醒</view>
        <view class="des"
          >每天健康饮食是结合自身身体及外部环境，选择正确的饮食搭配，让食物来调节，改善自身的新陈代谢，保持身心处于平衡的状态，才是通往健康的正确途径。</view
        >
        <u-image
          class="img"
          width="228rpx"
          height="210rpx"
          src="@/static/img/doctor.png"
        ></u-image>
      </view>
      <u-image
        class="img-bg"
        width="100%"
        height="210rpx"
        src="@/static/img/doctorBg.png"
      ></u-image>
    </view>

    <view class="card">
      <view class="title">今日饮食建议</view>
      <view
        v-for="(item, index) in list"
        :key="index"
        @click="onClickItemNext(index, item)"
      >
        <view class="product-item">
          <view class="product-content">
            <image :src="item.thumbnail" class="icons" />
            <view class="product">
              <view class="name">{{ item.name }} </view>
              <view class="price"
                >{{ item.remark }} {{ item.calorie }}大卡
              </view>
            </view>
            <!-- <view class="des">完成任务</view> -->
          </view>
          <u-icon
            name="checkmark-circle-fill"
            :color="item.check ? '#2979ff' : '#ccc'"
            size="42"
          ></u-icon>
        </view>
      </view>
    </view>

     <view class="warp" v-if="show">
      <view class="warp-box">
        <view class="warp-box-header">
          <view class="warp-box-image">
            <image src="@/static/img/plan/img-plan-alert.png" class="image" />
          </view>
        </view>
        <view class="warp-box-title">提示</view>
        <view class="warp-box-des">本次摄入{{calorie}}大卡</view>
        <view class="warp-box-btn" @click="onOk"
          ><u-icon
            name="clock"
            color="#ffffff"
            size="32"
            style="margin-right: 4px"
          ></u-icon>
         完成</view
        >
      </view>
    </view>

    <view class="ronin-bottom">
      <view class="left" @click="onClickHome">
        <u-icon size="38" name="home"></u-icon>
        <view>首页</view>
      </view>
      <view class="btn">
        <u-button type="primary" shape="circle" @click="records"
          >完成任务</u-button
        >
      </view>
    </view>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
import { performServiceTask } from "@/api/records";
import { queryFoods } from "@/api/service";
export default {
  data() {
    return {
      list: [],
      ids: [],
      taskId: "",
      show: false,
      calorie: 0
    };
  },
  onLoad(e) {
    if (e.ids) {
      this.ids = e.ids.split(",");
    }
    if (e.taskid) {
      this.taskId = e.taskid;
    }
    this.getList();
  },
  methods: {
    onOk(){
      uni.navigateBack()
    },
    getList() {
      let params = {
        ids: this.ids,
      };
      queryFoods(params).then((res) => {
        if (res.code && res.data?.records) {
          this.list = res.data?.records;
          for (let v of this.list) {
            v.check = false;
          }
        } else {
          this.list = [];
        }
      });
    },
    records() {
      let calorie = 0;
      for (let v of this.list) {
        if (v.check) {
          calorie = calorie + Number(v.calorie);
         
        }
        this.calorie = calorie
      }
      //TODO: 调用的表字段 获取记录表字段
      let content = [
        {
          DATA_H_CALORIE_INGESTION: calorie,
        },
      ];
      for (let v of this.list) {
        if (v.check) {
          let obj = {
            food: v.id,
          };
          content.push(obj);
        }
      }
      let params = {
        content: content,
        mdTableId: "MTC1602650245572599808", //todo:写死的要放入config
        remark: "",
        taskId: this.taskId,
      };
      performServiceTask(params).then((res) => {
        if (res.code == "0") {
          this.show = true;
        }
      });
    },
    getProject() {
      medicalProjectQueryProject({
        companyNo: this.companyNo,
        type: "p",
        rows: 1000,
      }).then((res) => {
        if (res.code == "0" && res.data) {
          let data = res.data.records;
          let pushData = [];
          data.forEach((item) => {
            let check = true;
            this.itemList.forEach((element) => {
              if (element.childProjectId == item.id) {
                check = false;
              }
            });

            this.list.forEach((element) => {
              if (element.productId == item.id) {
                check = false;
              }
            });

            if (check) {
              item.check = false;
              pushData.push(item);
            }
          });
          this.pushData = pushData;
        }
      });
      //   this.show = true;
    },

    onClickHome() {
      uni.navigateTo({
          url: "/pages/home/home",
      })
      uni.switchTab({
        url: "/pages/home/home",
      });
    },

    getFund() {
      getUserTypeFund({ batchId: this.batchId }).then((res) => {
        if (res.code == "0" && res.data) {
          this.fund = res.data;
          this.getDetails();
        } else {
          this.getDetails();
        }
      });
    },
    getDetails() {
      this.itemList = [];
      medicalProjectInfoProject({ id: this.id }).then((res) => {
        if (res.code == "0") {
          this.details = res.data;
          this.companyNo = res.data.companyNo;
          if (res.data.items) {
            this.itemList = res.data.items.map((item) => {
              item.check = true;
              return item;
            });
            this.getList();
          }
        }
      });
    },

    onClickSubmit() {},

    onClickItem(index, item) {
      if (item.mustType == "Y") {
        this.$refs.uToast.show({
          title: "该商品是必选项",
          type: "error",
        });
      } else {
        this.itemList[index].check = !this.itemList[index].check;
        this.getPrice();
      }
    },

    onClickItemNext(index, item) {
      this.list[index].check = !this.list[index].check;
      this.$forceUpdate();
    },

    //----------
  },
};
</script>

<style lang="scss" scoped>
.ronin-details-new {
  padding-bottom: 200rpx;
  .head {
    height: 440rpx;
    background: linear-gradient(180deg, #3873fe 10%, #fff 100%);
    padding: 0 32rpx;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    .head-content {
      height: 280rpx;
      background: #fff;
      border-radius: 28rpx;
      padding: 0 24rpx;
      padding-top: 38rpx;
      position: relative;
      color: #666666;
      .title {
        font-size: 32rpx;
        margin-bottom: 32rpx;
        font-weight: bold;
        color: #333333;
      }
      .img {
        position: absolute;
        right: 24rpx;
        top: -100rpx;
        z-index: 100;
      }
    }
    .img-bg {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .card {
    margin: 32rpx;
    min-height: 200rpx;
    background: #fff;
    border-radius: 8rpx;
    padding: 30rpx 24rpx;
    .title {
      font-size: 32rpx;
      font-weight: bold;
      height: 70rpx;
      border-bottom: 1px #eee solid;
    }
    .product-item {
      margin-bottom: 16rpx;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid #f0f0f0;
      .product-content {
        flex: 1;

        padding: 28rpx 0rpx;
        border-radius: 10rpx;
        margin-left: 0rpx;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        .icons {
          width: 80rpx;
          height: 80rpx;
          border-radius: 8rpx;
          margin-right: 20rpx;
        }
        .product {
          .name {
            font-size: 28rpx;
            margin-bottom: 10rpx;
            font-weight: bold;
          }
          .price {
            font-size: 24rpx;
            color: #999;
          }
        }
        .des {
          font-size: 22rpx;
          color: #fff;
          border: 1px solid #3873fe;
          background: #3873fe;
          padding: 4rpx 8rpx;
          border-radius: 8rpx;
        }
      }
    }
    .more {
      text-align: center;
      color: #5889fc;
      padding-top: 62rpx;
    }

    .statistic {
      margin: 40rpx 0px;
      .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 12rpx;
      }
      .all {
        text-align: right;
        .price {
          margin-left: 16rpx;
          font-size: 42rpx;
          font-weight: 600;
          color: #ff7823;
          .unit {
            font-size: 28rpx;
          }
        }
      }
    }
  }

  .warp {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: rgba($color: #000000, $alpha: 0.7);
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .warp-box {
    width: 80vw;
    background: #fff;
    border-radius: 14px;
    padding-bottom: 20px;
    overflow: hidden;

    .warp-box-header {
      background: #e5fef4;
      padding-bottom: 20px;

      .warp-box-image {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 20px;

        .image {
          width: 120px;
          height: 70px;
          object-fit: cover;
        }
      }
    }
    .warp-box-title {
      margin-top: 14px;
      text-align: center;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .warp-box-des {
      padding: 0px 20px;
      margin-bottom: 30px;
      line-height: 1.4;
      color: #999;
    }
    .warp-box-btn {
      margin: 20px 20px;
      margin-bottom: 0px;
      height: 32px;
      border-radius: 16px;
      background: #38cb89;
      line-height: 32px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

  .ronin-bottom {
    height: 120rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 10rpx -14rpx 14rpx -14rpx rgba(0, 0, 0, 0.1);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    padding-right: 32rpx;
    padding-left: 32rpx;
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #666666;
      font-size: 24rpx;
    }
  }

  .select-box {
    padding: 30rpx 32rpx;
    display: flex;
    flex-direction: row;
    align-items: center;

    .input-text {
      flex: 1;
      border: 1px solid #ccc;
      border-radius: 8rpx;
      background: #f1f1f1;
      color: #c1bfbf;
      padding: 10rpx;
    }
    .input-check {
      color: #333333;
    }
  }
  .btn-box {
    text-align: right;
    padding-right: 32rpx;
    padding-bottom: 20rpx;
    .btn {
      margin-left: 10rpx;
    }
  }
}
</style>