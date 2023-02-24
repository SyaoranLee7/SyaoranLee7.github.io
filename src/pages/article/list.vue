<!-- 登录页面 -->
<template>
  <view class="app-article">
    <u-tabs-swiper
      ref="uTabs"
      :list="tabs"
      :current="current"
      @change="tabsChange"
      :is-scroll="false"
      swiperWidth="750"
    ></u-tabs-swiper>

    <!-- <u-tabs
      :list="tabs"
      :is-scroll="true"
      :current="current"
      @change="change"
    ></u-tabs> -->

    <swiper
      :current="swiperCurrent"
      @transition="transition"
      @animationfinish="animationfinish"
    >
      <swiper-item
        class="swiper-item"
        v-for="(item, index) in tabs"
        :key="index"
      >
        <scroll-view
          scroll-y
          style="height: 800rpx; width: 100%"
          @scrolltolower="onreachBottom"
        >
          ...
        </scroll-view>
      </swiper-item>
    </swiper>

    <!-- <view class="app-article-list">
      <view v-for="item of list" :key="'items_' + item.articleNo">
        <view
          class="app-article-list-item"
          @click="onTap(item.articleNo)"
          v-show="item.style === 'video'"
        >
          <view class="header">
            <view class="title">{{ item.title }}</view>
            <view class="info"> {{ item.source }} </view>
          </view>
          <view class="content">
            <video
              id="myVideo"
              class="video"
              :src="item.content"
              :controls="true"
            ></video>
          </view>
        </view>
        <view
          class="app-article-list-item"
          @click="onTap(item.articleNo)"
          v-show="item.style === 'imgtext' && item.thumbnail == ''">
          <view class="header">
            <view class="title">{{ item.title }}</view>
            <view class="info">{{ item.source }} </view>
          </view>
          <view class="content">
            {{ item.summary }}
          </view>
        </view>
        <view
          class="app-article-list-item"
          @click="onTap(item.articleNo)"
          v-show="item.style === 'imgtext' && item.thumbnail != ''">
          <view class="header">
            <view class="title">{{ item.title }}</view>
            <view class="info">{{ item.source }}</view>
          </view>
          <view class="content-item">
            <view class="info">
              {{ item.summary }}
            </view>
            <image :src="item.thumbnail" class="imgs" />
          </view>
        </view>
      </view>
    </view> -->

    <u-tabbar
      :list="vuex_company_tabbar"
      v-model="current"
      active-color="#3873fe"
      inactive-color="#B1AFB8"
      fontSize="8px"
      :icon-size="42"
    ></u-tabbar>
  </view>
</template>
  
<script>
import { queryArticleTree, queryArticles } from "@/api/article";
export default {
  data() {
    return {
      current: 0,
      tabs: [],
      list: [],
      swiperCurrent:0,
    };
  },
  onLoad() {
    this.getSorts();
  },
  methods: {
    tabsChange(index) {
      this.swiperCurrent = index;
    },
    // swiper-item左右移动，通知tabs的滑块跟随移动
    transition(e) {
      let dx = e.detail.dx;
      this.$refs.uTabs.setDx(dx);
    },
    // 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
    // swiper滑动结束，分别设置tabs和swiper的状态
    animationfinish(e) {
      let current = e.detail.current;
      this.$refs.uTabs.setFinishCurrent(current);
      this.swiperCurrent = current;
      this.current = current;
    },
    // scroll-view到底部加载更多
    onreachBottom() {},
    change(index) {
      this.current = index;
      this.getSorts();
    },
    getSorts() {
      let params = {};
      queryArticleTree(params).then((res) => {
        this.tabs = [];
        if (res.code && res.data) {
          for (let v of res.data) {
            let obj = {
              name: v.title,
              id: v.id,
            };
            this.tabs.push(obj);
          }
          if (this.tabs.length > 0) {
            this.queryArticles(this.tabs[this.current].id);
          }
        }
      });
    },
    queryArticles(id) {
      let params = {
        rows: 20,
        page: 1,
        categoryId: id,
      };
      queryArticles(params).then((res) => {
        if (res.code === "0" && res.data && res.data.records) {
          this.list = res.data.records;
        } else {
          this.list = [];
        }
      });
    },
    onTap(id) {
      uni.navigateTo({
        url: "/pages/article/detail?id=" + id,
      });
    },
  },
};
</script>
  
<style lang="scss">
page {
  background-color: #ffffff;
}
.app-article-list {
  padding: 14px;
  .app-article-list-item {
    padding: 14px 0px;
    border-bottom: 1px #eee solid;
    .header {
      .title {
        font-size: 16px;
        font-weight: bold;
      }
      .info {
        display: flex;
        align-items: center;
        padding: 10px 0px;
        font-size: 14px;
        color: #999;
        .user-head {
          width: 22px;
          height: 22px;
          background: #ccc;
          border-radius: 50%;
          margin-right: 4px;
        }
      }
    }
    .content {
      width: 100%;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
      .video {
        width: 100%;
      }
    }
    .content-item {
      display: flex;
      justify-content: space-between;
      .info {
        color: #666;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .imgs {
        width: 120px;
        height: 100px;
        margin-left: 10px;
      }
    }
  }
}
</style>
  