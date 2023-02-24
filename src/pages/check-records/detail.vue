<template>
  <view
    class="app-check-detail"
    :style="{
      backgroundImage: `url(${homeBackgroundImage})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }">
    <view class="app-check-detail-header">
      <view class="app-check-detail-header-info">
        <view class="app-check-detail-header-name"
          >{{vuex_user.realName}} <view class="date"></view></view
        >
        <!-- <view class="app-check-detail-header-detail"
          >30岁 ｜ 172.5cm ｜92.7kg</view
        > -->
      </view>
    </view>
    <view class="app-check-detail-subsection">
      <u-subsection
        mode="subsection"
        active-color="#fff"
        :list="list"
        height="60"
        :current="current"
        @change="sectionChange"
      ></u-subsection>
    </view>
    <view class="app-check-detail-error" v-if="current === 0">
      <view class="app-check-detail-section-box">
        <view
          class="app-check-detail-section-box-items"
          :class="
            index == listIndex
              ? 'app-check-detail-section-box-items-actived'
              : ''
          "
          v-for="(item, index) in listData"
          :key="index + '67oi34tgh'"
          @click="onClickItem(index)"
          >{{ item.bizType }}<view class="badge">{{ item.list.length }}</view>
        </view>
      </view>
      <view class="app-check-detail-section-list">
        <view
          class="app-check-detail-section-list-item"
          v-for="(item, index) in listItem"
          :key="index + '567ujhb'"
          @click="onTap(item)"
        >
          <view class="header">
            <view class="name">{{ item.name }}</view>
            <view class="action"
              >查看解读 <u-icon name="arrow-right"></u-icon
            ></view>
          </view>
          <view class="bodyer">
            <view class="des">{{ item.memo }}</view>
          </view>
        </view>
      </view>
    </view>
    <view class="app-check-group-list" v-if="current === 1">
      <!-- <view class="app-check-group-list-item">
        <view class="icon"></view>
        <view class="name">一般检查</view>
         <view class="arrow"><u-icon name="arrow-right"></u-icon></view>
      </view> -->
      <u-cell-group>
        <u-cell-item
          @click="onTapGroup(item)"
          v-for="(item, index) in dataLeft"
          :key="index + '568'"
          :title="item.name"
          value=""
        ></u-cell-item>
      </u-cell-group>
    </view>
    <view class="btn-reports" @click="onClickReport()">查看PDF报告</view>
    <u-popup v-model="showPdf" width="100%">
      <u-icon
        @click="showPdf = false"
        name="close"
        class="icon"
        size="32"
      ></u-icon>
      <view id="PDF"></view>
    </u-popup>
  </view>
</template>

<script>
import homeBackgroundImage from "@/static/img/home/imgs-home-head-bg.png";
import { dataModelConfigList } from "@/api/health";
import Pdfh5 from "pdfh5";
import "pdfh5/css/pdfh5.css";
import { reportList } from "@/api/report";
export default {
  data() {
    return {
      homeBackgroundImage,
      showPdf:false,
      list: [
        {
          name: "异常",
        },
        {
          name: "全部",
        },
        // {
        //   name: "健康风险",
        // },
      ],
      current: 0,
      dataLeft: [],
      id: "",
      listData: [],
      listIndex: 0,
      listItem: [],
    };
  },
  onLoad(e) {
    if (e) {
      this.id = e.id;
    }
    this.getList();
    this.getReportList();
  },
  methods: {
    getReportList() {
      reportList({ id: this.id }).then((res) => {
        if (res.code == "0" && res.data) {
          this.updateData(res.data);
        }
      });
    },
    onClickReport() {
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
    updateData(data) {
      let arr = [];
      data.forEach((element) => {
        let check = true;
        arr.forEach((item) => {
          if (item.bizType == element.bizType) {
            check = false;
            item.list.push(element);
          }
        });
        if (check) {
          arr.push({
            bizType: element.bizType,
            list: [element],
          });
        }
      });
      this.listData = arr;
      this.listItem = this.listData[this.listIndex].list;
    },
    onClickItem(index) {
      this.listIndex = index;
      this.listItem = this.listData[this.listIndex].list;
    },
    getList() {
      let req = {
        categoryCode: "MDA1581282485014110208",
      };
      dataModelConfigList(req).then((res) => {
        if (res.code == "0" && res.data) {
          this.dataLeft = res.data;
        }
      });
    },
    onTap(item) {
      let data = JSON.stringify(item);
      uni.setStorage({
        key: "fitnessRecordsData",
        data: data,
        success: function () {
          uni.navigateTo({ url: "/pages/check-records/items-detail" });
        },
      });
    },
    onTapGroup(item) {
      // console.log(item,'显示暑假好好')
      let that = this
      uni.setStorage({
        key: "checkItemsDetail",
        data: item.name,
        success: function () {
          uni.navigateTo({
            url: `/pages/check-records/check-items-detail?id=${that.id}&listId=${item.id}&tableId=${item.id}`,
          });
        },
      });
    },
    sectionChange(index) {
      this.current = index;
    },
  },
};
</script>

<style lang="scss">
page {
  background: #fafafa;
}
.app-check-detail {
  min-height: 100vh;

  .app-check-detail-header {
    height: 76px;
    padding-top: 8px;
    .app-check-detail-header-info {
      padding: 14px;
      color: #fff;
      .app-check-detail-header-name {
        font-size: 24px;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .date {
          font-size: 16px;
          font-weight: 600;
          margin-left: 10px;
        }
      }

      .app-check-detail-header-detail {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
  .app-check-detail-subsection {
    width: 64vw;
    padding: 10px 14px;
  }

  .app-check-detail-error,
  .app-check-group-list {
    border-radius: 10px;
    overflow: hidden;
    margin: 14px;
    background: #fff;
  }

  .app-check-detail-section-box {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .app-check-detail-section-box-items {
      width: 50%;
      height: 48px;
      color: #999;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
      background: #fafafa;
    }
    .app-check-detail-section-box-items-actived {
      background: #fff;
      color: #333;
    }
  }
  .app-check-detail-section-list {
    padding: 8px 0px;
    &-item {
      padding: 0px 14px;
      padding-bottom: 14px;
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 0px;
        .name {
          font-size: 16px;
          font-weight: bold;
        }
        .action {
          color: #3873fe;
        }
      }
      .bodyer {
        padding: 10px;
        background: #eff5fa;
        border-radius: 4px;
        .des {
          display: block;
          color: #666;
          font-size: 13px;
          overflow: hidden;
          text-overflow: -o-ellipsis-lastline;
          -webkit-line-clamp: 3;
          text-overflow: ellipsis;
          line-clamp: 3;
          display: -webkit-box;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
.badge {
  height: 18px;
  width: 18px;
  border-radius: 4px;
  background: #ff6600;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-left: 8px;
}
.btn-reports{
  width: 700rpx;
  height: 68rpx;
  color: #fff;
  text-align: center;
  background: #3873fe;
  line-height: 68rpx;
  position: fixed;
  bottom: 10rpx;
  left: 25rpx;
  border-radius: 8px;
}
</style>
