<!-- app首页（c端） -->
<template>
  <view
    class="app-home"
    :style="{
      backgroundImage: `url(https://htl001.oss-cn-hangzhou.aliyuncs.com/images/imgs-home-head-bg.png)`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    }"
  >
    <view class="app-home-user">
      <view class="app-home-user-item actived">
        <view class="app-home-user-item-img">
          <image
            :src="
              vuex_user.sex && vuex_user.sex == '0'
                ? 'https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-user-avatar-m.png'
                : 'https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-user-avatar-w.png'
            "
            class="user-logo"
          />
          <view class="app-home-user-item-img-tags">本人</view>
        </view>
      </view>
      <!-- <view class="app-home-user-item">
        <view class="app-home-user-item-img">
          <image
            src="@/static/img/temp/202071523123770037.jpeg"
            class="user-logo"
          />
          <view class="app-home-user-item-img-tags">本人</view>
        </view>
      </view> -->
    </view>
    <view class="app-home-plan">
      <view class="app-home-plan-info">
        <view class="app-home-plan-info-msg">
          {{ vuex_user.realName | filtersGreeting }}
        </view>
        <view class="app-home-plan-info-btn" @click="onSetTarget">
          设置目标
        </view>
      </view>
      <view class="app-home-plan-title" v-if="targetList.length > 0">
        健康目标：
      </view>
      <view class="app-home-plan-list">
        <view
          :class="'app-home-plan-list-items  ' + filterStatusTxt(item)"
          v-for="item of targetList"
          :key="'targetList' + item.code"
          @click="onTapTarget(item)"
        >
          <view class="app-home-plan-list-items-title">
            <view class="app-home-plan-list-items-title-h1">{{
              item.sgName
            }}</view>
            <view class="app-home-plan-list-items-title-p">还需努力</view>
          </view>
          <view class="app-home-plan-list-items-info">
            <view class="app-home-plan-list-items-info-item">
              <view class="app-home-plan-list-items-info-item-h1"
                >{{ item | filterTargetNums }}
                <span class="tips">{{ item | filterTargetUnit }}</span></view
              >
              <view class="app-home-plan-list-items-info-item-p"
                >理想{{ item | filterTargetName }}</view
              >
            </view>
            <view class="app-home-plan-list-items-info-line"></view>
            <view class="app-home-plan-list-items-info-item">
              <view class="app-home-plan-list-items-info-item-h1"
                >{{ item | filterCurrentNums }}
                <span class="tips">{{ item | filterTargetUnit }}</span></view
              >
              <view class="app-home-plan-list-items-info-item-p">
                当前{{ item | filterTargetName }}</view
              >
            </view>
          </view>
        </view>
        <!-- <view class="app-home-plan-list-items status-health">
          <view class="app-home-plan-list-items-title">
            <view class="app-home-plan-list-items-title-h1">减肥</view>
            <view class="app-home-plan-list-items-title-p">还需努力</view>
          </view>
          <view class="app-home-plan-list-items-info">
            <view class="app-home-plan-list-items-info-item">
              <view class="app-home-plan-list-items-info-item-h1"
                >65 <span class="tips">kg</span></view
              >
              <view class="app-home-plan-list-items-info-item-p">理想体重</view>
            </view>
            <view class="app-home-plan-list-items-info-line"></view>
            <view class="app-home-plan-list-items-info-item">
              <view class="app-home-plan-list-items-info-item-h1"
                >85 <span class="tips">kg</span></view
              >
              <view class="app-home-plan-list-items-info-item-p">目前体重</view>
            </view>
          </view>
        </view> -->
      </view>
    </view>

    <view class="app-home-mine">
      <view class="app-home-mine-item" @click="onTapCheckRecords">
        <view class="app-home-mine-item-info">
          <view class="app-home-mine-item-info-title">体检报告</view>
          <view class="app-home-mine-item-info-des">报告解读</view>
        </view>
        <view class="app-home-mine-item-img">
          <image
            src="@/static/img/home/imgs-home-reports.jpg"
            class="imgs"
            mode="widthFix"
          />
        </view>
      </view>
      <view
        class="app-home-mine-item"
        @click="onTapHealthRecords"
        style="background: #fcf3e2"
      >
        <view class="app-home-mine-item-info">
          <view class="app-home-mine-item-info-title">健康档案</view>
          <view class="app-home-mine-item-info-des">风险预测</view>
        </view>
        <view
          class="app-home-mine-item-img"
          style="width: 16vw; margin-right: 8px"
        >
          <image
            src="@/static/img/home/imgs-home-documents.png"
            class="imgs"
            mode="widthFix"
          />
        </view>
      </view>
    </view>
     <view class="app-section" @click="onTapQ">
      <view class="app-section-ai">
        <image
            src="@/static/img/home/imgs-home-documents.png"
           class="app-section-ai-imgs"
            mode="widthFix"
          />
        <view class="app-section-ai-content">不知道做什么体检项目？试试智慧体检定制</view>
      </view>
        
     </view>
    <view class="app-section">
      <view class="app-section-header">
        <view class="app-section-header-title">您的健康风险</view>
        <view class="app-section-header-btn" @click="onTapHealthRecords"
          >重新评测</view
        >
      </view>
      <view class="app-section-bodyer" @click="onTapRisk" v-if="isExistRisk">
        <view class="app-risk">
          <view class="app-risk-tips">
            <view class="app-risk-tips-item color-health">
              <view class="app-risk-tips-item-box" v-if="val == '低'">
                <view class="info">低风险</view>
                <view class="arrows"></view>
              </view>
            </view>
            <view class="app-risk-tips-item color-warning">
              <view class="app-risk-tips-item-box" v-if="val == '中'">
                <view class="info">中风险</view>
                <view class="arrows"></view>
              </view>
            </view>
            <view class="app-risk-tips-item color-danger">
              <view class="app-risk-tips-item-box" v-if="val == '高'">
                <view class="info">高风险</view>
                <view class="arrows"></view>
              </view>
            </view>
          </view>
          <view class="app-risk-level">
            <view
              class="app-risk-level-item bg-health"
              :class="val == '低' ? 'actived' : ''"
              >低</view
            >
            <view
              class="app-risk-level-item bg-warning"
              :class="val == '中' ? 'actived' : ''"
              >中</view
            >
            <view
              class="app-risk-level-item bg-danger"
              :class="val == '高' ? 'actived' : ''"
              >高</view
            >
          </view>
          <view class="app-risk-info color-danger"
            >发现健康风险{{ val | valName }}</view
          >
        </view>
      </view>
      <view
        class="app-section-bodyer"
        v-if="!isExistRisk"
        style="padding-top: 24px"
      >
        <u-empty text="暂时没有风险" mode="favor"></u-empty>
      </view>
    </view>

    <view class="person-title">权益服务</view>

    <view class="person-service">
      <view class="person-service-items" @click="onTap()">
        <image src="@/static/img/mine/icon-1.png" class="imgs" />

        <view class="info">
          <view class="title">专家门诊预约</view>
          <view class="des">7x24小时一对一服务</view>
          <u-tag text="不限次数" shape="circle" size="mini" mode="light" />
        </view>
      </view>
      <view class="person-service-items">
        <image src="@/static/img/mine/icon-3.png" class="imgs" />

        <view class="info">
          <view class="title">医院就医陪诊</view>
          <view class="des">7x24小时一对一服务</view>
          <u-tag text="不限次数" shape="circle" size="mini" mode="light" />
        </view>
      </view>
      <view class="person-service-items">
        <image src="@/static/img/mine/icon-2.png" class="imgs" />

        <view class="info">
          <view class="title">住院或手术绿通</view>
          <view class="des">7x24小时一对一服务</view>
          <u-tag text="不限次数" shape="circle" size="mini" mode="light" />
        </view>
      </view>
      <view class="person-service-items">
        <image src="@/static/img/mine/icon-4.png" class="imgs" />

        <view class="info">
          <view class="title">家庭医生咨询</view>
          <view class="des">7x24小时一对一服务</view>
          <u-tag text="不限次数" shape="circle" size="mini" mode="light" />
        </view>
      </view>
      <view class="person-service-items">
        <image src="@/static/img/mine/icon-1.png" class="imgs" />

        <view class="info">
          <view class="title">专科医生咨询</view>
          <view class="des">7x24小时一对一服务</view>
          <u-tag text="不限次数" shape="circle" size="mini" mode="light" />
        </view>
      </view>
      <view class="person-service-items">
        <image src="@/static/img/mine/icon-2.png" class="imgs" />

        <view class="info">
          <view class="title">中医养生之道</view>
          <view class="des">7x24小时一对一服务</view>
          <u-tag text="不限次数" shape="circle" size="mini" mode="light" />
        </view>
      </view>
    </view>
    <u-tabbar
      :list="vuex_company_tabbar"
      v-model="current"
      active-color="#3873fe"
      inactive-color="#B1AFB8"
      fontSize="8px"
      :icon-size="42"
    ></u-tabbar>

    <ui-login-popup
      :isShow="isShowLoginPopup"
      @ON-LOGIN="toLogin"
      @ON-CLOSE="onClose"
    ></ui-login-popup>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
import homeBackgroundImage from "@/static/img/home/imgs-home-head-bg.png";
import { login } from "@/api/login";
import { scaleConfigList } from "@/api/questionnaire";
import { myRiskList } from "@/api/plan";
import { queryUserServiceGroup } from "@/api/target";

export default {
  data() {
    return {
      isShowLoginPopup: false,
      homeBackgroundImage,
      current: 0,
      list: [],
      targetList: [],
      val: "",
      isExistRisk: false,
    };
  },
  computed: {},
  filters: {
    valName(val) {
      let value = "";
      if (val == "低") {
        value = "较低";
      }

      if (val == "中") {
        value = "一般";
      }

      if (val == "高") {
        value = "较高";
      }
      return value;
    },
    filterTargetNums(item) {
      if (item.sgTargetConfig && item.sgTargetConfig.length > 0) {
        let data = item.sgTargetConfig[0];
        for (let v of item.sgTargetConfig) {
          if (v.m === "Y") {
            data = v;
            break;
          }
        }

        if (
          data.op == "between" ||
          data.op == "between_c" ||
          data.op == "between_cl" ||
          data.op == "between_cr"
        ) {
          return data.v1.vc + "~" + data.v2.vc;
        }
        if (data.op == "lt") {
          return "<" + data.v1.vc;
        }
        if (data.op == "eq") {
          return "=" + data.v1.vc;
        }
        if (data.op == "gt") {
          return ">" + data.v1.vc;
        }

        if (data.op == "ge") {
          return ">=" + data.v1.vc;
        }

        if (data.op == "le") {
          return "<=" + data.v1.vc;
        }
      }
    },
    filterTargetUnit(item) {
      if (item.sgTargetConfig && item.sgTargetConfig.length > 0) {
        let data = item.sgTargetConfig[0];
        for (let v of item.sgTargetConfig) {
          if (v.m === "Y") {
            data = v;
            break;
          }
        }
        return data.u;
      }
    },
    filterCurrentNums(item) {
      if (item.sgTargetConfig && item.sgTargetConfig.length > 0) {
        let data = item.sgTargetConfig[0];
        for (let v of item.sgTargetConfig) {
          if (v.m === "Y") {
            data = v;
            break;
          }
        }
        return data.uv;
      }
    },
    filterTargetName(item) {
      if (item.sgTargetConfig && item.sgTargetConfig.length > 0) {
        let data = item.sgTargetConfig[0];
        for (let v of item.sgTargetConfig) {
          if (v.m === "Y") {
            data = v;
            break;
          }
        }
        return data.n;
      }
    },

    filtersGreeting(name) {
      var dd = new Date();
      var hour = dd.getHours(); //获取当前时
      if (hour > 5 && hour <= 11) {
        //早上
        return name + ",早上好！";
      } else if (hour > 11 && hour <= 14) {
        //中午
        return name + ",下午要劳逸结合哦！";
      } else if (hour > 14 && hour <= 19) {
        //下午
        return name + ",祝您下午工作愉快！";
      } else if ((hour > 19 && hour <= 24) || (hour > 0 && hour <= 5)) {
        //晚上
        return name + ",晚上早点休息哦！";
      } else {
        //凌晨
        return name + ",熬夜伤肾哦！";
      }
    },
  },
  onLoad() {
    this.init();
    this.getRiskList();
    this.getTargetList();
  },
  onShow() {
    this.toLogin();
  },
  onPullDownRefresh() {
    this.getData();
  },
  methods: {
    onTap() {
      uni.navigateTo({
        url: "/pages/health-form/list",
      });
    },
    onTapTarget(item) {
      uni.navigateTo({
        url: "/pages/target/detail?id=" + item.serviceGroupCode,
      });
    },
    filterStatusTxt(item) {
      if (item.sgTargetConfig && item.sgTargetConfig.length > 0) {
        let data = item.sgTargetConfig[0];

        for (let v of item.sgTargetConfig) {
          if (v.m === "Y") {
            data = v;
            break;
          }
        }

        if (data.op === "between") {
          if (
            Number(data.uv) > Number(data.v1.vc) &&
            Number(data.uv) < Number(data.v2.vc)
          ) {
            return "status-health";
          } else {
            return "status-warning";
          }
        }

        if (data.op == "lt") {
          if (Number(data.uv) < Number(data.v1.vc)) {
            return "status-health";
          } else {
            return "status-warning";
          }
        }

        if (data.op == "eq") {
          if (Number(data.uv) == Number(data.v1.vc)) {
            return "status-health";
          } else {
            return "status-warning";
          }
        }

        if (data.op == "ne") {
          if (Number(data.uv) != Number(data.v1.vc)) {
            return "status-health";
          } else {
            return "status-warning";
          }
        }

        if (data.op == "le") {
          if (Number(data.uv) <= Number(data.v1.vc)) {
            return "status-health";
          } else {
            return "status-warning";
          }
        }

        if (data.op == "gt") {
          if (Number(data.uv) > Number(data.v1.vc)) {
            return "status-health";
          } else {
            return "status-warning";
          }
        }

        if (data.op == "ge") {
          if (Number(data.uv) >= Number(data.v1.vc)) {
            return "status-health";
          } else {
            return "status-warning";
          }
        }
      } else {
        return " hide";
      }
    },
    getTargetList() {
      let params = {
        userId: this.vuex_user.id,
      };
      queryUserServiceGroup(params).then((res) => {
        if (res.code == "0" && res?.data) {
          this.targetList = res.data;
        } else {
          this.targetList = [];
        }
      });
    },
    getRiskList() {
      myRiskList({}).then((res) => {
        console.log(res.data);
        if (res.data) {
          this.isExistRisk = true;
          let data = res.data.map((item) => {
            return item.grade;
          });

          let arr = [...new Set(data)];
          let val = "";
          if (arr.indexOf("低") != -1) {
            val = "低";
          }

          if (arr.indexOf("中") != -1) {
            val = "中";
          }
          if (arr.indexOf("高") != -1) {
            val = "高";
          }
          this.val = val;
        } else {
          this.isExistRisk = false;
        }
      });
    },
    toLogin() {
      console.log(this.vuex_token, "显示数据哈哈哈");
      if (!this.vuex_token) {
        uni.navigateTo({ url: "/pages/auth/auth" });
      } else {
        // if (this.vuex_user.id == "-1") {
        //   uni.navigateTo({ url: "/pages/login/newLogin" });
        // }
      }
    },
    onClickAgain() {
      uni.navigateTo({ url: "/pages/home/homecopy" });
    },
    onTapRisk() {
      uni.navigateTo({ url: "/pages/risk/index" });
    },
    onTapCheckRecords() {
      uni.navigateTo({ url: "/pages/check-records/list" });
    },
    onTapHealthRecords() {
      uni.navigateTo({ url: "/pages/health-records/index" });
    },
    onTapQ(e){
       uni.navigateTo({
        url: `/pages/report/questionnaire?id=SCID1587679383601291264`,
      });
    },
    onClickTo(e) {
      uni.navigateTo({
        url: `/pages/report/questionnaire?id=${e.id}`,
      });
    },
    init() {
      scaleConfigList({}).then((res) => {
        if (res.code == "0" && res.data?.records) {
          this.list = res.data.records;
        }
      });
    },
    isLogistics() {
      if (this.vuex_user?.userTypeTwo == "logi") {
      } else if (this.vuex_user?.userTypeTwo == "nurse") {
      }
    },
    login() {
      let that = this;
      uni.login({
        scopes: "auth_base", //静默登录
        success: (res) => {
          let params = {
            appNo: "H",
            code: res.code,
            thirdAppCode: "t_wx_mini",
            userTypeOne: "1",
          };

          login(params).then((res) => {
            if (res.code == "0") {
              that.$u.vuex("vuex_token", res.data.token);
              that.$u.vuex("vuex_user", res.data);
              if (res.data.id == "-1") {
                this.isShowLoginPopup = true;
              }
            }
          });
        },
      });
    },
    onSetTarget() {
      uni.navigateTo({ url: "/pages/target/list" });
    },
    onClickLogin() {
      this.isShowLoginPopup = true;
    },
    onClose() {
      this.isLogistics();
      this.isShowLoginPopup = false;
    },

    fmtDate(date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;
      var myddy = date.getDay(); //获取存储当前日期
      var weekday = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      return y + "年" + m + "月" + d + "日 " + weekday[myddy];
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/common.scss";
page {
  background: #fafafa;
}
/** 头部背景 */
.app-home {
  min-height: 60vh;
  background-position: top right;
  padding: 20px 14px;
}
/** 切换用户 */
.app-home-user {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  &-item {
    width: 60px;
    overflow: hidden;
    &-img {
      width: 70px;
      height: 70px;
      .user-logo {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      &-tags {
        width: 50px;
        height: 26px;
        color: #fff;
        background: #3873fe;
        border-radius: 13px;
        border: 1px #fff solid;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        margin-top: -4px;
        margin-left: 20px;
        display: none;
      }
    }
  }
  .actived {
    width: 90px;
    .app-home-user-item-img {
      width: 70px;
      height: 80px;
      .user-logo {
        width: 58px;
        height: 58px;
        border-radius: 50%;
        border: 3px #fff solid;
      }
      .app-home-user-item-img-tags {
        display: block;
        width: 40px;
        height: 20px;
        color: #fff;
        font-size: 12px;
        font-weight: 300;
        background: #3873fe;
        border-radius: 10px;
        border: 1px #fff solid;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        margin-top: -24px;
        margin-left: 30px;
      }
    }
  }
}

/** 健康档案 */
.app-home-mine {
  border-radius: 10px;
  background: #fff;
  padding: 14px;
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .app-home-mine-item {
    width: 48.4%;
    height: 80px;
    border-radius: 6px;
    background: #f0faf7;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .app-home-mine-item-info {
      padding-left: 10px;
      flex: 1;
      &-title {
        font-size: 16px;
        font-weight: 600;
      }
      &-des {
        font-size: 12px;
        color: #707070;
      }
    }
    .app-home-mine-item-img {
      width: 20vw;
      height: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: flex-end;
      .imgs {
        width: 100%;
        height: 100%;
      }
    }
  }
}

/** 健康风险 */
.app-risk {
  .app-risk-tips {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .app-risk-tips-item {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      width: 33.33%;
      height: 60px;
      .app-risk-tips-item-box {
        .info {
          width: 100%;
          text-align: center;
          margin-top: 14px;
        }
        .arrows {
          margin-top: 0px;
          width: 0;
          height: 0;
          margin: 2px auto;
        }
      }

      .app-risk-tips-item-box:nth-child(0) {
        .arrows {
          border: 6px solid transparent;
          border-top: 6px solid #4dad9b;
        }
      }

      .app-risk-tips-item-box:nth-child(3) .arrows {
        border: 6px solid transparent;
        border-top: 6px solid #ea6d2c;
      }
    }
  }
  .app-risk-info {
    text-align: center;
    padding: 20px;
    font-size: 16px;
  }
  .app-risk-level {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .app-risk-level-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33.33%;
      height: 24px;
      color: #fff;
    }
    .actived {
      height: 32px;
    }
    .app-risk-level-item:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    .app-risk-level-item:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }
}

/** 健康目标 */
.app-home-plan {
  border-radius: 10px;
  background: #fff;
  padding: 10px 14px;
  .app-home-plan-info {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px #eeeeee solid;
    .app-home-plan-info-msg {
      font-size: 18px;
      font-weight: 600;
    }
    .app-home-plan-info-btn {
      border: 1px #e8e8e8 solid;
      border-radius: 14px;
      height: 28px;
      font-size: 14px;
      padding: 0 10px;
      color: #3873fe;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .app-home-plan-title {
    margin: 8px 0px;
    color: #333;
    font-size: 14px;
  }
  .app-home-plan-list {
    width: 100%;
    .app-home-plan-list-items:last-child {
      margin-bottom: 4px;
    }

    .status-health {
      background: #effaf6;
    }
    .status-warning {
      background: #fcf0df;
    }
    
    .app-home-plan-list-items {
      width: 100%;
      height: 75px;
      border-radius: 8px;
      padding: 10px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .app-home-plan-list-items-title {
        width: 40vw;
        &-h1 {
          font-size: 16px;
          font-weight: 600;
        }
        &-p {
          color: #999999;
        }
      }
      .app-home-plan-list-items-info {
        width: 54vw;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        &-line {
          height: 24px;
          width: 0.5px;
          background: #e6dcce;
          margin: 0px 6px;
        }
        &-item {
          padding: 10px;
          text-align: center;
          &-h1 {
            font-size: 18px;
            .tips {
              font-size: 10px;
              margin-left: 4px;
            }
          }
          &-p {
            color: #999999;
            font-size: 10px;
          }
        }
      }
    }
    .hide {
      display: none;
    }
  }
}
.person-service {
  display: flex;
  justify-content: space-between;
  margin: 14px 0px;
  flex-wrap: wrap;
  &-items {
    width: 48.8%;
    background: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 8px;
    .imgs {
      width: 40px;
      height: 40px;
      margin-right: 8px;
    }
    .info {
      flex: 1;
      .title {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 4px;
      }
      .des {
        font-size: 10px;
        color: #999;
        margin-bottom: 4px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}

.person-title {
  margin: 18px 0px;
  font-size: 16px;
  font-weight: bold;
}

.app-section-ai{
  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10px;
  .app-section-ai-imgs{
    width: 30px;
    height: 30px;
  }
  .app-section-ai-content{
    margin-left: 10px;
  }
}
</style>
