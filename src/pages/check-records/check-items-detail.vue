<template>
  <view class="app-check-items-detail">
    <view class="app-check-items-detail-section">
      <view class="app-check-items-detail-header">
        <view class="title">{{ name }}</view>
        <!-- <view class="des">检验者: 崔某 审核者: 李某</view> -->
      </view>
      <u-cell-group
        class="app-check-items-detail-section-group"
        :title="element.mdsdType || ''"
        v-for="(element, elementIndex) in arrlist"
        :key="elementIndex + '789'"
      >
        <!-- <u-cell-item title="一般检查" ></u-cell-item> -->
        <!-- <view>{{element.mdsdType}}</view> -->
        <u-cell-item
          v-for="(item, index) in element.list"
          :key="index + '78679'"
          :title="item.name"
        >
          <view>
            <text>{{ item.value }} {{ item.unit }}</text>
            <text class="sub">{{ item | showName }}</text>
          </view>
        </u-cell-item>
      </u-cell-group>
    </view>
  </view>
</template>

<script>
import homeBackgroundImage from "@/static/img/home/imgs-home-head-bg.png";

import { columnCfgList, getDetailFullByReport } from "@/api/health";
export default {
  data() {
    return {
      healthyArchivesId: "",
      testReportId: "",
      tableId: "", //获取字段配置的Id
      data: {},
      list: [],
      arrlist: [],
      name: "",
    };
  },
  onLoad(e) {
    let that = this;
    uni.getStorage({
      key: "checkItemsDetail",
      success: function (res) {
        that.name = res.data;
      },
    });
    if (e) {
      this.healthyArchivesId = e.listId;
      this.testReportId = e.id;
      this.tableId = e.tableId;
      this.init();
    }
  },

  filters: {
    showName(item) {
      let data = JSON.parse(item.valConfig);
      let name = "";
      if (item.dataType == "d" || item.dataType == "i") {
        if (data.rs && data.re) {
          name = `(${data.rs}~${data.re})`;
        } else {
          name = "";
        }
      } else {
        name = "";
      }

      return name;
    },
  },
  methods: {
    init() {
      let req = {
        mdTableId: this.healthyArchivesId,
        testReportId: this.testReportId,
      };
      getDetailFullByReport(req).then((res) => {
        if (res.code == "0" && res.data) {
          this.data = res.data.data;
          this.getList();
        }
      });
    },
    getList() {
      columnCfgList({ tableId: this.tableId }).then((res) => {
        if (res.code == "0" && res.data) {
          this.list = res.data.map((item) => {
            if (this.data[item.code]) {
              item.value = this.data[item.code];
            } else {
              item.value = "";
            }

            return item;
          });

          this.upDateList();
        }
      });
    },

    upDateList() {
      let arr = [];
      this.list.forEach((item) => {
        let check = true;
        arr.forEach((element) => {
          if (item.mdsdType == element.mdsdType) {
            element.list.push(item);
            check = false;
          }
        });
        if (check) {
          arr.push({
            mdsdType: item.mdsdType,
            list: [item],
          });
        }
      });
      this.arrlist = arr;
      console.log(arr, "处理之后的数据");
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/common.scss";
page {
  background: #fafafa;
}
.app-check-items-detail {
  .app-check-items-detail-section {
    margin-bottom: 14px;
    .app-check-items-detail-header {
      padding: 14px 14px;

      .title {
        font-size: 18px;
        font-weight: 600;
      }
      .des {
        font-size: 14px;
        color: #999;
        margin-top: 8px;
      }
    }
    .app-check-items-detail-section-group {
      overflow: hidden;
    }
  }
}
.sub {
  font-size: 10rpx;
  position: relative;

  color: rgb(194, 193, 193);
}
</style>