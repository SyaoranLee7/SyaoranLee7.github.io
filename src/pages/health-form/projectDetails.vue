<template>
  <view class="ronin-project">
    <view class="details-head">
      <image
        class="img"
        style="width: 210rpx; height: 426rpx"
        src="@/static/img/head-bg.png"
      ></image>
      <view class="title">确认体检项目</view>
      <view class="sub-title"
        >健康管理师根据您的个人健康状态为您定制了体检项目</view
      >
      <view class="box">
        <view class="item">
          <view class="icon"></view>
          <view class="text">选择项目</view>
        </view>
        <view class="line"></view>
        <view class="item">
          <view class="icon"></view>
          <view class="text text-center">预约检查</view>
        </view>
        <view class="line"></view>
        <view class="item">
          <view class="icon"></view>
          <view class="text text-right">智慧报告</view>
        </view>
      </view>
    </view>

    <view class="hint paddingLR">
      <view class="title">体检排筛建议</view>
      <view class="des"
        >高危人群或怀疑癌症者进一步进行高级的检查（针对性检查），比如增强CT或者直接的病理学活检，比如肠镜、胃镜取活检等（病理学检查是确诊的依据）。通过针对性体检，虽然还无法查出所有的早期癌症，但也可以发现不少早期癌症，这点就是最有价值的，进一步要做的就是如何更合理有效地筛查。</view
      >
    </view>

    <view class="content-hint">
      <view class="content-hint-left">
        <u-image
          width="54rpx"
          height="54rpx"
          class="img"
          src="@/static/img/hint.png"
        ></u-image>
        <text>风险小贴士</text>
      </view>
      <view class="content-hint-right">
        <view class="item">
          <view class="icon"></view>
          <view class="type">高</view>
          <view class="des">已确诊疾病</view>
          <!-- <view class="des">建议尽早检验筛查</view> -->
        </view>
        <view class="item item-center">
          <view class="icon"></view>
          <view class="type">中</view>
          <view class="des">体检异常</view>
          <!-- <view class="des">建议定期筛查</view> -->
        </view>
        <view class="item item-end">
          <view class="icon"></view>
          <view class="type">低</view>
          <view class="des">筛查优先级较低</view>
        </view>
      </view>
    </view>

    <view class="img-box">
      <ImgBox :imgList="imgList"></ImgBox>
    </view>
    <view class="btn-box">
      <u-button type="primary">查看详情</u-button>
    </view>

    <view class="product-box paddingLR">
      <view class="title">筛查</view>
      <view class="product-item" v-for="(item, index) in itemList" :key="index">
        <u-icon
          name="checkmark-circle-fill"
          @click="onClickItem(index, item)"
          :color="item.check ? '#2979ff' : '#ccc'"
          size="42"
        ></u-icon>
        <view class="product-content">
          <view class="product">
            <view class="name">{{ item.name }}</view>
            <view class="price">￥{{ item.priceSettle }} </view>
          </view>
          <view class="des">{{ item.memo }}</view>
        </view>
      </view>
    </view>

    <view class="product-box paddingLR" v-if="list.length > 0">
      <view class="title">附加项目</view>
      <view class="product-item" v-for="(item, index) in list" :key="index">
        <u-icon
          name="checkmark-circle-fill"
          @click="onClickItemNext(index)"
          :color="item.check ? '#2979ff' : '#ccc'"
          size="42"
        ></u-icon>
        <view class="product-content">
          <view class="product">
            <view class="name">{{ item.productName }}</view>
            <view class="price">￥{{ item.productPrice }} </view>
          </view>
          <view class="des">{{ item.memo }}</view>
        </view>
      </view>
    </view>

    <view class="statistic paddingLR">
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
    <view class="paddingLR">
      <u-button type="primary" @click="onClickSubmit">确认</u-button>
    </view>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
import ImgBox from "@/pages/risk/img";

import {
  medicalProjectBatchList,
  medicalProjectQueryProject,
  medicalProjectInfoProject,
  userAddProjectList,
  userAppointmentAdd,
  getUserTypeFund,
  userAddProjectBefore,//增加项目
} from "@/api/healthForm";
export default {
  components: { ImgBox },
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
    getFund() {
      getUserTypeFund({ batchId: this.batchId }).then((res) => {
        if (res.code == "0" && res.data) {
          this.fund = res.data.fund;
          this.getDetails();
        } else {
          this.getDetails();
        }
      });
    },
    onClickSubmit() {
      let id = [];
      this.itemList.forEach((item) => {
        id.push(item.childProjectId);
      });
      this.list.forEach((item) => {
        id.push(item.projectId);
      });
      let req = {
        batchId: this.batchId,
        productIds: id,
        medicalCompanyNo: this.companyNo,
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
      this.itemList.forEach((item) => {
        if (item.check) {
          num += item.priceSettle;
        }
      });
      this.list.forEach((item) => {
        if (item.check) {
          num += item.productPrice;
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
        this.getPrice();
      });
    },
    onClickItem(index, item) {
      if (item.mustType == "Y") {
        this.$refs.uToast.show({
          title: "这是必选项",
          type: "error",
        });
      } else {
        this.itemList[index].check = !this.itemList[index].check;
        this.getPrice();
        this.$forceUpdate();
      }
    },
    onClickItemNext(index) {
      this.list[index].check = !this.list[index].check;
      this.getPrice();
      this.$forceUpdate();
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

    //------------ 事件结束----
  },
};
</script>
<style lang='scss' scoped>
.ronin-project {
  background: #fff;
  padding-bottom: 30rpx;
  .paddingLR {
    padding: 0 32rpx;
  }
  .details-head {
    background: #000ca8;
    height: 332rpx;
    color: #fff;
    padding: 0 32rpx;
    padding-top: 60rpx;
    position: relative;
    overflow: hidden;
    .img {
      position: absolute;
      top: -90rpx;
      right: -10rpx;
    }
    .title {
      font-size: 48rpx;
      margin-bottom: 10rpx;
    }
    .sub-title {
      margin-bottom: 32rpx;
    }
    .box {
      display: flex;
      flex-direction: row;
      align-items: center;
      .line {
        flex: 1;
        height: 4rpx;
        background: #8b959e;
      }
      .item {
        position: relative;
        .icon {
          width: 30rpx;
          height: 30rpx;
          border-radius: 50%;
          background: #fff;
        }
        .text {
          position: absolute;
          top: 46rpx;
          width: 140rpx;
        }
        .text-center {
          left: -40rpx;
        }
        .text-right {
          left: -84rpx;
        }
      }
    }
  }
  .hint {
    padding-top: 60rpx;
    .title {
      font-size: 32rpx;
      margin-bottom: 30rpx;
    }
    .des {
      font-size: 28rpx;
      padding-bottom: 40rpx;
      color: #707070;
    }
  }

  .content-hint {
    margin: 0 32rpx;
    margin-top: 26rpx;
    height: 162rpx;
    background: #f6f6f6;
    border-radius: 4rpx;
    padding-left: 64rpx;
    padding-right: 58rpx;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 26rpx;
    .content-hint-left {
      width: 140rpx;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .img {
        width: 56rpx;
        height: 56rpx;
      }
    }
    .content-hint-right {
      .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        .icon {
          width: 40rpx;
          height: 24rpx;
          background: #ff4c30;
          border-radius: 4rpx;
        }
        .type {
          margin-left: 12rpx;
          margin-right: 24rpx;
        }
        .type-high {
          color: #ff4c30;
        }
        .type-middle {
          color: #ffab00;
        }
        .des {
          color: #333;
          font-size: 28rpx;
          font-weight: 500;
        }
      }
      .item-center {
        .icon {
          background: #ffab00;
        }
        .type {
          color: #ffab00;
        }
      }

      .item-end {
        .icon {
          background: #38cb89;
        }
        .type {
          color: #38cb89;
        }
      }
    }
  }
  .img-box {
    width: 660rpx;
    height: 660rpx;
    margin: 60rpx 20rpx;
  }
  .btn-box {
    width: 250rpx;
    margin: 0 auto;
    margin-bottom: 40rpx;
  }

  .product-box {
    margin-bottom: 100rpx;
    .title {
      font-size: 32rpx;
      margin-bottom: 32rpx;
    }
    .product-item {
      margin-bottom: 16rpx;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .product-content {
        flex: 1;
        background: #e7f1fd;
        padding: 28rpx 26rpx;
        border-radius: 10rpx;
        margin-left: 26rpx;
        .product {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .name {
            font-size: 28rpx;
          }
          .price {
            font-size: 24rpx;
          }
        }
        .des {
          font-size: 20rpx;
          color: #454545;
        }
      }
    }
  }
  .statistic {
    margin-bottom: 66rpx;
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
</style>