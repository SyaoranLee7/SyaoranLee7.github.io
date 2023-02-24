<!-- app首页（c端） -->
<template>
  <view class="app-home">

    <!-- 顶部背景 -->
    <view class="bg"></view>

    <view class="app-home-main">

      <!-- 头像及问候 -->
      <view class="app-home-user">
        <view class="app-home-user-item actived">
          <view class="app-home-user-item-img">
            <image
              :src="
                vuex_user.sex && vuex_user.sex == '0'
                  ? 'https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-user-avatar-m.png'
                  : 'https://htl001.oss-cn-hangzhou.aliyuncs.com/images/img-user-avatar-w.png'
              "
              class="user-logo" />
            <view class="app-home-user-item-img-tags">本人</view>
          </view>
        </view>
        <view class="app-home-user-greeting">{{ vuex_user.realName | filtersGreeting }}</view>
      </view>

      <!-- 健康目标 -->
      <view class="app-home-health-target app-module">
        <view class="header">
          <view class="title">健康目标</view>
          <view class="btn">
            管理
            <image src="@/static/icon_svg/home/array_right_white.svg" class="btn-array" />
          </view>
        </view>
        <view v-if="targetList.length" class="target-body">
          <view v-for="(item, index) in targetList" :key="index" class="item">
            {{ item.serviceGroupName }}
          </view>
          <view class="item" @click="onSetTarget">
            <image src="@/static/icon_svg/home/target_add.svg" class="img" />
          </view>
        </view>
        <view v-else class="target-body empty">
          <view class="robot">
            <image src="@/static/icon_svg/home/robot.svg" class="img" />
          </view>
          <view class="tips">
            <view class="text">
              您暂无健康目标，开启后我们将帮助您自动定制健康计划并规律提醒相关信息
            </view>
            <view class="btn" @click="onSetTarget">开启目标</view>
          </view>
        </view>
      </view>

      <!-- 精准体检 -->
      <view class="app-home-check-module app-module">
        <view class="header">
          <view class="title">精准体检</view>
          <view class="btn">管理
            <image src="@/static/icon_svg/home/array_right_white.svg" class="btn-array" />
          </view>
        </view>
        <view class="app-home-check">
          <view class="app-home-check-left" @click="onTap()"></view>
          <view class="app-home-check-right">
            <view class="app-home-check-right-diy" @click="onTapQ"></view>
            <view
              class="app-home-check-right-reports"
              @click="onTapCheckRecords"
            ></view>
          </view>
        </view>
      </view>

      <!-- 健康预警 -->
      <view class="app-warning app-module">
        <view class="header black">
          <view class="title">健康预警</view>
          <view class="btn" @click="onTapHealthRecords">档案
            <image src="@/static/icon_svg/home/array_right_black.svg" class="btn-array" />
          </view>
        </view>
        <view v-if="showWarningTip" class="tips">
          <view class="text">根据您的体检报告和健康档案做智能分析后得出</view>
          <view class="btn" @click="showWarningTip = false">
            <image src="@/static/icon_svg/home/close.svg" class="btn-array" />
          </view>
        </view>
        <view class="app-warning-body">
          <view class="item">
            <view class="item-num">{{ riskNum.high || "-" }}</view>
            <view class="item-text">高风险</view>
          </view>
          <view class="item">
            <view class="item-num">{{ riskNum.medium || "-" }}</view>
            <view class="item-text">中风险</view>
          </view>
          <view class="item">
            <view class="item-num">{{ riskNum.low || "-" }}</view>
            <view class="item-text">低风险</view>
          </view>
        </view>
        <view class="report-tip">
          <view class="robot">
            <image src="@/static/icon_svg/home/robot.svg" class="img" />
          </view>
          <view class="tips">
            <view class="text">
              您暂无健康目标，开启后我们将帮助您自动定制健康计划并规律提醒相关信息
            </view>
            <view class="btn">
              <view class="btn-one">上传体检报告</view>
              <view class="btn-two" @click="onTapHealthRecords">完善档案</view>
            </view>
          </view>
        </view>
      </view>

      <!-- 健康日历 -->
      <view class="app-mission app-module">
        <view class="header black">
          <view class="title">健康日历</view>
        </view>
        <lxCalendar class="app-mission-calendar" @change="onChangeDate"></lxCalendar>
        <view v-if="showCalendarTip" class="tips">
          <view class="text">基于您的健康档案推荐，建议定期评估、维护档案数据</view>
          <view class="btn" @click="showCalendarTip = false">
            <image src="@/static/icon_svg/home/close.svg" class="btn-array" />
          </view>
        </view>

        <!-- <u-tabs
          :list="tabs"
          :is-scroll="true"
          :current="current"
          @change="change">
        </u-tabs> -->
        <!-- <view class="app-mission-list" v-if="tabs.length > 0">
          <view
            class="app-mission-list-item"
            v-for="item of serviceList"
            :key="'serviceList_' + item.healthyServiceCode"
            @click="onTapPlan(item)">
            <image
              :src="
                'https://htl001.oss-cn-hangzhou.aliyuncs.com/icon/icon_' +
                item.serviceContentType +
                '%403x.png'
              "
              class="app-mission-list-item__icon" />
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
        </view> -->
      </view>

      <!-- 健康建议 -->
      <view class="app-suggestion app-module">
        <view v-if="serviceList.length">
          <view v-for="(item, index) in serviceList" :key="index" class="item">
            <view class="icon">
              <image v-if="item.serviceContentType === 'sport'" src="@/static/icon_svg/home/suggestion_sport.svg" class="img" />
              <image v-else-if="item.serviceContentType === 'food'" src="@/static/icon_svg/home/suggestion_diet.svg" class="img" />
              <image v-else-if="item.serviceContentType === 'article'" src="@/static/icon_svg/home/suggestion_article.svg" class="img" />
              <image v-else-if="item.serviceContentType === 'follow'" src="@/static/icon_svg/home/suggestion_follow.svg" class="img" />
              <image v-else-if="item.serviceContentType === 'testing'" src="@/static/icon_svg/home/suggestion_review.svg" class="img" />
              <image v-else-if="item.serviceContentType === 'record'" src="@/static/icon_svg/home/suggestion_records.svg" class="img" />
              <image v-else-if="item.serviceContentType === 'inquiry'" src="@/static/icon_svg/home/suggestion_inquiry.svg" class="img" />
              <image v-else src="@/static/icon_svg/home/suggestion_remind.svg" class="img" />
            </view>
            <view class="content">
              <view class="title">
                {{ item.name }}：{{ item.serviceName }}
              </view>
              <view class="detail">{{ item.serviceContentSuggest }}</view>
            </view>
          </view>
        </view>
        <view v-else class="empty">
          <image src="@/static/icon_svg/home/empty.svg" class="img" />
          <view class="text">
            暂无内容</p>请先进行健康评估，我们将为您自动推荐健康计划…
          </view>
        </view>
      </view>

      <!-- 知识推荐 -->
      <view class="app-knowledge app-module">
        <view class="header black">
          <view class="title">知识推荐</view>
          <view class="btn">更多
            <image src="@/static/icon_svg/home/array_right_black.svg" class="btn-array" />
          </view>
        </view>
        <view v-if="knowledgeList.length" class="app-knowledge-body">
          <view
            v-for="(item, index) in knowledgeList"
            :key="index"
            class="item">
            <view class="title">{{ item.title }}</view>
            <view class="detail">{{ item.detail }}</view>
          </view>
        </view>
        <view v-else class="empty">
          <image src="@/static/icon_svg/home/empty.svg" class="img" />
          <view class="text">
            暂无内容</p>请先进行健康评估，我们将为您自动推荐知识…
          </view>
        </view>
      </view>

      <u-tabbar
        :list="vuex_company_tabbar"
        v-model="current"
        @click="onTap(index)"
        active-color="#3873fe"
        inactive-color="#B1AFB8"
        fontSize="8px"
        :icon-size="42">
      </u-tabbar>

      <ui-login-popup
        :isShow="isShowLoginPopup"
        @ON-LOGIN="toLogin"
        @ON-CLOSE="onClose">
      </ui-login-popup>

      <u-toast ref="uToast" />
    </view>

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
      targetList: [], // 健康目标
      serviceList: [], // 建议列表

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

      val: "",
      tips: [],
      tabs: [],
      current: 0,
      mode: "",
      isLoaded: false,

      riskNum: { high: 0, medium: 0, low: 0 }, // 健康预警
      knowledgeList: [
        // { title: "慢性胃炎", detail: "08:30 饮食指导" },
        // { title: "风湿病", detail: "风湿病的并发症" },
        // { title: "慢性胃炎", detail: "08:30 饮食指导" },
        // { title: "慢性肾炎", detail: "风湿病的并发症" }
      ], // 知识推荐
      showWarningTip: true, // 健康预警提示信息
      showCalendarTip: true, // 健康日历提示信息
      hasReport: true // 是否有体检报告
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
    this.init();

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
        "https://luohu-test.shennongsys.com/yjy/patient/#/home";
    },
    onTapProduct() {
      window.location.href =
        "https://luohu-test.shennongsys.com/yjy/patient/#/products";
    },
    onTapPerson() {
      window.location.href =
        "https://luohu-test.shennongsys.com/yjy/patient/#/my";
    },
    init() {
      let date = new Date();
      let day;
      if (date.getDate().toString().length == 2) {
        day = date.getDate();
      } else {
        day = "0" + date.getDate();
      }
      let month
      if((date.getMonth()+1).length==1){
        month = date.getMonth()+ 1
      }else{
        month = '0' +(date.getMonth()+ 1)
      }
      this.query_date =
        date.getFullYear() + "-" + ( month ) + "-" + day;
      this.today = date.getFullYear() + "-" + (month ) + "-" + day;
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
        if (res && res.code == "0" && res.data) {
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
      if (this.vuex_mode && this.vuex_mode == "hl") {
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
        realName: data && data.name,
        nickName: data && data.name,
      };
      updateUserInfo(params).then((res) => {
        if (res && res.code == "0" && res.data) {
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

    /* 获取建议列表 */
    getServiceList () {
      let params = {
        userId: this.vuex_user.id,
        planExeDt: this.query_date,
        page: 1,
        rows: 100,
      };
      queryServiceTask(params).then((res) => {
        console.log("getServiceList:", res);
        if (res && res.code == "0" && res.data && res.data.records) {
          res.data.records.forEach(i => {
            // 名称
            if (i.serviceContentType === "testing") i.name = "复查";
            else if (i.serviceContentType === "sport") i.name = "运动";
            else if (i.serviceContentType === "record") i.name = "记录";
            else if (i.serviceContentType === "food") i.name = "饮食";
            else i.name = "提醒";
          });
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

    /* 获取健康目标 */
    getTargetList () {
      let params = {
        userId: this.vuex_user.id,
      };
      queryUserServiceGroup(params).then((res) => {
        if (res && res.code == "0" && res.data) {
          this.targetList = res.data;
        } else {
          this.targetList = [];
        }
      });
    },

    /* 获取健康风险列表 */
    getRiskList () {
      myRiskList({}).then((res) => {
        console.log("getRiskList:", res.data);
        if (res.data) {
          this.hasReport = true;
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
        } else this.hasReport = false;
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
      if (this.vuex_mode && this.vuex_mode == "hl") {
        // window.location.href =
        //   "https://luohu-test.shennongsys.com/yjy/patient/#/health-examination-task";
      }

      uni.navigateTo({
        url: `/pages/report/questionnaire?id=SCID1587679383601291264&type=q&dataType=one`,
      });
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
      if (this.vuex_user && this.vuex_user.userTypeTwo == "logi") {
      } else if (this.vuex_user && this.vuex_user.userTypeTwo == "nurse") {
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
  background: #F1F9FF;
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

.app-home {
  height: 700rpx;
  background: linear-gradient(180deg, #24A19C 0%, #209DB9 100%);
  /** 头部背景 */
  .bg {
    width: 100%;
    height: 360rpx;
    background: url("@/static/icon_svg/home/bg.svg") no-repeat;
    background-size: 100% auto;
  }
  &-main {
    padding: 20rpx;
    margin-top: -340rpx;

    /** 通用样式 **/
    .app-module {
      margin-bottom: 40rpx;
      .header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        color: #FFFFFF;
        margin-bottom: 20rpx;
        .title { font-size: 36rpx; }
        .btn {
          font-size: 30rpx;
          display: flex;
          &-array {
            width: 16rpx;
            height: 42rpx;
            margin-left: 20rpx;
          }
        }
      }
      .header.black {
        .title { color: #333333; }
        .btn { color: #999999; }
      }
      .empty {
        width: 100%;
        text-align: center;
        .img {
          width: 210rpx;
          height: 140rpx;
        }
        .text {
          color: #999999;
          font-size: 24rpx;
        }
      }
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
          /** 头像下方 本人 **/
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
            margin-left: 12px;
          }
        }
      }
      &-greeting {
        color: #FFFFFF;
        font-size: 14px;
      }
    }

    /** 健康目标 **/
    .app-home-health-target {
      .target-body {
        display: flex;
        overflow: auto;
        .item {
          border-radius: 100px;
          background-color: rgba(0, 0, 0, .3);
          color: #FFFFFF;
          padding: 5px 10px;
          margin-right: 10px;
          flex-shrink: 0;
          flex-grow: 0;
          .img {
            width: 24rpx;
            height: 24rpx;
          }
        }
      }
      .empty {
        margin: 40rpx 0;
        .robot {
          width: 240rpx;
          height: 160rpx;
          .img {
            width: 100%;
            height: 100%;
          }
        }
        .tips {
          flex-grow: 1;
          height: 200rpx;
          background: url("@/static/icon_svg/home/target_bg.svg") no-repeat;
          background-size: 100% auto;
          padding: 20rpx 10rpx 10rpx 50rpx;
          .text {
            color: #FBE7A0;
            font-size: 26rpx;
          }
          .btn {
            border-radius: 30px;
            background: linear-gradient(121.27deg, #FFC670 0%, #FF6B00 100%);
            color: #FFFFFF;
            width: 140rpx;
            font-size: 26rpx;
            height: 50rpx;
            line-height: 50rpx;
            margin-top: 20rpx;
            text-align: center;
            float: right;
          }
        }
      }
    }

    /** 精准体检 **/
    .app-home-check-module {
      .app-home-check {
        background: #fff;
        border-radius: 14px;
        padding: 14px;
        margin-top: 14px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
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
      }
    }

    /** 健康预警 **/
    .app-warning {
      .tips {
        display: flex;
        justify-content: space-between;
        background-color: #FFF5DB;
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        font-size: 26rpx;
        margin: 5px 0;
        color: #773A00;
        .btn {
          width: 12px;
          height: 12px;
          &-array {
            width: 100%;
            height: 100%;
          }
        }
      }
      &-body {
        display: flex;
        background-color: #FFFFFF;
        padding: 20px 10px;
        .item {
          width: 33%;
          flex-grow: 1;
          flex-shrink: 0;
          text-align: center;
          border-right: 1px solid #F0F0F0;
          &-num {
            color: #F02B2B;
            font-size: 36rpx;
          }
          &-text {
            color: #555555;
            font-size: 26rpx;
          }
        }
      }
      .report-tip {
        display: flex;
        background-color: #FFFFFF;
        padding: 0 20rpx;
        .robot {
          width: 240rpx;
          height: 160rpx;
          .img {
            width: 100%;
            height: 100%;
          }
        }
        .tips {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          height: 200rpx;
          background: url("@/static/icon_svg/home/warning_bg.svg") no-repeat;
          background-size: 100% auto;
          padding: 5rpx 20rpx 10rpx 60rpx;
          .text {
            color: #555555;
            font-size: 26rpx;
          }
          .btn {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            height: 70rpx;
            &-one {
              border-radius: 30px;
              background-color: #F1F7F8;
              color: #999999;
              width: 190rpx;
              font-size: 26rpx;
              height: 50rpx;
              line-height: 50rpx;
              margin-top: 20rpx;
              text-align: center;
              margin-right: 20rpx;
            }
            &-two {
              border-radius: 30px;
              background: linear-gradient(121.27deg, #FFC670 0%, #FF6B00 100%);
              color: #FFFFFF;
              width: 140rpx;
              font-size: 26rpx;
              height: 50rpx;
              line-height: 50rpx;
              margin-top: 20rpx;
              text-align: center;
            }
          }
        }
      }
    }

    /** 健康日历 **/
    .app-mission {
      margin-top: 14px;
      &-calendar {
        background-color: #FFFFFF;
      }
      .tips {
        display: flex;
        justify-content: space-between;
        background-color: #FFF5DB;
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        font-size: 26rpx;
        margin: 5px 0;
        color: #773A00;
        .btn {
          width: 12px;
          height: 12px;
          &-array {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    /** 健康建议 **/
    .app-suggestion {
      .item {
        width: 100%;
        display: flex;
        padding: 30rpx 20rpx;
        margin-bottom: 20rpx;
        background-color: #FFFFFF;
        border-radius: 10rpx;
        .icon {
          width: 60rpx;
          height: 60rpx;
          margin-right: 26rpx;
          margin-top: 15rpx;
          .img {
            width: 100%;
            height: 100%;
          }
        }
        .content {
          .title {
            color: #333333;
            font-size: 30rpx;
            height: 50rpx;
          }
          .detail {
            color: #999999;
            font-size: 26rpx;
          }
        }
      }
      .empty {
        background-color: #FFFFFF;
        padding: 20rpx 0 40rpx 0;
      }
    }

    /** 知识推荐 **/
    .app-knowledge {
      &-body {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .item {
          width: 40%;
          height: 120px;
          flex-shrink: 0;
          flex-grow: 1;
          padding: 30rpx;
          background-color: #FFFFFF;
          margin-bottom: 20rpx;
          border-radius: 10rpx;
        }
        .item:nth-child(2n + 1) {
          margin-right: 10rpx;
        }
        .item:nth-child(2n) {
          margin-left: 10rpx;
        }
        // 背景
        .item:nth-child(4n) {
          background: url("@/static/icon_svg/home/knowledge_bg1.svg") no-repeat;
          background-position: center top;
          background-size: 100% auto;
        }
        .item:nth-child(4n + 1) {
          background: url("@/static/icon_svg/home/knowledge_bg2.svg") no-repeat;
          background-position: right top;
          background-size: auto 100%;
        }
        .item:nth-child(4n + 2) {
          background: url("@/static/icon_svg/home/knowledge_bg3.svg") no-repeat;
          background-position: center top;
          background-size: 100% 100%;
        }
        .item:nth-child(4n + 3) {
          background: url("@/static/icon_svg/home/knowledge_bg4.svg") no-repeat;
          background-position: right center;
          background-size: auto 100%;
        }
      }
      .empty {
        background-color: #FFFFFF;
        padding: 20rpx 0 40rpx 0;
      }
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

.swiper {
  height: 164rpx;
}
</style>
