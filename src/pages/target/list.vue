

<template>
  <view
    class="app-home"
    :style="{
      backgroundImage: `url(${homeBackgroundImage})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <view class="app-home-title" v-if="list.length > 0">
      <h1>健康目标</h1>
      <p>金牌团队守护 尊享健康权益</p>
    </view>
    <view class="no-data" v-if="list.length == 0">
      <view class="no-date-item">
        <image src="https://htl001.oss-cn-hangzhou.aliyuncs.com/images/no-data.png" mode="widthFix" />
        <view class="no-date-title">暂无健康目标</view>
        <u-button type="primary" style="width: 28vw" @click="onTapBack"
          >返回</u-button
        >
      </view>
    </view>

    <view class="target-list" v-if="list.length > 0">
      <view
        class="target-list-item"
        v-for="item of list"
        :key="'s_item+' + item.id"
        @click="onTap(item)"
      >
        <view class="title">{{ item.name }}</view>
        <image
          src="@/static/icon_svg/sharpicons_weight-control.svg"
          class="icons"
        />
      </view>
    </view>
  </view>
</template>

<script>
import homeBackgroundImage from "@/static/img/home/imgs-home-head-bg.png";
import { queryServiceGroup, addUserServiceGroup } from "@/api/target";

export default {
  components: {},
  data() {
    return {
      list: [],
      homeBackgroundImage,
    };
  },

  onLoad() {
    this.getList();
  },
  methods: {
    onTapBack() {
      uni.navigateBack();
    },
    onTap(item) {
      let params = {
        serviceGroupCode: item.code,
        userId: this.vuex_user.id,
      };
      addUserServiceGroup(params).then((res) => {
        if (res) {
          uni.showToast({
            title: "添加成功",
          });
        }
      });
    },
    getList() {
      let params = {};
      queryServiceGroup(params).then((res) => {
        if (res.code == "0" && res.data) {
          this.list = res.data;
          //   alert(JSON.stringify(this.list))
        }
      });
    },
  },
};
</script>

<style lang="scss" >
page {
  background: #fafafa;
}

.app-home {
  min-height: 60vh;
  background-position: top right;
  padding: 20px 14px;
  height: 200px;
}

.app-home-title {
  height: 90px;
  color: #fff;
  h1 {
    font-size: 28px;
    font-weight: bold;
    margin-top: 20px;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
  }
}

.target-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .target-list-item {
    width: 44.4vw;
    height: 28vw;
    overflow: hidden;
    background: #fff;
    border-radius: 20px;
    margin-bottom: 20px;
    .title {
      font-size: 16px;
      font-weight: bold;
      margin: 24px;
      margin-left: 20px;
    }
  }
}
.icons {
  width: 18vw;
  height: 18vw;
  opacity: 0.1;
  float: right;
  margin-top: -40px;
  margin-right: 20px;
}
.no-data {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .no-date-item {
    width: 80vw;
    .no-date-title {
      text-align: center;
      font-size: 20px;
      margin-bottom: 14px;
      font-weight: bold;
    }
  }
}


</style>