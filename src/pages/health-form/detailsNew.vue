<template>
  <view class="ronin-details-new">

    <!-- 顶部 -->
    <view class="top" @click="goTim">
      <image src="@/static/icon_svg/healthy_appointment/top.svg" class="img" />
    </view>

    <!-- 推荐项目 -->
    <view class="card">
      <view class="title">
        <view class="title-text">推荐项目 ({{ checkedNum }} / {{ pushData.length }})</view>
      </view>
      <view v-for="(item, index) in list" :key="index">
        <view class="product-item">
          <u-icon
            name="checkmark-circle-fill"
            @click="onClickItemNext(index, item)"
            :color="item.check ? '#2979ff' : '#ccc'"
            size="42">
          </u-icon>
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
            size="42">
          </u-icon>
          <view class="product-content">
            <view class="product">
              <view class="name">{{ index }}. {{ item.name }}</view>
              <view class="price">{{ item.remark }} </view>
            </view>
          </view>
        </view>
      </view>

      <view class="more" @click="addMore">
        <image v-if="show" src="@/static/icon_svg/healthy_appointment/pick_up.svg" class="more-img" />
        <image v-else src="@/static/icon_svg/healthy_appointment/expansion.svg" class="more-img" />
      </view>
    </view>

    <!-- 套餐项目 -->
    <view class="card">
      <view class="title">
        <view class="title-text">套餐项目 ({{ checkedPackageNum }} / {{ itemList.length }})</view>
      </view>
      <view v-for="(item, index) in itemList" :key="index">
        <view class="product-item">
          <u-icon
            name="checkmark-circle-fill"
            @click="onClickItem(index, item)"
            :color="item.check ? '#2979ff' : '#ccc'"
            size="42">
          </u-icon>
          <view class="product-content">
            <view class="product">
              <view class="name">{{ index }}. {{ item.name }}</view>
              <view class="price">{{ item.memo }} </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <!-- 底部合计 -->
    <view class="ronin-bottom">
      <view class="left">
        <view class="left-top">
          <view class="left-item">
            <view class="label">选：</view>
            <view class="value">{{ checkedNum  + checkedPackageNum }}项</view>
          </view>
          <view class="left-item">
            <view class="label">共：</view>
            <view class="value">￥{{ allPrice }}</view>
          </view>
        </view>
        <view class="left-bottom">
          <view class="left-item">
            <view class="label">公司可付：</view>
            <view class="value">￥{{ companyFund }}</view>
          </view>
          <view class="left-item">
            <view class="label">个人须付：</view>
            <view class="value">￥{{ userFund }}</view>
          </view>
        </view>
      </view>
      <view class="btn">
        <u-button type="primary" shape="circle" @click="onClickSubmitBtn">
          确定
        </u-button>
      </view>
    </view>

    <u-toast ref="uToast" />

    <uni-popup ref="popup" background-color="#FFFFFF">
      <view class="confirm">
        <view class="title">付费提示</view>
        <view class="body">
          <view class="line">
            <view class="item">
              <view class="item-label">选择项目：</view>
              <view class="item-value">{{ checkedNum  + checkedPackageNum }} 项</view>
            </view>
            <view class="item">
              <view class="item-label">所需金额：</view>
              <view class="item-value">￥ {{ allPrice }}</view>
            </view>
          </view>
          <view class="line">
            <view class="item">
              <view class="item-label">公司支付：</view>
              <view class="item-value">￥ {{ companyFund }}</view>
            </view>
            <view class="item">
              <view class="item-label">个人支付：</view>
              <view class="item-value">￥ {{ userFund }}</view>
            </view>
          </view>
          <view class="text">
            您本次支付后剩余可使用的公司支付金额为 <span class="cost">¥0</span>，
            需要在体检时现场向体检机构支付 <span class="cost">¥ {{ userFund }}</span>，是否确认？
          </view>
          <view class="text" style="font-size: 22rpx">
            注：<span class="tips">个人具体支付金额以体检机构实际收取数额为准</span>
          </view>
        </view>
        <view class="footer">
          <view class="left" @click="handleCancel">取消</view>
          <view class="right" @click="onClickSubmit">确定</view>
        </view>
      </view>
    </uni-popup>
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
import uniPopup from "@/uni_modules/uni-popup/components/uni-popup/uni-popup.vue";
export default {
  data () {
    return {
      imgList: [],
      itemList: [],
      details: {},
      list: [], // 推荐项目列表
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
      companyName: "" // 医院名称
    };
  },

  components: { uniPopup },

  computed: {
    /* 推荐项目已选个数 */
    checkedNum () {
      return this.pushData.filter(i => {
        return i.check;
      }).length;
    },
    /* 套餐项目已选个数 */
    checkedPackageNum () {
      return this.itemList.filter(i => {
        return i.check;
      }).length;
    }
  },

  onLoad (e) {
    if (e.id) {
      this.id = e.id;
      this.batchId = e.batchId;
      this.getFund();
    }
    this.companyName = e.name;
  },

  methods: {
    addMore() {
      this.show = !this.show;
    },

    /* 获取套餐详情 */
    getProject () {
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

    /* 获取公司可用金额 */
    getCompanyFund () {
      getUserTypeFund({}).then(res => {
        console.log("getCompanyFund:", res);
      })
    },

    onClickItemNext (index, item) {
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

    /* 点击推荐项目 */
    onClickItemNextPushData (index, item) {
      this.pushData[index].check = !this.pushData[index].check;
      this.getPrice();
    },

    getFund () {
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
        if (res.code == "0" && res.data && res.data.items && res.data.items.length > 0) {
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

    /* 点击确定按钮 */
    onClickSubmitBtn () {
      this.$refs.popup.open();
    },
    /* 点击弹窗取消按钮 */
    handleCancel () {
      this.$refs.popup.close();
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
            url: `/pages/health-form/appointment?id=${data.id}&companyNo=${data.medicalCompanyNo}&name=${this.companyName}&pcg=${this.id}`,
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

    /* 前往在线咨询 */
    goTim () {
      uni.navigateTo({
        url: "/pages/TUI-Chat/chat?conversationID=C2CU_Admin_HT"
      });
    }

  },
};
</script>

<style lang="scss" scoped>
.ronin-details-new {
  padding-bottom: 200rpx;

  /** 顶部 **/
  .top {
    height: 300rpx;
    .img {
      width: 100%;
      height: 100%;
    }
  }

  /** 内容快 **/
  .card {
    margin-bottom: 32rpx;
    min-height: 200rpx;
    background: #fff;
    padding: 30rpx 24rpx;
    .title {
      padding-bottom: 20rpx;
      border-bottom: 1px #eee solid;
      &-text {
        font-size: 32rpx;
        font-weight: bold;
        height: 40rpx;
        line-height: 40rpx;
        padding-left: 10px;
        border-left: 7rpx solid #06BCBC;
      }
    }
    &-list {
      margin-top: 10px;
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
      &-img {
        width: 74px;
        height: 37px;
      }
    }


  }

  /** 底部 **/
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
      &-top {
        display: flex;
        .left-item {
          display: flex;
          margin-right: 40rpx;
          .label {
            color: #666666;
            font-size: 26rpx;
          }
          .value {
            color: #FF601A;
          }
        }
      }
      &-bottom {
        display: flex;
        .left-item {
          display: flex;
          margin-right: 40rpx;
          color: #666666;
        }
      }
    }
    .btn {
      width: 200rpx;
    }
  }

  /** 弹窗 **/
  .confirm {
    width: 80vw;
    padding: 30rpx 40rpx;
    .title {
      color: #333333;
      font-size: 34rpx;
      font-weight: 700;
      text-align: center;
      border-bottom: 1px solid #DAD5D5;
      padding-bottom: 20px;
    }
    .body {
      margin: 30rpx 0;
      border-bottom: 1px solid #DAD5D5;
      .line {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30rpx;
        .item {
          display: flex;
          font-size: 32rpx;
          &-label {
            color: #333333;
          }
          &-value {
            color: #FF4E00;
          }
        }
      }
      .text {
        color: #333333;
        font-size: 32rpx;
        margin-bottom: 30rpx;
        .cost { color: #FF4E00; }
        .tips { color: #666666; }
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      font-size: 26rpx;
      text-align: center;
      .left {
        width: 49%;
        color: #D04C48;
        border-right: 1px solid #DAD5D5;
      }
      .right {
        width: 49%;
        color: #0897A0;
      }
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
