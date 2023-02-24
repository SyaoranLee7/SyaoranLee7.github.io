<template>
  <view class="ronin-mine">
    <view
      class="head"
      :style="{
        backgroundImage: `url(${homeBackgroundImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }"
    >
      <view class="head_info">
       
        <view style="flex: 1">
          <view class="head_name"> {{ vuex_user.realName }} </view>
          <!-- <p>点击头像查看编辑个人资料</p> -->
        </view>
      </view>
      <view class="health_btn" @click="onLoginOut()">
        <span>安全登出</span>
      </view>
    </view>

    <!-- <view class="person-title"> 权益服务 </view> -->
    <view class="person-service">
      <view class="person-service-items" @click="onTap(1002)">
        <image src="@/static/img/icon/icon1.png" class="imgs" />

        <view class="info">
          <view class="title">健康档案</view>
          <view class="des"
            >服务有效期内客户在供应商提供的服务页面，通过在线咨询、健康量表、体检报告等，建立完整健康档案，包括个人生活习惯、既往病史、家族病史等，评估健康指标，了解并掌握健康状况的动态变化情况。</view
          >
          <u-tag text="每人无限次" shape="circle" size="mini" mode="light" />
        </view>
      </view>
      <view class="person-service-items" @click="onTap(1906)">
        <image src="@/static/img/icon/icon2.png" class="imgs" />

        <view class="info">
          <view class="title">健康管理</view>
          <view class="des">服务有效期内客户在供应商提供的服务页面，申请健康管理服务，可在家庭医生的评估与建议下开通3个针对性的主动式健康管理计划，以科学的方式，改善身体机能，打开健康生活新方式。</view>
          <u-tag text="每人限用3次" shape="circle" size="mini" mode="light" />
        </view>
      </view>
      <view class="person-service-items" @click="onTap(1902)">
        <image src="@/static/img/icon/icon3.png" class="imgs" />

        <view class="info">
          <view class="title">心理咨询</view>
          <view class="des">服务有效期内客户可在供应商服务页面提出服务申请，通过心理测评与咨询，实现压力疏导、情绪管理、改变认知，达到自我成长、提升社会适应能力。</view>
          <u-tag text="每人限用1次" shape="circle" size="mini" mode="light" />
        </view>
      </view>
      <view class="person-service-items" @click="onTap(1901)">
        <image src="@/static/img/icon/icon4.png" class="imgs" />

        <view class="info">
          <view class="title">门诊预约</view>
          <view class="des">服务有效期内客户可在供应商服务页面提出服务申请，供应商根据客户的病情及需求，协助预约合作的二级及以上医保定点医院，提供疾病分诊、预约指导、注意事项提醒等服务。
在服务过程中，医院收取的挂号费及其他任何相关医疗费用，均由客户自行全额承担。</view>
          <u-tag text="每人限用1次" shape="circle" size="mini" mode="light" />
        </view>
      </view>

      <view class="person-service-items" @click="onTap(1109)">
        <image src="@/static/img/icon/icon5.png" class="imgs" />

        <view class="info">
          <view class="title">就医陪同</view>
          <view class="des">服务有效期内客户可在供应商服务页面提出服务申请，供应商根据客户的病情及需求，安排熟悉医院服务流程的专业医护人员协助就诊，但不包括急诊就医、插队、加号、住院陪护、急诊留观陪护等；服务时长不超过4小时。
在服务过程中，医院收取的挂号费及其他任何相关医疗费用，均由客户自行全额承担。</view>
          <u-tag text="每人限用1次" shape="circle" size="mini" mode="light" />
        </view>
      </view>

      <view class="person-service-items" @click="onTap(1903)">
        <image src="@/static/img/icon/icon6.png" class="imgs" />

        <view class="info">
          <view class="title">重疾床位/手术安排</view>
          <view class="des">服务有效期内首次确诊约定的重大疾病，客户可在供应商服务页面提出服务申请，供应商为客户推荐并协助快速办理治疗或手术的入院手续。
客户需持有所指定医院的住院通知单/手术通知单；若无住院通知单/手术通知单，则先安排专家号门诊由医生判断是否符合入院条件，并须以医生给出的诊疗意见为准。
在服务过程中，医院收取的挂号费及其他任何相关医疗费用，均由客户自行全额承担。</view>
          <u-tag text="每人限用1次" shape="circle" size="mini" mode="light" />
        </view>
      </view>

      <view class="person-service-items" @click="onTap(1120)">
        <image src="@/static/img/icon/icon7.png" class="imgs" />

        <view class="info">
          <view class="title">第二诊疗意见</view>
          <view class="des">服务有效期内首次确诊约定的重大疾病，且经过医生诊断（即第一意见）后，客户向供应商提出服务申请，供应商推荐合适的全国专科前10热门医院的副主任及以上专家，提供电话咨询并以电子书面报告形式反馈第二诊疗意见。</view>
          <u-tag text="每人限用1次" shape="circle" size="mini" mode="light" />
        </view>
      </view>

      <view class="person-service-items" @click="onTap(1904)">
        <image src="@/static/img/icon/icon8.png" class="imgs" />

        <view class="info">
          <view class="title">专家医生咨询(专科)</view>
          <view class="des">服务有效期内为每位获得服务资格的客户提供精选17个临床专科提供系统、针对性的健康咨询服务。</view>
          <u-tag text="每人无限次" shape="circle" size="mini" mode="light" />
        </view>
      </view>

      <view class="person-service-items" @click="onTap(1907)">
        <image src="@/static/img/icon/icon8.png" class="imgs" />

        <view class="info">
          <view class="title">专家医生咨询(全科)</view>
          <view class="des">服务有效期内为每位获得服务资格的客户提供家庭全科图文或电话咨询服务提供系统、针对性的健康咨询服务。</view>
          <u-tag text="每人无限次" shape="circle" size="mini" mode="light" />
        </view>
      </view>

      <view class="person-service-items" @click="onTap(1905)">
        <image src="@/static/img/icon/icon8.png" class="imgs" />

        <view class="info">
          <view class="title">专家医生咨询(儿科)</view>
          <view class="des">服务有效期内为每位获得服务资格的客户提供精选儿科临床医生提供系统、针对性的健康咨询服务。</view>
          <u-tag text="每人无限次" shape="circle" size="mini" mode="light" />
        </view>
      </view>

      <view class="person-service-items" @click="onTap(2023)">
        <image src="@/static/img/icon/icon9.png" class="imgs" />

        <view class="info">
          <view class="title">体检报告解读</view>
          <view class="des">服务有效期内客户在供应商提供的服务页面提出服务申、提交体检报告，由全科医生提供体检报告解读服务，包含异常指标解读及出具电子解读报告，并根据客户需求，对异常指标电子报告解读提供电话一对一咨询服务。
每次服务时长：不超过20分钟。</view>
          <u-tag text="每人限用1次" shape="circle" size="mini" mode="light" />
        </view>
      </view>

      <view class="person-service-items" @click="onTap(1910)">
        <image src="@/static/img/icon/icon10.png" class="imgs" />

        <view class="info">
          <view class="title">体检方案定制</view>
          <view class="des">服务有效期内客户在供应商提供的服务页面在线提交健康资料后，通过电话沟通方式向客户了解其自身情况，为客户提供体检/检验检查项目综合建议，可包含如生化检查、B超、CT、核磁、镜检、冠脉造影等体检/检查项目建议等，并为客户出具电子版的《体检建议书》。
每次服务时长：不超过20分钟。</view>
          <u-tag text="每人限用1次" shape="circle" size="mini" mode="light" />
        </view>
      </view>

      <view class="person-service-items" @click="onTap(1911)">
        <image src="@/static/img/icon/icon11.png" class="imgs" />

        <view class="info">
          <view class="title">慢病防治知识培训</view>
          <view class="des">服务有效期内客户在供应商提供的服务页面可报名慢病防治知识培训线上课程，本课程由三甲医院知名专家直播授课。
通过普及慢病防治知识，包括糖尿病、高血压、冠心病等发病因素、症状、预防与治疗，提升客户对慢病发生发展的认识，降低或预防慢病。
实际培训安排和时效，请见下单页面。</view>
          <u-tag text="每人限用3次" shape="circle" size="mini" mode="light" />
        </view>
      </view>

      <view class="person-service-items" @click="onTap(1909)">
        <image src="@/static/img/icon/icon12.png" class="imgs" />

        <view class="info">
          <view class="title">药品费用抵扣</view>
          <view class="des">服务有效期内客户在供应商提供的服务页面购买指定商品时，可享受30%药品费用抵扣，其中：指定慢病药品每月优惠上限200元，年度优惠上限1000元；指定日常药品年度优惠上限5000元。实际运费和时效，请见下单页面。</view>
          <u-tag text="在月度/年度的优惠额度内不限次" shape="circle" size="mini" mode="light" />
        </view>
      </view>

      <view class="person-service-items" @click="onTap(-1)">
        <image src="@/static/img/icon/icon13.png" class="imgs" />

        <view class="info">
          <view class="title">检测费用抵扣</view>
          <view class="des">服务有效期内客户在供应商提供的服务页面购买指定居家肿瘤早筛、HPV筛查等检测产品时，可享受10%以上产品费用抵扣。
实际运费和时效，请见下单页面。</view>
          <u-tag text="每人无限次" shape="circle" size="mini" mode="light" />
        </view>
      </view>

      <view class="service-records" @click="onTap(1019)">服务记录</view>
   
    </view>
  </view>
</template>

<script>
import homeBackgroundImage from "@/static/img/mine/img_person_header_bg.png";
import { registerThirdService, thirdJumpAuth ,getMnToken} from "@/api/service";
import uButton from '../../uview-ui/components/u-button/u-button.vue';
export default {
  components: { uButton },
  data() {
    return {
      homeBackgroundImage,
      userInfo: {},
    };
  },
  methods: {
    onLoginOut() {
      this.$u.vuex("vuex_user", {});
      this.$u.vuex("token", "");
      uni.redirectTo({url:'/pages/auth/auth'})
    },
    onClickToList(url) {
      uni.navigateTo({
        url,
      });
    },
    onTap(idx) {
       if(idx ==-1){
        getMnToken({}).then(res=>{
          if(res.code == '0'){
          
            //res.data.tid     res.data.dataVal
            // let url = `http://app.h5.ihaozhuo.com/template/2022/10/08/1665200574524.html?token=${res.data.tid}`
            // let url = `https://app.h5.ihaozhuo.com/channel-mall/h5pro.html?linkAlias=rk6UA38F&token=${res.data.dataVal}`
            let url = `${process.env.VUE_APP_BASE_URL}&token=${res.data.dataVal}`
            
            window.location.href = url
          }
        })
         //window.location.href = 'http://app.h5.ihaozhuo.com/template/2022/10/08/1665200574524.html';
         return;
      }
      let params = {
        serviceCode: idx,
        thirdCompanyNo: "YJY",
        remark: "",
      };
      registerThirdService(params).then((res) => {
        if (res?.code == "0") {
          thirdJumpAuth(params).then((res) => {
            if (res?.code == "0") {
              window.location.href = res.data;
            }
          });
        }
        if (res?.code == "-3") {
          uni.showModal({
            title: "提示",
            content: "尚未登录",
            showCancel: false,
            success: function () {
              uni.redirectTo({ url: "/pages/auth/auth" });
            },
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
page {
  background: #fafafa;
}
.person-pointer {
  margin: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &-items {
    width: 33.33%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    .nums {
      font-weight: bold;
      font-size: 20px;
      margin-left: 8px;
      color: #333;
    }
  }
}
.person-member {
  border-radius: 14px;
  background: #394156;
  margin: 14px;
  overflow: hidden;
  .person-member-header {
    height: 36px;
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #f0f5f7;
    border-bottom: 1px #41465c solid;

    .imgs {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  }
  .person-member-bodyer {
    // background: #42475d;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fae9db;
    padding: 14px 14px;

    .line {
      width: 2px;
      height: 40px;
    }
    .items {
      width: 30%;
      text-align: center;
      .title {
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 4px;
      }
      .des {
        font-size: 12px;
      }
    }
  }
}
.person-title {
  margin: 0px 14px;
  font-size: 18px;
  font-weight: bold;
}
.person-service {
  display: flex;
  justify-content: space-between;
  margin: 14px;
  flex-wrap: wrap;
  &-items {
    width: 100%;
    background: #fff;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 8px;
    .imgs {
      width: 64px;
      height: 64px;
      margin-right: 8px;
    }
    .info {
      flex: 1;
      .title {
        font-size: 15px;
        font-weight: 600;
        margin-bottom: 4px;
        margin-top: 6px;
      }
      .des {
        font-size: 12px;
        color: #999;
        margin-bottom: 8px;
      }
    }
  }
}
.head {
  font-weight: 400;
  line-height: 16px;
  font-size: 12px;
  background-repeat: no-repeat;
  background-position: -20px -40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  padding-bottom: 0px;
  // background-color: #fff;
}

.head_info {
  display: flex;
  align-items: center;
  padding: 15px 12px;
  & img {
    margin-right: 10px;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    border: 3px #fff solid;
    -webkit-box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.1);
    box-shadow: 0px 0px 10px rgba($color: #000000, $alpha: 0.1);
  }
  & .logout {
    display: inline-block;
    padding: 0px 10px;
    color: #0088ff;
    font-size: 12px;
    margin-left: 5px;
  }
}

.head_name {
  font-size: 16px;
  line-height: 23px;
  font-weight: 600;
  margin-left: 4px;
}

.health_btn {
  margin-right: 14px;
  font-size: 13px;
  padding: 4px 10px;
  border: solid 1px #0088ff;
  border-radius: 15px;
  color: #0088ff;
  display: flex;
  align-items: center;

  & span {
    margin-left: 2px;
  }
}
.service-records{
    text-align: center;
    color: #fff;
    padding: 10px;
    text-align: center;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0088ff;
    border-radius: 18px;
    width: 100%;
    margin: 20px 0px;

}
</style>