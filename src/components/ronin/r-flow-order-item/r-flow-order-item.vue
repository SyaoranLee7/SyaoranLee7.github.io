<template>
  <view class="ronin-flow-item" @click="onClickItem">
    <view class="item-head">
      <view class="head-left">
        <text class="title">{{ object.hospitalCompanyName }}</text>
      </view>
      <view class="head-right" @click.stop="onClickCheck">
        <u-icon
          v-if="object.itemInitNum "
          name="checkmark-circle-fill"
          :color="checkIndex == nawIndex ? '#2979ff' : '#ccc'"
          size="46"
        ></u-icon>
        <view v-else>
          
          <text v-if="object.itemBoxNum == object.itemNum">已全部装箱 </text>  
          <text style='color:#ff5d16' v-if="object.itemRefuseNum == object.itemNum">已拒签</text>  
           <text  v-if="object.itemCenterCheckNum == object.itemNum">已收货</text>
        </view>
      </view>
    </view>

    <view class="item-list">
      <text class="text">
        样本:
        <text v-if="object.itemBoxNum">
          已经签收{{ object.itemBoxNum }}项；
        </text>
        <text v-if="object.itemRefuseNum">
          已拒绝{{ object.itemRefuseNum }}项
        </text>

        <text v-if="object.itemInitNum">
          待签收{{ object.itemInitNum }}项
        </text>
         <text v-if="object.itemCenterCheckNum">
          已收货{{ object.itemCenterCheckNum }}项
        </text>
      </text>
      <text class="text">地址: {{ object.hospitalCompanyAddr }}</text>
      <text class="text">联系人: {{ object.openBillUserName }}</text>
      <text class="text">电话: 18621566608</text>
      <text class="text">申请时间: {{ object.openBillDate }}</text>
    </view>
  </view>
</template>


<script>
export default {
  props: {
    type: {
      type: String,
      default: "ok",
    },
    object: {
      type: Object,
      default: {},
    },
    checkIndex: {
      type: Number,
      default: -1,
    },
    nawIndex: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {};
  },
  methods: {
    onClickCheck() {
      this.$emit("ONCLICKCHECK");
    },
    onClickItem() {
      console.log("我在组件上走了");
      this.$emit("ONCLICK", this.type);
    },
  },

  filters: {
    orderType(type) {
      if (type == "ok") {
        return "已完成";
      }
      if (type == "not") {
        return "待执行";
      }
      if (type == "reject") {
        return "驳回";
      }
    },
  },
};
</script>

<style lang='scss' scoped>
.ronin-flow-item {
  padding: 0 24rpx;
  background: #fff;
  margin: 0 $u-padding-width-outer;
  margin-top: $u-padding-width-card;
  padding-bottom: 48rpx;

  .item-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 112rpx;
    border-bottom: 1px solid $u-line-color;
    align-items: center;
    .head-left {
      font-size: $u-font-size-title;
      .title {
        font-weight: 600;
      }
      .sub {
        font-size: $u-font-size;
        margin-left: $u-padding-text * 2;
      }
    }
    .head-right {
      color: $u-type-primary;
    }
    .color {
      color: $u-type-warning;
    }
  }
  .item-content {
    padding: $u-padding-width-item 0;
    display: flex;
    flex-direction: row;

    .img-box {
      width: 110rpx;
    }
    .content-text {
      margin-left: $u-padding-width-item;
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .top {
        width: calc(100% - 84rpx);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
      }
      .bottom {
        text-align: right;
        font-size: $u-font-size-small;
        .price {
          font-size: $u-font-size-title;
        }
      }
    }
  }
  .item-list {
    display: flex;
    flex-direction: column;
    padding-top: 20rpx;
    .text {
      line-height: 40rpx;
    }
  }
}
</style>