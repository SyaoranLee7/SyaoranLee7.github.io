<template>
  <view class="app-check-records">

    <!-- 顶部背景块 -->
    <view class="bg"></view>

    <view v-if="list.length">
      <!-- 列表信息 -->
      <view class="info">共{{ total }}个报告</view>

      <!-- 列表 -->
      <view
        class="app-check-records-list-item"
        v-for="(item, index) in list"
        :key="index + '12345'"
        @click="gotoDetail(item)">
        <view class="has-bg">
          <view class="inner">
            <view class="app-check-records-list-item-header">
              <view class="name">{{ vuex_user.realName || "无" }}</view>
              <view class="date">{{ item.testDt }}</view>
            </view>
            <view class="app-check-records-list-item-bodyer">
              <view class="line">
                <view class="label">体检机构：</view>
                <view class="value">{{ item.testCompanyName }}</view>
              </view>
              <view class="line">
                <view class="label">体检号：</view>
                <view class="value">2137145218</view>
              </view>
            </view>
            <view class="app-check-records-list-item-footer">
              <view class="btn">查看报告</view>
            </view>
          </view>
        </view>
      </view>

      <!-- <view class="app-check-records-list-item" @click="gotoDetail({ 'id': '2137145218' })">
        <view class="has-bg">
          <view class="inner">
            <view class="app-check-records-list-item-header">
              <view class="name">李易锋</view>
              <view class="date">2022年09月24日</view>
            </view>
            <view class="app-check-records-list-item-bodyer">
              <view class="line">
                <view class="label">体检机构：</view>
                <view class="value">中山医院</view>
              </view>
              <view class="line">
                <view class="label">体检编号：</view>
                <view class="value">2137145218</view>
              </view>
            </view>

            <view class="app-check-records-list-item-footer">
              <view class="btn">查看报告</view>
            </view>
          </view>
        </view>
      </view> -->
    </view>
    <view v-else class="no-data">
      <view class="empty">
        <image src="@/static/icon_svg/records_list/empty.svg" class="img" />
      </view>
      <view class="text">暂无体检报告</view>
    </view>

  </view>
</template>

<script>
import { userTestReportDataList } from "@/api/health";
import Pdfh5 from "pdfh5";
import "pdfh5/css/pdfh5.css";
export default {
  name: "RecordsList", // 体检报告

  data() {
    return {
      list: [],
      total: 0, // 报告总数
      showPdf: false,
    };
  },
  onLoad() {
    this.getList();
  },
  methods: {
    /* 获取体检报告列表 */
    getList() {
      userTestReportDataList({}).then((res) => {
        if (res.code == "0" && res.data) {
          this.list = res.data.records;
          this.total = res.data.records.length;
        }
      });
    },

    onClickReport(item) {
      // location.href = item.reportPath
      //  window.open(item.reportPath);
      this.showPdf = true;
      this.$nextTick((res) => {
        this.pdfh5 = new Pdfh5("#PDF", {
          pdfurl: 'https://hktimgs.oss-cn-shanghai.aliyuncs.com/pdf/20220608.pdf', // pdf 地址，请求的地址需要为线上的地址，测试的本地的地址是不可以的
          lazy: true, // 是否懒加载
          withCredentials: true,
          renderType: "svg",
          maxZoom: 3, //手势缩放最大倍数 默认3
          scrollEnable: true, //是否允许pdf滚动
          zoomEnable: true, //是否允许pdf手势缩放
        });
      });
    },


    /* 查看体检报告 */
    gotoDetail (item) {
      uni.navigateTo({ url: `/pages/check-records/detail?id=${item.id}` });
    },
  },
};
</script>

<style lang="scss">
page {
  background: #fafafa;
}
.app-check-records {
  width: 100vw;
  background: linear-gradient(166.51deg, #FFFFFFB7 0%, #EFF6FE 100%);

  /** 顶部背景 **/
  .bg {
    width: 100%;
    height: 200px;
    background: url("../../static/icon_svg/records_list/top.svg") no-repeat;
    background-size: 100% auto;
  }

  /** 顶部信息 **/
  .info {
    margin: -180px 30rpx 30rpx 30rpx;
    color: #FFFFFF;
    font-size: 26rpx;
  }

  .app-check-records-list-item {
    margin: 14px;
    background-color: #FFFFFF;
    border-radius: 14px;
    border: 1px #eee solid;
    .has-bg {
      background: url("../../static/icon_svg/records_list/deco.svg") no-repeat;
      background-size: auto 100%;
      background-position: right top;
      width: 100%;
      height: 100%;
      .inner {
        padding: 40rpx;
        background: linear-gradient(158.53deg, #FFFFFF 0%, #EFF6FE 100%);
        box-shadow: 0px 15px 30px 0px #1A446219;
        border-radius: 14px;
      }
    }
  }
  .app-check-records-list-item-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    .name {
      font-size: 36rpx;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
    .date {
      color: #999;
      font-size: 12px;
    }
  }
  .app-check-records-list-item-bodyer {
    padding-bottom: 14px;
    border-bottom: 1px #eee solid;
    .line {
      display: flex;
      margin-bottom: 20rpx;
      font-size: 26rpx;
      .label { color: #999999; }
      .value { color: #333333; }
    }
    .info {
      font-size: 13px;
      color: #666;
      line-height: 1.6;
    }
  }
  .app-check-records-list-item-footer {
    margin-top: 20rpx;
    display: flex;
    justify-content: flex-end;
    .btn {
      width: 160rpx;
      height: 70rpx;
      text-align: center;
      line-height: 70rpx;
      color: #ffffff;
      background: linear-gradient(119.81deg, #66D5F9 0%, #0091E2 100%);
      border-radius: 100px;
    }
  }
}

.no-data {
  width: 100vw;
  height: 90vh;
  margin-top: 100rpx;
  .empty {
    width: 100%;
    text-align: center;
    .img {
      width: 240rpx;
      height: 160rpx;
    }
  }
  .text {
    margin-top: 20rpx;
    color: #999999;
    font-size: 24rpx;
    text-align: center;
  }
}
</style>
