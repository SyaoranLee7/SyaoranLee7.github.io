<template>
  <view class="ronin-project">
    <view class="head">
      <h1>选择预约时间</h1>
    </view>

    <calendar
      @upDate="upDate"
      class="calendar"
      style="margin-bottom: 55rpx; background: #fff"
    ></calendar>

    <view class="appointment">
      <view class="title">
        <view class="icon"></view>
        <text> 预约时间</text>
      </view>

      <view class="item-box">
        <view
          class="item"
          :class="item | className"
          @click="onClickCheck(item)"
          v-for="(item, index) in forenoonDate"
          :key="index + '7m'"
        >
          <view class="text">上午</view>
          <view class="text">{{ item }}</view>
        </view>
      </view>
      <view class="item-box">
        <view
          class="item"
          :class="item | className"
          @click="onClickCheck(item)"
          v-for="(item, index) in afternoonDate"
          :key="index + '712'"
        >
          <view class="text">下午</view>
          <view class="text">{{ item }}</view>
        </view>
      </view>
    </view>

    <view class="ronin-bottom">
      <view class="left" @click="onClickHome">
        <u-icon size="38" name="home"></u-icon>
        <view>首页</view>
      </view>
      <view class="btn">
        <u-button
          type="primary"
          :disabled="check ? false : true"
          shape="circle"
          @click="onSubmit"
          >预约时间</u-button
        >
      </view>
    </view>

    <!-- <view class="paddingLR btn-bottom">
      <u-button type="primary" @click="onSubmit">确认</u-button>
    </view> -->
  </view>
</template>

<script>
import calendar from "./calendar.vue";

import {
  queryCompanyAppointmentConfig,
  userAppointmentPrebook,
} from "@/api/healthForm";
let checkData = true;
let date = "";
export default {
  components: { calendar },
  filters: {
    className(name) {
      let data = "";
      if (checkData) {
        if (date == name) {
          data = "item-check";
        } else {
          data = "";
        }
      } else {
        data = "item-null";
      }

      return data;
    },
  },
  data() {
    return {
      imgList: [],
      companyNo: "",
      id: "",
      date: "",
      forenoonDate: ["08:00", "09:00", "10:00", "11:00"], //
      afternoonDate: ["13:00", "14:00", "15:00"],
      checkDate: "",
      appointmentConfigId: "",
      check: true,
      today: "",
    };
  },
  onLoad(e) {
    let now = new Date();

    this.date =
      now.getFullYear().toString() +
      "-" +
      this.mend(now.getMonth() + 1) +
      "-" +
      this.mend(now.getDate());
    this.today =
      now.getFullYear().toString() +
      "-" +
      this.mend(now.getMonth() + 1) +
      "-" +
      this.mend(now.getDate());

    if (e) {
      this.companyNo = e.companyNo;
      this.id = e.id;
      this.getNowDate();
    }
  },

  methods: {
    onClickHome() {
      uni.navigateTo({
        url: "/pages/home/home",
      });
      uni.switchTab({
        url: "/pages/home/home",
      });
    },
    mend(data) {
      let num = data;
      if (data < 10) {
        num = "0" + data;
      }
      return num;
    },
    onClickCheck(e) {
      this.checkDate = e;
      date = e;
      this.$forceUpdate();
    },
    onSubmit() {
      let req = {
        appointmentConfigId: this.appointmentConfigId,
        appointmentDt: this.date,
        id: this.id,
      };
      userAppointmentPrebook(req).then((res) => {
        if (res.code == "0") {
          uni.navigateTo({
            url: `/pages/health-form/appointmentList`,
          });
        }
      });
    },
    upDate(item) {
      this.date = item;
      this.checkDate = "";
      this.getNowDate();
    },
    getNowDate() {
      let req = {
        configDt: this.date,
        companyNo: this.companyNo,
      };
      queryCompanyAppointmentConfig(req).then((res) => {
        // console.log(,'67890oijnm,')
        if (res.code == "0" && res.data?.records?.length > 0) {
          if (this.checkTime(this.today, this.date)) {
            this.appointmentConfigId = res.data.records[0].id;
            this.check = true;
            checkData = true;
          } else {
            checkData = false;
            this.check = false;
          }
        } else {
          checkData = false;
          this.check = false;
        }
        this.$forceUpdate();
        //
      });
    },

    checkTime(stime, etime) {
      //通过replace方法将字符串转换成Date格式
      var sdate = new Date(Date.parse(stime.replace(/-/g, "/")));
      var edate = new Date(Date.parse(etime.replace(/-/g, "/")));
      //获取两个日期的年月日
      var smonth = sdate.getMonth() + 1;
      var syear = sdate.getFullYear();
      var sday = sdate.getDate();

      var emonth = edate.getMonth() + 1;
      var eyear = edate.getFullYear();
      var eday = edate.getDate();
      //从年，月，日，分别进行比较
      if (syear > eyear) {
        return false;
      } else {
        if (smonth > emonth) {
          return false;
        } else {
          if (sday > eday) {
            return false;
          } else {
            return true;
          }
        }
      }
    },

    //--------------
  },
};
</script>
<style lang='scss' scoped>
.ronin-project {
  padding-bottom: 30rpx;

  .head {
    height: 340rpx;
    background: linear-gradient(180deg, #3873fe 10%, #fff 100%);
    padding: 32rpx;

    h1 {
      font-size: 42rpx;
      color: #fff;
    }
    .box {
      display: flex;
      flex-direction: row;
      align-items: center;
      position: relative;
      top: 160px;
      .line {
        flex: 1;
        height: 4rpx;
        background: #fff;
      }
      .item {
        position: relative;
        .icon {
          width: 30rpx;
          height: 30rpx;
          border-radius: 50%;
          background: #fff;
        }
        .text {
          position: absolute;
          top: 46rpx;
          width: 140rpx;
          color: #fff;
        }
        .text-center {
          left: -40rpx;
        }
        .text-right {
          left: -84rpx;
        }
      }
    }
    .img-bg {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .calendar {
    position: relative;
    top: -86px;
  }
  .paddingLR {
    padding: 0 32rpx;
  }
  .details-head {
    background: #000ca8;
    height: 332rpx;
    color: #fff;
    padding: 0 32rpx;
    padding-top: 60rpx;
    position: relative;
    overflow: hidden;
    .img {
      position: absolute;
      top: -90rpx;
      right: -10rpx;
    }
    .title {
      font-size: 48rpx;
      margin-bottom: 10rpx;
    }
    .sub-title {
      margin-bottom: 32rpx;
    }
    .box {
      display: flex;
      flex-direction: row;
      align-items: center;
      .line {
        flex: 1;
        height: 4rpx;
        background: #8b959e;
      }
      .item {
        position: relative;
        .icon {
          width: 30rpx;
          height: 30rpx;
          border-radius: 50%;
          background: #fff;
        }
        .text {
          position: absolute;
          top: 46rpx;
          width: 140rpx;
        }
        .text-center {
          left: -40rpx;
        }
        .text-right {
          left: -84rpx;
        }
      }
    }
  }

  .appointment {
    margin: 0 32rpx;
    padding: 66rpx 32rpx;
    margin-top: -100px;
    background: #fff;
    border-radius: 10rpx;
    .title {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #242938;
      margin-bottom: 44rpx;
      .icon {
        width: 22rpx;
        height: 22rpx;
        border-radius: 50%;
        border: 4rpx solid #0088ff;
        margin-right: 14rpx;
      }
    }

    .item-box {
      display: flex;
      flex-direction: row;

      .item {
        width: 110rpx;
        height: 84rpx;
        border: 1px solid #8b959e;
        color: #8b959e;
        font-size: 24rpx;
        padding-top: 10rpx;
        border-radius: 4rpx;
        margin-right: 20rpx;
        margin-bottom: 20rpx;
        .text {
          text-align: center;
          height: 32rpx;
        }
      }

      .item-check {
        background: #0088ff;
        color: #fff;
        border: 1px solid #0088ff;
      }
      .item-null {
        opacity: 0.4;
      }
    }
  }

  .btn-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
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
}
</style>