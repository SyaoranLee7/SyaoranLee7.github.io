<template>
  <view class="ronin-details-new">
    <view class="head">
      <view class="head-content">
        <view class="title">健康管理师意见</view>
        <view class="des">{{ details.remark }}</view>
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
      <view class="title">套餐外项目</view>
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
              <view class="name">{{ item.productName }}</view>
              <view class="price">{{ item.remark }} </view>
            </view>
            <view class="des">{{ item.add ? "" : "健康管理师推荐" }} </view>
          </view>
        </view>
      </view>

      <view v-for="(item, index) in pushData" :key="index + '78'">
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
      </view>

      <view class="more" @click="addMore">
        {{ show ? "收起" : "新增其他项目" }}
        <u-icon :name="show ? 'arrow-up' : 'arrow-down'"></u-icon
      ></view>
    </view>

    <view class="card">
      <view class="title">套餐项目</view>
      <view v-for="(item, index) in itemList" :key="index">
        <view class="product-item">
          <u-icon
            name="checkmark-circle-fill"
            @click="onClickItem(index, item)"
            :color="item.check ? '#2979ff' : '#ccc'"
            size="42"
          ></u-icon>
          <view class="product-content">
            <view class="product">
              <view class="name">{{ item.name }}</view>
              <view class="price">{{ item.memo }} </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="card">
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
    </view>

    <view class="ronin-bottom">
      <view class="left" @click="onClickHome">
        <u-icon size="38" name="home"></u-icon>
        <view>首页</view>
      </view>
      <view class="btn">
        <u-button type="primary" shape="circle" @click="onClickSubmit"
          >预约体检</u-button
        >
      </view>
    </view>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
import {
  medicalProjectBatchList,
  medicalProjectQueryProject,
  medicalProjectInfoProject,
  userAddProjectList,
  userAppointmentAdd,
  getUserTypeFund,
  userAddProjectBefore, //增加项目
} from "@/api/healthForm";
export default {
  data() {
    return {
      imgList: [],
      itemList: [],
      details: {},
      list: [],
      batchId: "",
      allPrice: 0,
      fund: 0,
      userFund: 0,
      companyFund: 0,
      companyNo: "",
      showMoreList: false,
      showMoreItem: false,
      show: false,
      projectData: [],
      showPicker: false,
      checkItem: {},
      pushData: [], //
    };
  },
  onLoad(e) {
    if (e.id) {
      this.id = e.id;
      this.batchId = e.batchId;
      this.getFund();
    }
  },
  methods: {
    addMore() {
      this.show = !this.show;
    },
    getProject() {
      medicalProjectQueryProject({
        companyNo: this.companyNo,
        type: "p",
        rows: 1000,
      }).then((res) => {
        if (res.code == "0" && res.data) {
          let data = res.data.records;
          let pushData = [];
          data.forEach((item) => {
            let check = true;
            this.itemList.forEach((element) => {
              if (element.childProjectId == item.id) {
                check = false;
              }
            });

            this.list.forEach((element) => {
              if (element.productId == item.id) {
                check = false;
              }
            });

            if (check) {
              item.check = false;
              pushData.push(item);
            }
          });

          this.pushData = pushData;
        }
      });
      //   this.show = true;
    },

    onClickHome() {
      uni.navigateTo({
        url: "/pages/home/home",
      });
      uni.switchTab({
        url: "/pages/home/home",
      });
    },

    getFund() {
      getUserTypeFund({ batchId: this.batchId }).then((res) => {
        if (res.code == "0" && res.data) {
          this.fund = res.data;
          this.getDetails();
        } else {
          this.getDetails();
        }
      });
    },
    getDetails() {
      this.itemList = [];
      medicalProjectInfoProject({ id: this.id }).then((res) => {
        if (res.code == "0") {
          this.details = res.data;
          this.companyNo = res.data.companyNo;
          if (res.data.items) {
            this.itemList = res.data.items.map((item) => {
              item.check = true;
              return item;
            });
            this.getList();
          }
        }
      });
    },

    getList() {
      userAddProjectBefore({
        medicalCompanyNo: this.details.companyNo,
      }).then((res) => {
        if (res.code == "0" && res.data?.items?.length > 0) {
          let list = res.data.items;
          let data = [];

          //判断有没有重复
          list.forEach((item) => {
            item.check = false;
            let check = true;
            this.itemList.forEach((element) => {
              if (item.productId == element.childProjectId) {
                check = false;
              }
            });
            if (check) {
              data.push(item);
            }
          });

          this.list = data;
        }
        this.getProject();
        this.getPrice();
      });
    },

    onClickSubmit() {
      let id = [];
      this.itemList.forEach((item) => {
        if (item.check) {
          id.push(item.childProjectId);
        }
      });
      this.list.forEach((item) => {
        if (item.check) {
          id.push(item.projectId);
        }
      });
      this.pushData.forEach((item) => {
        if (item.check) {
          id.push(item.id);
        }
      });
      let req = {
        batchId: this.batchId,
        productIds: id,
        medicalCompanyNo: this.companyNo,
        medicalProjectImage: this.details.img,
        medicalProjectName: this.details.name,
      };

      userAppointmentAdd(req).then((res) => {
        if (res.code == "0" && res.data) {
          let data = res.data;
          uni.navigateTo({
            url: `/pages/health-form/appointment?id=${data.id}&companyNo=${data.medicalCompanyNo}`,
          });
        }
      });
    },
    getPrice() {
      let num = 0;
      console.log(this.list,this.pushData)
      this.itemList.forEach((item) => {
        if (item.check) {
          num += item.price;
        }
      });
      this.list.forEach((item) => {
        if (item.check) {
          num += item.productPrice;
        }
      });
      this.pushData.forEach((item) => {
        if (item.check) {
          num += item.price;
        }
      });

      this.allPrice = num;

      if (this.fund - num > 0) {
        this.userFund = 0;
        this.companyFund = num;
      } else {
        this.companyFund = this.fund;
        this.userFund = num - this.fund;
      }
    },

    onClickItem(index, item) {
      if (item.mustType == "Y") {
        this.$refs.uToast.show({
          title: "该商品是必选项",
          type: "error",
        });
      } else {
        this.itemList[index].check = !this.itemList[index].check;
        this.getPrice();
      }
    },
    onClickItemNextPushData(index, item) {
      this.pushData[index].check = !this.pushData[index].check;
      this.getPrice();
    },
    onClickItemNext(index, item) {
      if (item.productId) {
        this.list[index].check = !this.list[index].check;
        this.getPrice();
      } else {
        this.$refs.uToast.show({
          title: "该商品不可选",
          type: "error",
        });
      }
    },

    //----------
  },
};
</script>

<style lang="scss" scoped>
.ronin-details-new {
  padding-bottom: 200rpx;
  .head {
    min-height: 500rpx;
    background: linear-gradient(180deg, #3873fe 10%, #fff 100%);
    padding: 0 32rpx;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    padding-top: 200rpx;
    .head-content {
      min-height: 334rpx;
      background: #fff;
      border-radius: 8rpx;
      padding: 0 24rpx;
      padding-top: 38rpx;
      padding-bottom: 24rpx;
      position: relative;
      color: #666666;
      .title {
        font-size: 34rpx;
        margin-bottom: 72rpx;
        font-weight: bold;
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
      align-items: flex-start;
      margin-top: 16rpx;
      padding-bottom: 28rpx;
      .product-content {
        flex: 1;

        padding: 0rpx 26rpx;
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
      padding: 32rpx 0px;
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