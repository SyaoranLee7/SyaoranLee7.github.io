<template>
  <view class="ronin-details-new">
    <view class="head">
      <view class="order-type">{{ details.status | type }}</view>
      <view class="head-content">
        <view class="item">预约时间：{{ details.appointmentDt }}</view>
        <view class="item">预约公司：{{ details.medicalCompanyName }}</view>
        <view class="item">套餐名称：{{ details.medicalProjectName }}</view>
        <view class="item">创建时间：{{ details.cdt }}</view>
        <view class="item">订单编号：{{ details.id }}</view>
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
      <view class="title">预约项目</view>
      <view v-for="(item, index) in details.items" :key="index">
        <view class="product-item">
          <view class="product-content">
            <view class="product">
              <view class="name">{{ item.productName }}</view>
              <!-- <view class="price">{{ item.memo }} </view> -->
            </view>
            <view>¥{{ item.productPrice }} </view>
          </view>
        </view>
      </view>
    </view>

    <view class="card">
      <view class="title">体检费用明细</view>
      <view class="statistic">
        <view class="item">
          <view class="left">公司支付</view>
          <view class="price">¥{{ details.fundCompany }}</view>
        </view>
        <view class="item">
          <view class="left">自费支付</view>
          <view class="price">¥{{ details.fundOwn }}</view>
        </view>

        <view class="all">
          <text>总订单</text>
          <text class="price"
            ><text class="unit">¥</text> {{ details.fund }}</text
          >
        </view>
      </view>
    </view>

    <view class="ronin-bottom">
      <view class="left" @click="onClickHome">
        <u-icon size="38" name="home"></u-icon>
        <view>首页</view>
      </view>
      <view class="btn">
        <u-button type="primary" shape="circle" @click="onClickSubmit"
          >返回列表</u-button
        >
      </view>
    </view>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
import {
  medicalProjectBatchList,
  medicalProjectQueryProject,
  medicalProjectInfoProject,
  userAddProjectList,
  userAppointmentAdd,
  getUserTypeFund,
  userAddProjectBefore, //增加项目
  userAppointmentInfo,
} from "@/api/healthForm";
export default {
  filters: {
    type(e) {
      if (e == "normal") {
        return "正常";
      }
      if (e == "cancel") {
        return "取消";
      }
      if (e == "prebook") {
        return "预约";
      }
      if (e == "sign") {
        return "签到";
      }
      if (e == "complete") {
        return "体检完成";
      }
      if (e == "report") {
        return "报告完成";
      }
    },
  },
  data() {
    return {
      details: {},
    };
  },
  onLoad(e) {
    if (e.id) {
      this.id = e.id;
      this.getDetails();
    }
  },
  methods: {
    getDetails() {
      userAppointmentInfo({ id: this.id }).then((res) => {
        if (res.code == "0") {
          this.details = res.data;
        }
      });
    },

    onClickHome() {
      uni.navigateTo({
        url: "/pages/home/home",
      });
      uni.switchTab({
        url: "/pages/home/home",
      });
    },

    onClickSubmit() {
      uni.navigateBack({
        delta: 1,
      });
    },

    //----------
  },
};
</script>

<style lang="scss" scoped>
.ronin-details-new {
  padding-bottom: 200rpx;
  .head {
    height: 600rpx;
    background: linear-gradient(180deg, #3873fe 10%, #fff 100%);
    padding: 0 32rpx;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    .order-type {
      position: absolute;
      top: 120rpx;
      left: 56rpx;
      color: #fff;
      font-size: 60rpx;
      font-weight: 600;
    }
    .head-content {
      height: 334rpx;
      background: #fff;
      border-radius: 8rpx;
      padding: 0 24rpx;
      padding-top: 56rpx;
      position: relative;
      .item {
        margin-bottom: 16rpx;
        font-size: 30rpx;
      }
      .title {
        font-size: 32rpx;
        margin-bottom: 72rpx;
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
      margin-bottom: 10rpx;
    }
    .product-item {
     
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid #f0f0f0;
      .product-content {
        flex: 1;

        padding: 28rpx 26rpx;
        border-radius: 10rpx;
        padding-left: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .product {
          .name {
            font-size: 28rpx;
          }
          .price {
            font-size: 24rpx;
          }
        }
        .des {
          font-size: 22rpx;
          color: #ffab00;
          border: 1px solid #ffab00;
          padding: 2rpx 6rpx;
          border-radius: 6rpx;
        }
      }
    }
    .more {
      text-align: center;
      color: #5889fc;
      padding-top: 62rpx;
    }

    .statistic {
      margin-bottom: 66rpx;
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