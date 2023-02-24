<template>
  <view class="app-plan">
    <view class="no-data" v-if="tabs.length == 0">
      <view class="no-date-item">
        <image src="https://htl001.oss-cn-hangzhou.aliyuncs.com/images/no-data.png" mode="widthFix" />
        <view class="no-date-title"> 您还没有任何健康目标 </view>
        <u-button type="primary" style="width: 34vw" @click="onSetTarget"
          >立刻设置目标</u-button
        >
      </view>
    </view>
    <u-tabs
      :list="tabs"
      :is-scroll="true"
      :current="current"
      height="100"
      @change="change"
      v-if="tabs.length > 0"
    ></u-tabs>
    <view class="app-plan-list" v-if="tabs.length > 0">
      <view class="app-plan-list-date">今日目标 </view>
      <view
        class="app-plan-list-item"
        v-for="(item, index) in data"
        :key="index + 'data'"
        @click="onTap(item)"
      >
        <view class="app-plan-list-item-header">
          <view class="app-plan-list-item-header-icon">
            <image
              :src="
                'https://htl001.oss-cn-hangzhou.aliyuncs.com/icon/icon_' +
                item.serviceContentType +
                '%403x.png'
              "
              class="app-plan-list-item-header-icon-images"
            />
          </view>
          <view class="app-plan-list-item-header-info">
            <view class="app-plan-list-item-header-info-title">{{
              item.serviceName
            }}</view>
            <view class="app-plan-list-item-header-info-des">{{
              item.serviceContentName
            }}</view>
          </view>
          <view
            class="app-plan-list-item-header-status bg-finish"
            v-if="item.exeStatus == 'Y'"
          >
            <view class="app-plan-list-item-header-status-txt">已完成</view>
            <image
              src="@/static/img/plan/img-plan-icon-wait.png"
              class="app-plan-list-item-header-status-icon"
            />
          </view>

          <view
            class="app-plan-list-item-header-status bg-wait"
            v-if="item.exeStatus == 'N'"
          >
            <view class="app-plan-list-item-header-status-txt">待完成</view>
            <image
              src="@/static/img/plan/img-plan-icon-wait.png"
              class="app-plan-list-item-header-status-icon"
            />
          </view>
        </view>
        <view class="app-plan-list-item-bodyer">
          {{ item.serviceContentSuggest }}
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
        <view class="warp-box-title">{{ item.serviceName }}</view>
        <view class="warp-box-des">{{ item.serviceContentSuggest }}</view>
        <view class="warp-box-btn" @click="onOk"
          ><u-icon
            name="clock"
            color="#ffffff"
            size="32"
            style="margin-right: 4px"
          ></u-icon>
          {{ item.serviceContentName || "完成" }}</view
        >
      </view>
    </view>
    <u-tabbar
      :list="vuex_company_tabbar"
      active-color="#3873fe"
      inactive-color="#B1AFB8"
      :mid-button-size="168"
      fontSize="8px"
      :icon-size="42"
    ></u-tabbar>
  </view>
</template>

<script>
import {
  serviceGroupList,
  serviceList,
  queryServiceTask,
  exeServiceTask,
} from "@/api/plan";
import uButton from "../../uview-ui/components/u-button/u-button.vue";
export default {
  components: { uButton },
  data() {
    return {
      current: 0,
      show: false,
      tabs: [],
      data: [],
      item: {},
    };
  },

  filters: {
    filterIcon(item) {
      switch (item.serviceContentType) {
        case "sport":
          return "@/static/icon/icon_sports@3x.png";
        case "food":
          return "";
        case "visit":
          return "";
        case "article":
          return "";
        case "testing":
          return "";
        case "examination":
          return "";
        case "record":
          return "";
        case "diagnose":
          return "";
        case "remind":
          return "";
        default:
          return "";
      }
    },
  },

  onLoad() {
    this.getgroupList();
  },
  methods: {
    onSetTarget() {
      uni.navigateTo({ url: "/pages/target/list" });
    },
    get_now_date() {
      var timestamp = Date.parse(new Date());
      var date = new Date(timestamp);
      //获取年份
      var Y = date.getFullYear();
      //获取月份
      var M =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      //获取当日日期
      var D = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

      return Y + "-" + M + "-" + D;
    },
    getgroupList() {
      let data = this.get_now_date();
      queryServiceTask({ generateDt: data }).then((res) => {
        if (res.code == "0" && res.data) {
          let data = res.data.records;
          this.updateData(data);
        }
      });
    },
    updateData(arr) {
      let data = [];
      arr.forEach((element) => {
        let check = true;
        data.forEach((item) => {
          if (item.code == element.serviceGroupCode) {
            item.list.push(element);
            check = false;
          }
        });
        if (check) {
          data.push({
            name: element.serviceGroupName,
            code: element.serviceGroupCode,
            list: [element],
          });
        }
      });

      this.tabs = data;
      this.getList();
    },
    getList() {
      this.data = this.tabs[this.current].list;
    },
    change(index) {
      this.current = index;
      this.getList();
    },
    onTap(item) {
      console.log(item, "显示数据哈哈哈");
      this.item = item;
      this.show = true;
    },
    onOk() {
      if (this.item.exeStatus == "N") {
        exeServiceTask({ taskId: this.item.id }).then((res) => {
          if (res.code == "0") {
            this.show = false;
            this.getgroupList();
          }
        });
      } else {
        this.show = false;
      }
    },
  },
};
</script>

<style lang="scss" >
page {
  background: #fafafa;
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
.app-plan {
  width: 100vw;
}

.app-plan-list {
  width: 100vw;
}
.app-plan-list-date {
  margin: 18px 14px;
  font-weight: 600;
  font-size: 16px;
}
.app-plan-list-item {
  margin: 14px;
  height: 110px;
  background: #fff;
  border-radius: 10px;
  padding: 0px 14px;
  padding-bottom: 14px;

  .app-plan-list-item-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    .app-plan-list-item-header-icon {
      width: 44px;
      height: 44px;
      margin-right: 10px;
      margin-top: 10px;
      .app-plan-list-item-header-icon-images {
        width: 44px;
        height: 44px;
        border-radius: 22px;
      }
    }
    .app-plan-list-item-header-status {
      width: 48px;
      height: 54px;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      text-align: center;
      .app-plan-list-item-header-status-txt {
        margin-top: 10px;
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 12px;
        margin-top: 6px;
      }
      .app-plan-list-item-header-status-icon {
        width: 20px;
        height: 20px;
        margin-top: 4px;
      }
    }
    .app-plan-list-item-header-info {
      flex: 1;
      margin-top: 10px;
      .app-plan-list-item-header-info-title {
        font-size: 16px;
        font-weight: 600;
      }
      .app-plan-list-item-header-info-des {
        margin-top: 4px;
        color: #999;
      }
    }
  }
  .app-plan-list-item-bodyer {
    overflow: hidden;
    color: #999;
    text-overflow: -o-ellipsis-lastline;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    font-size: 12px;
    line-height: 1.4;
  }
}
.bg-finish {
  background: #38cb89;
}
.bg-wait {
  background: #ffc040;
}
.no-data {
  width: 100vw;
  height: 90vh;
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