<!-- 登录页面 -->
<template>
  <view class="app-article-detail">
    <view class="app-article-detail-header">
      <view class="title"> {{ data.title }} </view>
      <view class="info">
        <view class="user-name"> {{ data.source }} </view>
      </view>
      <view class="tips">本文国贸荟编辑审核</view>
    </view>
    <view class="app-article-detail-content">
      <u-parse
        :html="data.content"
        :tag-style="style"
        v-if="data.content && data.style == 'imgtext'"
      ></u-parse>
      <video
        id="myVideo"
        class="video"
        :src="data.content"
        :controls="true"
        v-if="data.content && data.style == 'video'"
      ></video>
    </view>
  </view>
</template>
  
<script>
import { getArticles } from "@/api/article";
export default {
  data() {
    return {
      articleNo: "",
      data: {},
      style: {
        // 字符串的形式
        p: "font-size:32rpx; margin-bottom:30rpx",
        span: "font-size: 32rpx",
        img: "margin:24px 0px",
      },
    };
  },
  onLoad(opt) {
    if (opt && opt?.id) {
      this.articleNo = opt.id;
      this.getDetails();
    }
  },
  methods: {
    getDetails() {
      getArticles({ articleNo: this.articleNo }).then((res) => {
        if (res?.code && res.data) {
          this.data = res.data;
        }
      });
    },
  },
};
</script>
  
<style lang="scss">
page {
  background-color: #ffffff;
}
.app-article-detail {
  padding: 18px;
  &-header {
    font-size: 24px;
    font-weight: 600;
    padding: 20px 0px;
    .title {
      margin: 14px 0px;
    }
    .info {
      display: flex;
      align-items: center;

      .user-logo {
        width: 32px;
        height: 32px;
        background: #eee;
        border-radius: 50%;
        margin-right: 8px;
      }
      .user-name {
        font-size: 14px;
        color: #3873fe;
        font-weight: 400;
      }
    }
    .tips {
      margin-top: 14px;
      border-top: 1px #eee solid;
      font-size: 12px;
      font-weight: 400;
      color: #999;
      padding: 14px 0px;
    }
  }
  &-content {
    line-height: 1.8;
    img {
      margin: 14px 0px;
    }
  }
}
.video{
    width: 100%;
}
</style>
  