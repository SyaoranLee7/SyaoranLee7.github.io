<template>
  <view class="ronin-bottom">
    <view class='bottom-left'>
      <view class="img-box" @click='onClickCart'>
        <u-image
          class="head-bg-img"
          width="88rpx"
          height="88rpx"
          src="/static/img/shop.png"
        ></u-image>
        <u-badge type="error" :count="length" :offset="[4, -10]"></u-badge>
      </view>

      <view class="price">
        <text class="icon">￥</text>
        <text>{{price}}</text>
      </view>
    </view>

    <view class="btn">
      <u-button v-if="btnType == '1'" type="primary" shape="circle" @click='onClickOrder'>去下单</u-button>
      <view v-if="btnType == '2'" class='btn-box'>
           <u-button  type="success" class='left' @click='onClickAddCard'>加入购物车</u-button>
           <u-button type="primary" class='right' @click='onClickOrder'>去下单</u-button>
      </view>

      <view v-if="btnType == '3'" class='btn-box'>
           <u-button  type="success" class='left' @click='onClickPayAnother'>患者支付</u-button>
           <u-button type="primary" class='right' @click='onClickPay'>医生支付</u-button>
      </view>

    </view>
  </view>
</template>

<script>
export default {
  props:{
    btnType:{
       type:String,
            default:'2'
    },
    length:{
        type:Number,
            default:0
    },
    price:{
       type:[Number,String],
       default:0.00
    }
  },
  data() {
    return {
        
    };
  },
  methods:{
      onClickCart(){
          this.$emit("CLICKCAR")
      },
      onClickAddCard(){
         this.$emit("CLICKADDCARD")
      },
      onClickOrder(){
        this.$emit("CLICKORDER")
      },
      onClickPayAnother(){
         this.$emit("CLICKPAYANOTHER")
      },
      onClickPay(){
        this.$emit("CLICKPAY")
      }
  }
};
</script>

<style lang="scss" scoped>
.ronin-bottom {
  height: 140rpx;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 10rpx -14rpx 14rpx -14rpx rgba(0, 0, 0, 0.1);
  padding: $u-padding-width-within $u-padding-width-within 0 60rpx;
  position: relative;
  background: #fff;
  .bottom-left{
      display: flex;
      flex-direction: row;
  }
  .img-box {
    position: relative;
  }
  .price {
    color: $u-type-error;
    margin-top: 28rpx;
    margin-left: $u-padding-text;
    font-size: $u-font-size-bg;
    font-weight: 600;
    .icon {
      font-size: $u-font-size-small;
      font-weight: 500;
    }
  }
  ::v-deep.btn {
      .btn-box{
          display: flex;
          flex-direction: row;
         
          .u-btn{
              width: 180rpx;
              border-radius: 0;
          }
           .left{
              border-top-left-radius: 50rpx !important;
              border-bottom-left-radius: 50rpx !important;
              button{
                     width: 180rpx;
              border-radius: 0;
                    border-top-left-radius: 50rpx !important;
                    border-bottom-left-radius: 50rpx !important;
              }
          }
          .right{
               border-top-right-radius: 50rpx !important;
              border-bottom-right-radius: 50rpx !important;
              button{
                     width: 180rpx;
              border-radius: 0;
                   border-top-right-radius: 50rpx !important;
              border-bottom-right-radius: 50rpx !important;
              }
          }
      }
  }
}
</style>