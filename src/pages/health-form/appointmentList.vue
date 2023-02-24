<template>
  <view class="appointment-mine ronin-helth-form">
    <!-- 顶部背景块 -->
    <view class="bg"></view>

    <!-- 列表信息 -->
    <view class="info">共{{ total }}个预约</view>

    <!-- 列表 -->
    <view class="list">
      <view class="item" v-for="(item, index) in list" :key="index + '6789okm'">
        <view class="head">
          <view class="head-name">{{ vuex_user.realName }}</view>
          <view class="head-date">{{ item.cdt.substr(0, 10) }}</view>
        </view>
        <view class="content" @click.stop="onClickDetails(item)">
          <u-image
            class="img"
            width="154rpx"
            height="154rpx"
            :src="item.medicalProjectImage">
          </u-image>
          <view class="item-content">
            <view class="title">{{ item.medicalProjectName }}</view>
            <view class="sub-tags">
              <view v-for="(tag, tagIndex) in item.tags" :key="tagIndex" class="tag">
                {{ tag }}
              </view>
            </view>
            <view class="sub-title bottom">
              <view>
                公司支付:<text class="item-color">¥</text>
                <text class="item-color number"> {{ item.fundCompany }} </text>
                自费：<text class="item-color">¥</text>
                <text class="item-color number"> {{ item.fundOwn }} </text>
              </view>
            </view>
          </view>
        </view>

        <view class="item-bottom">
           <!-- <u-button
            class="btn"
            size="mini"
            v-if="item.isAddMedicalProject == 'Y'"
            shape="circle"
            @click="onClickDetailsConfig(item)">
            增项配置
          </u-button> -->
          <u-button
            class="btn orange"
            size="mini"
            v-if="item.status == 'normal'"
            shape="circle"
            @click="onClickAppointment(item)">
            预约时间
          </u-button>
          <u-button
            :disabled="
              item.status == 'normal' || item.status == 'prebook' ? false : true
            "
            class="btn gray"
            size="mini"
            shape="circle"
            @click="onClickCancel(item)">
            取消预约
          </u-button>
          <u-button
            class="btn blue"
            size="mini"
            shape="circle"
            type="primary"
            @click="onClickReport(item)">
            查看报告
          </u-button>
        </view>
      </view>
    </view>


    <u-modal v-model="show" title="">
      <view class="pop-box">
        <view>预约时间：{{ datails.appointmentDt }}</view>
        <view>预约医院：{{ datails.medicalCompanyName }}</view>
      </view>
    </u-modal>

    <u-popup v-model="showPdf" width='100%'>
      <u-icon @click='showPdf=false' name="close" class='icon'  size="32"></u-icon>
      <view id="PDF"></view>
    </u-popup>

    <!-- 没有报告弹窗 -->
    <u-modal
      v-model="showNoReport"
      title="提示"
      content="本份数字报告暂未生成，请先查询体检中心纸质报告"
      @confirm="showNoReport = false">
    </u-modal>

    <!-- 取消预约确认弹窗 -->
    <u-modal
      v-model="showTast"
      :show-cancel-button="true"
      :async-close="true"
      content="确定取消该订单吗"
      @confirm="confirm">
    </u-modal>

  </view>
</template>

<script>
import {
  userAppointmentListByMy,
  userAppointmentInfo,
  userAppointmentCancel,
} from "@/api/healthForm";

export default {
  name: "AppointmentMine", // 我的预约

  filters: {
    type(name) {
      if (name == "normal") {
        return "正常";
      }
      if (name == "cancel") {
        return "取消";
      }
      if (name == "prebook") {
        return "已预约";
      }
      if (name == "sign") {
        return "已签到";
      }
      if (name == "complete") {
        return "体检完成";
      }
      if (name == "report") {
        return "报告完成";
      }

      if (name == "report") {
        return "报告完成";
      }
    },
  },
  data() {
    return {
      total: 0, // 预约条数

      src: "https://fc1tn.baidu.com/it/u=1636824733,1780640873&fm=202&src=766&fc=tdmatt&mola=new&crop=v1",
      list: [],
      batchList: [], //批次列表
      value1: "",
      options: [
        {
          label: "默认排序",
          value: 1,
        },
        {
          label: "距离优先",
          value: 2,
        },
        {
          label: "价格优先",
          value: 3,
        },
      ],
      datails: {},
      show: false,
      showPdf: false,
      pdfh5:'',
      showTast:false,
      orderId:'',

      showNoReport: false // 是否显示暂无报告弹窗
    };
  },
  onLoad() {
    this.getList();
  },
  methods: {
    /* 获取列表 */
    getList(e) {
      let req = { type: "g" };
      if (e) req.batchId = e;
      userAppointmentListByMy(req).then((res) => {
        if (res.code == "0" && res.data) {
          // 生成展示tag
          res.data.forEach(i => {
            i.tags = [];
            if (i.medicalCompanyName) i.tags.push(i.medicalCompanyName); // 医院tag
          });
          this.list = res.data;
          this.total = res.data.length;
        }
      });
    },

    /* 点击查看报告 */
    onClickReport (item) {
      console.log("onClickReport:", item);
      // location.href = item.reportPath
      //  window.open(item.reportPath);
      if (item.status !== "report") {
        this.showNoReport = true;
        return;
      }
      this.showPdf = true;
      this.$nextTick((res) => {
        this.pdfh5 = new Pdfh5("#PDF", {
          pdfurl: item.reportPath, // pdf 地址，请求的地址需要为线上的地址，测试的本地的地址是不可以的
          lazy: true, // 是否懒加载
          withCredentials: true,
          renderType: "svg",
          maxZoom: 3, //手势缩放最大倍数 默认3
          scrollEnable: true, //是否允许pdf滚动
          zoomEnable: true, //是否允许pdf手势缩放
        });
      });

      // --------------------------- 方法二 ---------------------------
      //实例化
      // this.pdfh5 = new Pdfh5("#demo", {
      //     pdfurl: "https://www**********anfu.pdf",
      // });
      //监听完成事件
      // this.pdfh5.on("complete", function (status, msg, time) {
      //     console.log("状态：" + status +"，信息：" +msg +"，耗时：" + time + "毫秒，总页数：" + this.totalNum);
      // });
    },
    onClickDetails(item) {
      let url = `/pages/health-form/appointmentDetails?id=${item.id}`;
      uni.navigateTo({
        url,
      });
    },
    onClickDetailsConfig(item) {
      let url = `/pages/health-form/appointmentconfig?id=${item.id}`;
      uni.navigateTo({
        url,
      });
    },

    /* 点击查看预约时间 */
    onClickAppointment (item) {
      let url = `/pages/health-form/appointment?id=${item.id}&companyNo=${item.medicalCompanyNo}&name=${item.medicalCompanyName}`;
      uni.navigateTo({
        url,
      });
    },



    /* 取消预约按钮 */
    onClickCancel (e) {
      this.orderId = e.id
      this.showTast = true
    },
    /* 取消预约 */
    confirm () {
      userAppointmentCancel({ id: this.orderId }).then(res => {
        if (res.code == "0") {
          this.showTast = false
          this.getList();
        }
      })
    },

    onChange(e) {
      console.log(e);
      this.getList(e);
    },

    onClickItem(item) {
      uni.navigateTo({
        url: `/pages/health-form/appointment?id=${item.id}&companyNo=${item.medicalCompanyNo}`,
      });
    },

    onClickItemDetails(item) {
      console.log("我走了");
      userAppointmentInfo({ id: item.id }).then((res) => {
        if (res.code == "0" && res.data) {
          this.datails = res.data;
          this.show = true;
        } else {
          this.datails = {
            appointmentDt: "",
            medicalCompanyName: "",
          };
        }
      });
    },

    //------------ 事件结束----
  },

  //export 结束
};
</script>

<style lang='scss' scoped>
.appointment-mine {
  background: linear-gradient(166.51deg, #FFFFFFB7 0%, #EFF6FE 100%);
  .bg {
    width: 100%;
    height: 200px;
    background: url("../../static/icon_svg/healthy_mine/top.svg") no-repeat;
    background-size: 100% auto;
  }
  .info {
    margin: -180px 30rpx 30rpx 30rpx;
    color: #FFFFFF;
    font-size: 26rpx;
  }
  .list {
    .item {
      padding: 32rpx 24rpx;
      background: #fff;
      border-radius: 10rpx;
      margin: 0 32rpx;
      margin-bottom: 34rpx;
      .head {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-bottom: 30rpx;
        margin-bottom: 50rpx;
        border-bottom: 1px solid #F0F0F0;
        &-name {
          color: #333333;
          font-size: 30rpx;
          margin-left: 6rpx;
        }
        &-date {
          color: #999999;
          font-size: 26rpx;
        }
      }
      .content {
        display: flex;
        flex-direction: row;
        margin-bottom: 64rpx;
        .img {
          border-radius: 8rpx !important;
          overflow: hidden !important;
        }
        .item-content {
          flex: 1;
          padding-left: 20rpx;
          display: flex;
          flex-direction: column;
          .title {
            color: #333333;
            width: 100%;
            font-size: 30rpx;
            margin-bottom: 10rpx;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            -webkit-box-orient: vertical;
          }
          .sub-title {
            font-size: 26rpx;
            margin-bottom: 10rpx;
            color: #707070;
            .item-color {
              color: #ff5d16;
              margin: 0 4rpx;
            }
            .number {
              font-size: 32rpx;
              font-weight: 600;
              margin-right: 40rpx;
            }
          }
          .bottom {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          }
          .sub-tags {
            display: flex;
            .tag {
              height: 48rpx;
              line-height: 48rpx;
              color: #666666;
              font-size: 24rpx;
              background-color: #F6F7F9;
              text-align: center;
              padding: 0 16rpx;
            }
          }
        }
      }



      .item-bottom {
        text-align: right;
        .btn {
          margin-left: 10rpx;
          &:after {
            border: 1px solid rgba(0, 0, 0, 0);
          }
        }
        .orange {
          border: 1px solid #FF4E00;
          color: #FF4E00;
        }
        .gray {
          border: 1px solid #E8E8E8;
          color: #666666;
        }
        .blue {
          border: 1px solid rgba(0, 0, 0, 0);
          background: linear-gradient(119.81deg, #66D5F9 0%, #0091E2 100%),linear-gradient(91.19deg, #06BCBC 42%, #0099CC 100%);
          color: #FFFFFF;
        }
      }
    }
  }
}

.ronin-helth-form {
  padding-top: 32rpx;
  ::v-deep.u-dropdown__menu__item {
    justify-content: flex-start;
    padding-left: 30rpx;
  }

  .pop-box {
    padding: 32rpx;
  }
}

.icon{
  position: fixed;
  top:40rpx;
  right: 40rpx;
  z-index: 100;
}
</style>
