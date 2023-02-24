<template>
  <view class="ronin-prodict-item">
    <view class="item-left" @click='onClickDetails'>
      <view class='text-box'>
        <text > {{name}}</text>
        <text class="text-attach">({{type[0]}})</text>
      </view>
      <view class='price'><text class='price-icon'>￥</text> {{price}}</view>
    </view>
    <view class="item-right">
      <u-icon @click='onclickChang("add")' v-if="!addShop" name="plus-circle"></u-icon>
      <u-icon  @click='onclickChang("lose")' v-else color='#333'  name="minus-circle"></u-icon>
    </view>
  </view>
</template>

<script>
export default {
  props:['name','price','addShop','type'],
  data() {
    return {};
  },
  methods:{
    onclickChang(e){
      this.$emit('change',e)
    },
    onClickDetails(){
      this.$emit('ONCLICKDETAILS')
    },
  }
};
</script>

<style lang="scss" scoped>
.ronin-prodict-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 118rpx;
  width: 100%;
  border-bottom:1px solid $u-line-color;
  margin-bottom: $u-padding-width-within;
   padding: 0 $u-padding-width-within;
  .item-left {
    flex: 1;
    .text-box{
        margin-bottom: $u-padding-text;
        height: 100%;
        .text-attach{
            font-size:$u-font-size-small;
        }
    }

    .price{
        font-size: $u-font-size-title;
        color:$u-type-error;
        .price-icon{
            font-size: $u-font-size-small;
        }
    }
  }
  .item-right{
      font-size: 44rpx;
      color:$u-type-primary;
  }
}
</style>