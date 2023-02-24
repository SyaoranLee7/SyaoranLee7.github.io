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
      <!-- <view class="app-home-plan-title" v-if="targetList.length > 0">
        健康目标：
      </view> -->

      <view class="app-home-plan-box" v-if="targetList.length > 0">
        <view class="app-home-plan-box-title"> 健康目标: </view>
        <view class="app-home-plan-box-list">
          <view
            class="app-home-plan-box-list-items"
            v-for="item of targetList"
            :key="'targetList' + item.code"
            >{{ item.serviceGroupName }}</view
          >
        </view>
      </view>
      <!-- <view class="app-home-plan-list">
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
      </view> -->
    </view>

    <swiper
      class="swiper"
      circular
      :indicator-dots="false"
      :autoplay="true"
      :interval="5000"
      :duration="500"
      v-if="tips.length != 0"
    >
      <swiper-item v-for="(item, index) of tips" :key="'swiper_' + index">
        <view class="app-home-target">
          <image
            src="https://htl001.oss-cn-hangzhou.aliyuncs.com/icon/icon-target-warning.png"
            class="app-home-target-icon"
          />

          <view class="app-home-target-info">
            <view class="app-home-target-info-title">{{ item.tips }}</view>
            <view class="app-home-target-info-des">{{ item.date }}</view>
          </view>
        </view>
      </swiper-item>
    </swiper>

    <!-- <view class="app-home-check">
      <view class="app-home-check-left" @click="onTap()"></view>
      <view class="app-home-check-right">
        <view class="app-home-check-right-diy" @click="onTapQ"></view>
        <view
          class="app-home-check-right-reports"
          @click="onTapCheckRecords"
        ></view>
      </view>
    </view> -->

    <!-- <view class="app-home-mine">
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
        <view class="app-section-ai-content"
          >不知道做什么体检项目？试试智慧体检定制</view
        >
      </view>
    </view> -->
    <view class="app-section">
      <view class="app-section-header">
        <view class="app-section-header-title">您的健康风险</view>
        <view class="app-section-header-btn" @click="onTapHealthRecords"
          >我的健康档案</view
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
    <view class="app-mission">
      <lxCalendar @change="onChangeDate"></lxCalendar>
      <view class="app-home-calorie">
        <view class="app-home-calorie-box">
          <view class="app-home-calorie-box-chart">
            <CustomProgress
              :value="calorie_target"
              :border_width="16"
              :progress_width="160"
              :progress_height="160"
              :radius="70"
            ></CustomProgress>
          </view>
          <view class="app-home-calorie-box-detail">
            <view class="nums"
              >{{ calorie_in }}<view class="unit">大卡</view></view
            >
            <view class="txt">净摄入量</view>
            <view class="target">还可以摄入{{ calorie_need }}大卡</view>
          </view>
        </view>
        <view class="app-home-calorie-info">
          <view class="app-home-calorie-info-item">
            <image
              src="https://htl001.oss-cn-hangzhou.aliyuncs.com/icon/icon_food%403x.png"
              class="icon"
            ></image>
            <view class="info">
              <view class="title">饮食摄取</view>
              <view class="nums"
                >{{ calorie_in }}<span class="unit">大卡</span></view
              >
            </view>
          </view>
          <view class="app-home-calorie-info-item">
            <image
              src="https://htl001.oss-cn-hangzhou.aliyuncs.com/icon/icon_sport%403x.png"
              class="icon"
            ></image>
            <view class="info">
              <view class="title">运动消耗</view>
              <view class="nums"
                >{{ calorie_out }}<span class="unit">大卡</span></view
              >
            </view>
          </view>
        </view>
      </view>
      <u-tabs
        :list="tabs"
        :is-scroll="true"
        :current="current"
        @change="change"
      ></u-tabs>

      <view class="app-mission-list" v-if="tabs.length > 0">
        <view
          class="app-mission-list-item"
          v-for="item of serviceList"
          :key="'serviceList_' + item.healthyServiceCode"
          @click="onTapPlan(item)"
        >
          <image
            :src="
              'https://htl001.oss-cn-hangzhou.aliyuncs.com/icon/icon_' +
              item.serviceContentType +
              '%403x.png'
            "
            class="app-mission-list-item__icon"
          />
          <view class="app-mission-list-item-info">
            <view class="app-mission-list-item-info__title">{{
              item.serviceName
            }}</view>
            <view class="app-mission-list-item-info__des">{{
              item.serviceContentSuggest
            }}</view>
          </view>
          <view class="app-mission-list-item__timeline">{{
            item.planExeDt | filterDate
          }}</view>
        </view>
      </view>
    </view>
    <!-- <u-tabbar
      :v-if="vuex_mode != 'hl'"
      :list="
        vuex_mode && vuex_mode == 'hl' ? vuex_sales_tabbar : vuex_company_tabbar
      "
      v-model="current"
      @click="onTap(index)"
      active-color="#3873fe"
      inactive-color="#B1AFB8"
      fontSize="8px"
      :icon-size="42"
    ></u-tabbar> -->

    <view class="tabbar">
      <view class="tabbar_items" @click="onTapHome()">
        <image
          src="https://hktimgs.oss-cn-shanghai.aliyuncs.com/icons/home.png"
          class="icons"
        ></image>
        <view class="text">首页</view>
      </view>
      <view class="tabbar_items" @click="onTapProduct()">
        <image
          src="https://hktimgs.oss-cn-shanghai.aliyuncs.com/icons/product.png"
          class="icons"
        ></image>
        <view class="text">产品</view>
      </view>
      <view class="tabbar_items">
        <image
          src="https://hktimgs.oss-cn-shanghai.aliyuncs.com/icons/health-a.png"
          class="icons"
        ></image>
        <view class="text">健康</view>
      </view>
      <view class="tabbar_items" @click="onTapPerson()">
        <image
          src="https://hktimgs.oss-cn-shanghai.aliyuncs.com/icons/person.png"
          class="icons"
        ></image>
        <view class="text">我的</view>
      </view>
    </view>

    <ui-login-popup
      :isShow="isShowLoginPopup"
      @ON-LOGIN="toLogin"
      @ON-CLOSE="onClose"
    ></ui-login-popup>

    <u-toast ref="uToast" />
  </view>
</template>

<script>
import lxCalendar from "@/components/lx-calendar/lx-calendar.vue";
import homeBackgroundImage from "@/static/img/home/imgs-home-head-bg.png";
import { login, loginByThirdLH, updateUserInfo } from "@/api/login";
// import { scaleConfigList } from "@/api/questionnaire";
import { myRiskList } from "@/api/plan";
import { queryUserServiceGroup } from "@/api/target";
import { queryServiceTask } from "@/api/plan";
import { getUserTargetDataByDay } from "@/api/service";
import CustomProgress from "@/components/CustomProgress/CustomProgress.vue";
import img from "../risk/img.vue";
import { getDataUserSummaryDayList } from "@/api/report";
import { sevenDays } from "@/utils/utils_date";
import { getUserBy3rds } from "@/api/3rd";
export default {
  components: { img, lxCalendar, CustomProgress },
  data() {
    return {
      code: "", //罗湖code
      query_date: "",
      today: "",
      isShowLoginPopup: false,
      homeBackgroundImage,
      current: 0,
      list: [],
      calorie_target: 1,
      calorie_in: 0,
      calorie_out: 0,
      calorie_need: 0,
      targetList: [],
      serviceList: [],
      val: "",
      tips: [],
      tabs: [],
      current: 0,
      isExistRisk: false,
      mode: "",
      isLoaded: false,
    };
  },
  computed: {},
  filters: {
    filterDate(dateStr) {
      if (dateStr !== "") {
        //2020-02-12 02:00:02
        return dateStr.substring(11, 16);
      }
      return "";
    },
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
  onLoad(e) {
    if (e.mode) {
      //内嵌版本
      this.mode = e.mode;
      this.$u.vuex("vuex_mode", this.mode);
    }
    if (e.token) {
      this.code = e.token;
      this.toLoginByThirds();
    } else {
      this.toLogin();
    }
  },
  onShow() {
    if (this.isLoaded) {
      this.getData();
    }
  },
  onPullDownRefresh() {
    this.getData();
    uni.stopPullDownRefresh();
  },
  methods: {
    onTapHome() {
      window.location.href =
        "https://nat.szlhyy.com.cn/xiaoh/yjy/patient/#/home";
    },
    onTapProduct() {
      window.location.href =
        "https://nat.szlhyy.com.cn/xiaoh/yjy/patient/#/products";
    },
    onTapPerson() {
      window.location.href =
        "https://nat.szlhyy.com.cn/xiaoh/yjy/patient/#/my";
    },
    init() {
      let date = new Date();
      let day;
      if (date.getDate().toString().length == 2) {
        day = date.getDate();
      } else {
        day = "0" + date.getDate();
      }
      this.query_date =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + day;
      this.today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + day;
      this.getData();
    },
    toLogin() {
      if (!this.vuex_token) {
        if (this.mode == "hl") {
          window.location.href =
            "https://nat.szlhyy.com.cn/nginx/lhyywebhospital/authorize?redirectUrl=" +
            encodeURIComponent(process.env.VUE_APP_WX_APP_R_URL);
        } else {
            uni.navigateTo({ url: "/pages/auth/auth" });
        }
      } else {
        this.init();
      }
    },
    //拿到code调用 第三方登录接口获取token
    toLoginByThirds() {
      let params = {
        code: this.code,
      };
      loginByThirdLH(params).then((res) => {
        if (res?.code == "0" && res.data) {
          console.log(res.data);
          this.$u.vuex("vuex_token", res.data.token);
          this.$u.vuex("vuex_user", res.data);

          //setTimeout(this.init(),500)
          this.init();
        } else {
          //重新登录
        }
      });
    },
    getData() {
      this.getRiskList();
      this.getTargetList();
      this.getServiceList();
      this.getTargetByUser();
      this.getUserSummaryDay();
      debugger;
      if(this.vuex_mode && this.vuex_mode == 'hl'){
          this.get3rdsUser();
      }
    
      this.isLoaded = true;
    },
    get3rdsUser() {
      let params = {
        user_id: this.vuex_user.id,
      };
      getUserBy3rds(params).then((res) => {
        if (res) {
          console.log(JSON.stringify(res));
          this.updateUser(res);
        }
      });
    },
    updateUser(data) {
      //更新用户信息
      let params = {
        realName: data?.name,
        nickName: data?.name,
      };
      updateUserInfo(params).then((res) => {
        if (res?.code == "0" && res.data) {
          this.$u.vuex("vuex_user", res.data);
        }
      });
    },
    onTap() {
      uni.navigateTo({
        url: "/pages/health-form/list",
      });
    },
    getUserSummaryDay() {
      let dataDts = sevenDays();
      let params = {
        //dataDt: this.today,
        dataDts: dataDts,
      };
      getDataUserSummaryDayList(params).then((res) => {
        if (res.code === "0" && res.data) {
          let list = res.data;
          let arr = [];
          for (let v of list) {
            for (let b of v.summary) {
              let obj = {
                date: v.dataDt,
                tips: b,
              };
              arr.push(obj);
            }
          }
          console.log(JSON.stringify(arr));
          this.tips = arr;
        } else {
          this.tips = [];
        }
      });
    },
    onTapTarget(item) {
      uni.navigateTo({
        url: "/pages/target/detail?id=" + item.serviceGroupCode,
      });
    },
    getServiceList() {
      let params = {
        userId: this.vuex_user.id,
        planExeDt: this.query_date,
        page: 1,
        rows: 100,
      };
      queryServiceTask(params).then((res) => {
        if (res.code == "0" && res?.data?.records) {
          // this.serviceList = res.data.records;
          this.updateData(res.data.records);
        } else {
          this.serviceList = [];
        }
      });
    },
    updateData(arr) {
      let data = [];
      arr.forEach((element) => {
        let check = true;
        data.forEach((item) => {
          if (item.code == element.serviceGroupCode) {
            item.list.push(element);
            check = false;
          }
        });
        if (check) {
          data.push({
            name: element.serviceGroupName,
            code: element.serviceGroupCode,
            list: [element],
          });
        }
      });
      this.tabs = data;
      this.getList();
    },
    getList() {
      this.serviceList = this.tabs[this.current].list;
    },
    change(index) {
      this.current = index;
      this.getList();
    },
    onTapPlan(item) {
      console.log(JSON.stringify(item));
      if (
        !item.serviceContent &&
        item.serviceContent == {} &&
        item.serviceContent.length == 0
      ) {
        return;
      }
      if (item.serviceContentType == "visit") {
        uni.navigateTo({
          url: `/pages/report/questionnaire?id=` + item.serviceContent[0].id,
        });
        return;
      }

      if (item.serviceContentType == "article") {
        uni.navigateTo({
          url: `/pages/article/detail?id=` + item.serviceContent[0].id,
        });
        return;
      }
      if (item.serviceContentType == "record") {
        uni.navigateTo({
          url:
            `/pages/records/index?objid=` +
            item.serviceContent[0].id +
            `&taskid=` +
            item.id,
        });
        return;
      }
      if (item.serviceContentType == "sport") {
        let ids = "";
        for (let i = 0; i < item.serviceContent.length; i++) {
          if (i == 0) {
            ids = item.serviceContent[i].id;
          } else {
            ids = ids + "," + item.serviceContent[i].id;
          }
        }
        uni.navigateTo({
          url: `/pages/sports/sports?ids=` + ids + `&taskid=` + item.id,
        });
        return;
      }
      if (item.serviceContentType == "food") {
        let ids = "";
        for (let i = 0; i < item.serviceContent.length; i++) {
          if (i == 0) {
            ids = item.serviceContent[i].id;
          } else {
            ids = ids + "," + item.serviceContent[i].id;
          }
        }
        uni.navigateTo({
          url: `/pages/foods/foods?ids=` + ids + `&taskid=` + item.id,
        });
        return;
      }
      if (item.serviceContentType == "testing") {
        let ids = "";
        for (let i = 0; i < item.serviceContent.length; i++) {
          if (i == 0) {
            ids = item.serviceContent[i].id;
          } else {
            ids = ids + "," + item.serviceContent[i].id;
          }
        }
        uni.navigateTo({
          url: `/pages/re-check/re-check?ids=` + ids + `&taskid=` + item.id,
        });
        return;
      }
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
      // this.get3rdsUser();
      // // // return;
      uni.navigateTo({ url: "/pages/health-records/index" });
    },
    onTapQ(e) {
      // uni.navigateTo({
      //   url: `/pages/report/questionnaire?id=SCID1587679383601291264`,
      // });
      window.location.href="https://luohu-test.shennongsys.com/yjy/patient/#/health-examination-task"
    },
    onClickTo(e) {
      uni.navigateTo({
        url: `/pages/report/questionnaire?id=${e.id}`,
      });
    },
    onChangeDate(e) {
      this.query_date = e.fulldate;
      this.getServiceList();
      this.getTargetByUser();
      this.$forceUpdate();
    },
    getTargetByUser() {
      let params = {
        dataDt: this.query_date,
        metadataCodes: ["DATA_H_CALORIE_INGESTION", "DATA_H_CALORIE_CONSUME"],
        // userId: this.vuex_user.userId,
      };
      getUserTargetDataByDay(params).then((res) => {
        if (res.code == "0" && res.data) {
          for (let v of res.data) {
            if (v.metadataCode === "DATA_H_CALORIE_CONSUME") {
              this.calorie_out = v.dayVal && v.dayVal != "" ? v.dayVal : 0;
            }
            if (v.metadataCode === "DATA_H_CALORIE_INGESTION") {
              this.calorie_in = v.dayVal && v.dayVal != "" ? v.dayVal : 0;
              if (v.targetVal && v.targetVal != {}) {
                let targetMaxNum = v.targetVal.v2;
                this.calorie_need = targetMaxNum - this.calorie_in;
                this.calorie_target = (this.calorie_in / targetMaxNum) * 100;
              }
            }
          }
          this.$forceUpdate();
        } else {
          this.calorie_need = "-";
          this.calorie_in = "-";
          this.calorie_out = "-";
          this.calorie_target = 1;
          this.$forceUpdate();
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
.tabbar {
  position: fixed;
  height: 112.32rpx;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0px;
  left: 0px;
  width: 100vw;
  .tabbar_items {
    width: 25vw;
    padding: 6rpx 0rpx;
    text-align: center;
    .icons {
      width: 48rpx;
      height: 48rpx;
    }
    .text {
      font-size: 24rpx;
    }
  }
}
/** 头部背景 */
.app-home {
  min-height: 60vh;
  background-position: top right;
  padding: 20px 14px;
  padding-bottom: 150rpx;
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
  display: none;
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

.app-home-plan-box {
  margin: 10px auto;
  display: flex;
  align-content: space-between;
  .app-home-plan-box-title {
    font-weight: 400;
    margin-right: 10px;
    width: 70px;
    margin-top: 6px;
  }
  .app-home-plan-box-list {
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    .app-home-plan-box-list-items {
      background: #eaf1ff;
      color: #3873fe;
      padding: 4px 6px;
      margin: 4px;
      font-size: 12px;
      border-radius: 4px;
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

.app-section-ai {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10px;
  .app-section-ai-imgs {
    width: 30px;
    height: 30px;
  }
  .app-section-ai-content {
    margin-left: 10px;
  }
}
.app-home-target {
  background: #fff8ea;
  padding: 14px 10px;
  border-radius: 10px;
  margin-top: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .app-home-target-icon {
    width: 44px;
    height: 44px;
    margin-right: 14px;
  }
  .app-home-target-info-title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 2px;
    color: #242938;
  }
  .app-home-target-info-des {
    font-size: 12px;
    color: #707070;
    flex: 1;
  }
}
.app-home-check {
  background: #fff;
  border-radius: 14px;
  padding: 14px;
  margin-top: 14px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.app-home-check-left {
  width: 41vw;
  height: calc(41vw * 1.0646);
  background-image: url(https://htl001.oss-cn-hangzhou.aliyuncs.com/icon/icon-check-approved.png);
  background-size: cover;
}
.app-home-check-right {
  width: 41vw;
  height: calc(41vw * 1.0646);
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  &-diy {
    width: 41vw;
    height: calc(41vw * 0.4967);
    background-image: url(https://htl001.oss-cn-hangzhou.aliyuncs.com/icon/icon-check-diy.png);
    background-size: cover;
  }
  &-reports {
    width: 41vw;
    height: calc(41vw * 0.4967);
    background-image: url(https://htl001.oss-cn-hangzhou.aliyuncs.com/icon/icon-check-report.png);
    background-size: cover;
  }
}
.app-mission {
  background: #fff;
  border-radius: 14px;
  margin-top: 14px;
  padding-bottom: 20px;
}
.app-mission-list {
  .app-mission-list-item {
    display: flex;
    padding: 14px;
    &__icon {
      width: 24px;
      height: 24px;
      margin-right: 14px;
    }
    &-info {
      flex: 1;
      padding-bottom: 10px;
      border-bottom: 1px #eee solid;
      &__title {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 6px;
      }
      &__des {
        font-size: 12px;
        color: #999999;
      }
      &__tags {
        color: #999999;
        font-size: 12px;
        display: flex;
        align-items: center;
        margin-top: 10px;
        .icons {
          width: 18px;
          height: 18px;
        }
      }
    }
    &__timeline {
      font-size: 12px;
      color: #ccc;
      border-bottom: 1px #eee solid;
    }
  }
}

.app-home-calorie {
  display: flex;
  justify-content: space-between;
  &-box {
    position: relative;
    width: 50vw;
    height: 120px;
    &-chart {
      position: absolute;
      width: 50vw;
    }
    &-detail {
      width: 100%;
      top: 22px;
      height: 120px;
      padding-left: 14px;
      position: absolute;
      text-align: center;
      .nums {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: bold;
        .unit {
          font-size: 10px;
          font-weight: normal;
          color: #999;
          margin-left: 4px;
        }
      }
      .txt {
        font-size: 12px;
      }
      .target {
        font-size: 10px;
        color: #999;
      }
    }
  }
  &-info {
    width: 50vw;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &-item {
      width: 30vw;
      display: flex;
      border-bottom: 1px #eee solid;
      height: 50px;

      .icon {
        width: 33px;
        height: 33px;
        margin-right: 10px;
      }
      .info {
        .title {
          color: #999;
          font-size: 12px;
        }
        .nums {
          font-size: 14px;
          font-weight: bold;
          .unit {
            font-size: 10px;
          }
        }
      }
    }
  }
}
.swiper {
  height: 164rpx;
}
</style>
