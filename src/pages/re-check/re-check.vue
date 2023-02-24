<template>
  <view class="ronin-details-new">
    <view class="head">
      <view class="head-content">
        <view class="title">健康复查</view>
        <view class="des"
          >定期复查的目的是为了观测病情变化和预测病情趋势，方便医生调整治疗方案并及时治疗，可以避免病情恶化。</view
        >
        <u-image
          class="img"
          width="228rpx"
          height="210rpx"
          src="@/static/img/doctor.png"
        ></u-image>
      </view>
      <u-image
        class="img-bg"
        width="100%"
        height="210rpx"
        src="@/static/img/doctorBg.png"
      ></u-image>
    </view>

    <view class="card">
      <view class="title">复查项目</view>
      <view v-for="(item, index) in list" :key="index">
        <view class="product-item">
          <u-icon
            name="checkmark-circle-fill"
            @click="onClickItemNext(index, item)"
            :color="item.check ? '#2979ff' : '#ccc'"
            size="42"
          ></u-icon>
          <view class="product-content">
            <view class="product">
              <view class="name">{{ item.name }}</view>
              <view class="price">{{ item.frequency }} </view>
            </view>
            <!-- <view class="des"> </view> -->
          </view>
        </view>
      </view>

      <!-- <view v-for="(item, index) in pushData" :key="index+'78'">
        <view class="product-item" v-if="show">
          <u-icon
            name="checkmark-circle-fill"
            @click="onClickItemNextPushData(index, item)"
            :color="item.check ? '#2979ff' : '#ccc'"
            size="42"
          ></u-icon>
          <view class="product-content">
            <view class="product">
              <view class="name">{{ item.name }}</view>
              <view class="price">{{ item.remark }} </view>
            </view>
           
          </view>
        </view>
      </view> -->

      <!-- <view class="more" @click="addMore">
        {{ show ? "收起" : "新增其他项目" }}
        <u-icon :name="show ? 'arrow-up' : 'arrow-down'"></u-icon
      ></view> -->
    </view>

    <!-- <view class="card">
      <view class="title">体检费用明细</view>
      <view class="statistic">
        <view class="item">
          <view class="left">公司支付</view>
          <view class="price">￥{{ companyFund }}</view>
        </view>
        <view class="item">
          <view class="left">自费支付</view>
          <view class="price">￥{{ userFund }}</view>
        </view>

        <view class="all">
          <text>总订单</text>
          <text class="price"><text class="unit">¥</text> {{ allPrice }}</text>
        </view>
      </view>
    </view> -->

    <view class="ronin-bottom">
      <view class="left" @click="onClickHome">
        <u-icon size="38" name="home"></u-icon>
        <view>首页</view>
      </view>
      <view class="btn">
        <u-button type="primary" shape="circle" @click="onClickSubmit"
          >立刻预约</u-button
        >
      </view>
    </view>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
import { queryHtp } from "@/api/service";
import { setMsg } from "@/api/3rd";
import { listToStr } from "@/utils/index";
export default {
  data() {
    return {
      list: [],
      ids: [],
      standardTestingCodes: [],
    };
  },
  onLoad(e) {
    if (e.ids) {
      this.ids = e.ids.split(",");
      this.getList();
    }
  },
  methods: {
    getList() {
      let params = {
        ids: this.ids,
      };
      queryHtp(params).then((res) => {
        if (res.code && res.data?.records) {
          this.list = res.data?.records;
          for (let v of this.list) {
            v.check = true;
            if (v.standardTestingCode) {
              this.standardTestingCodes.push(v.standardTestingCode);
            }
          }
        } else {
          this.list = [];
        }
      });
    },
    addMore() {
      this.show = !this.show;
    },
    onClickHome() {
      uni.navigateTo({
          url: "/pages/home/home",
      })
      uni.switchTab({
        url: "/pages/home/home",
      });
    },
    onClickSubmit() {
      let params = {
        content: JSON.stringify({
          type: 4,
          type_label: "复诊复查",
          content: "我要开检验",
        }),
      };
      setMsg(params).then((res) => {
        if (res && res.id) {
          let evidence_id = res.id;
          let standardTestingCodesStr = listToStr(this.standardTestingCodes,',');
          let url = `https://nat.szlhyy.com.cn/xiaoh/yjy/patient/#/confirm-order?id=${standardTestingCodesStr}&evidence_id=${evidence_id}&type=1`
          console.log(
            url
          );
          window.location.href=url
        }
      });

      //https://luohu-test.shennongsys.com/yjy/patient/#/confirm-order?id=155&evidence_id=68&type=1
    },

    onClickItem(index, item) {
      if (item.mustType == "Y") {
        this.$refs.uToast.show({
          title: "该商品是必选项",
          type: "error",
        });
      } else {
        this.itemList[index].check = !this.itemList[index].check;
      }
    },

    onClickItemNext(index, item) {
      this.list[index].check = !this.list[index].check;
      this.$forceUpdate();
    },

    //----------
  },
};
</script>

<style lang="scss" scoped>
.ronin-details-new {
  padding-bottom: 200rpx;
  .head {
    height: 500rpx;
    background: linear-gradient(180deg, #3873fe 10%, #fff 100%);
    padding: 0 32rpx;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    .head-content {
      height: 280rpx;
      background: #fff;
      border-radius: 28rpx;
      padding: 0 24rpx;
      padding-top: 38rpx;
      position: relative;
      color: #666666;
      .title {
        font-size: 32rpx;
        margin-bottom: 32rpx;
        font-weight: bold;
        color: #333333;
      }
      .img {
        position: absolute;
        right: 24rpx;
        top: -100rpx;
        z-index: 100;
      }
    }
    .img-bg {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  .card {
    margin: 32rpx;
    min-height: 200rpx;
    background: #fff;
    border-radius: 8rpx;
    padding: 30rpx 24rpx;
    .title {
      font-size: 32rpx;
      font-weight: bold;
      height: 70rpx;
      border-bottom: 1px #eee solid;
    }
    .product-item {
      margin-bottom: 16rpx;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid #f0f0f0;
      .product-content {
        flex: 1;

        padding: 28rpx 26rpx;
        border-radius: 10rpx;
        margin-left: 0rpx;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .product {
          .name {
            font-size: 28rpx;
            margin-bottom: 10rpx;
          }
          .price {
            font-size: 24rpx;
            color: #999;
          }
        }
        .des {
          font-size: 22rpx;
          color: #ffab00;
          border: 1px solid #ffab00;
          padding: 2rpx 6rpx;
          border-radius: 6rpx;
        }
      }
    }
    .more {
      text-align: center;
      color: #5889fc;
      padding-top: 62rpx;
    }

    .statistic {
      margin: 40rpx 0px;
      .item {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 12rpx;
      }
      .all {
        text-align: right;
        .price {
          margin-left: 16rpx;
          font-size: 42rpx;
          font-weight: 600;
          color: #ff7823;
          .unit {
            font-size: 28rpx;
          }
        }
      }
    }
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

  .select-box {
    padding: 30rpx 32rpx;
    display: flex;
    flex-direction: row;
    align-items: center;

    .input-text {
      flex: 1;
      border: 1px solid #ccc;
      border-radius: 8rpx;
      background: #f1f1f1;
      color: #c1bfbf;
      padding: 10rpx;
    }
    .input-check {
      color: #333333;
    }
  }
  .btn-box {
    text-align: right;
    padding-right: 32rpx;
    padding-bottom: 20rpx;
    .btn {
      margin-left: 10rpx;
    }
  }
}
</style>