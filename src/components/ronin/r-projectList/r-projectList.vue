<template>
  <view class="ronin-project">
    <view class="project-title" v-if="type == 'normal'">检测项目</view>
    <!-- <view v-if="type == 'anew'" class="project-title">
      <text>以下项目需处理</text>
      <view>
        <text
          class="color"
          style="margin-right: 20rpx"
          @click="onClickAllOk('refund')"
          >全部退款</text
        >
        <text class="color" @click="onClickAllOk('redo')">全部重做</text>
      </view>
    </view> -->

    <view class="item-box" v-for="(item, index) in list" :key="index">
      <view class="item">
        <u-image
          class="head-bg-img"
          width="110"
          height="100"
          src="/static/img/icon.png"
        ></u-image>
        <view class="item-content">
          <view class="title">{{
             item.name || "暂无"
          }}</view>
          <view class="tag-list">
            <u-tag
              :text="
                item.sampleTypeName[0]||'无'
              "
              :type="type == 'refund' ? 'warning ' : 'info'"
              mode="plain"
              size="mini"
            />
          </view>
          <view v-if="type == 'anew'" class="error">{{
            item.signRefuseReason | name
          }}</view>
          <!-- <view v-if="type == 'refund'" class="error">样本检测仪器损坏</view> -->
        </view>
        <text class="price"
          >￥{{
            item.settlementPrice ||
            item.testingProjectSalePrice ||
            item.testingProjectSettlementPrice ||
            0
          }}</text
        >
      </view>

      <!-- <view class="btn-box" v-if="!item.refuseCheckProcessWay">
        <u-button
          class="btn"
          @click="onClickOk(index)"
          type="primary"
          shape="circle"
          size="medium "
          >重做</u-button
        >
        <u-button
          class="btn"
          shape="circle"
          size="medium "
          @click="onClickNo(index)"
          >退款</u-button
        >
      </view> -->
      <!-- <view
        class="btn-box"
        :class="
          item.isBollen == '同意' ? 'btn-text-color' : 'btn-text-color-no'
        "
        v-if="item.refuseCheckProcessWay"
        >已{{ item.refuseCheckProcessWay | typeName }}</view
      > -->
    </view>

    <u-modal
      v-model="show"
      :show-cancel-button="true"
      @confirm="onConFirm"
      title=""
      content="确认同意所有申请？"
    ></u-modal>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
import { dictGet } from "@/api/user";
import { adrProcess } from "@/api/order";
let list = [];
export default {
  filters: {
    name(val) {
      let value = "";
      if (val && list.length > 0) {
        list.forEach((item) => {
          if (item.k == val) {
            value = item.v;
          }
        });
      }

      return value;
    },
    typeName(e) {
      if (e == "refund") {
        return "退款";
      }

      if (e == "redo") {
        return "重做";
      }
    },
  },
  props: {
    type: {
      type: String,
      default: "normal",
    },
    length: {
      type: Number,
      default: 3,
    },
    list: {
      type: Array,
      default: [{ isBollen: "" }, { isBollen: "" }, { isBollen: "" }],
    },
  },
  watch: {
    type: {
      handler(val) {
        if (val == "refund") {
          this.list = [{ isBollen: "" }];
        }
      },
      immediate: true,
      deep: true,
    },
    length: {
      handler(val) {
        if (val == 1) {
          this.list = [{ isBollen: "" }];
        }
      },
      immediate: true,
      deep: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    console.log("我在组件内走了");
    this.getDictList();
  },
  methods: {
    getDictList() {
      dictGet({ codes: ["003"] }).then((res) => {
        if (res.data) {
          res.data.forEach((element) => {
            if (element.code == "003") {
              this.radioList = element.config;
              list = element.config;
              this.$forceUpdate();
            }
          });
        }
      });
    },
    onConFirm() {
      this.list.forEach((item) => {
        item.isBollen = "同意";
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
    onClickOk(index) {
      let that = this;
      let item = this.list[index];
      let req = {
        ids: [item.id],
        refuseCheckProcessWay: "redo",
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
    onClickNo(index) {
      // this.list[index].isBollen = "拒绝";
      let that = this;
      let item = this.list[index];
      let req = {
        ids: [item.id],
        refuseCheckProcessWay: "refund",
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
  },
};
</script>

<style lang="scss" scoped>
.ronin-project {
  padding: 40rpx $u-padding-width-card;
  background: #fff;
  border-radius: $u-border-radius;
  margin: 0 32rpx;
  .project-title {
    font-size: $u-font-size-title;
    margin-bottom: $u-padding-width-within;
    display: flex;
    justify-content: space-between;
    .color {
      color: $u-type-primary;
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
  .btn-text-color {
    color: $u-type-primary;
  }
  .btn-text-color-no {
    color: $u-type-error;
  }
}
</style>