

<template>
  <view
    class="app-home"
    :style="{
      backgroundImage: `url(${homeBackgroundImage})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <view class="app-home-title">
      <h1>{{ data.name }}</h1>
      <p>金牌团队守护 尊享健康权益</p>
    </view>

    <view class="app-item-title">关注指标</view>
    <view class="app-item-box">
      <view
        class="app-item-box-items"
        v-for="item of targetConfig"
        :key="'targetConfig' + item.c"
      >
        <view :class="'box ' + getStatus(item)">
          <view class="nums"
            >{{ item.uv == "" ? "-" : item.uv }}
            {{ item.uv == "" ? "" : item.u }}</view
          >
          <view class="status">{{ item | filterTargetStatus }}</view>
          <view class="traget">{{ item | filterTargetNums }}</view>
          <view class="traget_txt">目标值</view>
        </view>
        <view class="text"> {{ item.n }} </view>
      </view>
    </view>
    <view class="app-item-title">说明</view>
    <view class="app-section">
      <view class="app-section-des">{{ data.remark }}</view>
    </view>
    <view class="app-item-title">健康方案</view>
    <view class="app-plan-list">
      <view
        class="app-plan-list-item"
        v-for="item of list"
        :key="'items' + item.code"
      >
        <view class="item-icons">
          <image
            :src="
              'https://htl001.oss-cn-hangzhou.aliyuncs.com/icon/icon_' +
              item.contentType +
              '%403x.png'
            "
            class="item-icons-imgs"
          />
        </view>
        <view class="info">
          <view class="title">{{ item.name }}</view>
          <view class="des">{{ item.contentSuggest }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import homeBackgroundImage from "@/static/img/home/imgs-home-head-bg.png";
import { getUserServiceInfoByCode } from "@/api/target";

export default {
  components: {},
  data() {
    return {
      list: [],
      homeBackgroundImage,
      targetConfig: [],
      data: {},
    };
  },
  filters: {
    filterTargetStatus(item) {
      if (
        item.op == "between" ||
        item.op == "between_cr" ||
        item.op == "between_cl" ||
        item.op == "between_c"
      ) {
        if (
          Number(item.uv) > Number(item.v1.vc) &&
          Number(item.uv) < Number(item.v2.vc)
        ) {
          return "正常";
        } else {
          return "不达标";
        }
      }
      if (item.op == "lt") {
        if (Number(item.uv) < Number(item.v1.vc)) {
          return "正常";
        } else {
          return "异常升高";
        }
      }
      if (item.op == "le") {
        if (Number(item.uv) <= Number(item.v1.vc)) {
          return "正常";
        } else {
          return "异常升高";
        }
      }
      if (item.op == "gt") {
        if (Number(item.uv) > Number(item.v1.vc)) {
          return "正常";
        } else {
          return "异常降低";
        }
      }
      if (item.op == "ge") {
        if (Number(item.uv) >= Number(item.v1.vc)) {
          return "正常";
        } else {
          return "异常降低";
        }
      }
    },
    filterTargetNums(item) {
      if (item.op == "between") {
        return item.v1.vc + "~" + item.v2.vc;
      }
      if (item.op == "lt") {
        return "<" + item.v1.vc;
      }
      if (item.op == "le") {
        return "<=" + item.v1.vc;
      }
      if (item.op == "gt") {
        return ">" + item.v1.vc;
      }
      if (item.op == "ge") {
        return ">=" + item.v1.vc;
      }
      if (item.op == "between_cl") {
        return item.v1.vc + "~" + item.v2.vc;
      }
      if (item.op == "between_cr") {
        return item.v1.vc + "~" + item.v2.vc;
      }
      if (item.op == "between_c") {
        return item.v1.vc + "~" + item.v2.vc;
      }
    },
  },
  onLoad() {
    this.getDetail();
  },
  methods: {
    getStatus(item) {
      if (item.op == "between") {
        if (
          Number(item.uv) > Number(item.v1.vc) &&
          Number(item.uv) < Number(item.v2.vc)
        ) {
          return "success";
        } else {
          return "fail";
        }
      }
      if (item.op == "lt") {
        if (Number(item.uv) < Number(item.v1.vc)) {
          return "success";
        } else {
          return "fail";
        }
      }
      if (item.op == "le") {
        if (Number(item.uv) <= Number(item.v1.vc)) {
          return "success";
        } else {
          return "fail";
        }
      }
      if (item.op == "gt") {
        if (Number(item.uv) > Number(item.v1.vc)) {
          return "success";
        } else {
          return "fail";
        }
      }
      if (item.op == "ge") {
        if (Number(item.uv) >= Number(item.v1.vc)) {
          return "success";
        } else {
          return "fail";
        }
      }
      if (item.op == "between_cl") {
        if (
          Number(item.uv) >= Number(item.v1.vc) &&
          Number(item.uv) < Number(item.v2.vc)
        ) {
          return "success";
        } else {
          return "fail";
        }
      }
      if (item.op == "between_cr") {
        if (
          Number(item.uv) > Number(item.v1.vc) &&
          Number(item.uv) <= Number(item.v2.vc)
        ) {
          return "success";
        } else {
          return "fail";
        }
      }
      if (item.op == "between_c") {
        if (
          Number(item.uv) >= Number(item.v1.vc) &&
          Number(item.uv) <= Number(item.v2.vc)
        ) {
          return "success";
        } else {
          return "fail";
        }
      }
    },
    onTapBack() {
      uni.navigateBack();
    },
    onTap(item) {
      //   let params = {
      //     serviceGroupCode: item.code,
      //     userId: this.vuex_user.id,
      //   };
      //   addUserServiceGroup(params).then(res=>{
      //     if(res){
      //         uni.showToast({
      //             title:'添加成功'
      //         })
      //     }
      //   });
    },
    getDetail() {
      let idx = this.$route.query.id;
      let params = {
        code: idx,
      };
      getUserServiceInfoByCode(params).then((res) => {
        if (res.code == "0" && res.data) {
          this.data = res.data;
          this.list = res.data.list;
          this.targetConfig = res.data.targetConfig;
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

.app-section {
  width: 100%;
  padding: 14px;
  overflow: hidden;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  &-des {
    font-size: 14px;
  }
}

.app-home {
  min-height: 60vh;
  background-position: top right;
  padding: 20px 14px;
  height: 200px;
}

.app-home-title {
  margin-bottom: 10px;
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

.app-plan-list {
  width: 100%;
  padding-bottom: 10px;
}

.app-plan-list-item {
  background: #fff;
  border-radius: 10px;
  padding: 14px;
  margin-bottom: 10px;
  display: flex;
  .item-icons {
    width: 36px;
    height: 36px;
    margin-right: 14px;
    .item-icons-imgs {
      width: 36px;
      height: 36px;
    }
  }
  .info {
    margin-top: 6px;
    .title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .des {
      color: #999;
      font-size: 13px;
    }
  }
}
.app-item-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-item-box-items {
  width: 29vw;
  margin-bottom: 10px;
  text-align: center;
  .box {
    width: 29vw;
    height: 29vw;
    background: #fff;
    border: 1px #eee solid;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    .nums {
      margin-top: 6px;
      text-align: right;
      font-size: 16px;
      font-weight: bold;
    }
    .status {
      margin-top: 4px;
      text-align: right;
      font-size: 12px;
      color: #999;
    }
    .traget {
      margin-top: 20px;
      font-size: 12px;
      text-align: right;
    }
    .traget_txt {
      text-align: right;
      color: #999;
      font-size: 10px;
    }
  }
  .success {
    border: 1px #009032 solid;
    .nums {
      color: #009032;
    }
  }
  .fail {
    border: 1px #ff6600 solid;
    .nums {
      color: #ff6600;
    }
  }
  .text {
    font-size: 12px;
  }
}
.app-item-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 20px;
}
.app-section-des {
  font-size: 13px;
  color: #666;
}
</style>