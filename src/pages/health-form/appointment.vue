<template>
  <view class="appointment-time ronin-project">
    <view class="main">
      <!-- 背景图案 -->
      <view class="main-bg"></view>

      <view class="main-body">
        <!-- 套餐信息 -->
        <view class="package">{{ packageName }}</view>
        <!-- 医院信息 -->
        <view class="hospital">
          体检医院：<span class="light">{{ hospitalName }}</span>
        </view>

        <view class="time-text">体检时间：</view>

        <!-- 日历 -->
        <calendar
          @upDate="upDate"
          class="calendar"
          style="margin-bottom: 55rpx;">
        </calendar>

        <!-- 信息 -->
        <view class="form">
          <view class="form-item">
            <view class="label">体检人姓名:</view>
            <view class="value">{{ vuex_user.realName || "-" }}</view>
          </view>
          <view class="form-item">
            <view class="label">证件类型:</view>
            <view class="value">{{ idType || "-" }}</view>
          </view>
          <view class="form-item">
            <view class="label">证件号:</view>
            <view class="value">{{ idNum || "-" }}</view>
          </view>
          <view class="form-item">
            <view class="label">手机号:</view>
            <view class="value">{{ vuex_user.mobile || "-" }}</view>
          </view>
        </view>
      </view>

    </view>

    <!-- 底部按钮 -->
    <view class="bottom">
      <u-button
        v-if="check"
        class="btn"
        @click="onClickBtn">
        确定
      </u-button>
      <u-button
        v-else
        class="disabled">
        当前日期暂无预约名额
      </u-button>
    </view>

    <uni-popup ref="popup" background-color="#FFFFFF">
      <view class="confirm">
        <view class="title">体检人信息确认</view>
        <view class="body">
          <view class="line">
            <view class="item">
              <view class="item-label">姓名：</view>
              <view class="item-value">{{ name || "-" }}</view>
            </view>
          </view>
          <view class="line">
            <view class="item">
              <view class="item-label">证件号：</view>
              <view class="item-value">{{ idNum || "-" }}</view>
            </view>
          </view>
          <view class="line">
            <view class="item">
              <view class="item-label">手机号：</view>
              <view class="item-value">{{ vuex_user.mobile || "-" }}</view>
            </view>
          </view>
          <view class="text">
            确认后不可更改，请仔细核对再确认，体检人与实际参与体检人信息需要匹配
          </view>
        </view>
        <view class="footer">
          <view class="left" @click="handleCancel">返回</view>
          <view class="right" @click="onSubmit">确定</view>
        </view>
      </view>
    </uni-popup>

  </view>
</template>

<script>
import calendar from "./calendar.vue";

import {
  queryCompanyAppointmentConfig,
  userAppointmentPrebook,
  medicalProjectInfoProject
} from "@/api/healthForm";
import { getUserInfo } from "@/api/user";
import uniPopup from "@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue";
let checkData = true;
let date = "";
export default {
  components: { calendar, uniPopup },
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
      hospitalName: "", // 医院名称
      packageId: "", // 选择的套餐id
      packageName: "", // 选择的套餐名称
      name: "", // 体检人姓名
      idType: "", // 证件类型
      idNum: "", // 证件号
      mobile: "", // 手机号

      imgList: [],
      companyNo: "",
      id: "", // 预约id
      date: "",
      forenoonDate: ["08:00", "09:00", "10:00", "11:00"], //
      afternoonDate: ["13:00", "14:00", "15:00"],
      checkDate: "",
      appointmentConfigId: "",
      check: true,
      today: "",
    };
  },

  onLoad (e) {
    this.hospitalName = e.name;

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
      this.packageId = e.pcg;
      this.id = e.id;
      this.getNowDate();
      this.getDetails();
    }

    this.getUser();
  },

  methods: {
    /* 获取用户信息 */
    getUser () {
      getUserInfo({}).then(res => {
        if (res.code == "0" && res.data) {
          this.name = res.data.realName;
          this.mobile = res.data.mobilel;
        }
      });
    },

    /* 获取套餐详情 */
    getDetails () {
      medicalProjectInfoProject({ id: this.packageId }).then((res) => {
        if (res.code == "0") {
          this.packageName = res.data.name;
        }
      });
    },

    /* 打开弹窗 */
    onClickBtn () {
      this.$refs.popup.open();
    },

    /* 关闭弹窗 */
    handleCancel () {
      this.$refs.popup.close();
    },

    mend(data) {
      let num = data;
      if (data < 10) {
        num = "0" + data;
      }
      return num;
    },

    onSubmit () {
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

    /* 日历选则日期时更新 */
    upDate (item) {
      this.date = item;
      this.checkDate = "";
      this.getNowDate();
    },

    /* 获取选中日期当天的预约配置信息 */
    getNowDate() {
      let req = {
        configDt: this.date,
        companyNo: this.companyNo,
      };
      queryCompanyAppointmentConfig(req).then((res) => {
        if (res.code == "0" && res.data && res.data.records && res.data.records.length > 0) {
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
.appointment-time {
  .main {
    margin: 10px;
    background: linear-gradient(166.51deg, #FFFFFFB7 0%, #EFF6FE 100%);
    border-radius: 10px;
    &-bg {
      background: url("../../static/icon_svg/healthy_time/deco.svg") no-repeat;
      background-size: auto 100%;
      width: 100%;
      height: 100px;
      position: absolute;
    }
    &-body {
      padding: 20px;
      /** 套餐名称 **/
      .package {
        color: #000000;
        font-size: 34rpx;
        font-weight: 700;
        margin-bottom: 20px;
      }
      /** 医院名称 **/
      .hospital {
        font-size: 30rpx;
        color: #777777;
        border-bottom: 1px solid #DDDDDD;
        padding-bottom: 20px;
        margin-bottom: 20px;
        .light { color: #09ABAD; }
      }

      .time-text {
        color: #777777;
        font-size: 30rpx;
      }

      /** 日历 **/
      .calendar {
        margin-top: 20px;
        border-bottom: 1px solid #DDDDDD;
      }

      /** 预约时间 **/
      .appointment {
        margin-bottom: 30rpx;
        padding: 40rpx 32rpx;
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

      /** 表单 **/
      .form {
        &-item {
          margin-bottom: 20px;
          .label {
            color: #777777;
            font-size: 30rpx;
            height: 30px;
          }
          .value {
            input {
              background-color: #FFFFFF;
              height: 40px;
              line-height: 40px;
              padding: 0 10px;
              border: 1px solid #EBEBEB;
              border-radius: 8px;
            }
          }
          .select {
            background-color: #FFFFFF;
            height: 42px;
            line-height: 42px;
            padding: 0 10px;
            border: 1px solid #EBEBEB;
            border-radius: 8px;
          }
        }
      }
    }
  }

  .bottom {
    margin: 10px 5px;
    .btn {
      border: 0px solid rgba(0, 0, 0, 0);
      color: #FFFFFF;
      background: linear-gradient(91.19deg, #06BCBC 42%, #0099CC 100%);
    }
    .disabled {
      border: 2px solid #E8E8E8;
      color: #666666;
    }
  }

  /** 弹窗 **/
  .confirm {
    width: 80vw;
    padding: 30rpx 40rpx;
    .title {
      color: #333333;
      font-size: 34rpx;
      font-weight: 700;
      text-align: center;
      border-bottom: 1px solid #DAD5D5;
      padding-bottom: 20px;
    }
    .body {
      margin: 30rpx 0;
      border-bottom: 1px solid #DAD5D5;
      .line {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30rpx;
        .item {
          display: flex;
          font-size: 32rpx;
          &-label {
            color: #333333;
          }
          &-value {
            color: #FF4E00;
          }
        }
      }
      .text {
        color: #D04C48;
        font-size: 26rpx;
        padding-bottom: 20px;
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      font-size: 26rpx;
      text-align: center;
      .left {
        width: 49%;
        color: #D04C48;
        border-right: 1px solid #DAD5D5;
      }
      .right {
        width: 49%;
        color: #0897A0;
      }
    }
  }
}

.ronin-project {
  padding-bottom: 30rpx;


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
