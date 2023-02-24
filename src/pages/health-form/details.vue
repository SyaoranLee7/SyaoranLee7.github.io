<template>
  <view class="ronin-helth-details">
    <u-image width="100%" height="540rpx" :src="details.img || src"></u-image>
    <view class="padding-page title">{{ details.name }}</view>

    <view class="padding-page sub">
      <view class="price">
        <text>¥ </text> <text class="number">{{ details.price }}</text>
      </view>
    </view>

    <view class="icon-list padding-page">
      <view class="sub-title">{{ details.remark }}</view>
      <view class="sub-title">体检医院：{{ details.companyName }}</view>
    </view>

    <view class="cell"></view>

    <view class="padding-page nav-box">
      <view
        class="nav-item"
        :class="check == 'introduce' ? 'nav-item-check' : ''"
        @click="onCLickScroll('introduce')">
        <view class="text">产品亮点</view>
        <view class="check-icon"> </view>
      </view>
      <view
        class="nav-item"
        :class="check == 'flow' ? 'nav-item-check' : ''"
        @click="onCLickScroll('flow')">
        <view class="text">体检项目</view>
        <view class="check-icon"></view>
      </view>
      <view
        class="nav-item"
        :class="check == 'hint' ? 'nav-item-check' : ''"
        @click="onCLickScroll('hint')">
        <view class="text">检查须知</view>
        <view class="check-icon"></view>
      </view>
    </view>

    <view class="introduce detail-item">
      <view class="detail-item-title">产品亮点</view>
      <view class="box" v-html="details.prdFeature"></view>
    </view>

    <view class="cell"></view>

    <view class="flow detail-item">
      <view class="detail-item-title">体检项目</view>
      <view class="product-box paddingLR">
        <view
          class="product-item"
          v-for="(item, index) in itemList"
          :key="index">
          <view class="product-content">
            <view class="product-index">{{ index + 1 }}</view>
            <view class="product">
              <view class="name">{{ item.name }}</view>
            </view>
          </view>
          <view class="des">{{ item.memo }} </view>
        </view>
      </view>
    </view>

    <view class="cell"></view>

    <view class="flow detail-item">
      <view class="detail-item-title">检查须知</view>
      <view class="product-box paddingLR">
        <view class="hint">
          {{ details.needKnow }}
        </view>
      </view>
    </view>

    <view class="appointment-btn">
      <u-button
        class="btn btn-first"
        @click="onClickAppointment">
        预约体检
      </u-button>
      <!-- <u-button
        class="btn btn-first">
        已体检，查看报告
      </u-button>
      <u-button
        class="btn btn-second">
        已预约，改约
      </u-button> -->
    </view>

  </view>
</template>


<script>
import {
  medicalProjectBatchList,
  medicalProjectQueryProject,
  medicalProjectInfoProject,
} from "@/api/healthForm";

export default {
  data() {
    return {
      src: "https://fc1tn.baidu.com/it/u=1636824733,1780640873&fm=202&src=766&fc=tdmatt&mola=new&crop=v1",
      animationData: {},
      animation: null,

      check: "introduce",
      scrollintoview: "",
      id: "",
      companyName: "",
      details: {},
      itemList: [],
      batchId: "",
    };
  },

  onLoad (e) {
    if (e.id) {
      this.id = e.id;
      this.batchId = e.batchId;
      this.getDetails();
    }

    this.companyName = e.name;
  },

  methods: {
    /* 获取套餐详情 */
    getDetails() {
      medicalProjectInfoProject({ id: this.id }).then((res) => {
        if (res.code == "0") {
          this.details = res.data;
          if (res.data.items) {
            this.itemList = res.data.items.map((item) => {
              item.check = true;
              return item;
            });
          }
          this.details.prdFeature = this.details.prdFeature.replaceAll(
            "<img",
            '<img style="width:100%"'
          );
        }
      });
    },

    /* 点击tab快速跳转 */
    onCLickScroll (text) {
      let data = "." + text;
      this.check = text;
      uni
        .createSelectorQuery()
        .select(data)
        .boundingClientRect((data) => {
          console.log(data, "显示数据哈哈哈");
          //目标位置的节点：类或者id
          uni
            .createSelectorQuery()
            .select(".ronin-helth-details")
            .boundingClientRect((res) => {
              //最外层盒子的节点：类或者id
              uni.pageScrollTo({
                duration: 100, //过渡时间
                scrollTop: data.top - res.top, //到达距离顶部的top值
              });
            })
            .exec();
        })
        .exec();
    },

    /* 前往预约 */
    onClickAppointment() {
      uni.navigateTo({
        url: `/pages/health-form/detailsNew?id=${this.id}&batchId=${this.batchId}&name=${this.companyName}`,
      });
    }
  }
};
</script>


<style lang='scss' scoped>
.ronin-helth-details {
  position: relative;
  background: #fff;
  padding-bottom: 200rpx;

  /** 模块通用样式 **/
  .detail-item {
    background-color: #FFFFFF;
    margin: 10px 5px;
    background-color: #FFFFFF;
    border-radius: 5px;
    &-title {
      background: url("../../static/icon_svg/healthy_detail/title.svg") no-repeat;
      width: 120px;
      height: 32px;
      color: #FFFFFF;
      font-size: 20px;
      line-height: 32px;
      text-align: center;
      background-size: 100% auto;
      margin: 10px auto;
    }
  }

  .padding-page {
    padding: 0 32rpx;
  }
  .title {
    font-size: 38rpx;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    font-weight: bold;
  }
  .sub {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20rpx;
    .price {
      color: #ff5630;
      .number {
        font-size: 48rpx;
      }
    }
    .batch {
    }
  }
  .cell {
    height: 28rpx;
    width: 100%;
    background: #f6f6f6;
  }

  .icon-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 20rpx;
    .title {
      font-size: 34rpx;
    }
    .sub-title {
      font-size: 24rpx;
      color: #999;
      padding-bottom: 10px;
    }
  }
  .item {
    display: flex;
    flex-direction: row;
    margin-bottom: 20rpx;
    .label {
      color: #c6c5c5;
      width: 120rpx;
    }
  }
  .nav-box {
    display: flex;
    flex-direction: row;

    .nav-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20rpx 0;
      .text {
        margin-bottom: 20rpx;
        font-size: 32rpx;
        color: rgba(0, 0, 0, 0.596);
      }
      .check-icon {
        width: 50rpx;
        height: 10rpx;

        border-radius: 5rpx;
      }
    }
    .nav-item-check {
      .text {
        color: #09ABAD;
      }
      .check-icon {
        background: #3873fe;
      }
    }
  }

  /** 底部按钮 **/
  .appointment-btn {
    margin: 10px 5px;
    .btn {
      border: 0px solid rgba(0, 0, 0, 0);
      color: #FFFFFF;
    }
    .btn-first {
      background: linear-gradient(91.19deg, #06BCBC 42%, #0099CC 100%);
    }
    .btn-second {
      background: linear-gradient(108.17deg, #FFC670 0%, #FF6B00 100%);
    }
  }

 ::v-deep .introduce {
    min-height: 300rpx;
    .box {
      p {
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        display: block;
       img{
          width: 100%;
          display: block;
        }
      }
      img {
        width: 750rx;
        display: block;
      }
    }
  }

  .flow {
    width: 100%;
    min-height: 200rpx;
    padding: 0 32rpx;
    .product-box {
      margin-bottom: 100rpx;
      .title {
        font-size: 32rpx;
        margin-bottom: 32rpx;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px #eee solid;
        padding: 14px 0px;
        .small {
          font-size: 24rpx;
          font-weight: 400;
        }
      }
      .product-item {
        margin-bottom: 16rpx;
        background: linear-gradient(103.95deg, #FFF3E114 23%, #3EAEFF11 100%);
        border-bottom: 1px solid #f0f0f0;
        .product-content {
          flex: 1;
          padding: 14rpx 0rpx;
          border-radius: 10rpx;
          margin-left: 0rpx;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .product-index {
            width: 44rpx;
            height: 44rpx;
            line-height: 44rpx;
            text-align: center;
            background: linear-gradient(180deg, #92E5FF 0%, #0087D3 100%), linear-gradient(91.19deg, #06BCBC 42%, #0099CC 100%);
            color: #FFFFFF;
            border-radius: 50%;
            margin-right: 20rpx;
          }
          .product {
            flex:1;
            .name {
              font-size: 30rpx;
              font-weight: bold;
              height: 44rpx;
              line-height: 44rpx;
            }
            .price {
              font-size: 24rpx;
              color: #707070;
            }
          }
        }
        .des{
          font-size: 28rpx;
          color: #707070;
          margin-bottom: 10px;
          padding: 20rpx;
        }
      }
    }
  }

  .hint {
    padding: 0rpx 0rpx;
  }

  .content-title {
    width: 400rpx;
    padding: 0 50rpx;
    background: #3873fe3b;
    text-align: center;
    height: 80rpx;
    line-height: 80rpx;
    color: #fff;
    font-weight: 600;
    border-radius: 40rpx;
    margin: 0 auto;
    margin-bottom: 40rpx;

    .text {
      width: 100%;
      height: 80rpx;
      color: #fff;
      background: #3873fe;
      border-radius: 40rpx;
    }
  }
  .content-title::after {
    display: inline-block;
    width: 100%;
    background: red;
  }

  .uni-group {
    display: flex;
    align-items: center;
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
}
</style>

<style  scoped>
img {
  width: 100%;
}
</style>
