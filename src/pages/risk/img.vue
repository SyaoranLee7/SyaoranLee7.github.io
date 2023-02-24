<template>
  <view class="img-box">
    <u-image
      width="660rpx"
      height="660rpx"
      class="img"
      src="https://htl001.oss-cn-hangzhou.aliyuncs.com/static/img/menber/bg.png"
    ></u-image>
    <view v-for="(item, index) in imgList" :key="index + 'imgItem'">

      <u-image
        width="660rpx"
        height="660rpx"
        class="img"
       
        :src="item | imgSrc"
      ></u-image>

      <!-- <u-image
        width="500rpx"
        height="1100rpx"
        class="img"
        v-if="item == 'SKIN'"
        src="@/static/img/menber/SKIN.png"
      ></u-image>

      <u-image
        width="500rpx"
        height="1100rpx"
        class="img"
         v-if="item == 'PMUS'"
        src="@/static/img/menber/PMUS.png"
      ></u-image>

      <u-image
        width="500rpx"
        height="1100rpx"
        class="img"
        v-if="item == 'UPS-M'"
        src="@/static/img/menber/UPS-M.png"
      ></u-image>

      <u-image
        width="500rpx"
        height="1100rpx"
        class="img"
        v-if="item == 'C'"
        src="@/static/img/menber/C.png"
      ></u-image>

      <u-image
        width="500rpx"
        height="1100rpx"
        class="img"
        v-if="item == 'DS'"
        src="@/static/img/menber/DS.png"
      ></u-image>

      <u-image
        width="500rpx"
        height="1100rpx"
        class="img"
        v-if="item == 'ES'"
        src="@/static/img/menber/ES.png"
      ></u-image>

      <u-image
        width="500rpx"
        height="1100rpx"
        class="img"
        v-if="item == 'HS'"
        src="@/static/img/menber/HS.png"
      ></u-image>

      <u-image
        width="500rpx"
        height="1100rpx"
        class="img"
        v-if="item == 'SAT'"
        src="@/static/img/menber/SAT.png"
      ></u-image>

      <u-image
        width="500rpx"
        height="1100rpx"
        class="img"
        v-if="item == 'UPS-W'"
        src="@/static/img/menber/UPS-W.png"
      ></u-image>

      <u-image
        width="500rpx"
        height="1100rpx"
        class="img"
        v-if="item == 'US'"
        src="@/static/img/menber/US.png"
      ></u-image> -->
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    imgList: {
      type: Array,
      default: [],
    },
  },
  filters:{
    imgSrc(item){
      let val = ''
      if(item.type == '高'){
        val = '-H'
      }else if(item.type == '中'){
         val = "-M"
      }else if(item.type == '低'){
         val = "-L"
      }
       let url = `https://htl001.oss-cn-hangzhou.aliyuncs.com/static/img/menber/${item.code}${val}.png`
    // let url = `https://htl001.oss-cn-hangzhou.aliyuncs.com/static/img/menber/${item.code}.png`
    return url
    }
  }
};
</script>

<style lang='scss' scoped>
.img-box {
  position: relative;
  .img {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>