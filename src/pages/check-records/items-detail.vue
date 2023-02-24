<template>
  <view
    class="app-check-items-detail"
    :style="{
      backgroundImage: `url(${homeBackgroundImage})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <view class="app-check-items-detail-title">{{data.name}}</view>
    <view class="app-check-items-detail-section">
      <view class="app-section">
        <view
          class="app-section-bodyer"
          v-for="(item, index) in dataList"
          :key="index + '456uijnb'"
        >
          <view v-if="item.value.c  ">
            <view class="app-section-header" v-if="data.type == 'target'">
              <view class="app-section-header-title">指标解读</view>
            </view>
            <view class="app-risk" v-if="data.type == 'target'">
              <view class="app-risk-tips">
                <view class="app-risk-tips-item"> </view>
                <view class="app-risk-tips-item color-health"></view>
                <view class="app-risk-tips-item">
                  <view class="app-risk-tips-item-box">
                    <view class="info color-danger"
                      >{{item.value.val}}
                      <view><u-icon name="arrow-down-fill"></u-icon></view>
                    </view>
                  </view>
                </view>
              </view>
              <view class="app-risk-level">
                <view class="app-risk-level-item bg-gray"></view>
                <view class="app-risk-level-item bg-health">正常区间</view>
                <view class="app-risk-level-item bg-gray"></view>
              </view>
              <view class="app-risk-info">
                <view class="app-risk-info-num" style="margin-left: 26%"
                  >{{item.value.min}}</view
                >
                <view class="app-risk-info-num" style="margin-left: 54%"
                  >{{item.value.max}}</view
                >
              </view>
            </view>
          </view>

          <view v-else class="app-risk-detail">
            <view class="app-risk-detail-title">{{ item.name }}</view>
            <view class="app-risk-detail-des">{{ item.value }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import homeBackgroundImage from "@/static/img/home/imgs-home-head-bg.png";

import { columnCfgList } from "@/api/health";
export default {
  data() {
    return {
      homeBackgroundImage,
      list: [
        {
          name: "异常",
        },
        {
          name: "全部",
        },
        {
          name: "健康风险",
        },
      ],
      current: 1,
      data: {},
      dataList: [],
    };
  },

  onLoad() {
    let that = this;
    uni.getStorage({
      key: "fitnessRecordsData",
      success: function (res) {
        that.data = JSON.parse(res.data);
        that.getList();
      },
    });
  },
  methods: {
    getList() {
      let req = {
        tableId: this.data.mdTableId,
      };
      let data = this.data.content;
      console.log(this.data, "显示数据tyuio");
      columnCfgList(req).then((res) => {
        if (res.code == "0" && res.data) {
          this.dataList = res.data.map((item) => {
            if ((item.dataType = "m")) {
              let itemData = data[item.code];
              let val = itemData.c;
              this.data.items.forEach((element) => {
                if (element.mscode == val) {
                  itemData.val = element.msval;
                }
              });
              item.value = itemData;
            } else {
              item.value = data[item.code];
            }

            return item;
          });
          console.log(this.dataList);
        }
      });
    },
    goNext() {
      this.step = this.step + 1;
    },
    goPrv() {
      this.step = this.step - 1;
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
  min-height: 100vh;
  .app-check-items-detail-title {
    color: #fff;
    font-weight: 600;
    font-size: 24px;
    height: 80px;
    display: flex;
    align-items: center;

    padding: 0px 14px;
  }
  .app-check-items-detail-section {
    padding: 0px 14px;
  }
}

.app-section {
  margin-bottom: 14px;
  padding-top: 20px;
}

.app-risk {
  .app-risk-tips {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .app-risk-tips-item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 33.33%;
      height: 60px;
      .app-risk-tips-item-box {
        .info {
          width: 100%;
          text-align: center;
          margin-top: 14px;
        }
        .arrows {
          margin-top: 0px;
          width: 0;
          height: 0;
          margin: 2px auto;
        }
      }

      .app-risk-tips-item-box:nth-child(0) {
        .arrows {
          border: 6px solid transparent;
          border-top: 6px solid #4dad9b;
        }
      }

      .app-risk-tips-item-box:nth-child(3) .arrows {
        border: 6px solid transparent;
        border-top: 6px solid #ea6d2c;
      }
    }
  }
  .app-risk-info {
    text-align: center;
    font-size: 16px;
    width: 100%;
    height: 60px;
  }
  .app-risk-info-num {
    padding-top: 6px;
    position: absolute;
  }
  .app-risk-level {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .app-risk-level-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33.33%;
      height: 24px;
      color: #fff;
    }
    .actived {
      height: 32px;
    }
    .app-risk-level-item:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .app-risk-level-item:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }
}
.bg-gray {
  background: #fafafa;
}
.app-risk-detail {
  margin-bottom: 40px;
  .app-risk-detail-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }
}
</style>