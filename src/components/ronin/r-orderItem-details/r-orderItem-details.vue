<template>
  <view class="ronin-order-item-sample">
    <view class="card-des">
      <view class="card-title">
        <text>订单信息</text>
        <view v-if="type">
          <text
            class="color"
            style="margin-right: 20rpx"
            @click="onClickAllOk('refund')"
            >全部退款</text
          >
          <text class="color" @click="onClickAllOk('redo')">全部重做</text>
        </view>
      </view>

      <view class="item-box" v-for="(item, index) in list" :key="index">
        <view class="item">
          <u-image
            class="head-bg-img"
            width="110"
            height="100"
            src="/static/img/icon.png"
          ></u-image>
          <view class="item-content">
            <view class="title">{{ item.testingProjectName || "暂无" }}</view>
            <view class="tag-list">
              <u-tag
                :text="
                  item.receiveSampleTypeName[0] ||
                  item.testingProjectReceiveSampleTypeName[0] ||
                  '无'
                "
                :type="type ? 'warning ' : 'info'"
                mode="plain"
                size="mini"
              />
            </view>
            <view v-if="type == 'anew'" class="error">{{
              item.signRefuseReason | name
            }}</view>
            <!-- <view v-if="type == 'refund'" class="error">样本检测仪器损坏</view> -->
          </view>
          <text class="price">￥{{ item.testingProjectSettlementPrice }}</text>
        </view>

        <view class="btn-box" v-if="type && !item.refuseCheckProcessWay && item.roninDispose">
          <u-button
            class="btn"
            @click="onClickDispose(index, 'redo')"
            v-if="isRedoOrder != 'Y'"
            type="primary"
            shape="circle"
            size="medium "
            >重做</u-button
          >
          <u-button
            class="btn"
            shape="circle"
            size="medium "
            @click="onClickDispose(index, 'refund')"
            >退款</u-button
          >
        </view>
        <view
          class="btn-box"
          v-if="type && item.refuseCheckProcessWay"
          :class="
            item.isBollen == '同意' ? 'btn-text-color' : 'btn-text-color-no'
          "
          >已{{ item.refuseCheckProcessWay | typeName }}</view
        >
      </view>
    </view>
    <u-toast ref="uToast" />
    <u-modal v-model="show" :content="content" :show-cancel-button='true' @cancel='show=false' @confirm="onOk"></u-modal>
  </view>
</template>

<script>
import { adrProcess } from "@/api/order";
export default {
  props: {
    length: {
      type: Number,
      default: 2,
    },
    list: {
      type: Array,
      default: [],
    },
    type: {
      type: Boolean,
      default: false,
    },
    isRedoOrder: {
      type: String,
      default: "N",
    },
  },
  filters: {
    typeName(e) {
      if (e == "refund") {
        return "退款";
      }

      if (e == "redo") {
        return "重做";
      }
    },
  },
  watch: {
    list: {
      handler(val) {
        this.itemList = this.list.map((item) => {
          if (!item.code) {
            item.code = "";
          }

          return item;
        });
      },
      immediate: true,
      deep: true,
    },

    length: {
      handler(val) {
        if (val == 1) {
          this.list = [{ id: "1231254132" }];
        } else {
          this.list = [{ id: "" }, { id: "" }];
        }
      },
      immediate: true,
      deep: true,
    },
    type: {
      handler(val) {
        if (val == "ingtest" || val == "complete") {
          this.list = [{ id: "sj834039024" }, { id: "dh023940234324" }];
        }
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      show: false,
      content: "",
      itemList: [],
      req: {},
    };
  },
  methods: {
    onOk() {
      adrProcess(this.req).then((res) => {
        if (res.code == "0") {
          this.show=false
          this.$emit("updateList");
          this.$refs.uToast.show({
            title: "处理成功",
            type: "success",
          });
        }
      });
    },
    onClickDispose(index, type) {
      let that = this;
      let item = this.list[index];
      let id = item.anomalyId;

      this.req = {
        ids: [item.anomalyId],
        refuseCheckProcessWay: type,
        refuseCheckState: "Y",
      };
      let val = "";
      this.list.forEach((element, itemIndex) => {
        if (element.anomalyId == id && itemIndex != index) {
          val = val + element.testingProjectName + ",";
          console.log(element, "显示数据哈哈哈");
        }
      });
      if (val) {
        this.content = val + "这些也将一起处理";
        this.show = true;
        return;
      }

      adrProcess(this.req).then((res) => {
        if (res.code == "0") {
          this.$emit("updateList");
          this.$refs.uToast.show({
            title: "处理成功",
            type: "success",
          });
        }
      });
    },
    onClickAllOk(type) {
      let ids = [];
      this.list.map((item) => {
        if (!item.refuseCheckProcessWay) {
          ids.push(item.id);
        }
      });
      if (ids.length == 0) {
        this.$refs.uToast.show({
          title: "没有样本可以处理",
          type: "error",
        });
      }
      let req = {
        ids: ids,
        refuseCheckProcessWay: type,
        refuseCheckState: "Y",
      };
      adrProcess(req).then((res) => {
        if (res.code == "0") {
          this.$refs.uToast.show({
            title: "处理成功",
            type: "success",
          });
          that.$emit("updateList");
        }
      });
    },
    onInputBlur(index) {
      let that = this;
      that.$emit("upDateList", that.itemList);
    },
    see(index) {
      let that = this;
      uni.scanCode({
        success: function (res) {
          console.log("条码类型：" + res.scanType);
          console.log("条码内容：" + res.result);
          that.itemList[index].code = res.result;
          // that.list[index].code =res.result;
          that.$emit("upDateList", that.itemList);
          that.$forceUpdate();
        },
        fail: function (res) {},
      });
    },
  },
};
</script>


<style lang='scss' scoped>
.ronin-order-item-sample {
  .card-des {
    border-radius: $u-border-radius;
    margin: $u-padding-width-card $u-padding-width-outer;
    background: #fff;
    padding: $u-padding-width-card;
    padding-bottom: 40rpx;
    padding-top: 40rpx;
    position: relative;
    .card-title {
      margin-bottom: $u-padding-width-within;
      display: flex;
      justify-content: space-between;
      .color {
        color: $u-type-primary;
      }
    }

    .card-content {
      background: $u-bg-ash;
      border-radius: $u-border-radius;
    }
    .cell {
      position: absolute;
      width: 100%;
      background: #fffaf0;
      left: 0;
      padding: 0 $u-padding-width-card;
      height: 88rpx;
      line-height: 88rpx;
      display: flex;
      flex-direction: row;
      align-items: center;
      color: $u-type-warning;
    }
    .cell-sub {
      height: 88rpx;
      margin-bottom: $u-padding-width-within;
    }
    .box {
      margin-bottom: 30rpx;
      .card-company {
        min-height: 160rpx;
        background: #fff;

        display: flex;
        justify-content: space-between;

        .img {
          margin-right: 20rpx;
        }
        .card-company-content {
          flex: 1;
          .title {
            margin-bottom: $u-padding-text;
          }
          .sub-title {
            font-size: $u-font-size-small;
            color: $u-font-color-gray;
            margin-bottom: $u-padding-text;
          }
          .tag {
            margin-right: 10rpx;
          }
        }
      }
      .input-box {
        position: relative;
        .btn {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: 100;
          ::v-deepbutton {
            height: 100% !important;
            line-height: 1;
            font-size: 28rpx;
          }
        }
      }
    }
  }

  .item-box {
    margin-bottom: 40rpx;
  }
  .item {
    display: flex;
    flex-direction: row;
    margin-bottom: 10rpx;

    .item-content {
      flex: 1;
      margin-left: 16rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        margin-bottom: 16rpx;
      }
      .tag-list {
        display: flex;
        flex-direction: row;
        margin-bottom: 12rpx;
      }
      .error {
        color: $u-type-error;
        font-size: $u-font-size-small;
      }
    }
    .price {
      height: 40rpx;
      line-height: 40rpx;
      margin-top: 46rpx;
    }
  }
  .btn-box {
    text-align: right;
    ::v-deep.btn {
      margin-left: $u-padding-width-card;
    }
  }
}
</style>