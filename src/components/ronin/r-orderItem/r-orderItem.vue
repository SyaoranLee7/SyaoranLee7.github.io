<template>
  <view class="ronin-order-item" @click='onClickItem'>
    <view class="item-head">
      <view class="head-left">
        <text>{{object.customerName}}</text>
        <text class="sub">{{object.customerSex}} {{object.customerAge}}岁</text>
      </view>
      <view class="head-right" :class='"color"+type'>{{ type | orderType }}</view>
    </view>

    <view class="item-content">
        <view class='img-box'>
             <u-image width="110" height="100" src="/static/img/icon1.png"></u-image>
        </view>
     
      <view class="content-text">
        <view class="top">{{object.title}}</view>
        <view class='bottom'>  <text>共{{object.numbur}}项 实付:</text> <text class='price'>¥{{object.priceAll}}</text></view>
      </view>

     
    </view>

     <view class='item-hint' :class='type+"-bg"' v-if="type == '100' || type == 'notest' || type=='ingtest'">
         <u-icon class='icon' name="checkmark-circle-fill" :color='type|orderTypeColor'  size="40"></u-icon>
         <text v-if="type=='100'" :class='type'>订单在将在24小时内失效</text>
         <text v-if="type=='notest'" :class='type'>已支付</text>
         <text v-if="type=='ingtest'" :class='type'>正在检测中</text>
      </view>

      <view class='item-hint' :class='type+"-bg"' v-if="type == 'reject' ">
         <u-icon class='icon' name="error-circle-fill" :color='type|orderTypeColor'  size="40"></u-icon>
          <text style='color:#333'>驳回理由：</text>
         <text v-if="type=='reject'" :class='type'>样本不合格</text>
      </view>

      <view class='btn-box'>
          <u-button v-if="type == '100' " class='btn' shape="circle" size="medium">取消订单</u-button>
          <u-button @click='onClickRefund '  v-if="type == '120' && object.isRedoOrder != 'Y'" class='btn' shape="circle" size="medium">退款</u-button>
          <u-button  v-if="type == '100' "  class='btn' type="primary" shape="circle" size="medium">去支付</u-button>
          <u-button v-if="type == 'notest'  || type == 'ingtest' || type=='reject'" class='btn' type="primary" shape="circle" size="medium">再来一单</u-button>
          <u-button v-if="type=='complete' " class='btn'  shape="circle" size="medium">再来一单</u-button>
          <u-button @click='onClickToReport' v-if=" type=='complete'" class='btn' type="primary" shape="circle" size="medium">查看报告</u-button>
          
          
      </view>
  </view>
</template>

<script>
export default {
    props:{
        type:{
            type:String,
            default:'ingtest'
        },
        object:{
          type:Object,
          default:{

          }
        }
    },
  data() {
    return {
       
    };
  },
  methods:{
    onClickRefund(){
      this.$emit("onClickRefund")
    },
      onClickItem(){
          this.$emit("CLICKITEM",this.type)
      },
      onClickToReport(){
          uni.navigateTo({
        url: `/pages/order/reportSon`,
      });
      }
  },

  filters: {
    orderType(type) {
     
      if (type == "100") {
        return "待支付";
      }
       if (type == "110") {
        return "已退款";
      }
      if (type == "120") {
        return "已支付";
      }
       if (type == "160") {
        return "采样完成";
      }
       if (type == "200") {
        return "已提交";
      }
      if (type == "300") {
        return "机构签收";
      }
      if (type == "420") {
        return "已完成";
      }
      if (type == "reject") {
        return "驳回";
      }

    },
   
    orderTypeColor(type){
          if (type == "100") {
        return "#ffab00";
      }
      if (type == "120") {
        return "#3873fe";
      }
      if (type == "300") {
        return "#38cb89";
      }
      if (type == "420") {
        return "#333333";
      }
      if (type == "reject") {
        return "#ff5d16";
      }
    },
    
  },
};
</script>

<style lang='scss' scoped>
.ronin-order-item {
  padding: 0 24rpx;
  background: #fff;
  margin: 0 $u-padding-width-outer;
 

  .item-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 112rpx;
    border-bottom: 1px solid $u-line-color;
    align-items: center;
    .head-left {
      font-size: $u-font-size-bg;
      .sub {
        font-size: $u-font-size;
        margin-left: $u-padding-text * 2;
      }
    }
  }

  .item-content {
    padding: $u-padding-width-item 0;
    display: flex;
    flex-direction: row;
    .img-box{
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
      .bottom{
          text-align: right;
          font-size: $u-font-size-small;
          .price{
              font-size: $u-font-size-title;
          }
      }
    }
  }
  .item-hint{
      height: 80rpx;
      width: 100%;
      border-radius: 4rpx;
      background: $u-type-warning-light;
      padding-left: $u-padding-width-within;
      color:$u-type-warning;
      margin-bottom: $u-padding-width-item;
      display: flex;
      align-items: center;
      .icon{
          margin-right: 16rpx;
          margin-top: 2rpx;
      }
  }
  .btn-box{
     text-align: right;
      padding-bottom:$u-padding-width-item ;
     .btn{
         margin-left: 20rpx;
     } 
  }

  .color100{
      color:$u-type-warning;
  }
  .color110{
      color:$u-type-error;
  }
  .color120{
      color:$u-type-primary;
  }
  .color200{
      color:$u-type-primary;
  }
  .color300{
      color:$u-type-success;
  }
  .color420{
    color:$u-type-error;
  }
  .reject-bg{
    background:$u-type-error-light;
  }
  .nopay-bg{
      background: $u-type-warning-light;
  }
  .notest-bg{
      background:$u-type-primary-light;
  }
  .ingtest-bg{
      background:$u-type-success-light;
  }
 
}
</style>