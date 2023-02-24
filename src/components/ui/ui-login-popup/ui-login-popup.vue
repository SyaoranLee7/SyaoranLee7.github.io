<template>
  <u-popup v-model="show" mode="bottom" height="400px" border-radius="30" @close='onClose'>
    <view class="ui-login-popup-box">
      <view class="ui-login-popup-box-tips">
        <view class="ui-login-popup-box-tips-logo">
          <u-image src="@/static/img/head.png" width="44" height="68"></u-image>
          <view class="ui-login-popup-box-tips-logo-name">云检</view>
          <view class="ui-login-popup-box-tips-logo-des"
            >登录后体验下单 、查看订单</view
          >
        </view>
        <view class="ronin-form">
          <u-form :model="form" ref="uForm" :label-width='120'>
            <u-form-item label="用户名"
              ><u-input v-model="form.userName"
            /></u-form-item>
            <u-form-item label="密码"
              ><u-input v-model="form.password"  type='password'
            /></u-form-item>
          </u-form>
        </view>
      </view>

      <view class="ui-login-popup-box-controls">
        <u-row>
          <u-col :span="12">
            <u-button
              type="primary"
              open-type="getUserInfo"
              @click="login"
              shape="circle"
              >立即登录</u-button
            >
          </u-col>
        </u-row>
      </view>
    </view>
  </u-popup>
</template>

<script>
import { thirdBindByLogin ,loginByName2Password2CodeNoTenant} from "@/api/login";
export default {
  props: {
    isShow: {
      typeof: Boolean,
      default: false,
    },
  },
  watch:{
    isShow(val){
      this.form.userName = ''
    this.form.password = ''
      this.show = this.isShow
  
    },
  },
  data() {
    return {
      show:false,
      form: {
				userName: '',
				password: '',
				appNo: 'H'
			},
    };
  },

  onShow(){
    
   
  },
  methods: {
    onClose() {
      this.$emit("ON-CLOSE");
    },
    login() {
      loginByName2Password2CodeNoTenant(this.form).then(res=>{
        if(res.code == '0'){
           this.$u.vuex("vuex_user", res.data);
           this.$u.vuex("vuex_token", res.data.token);
           this.$emit("ON-CLOSE");
        }
        
      })
    },
  },
};
</script>



<style lang="scss" scoped>
.ui-login-popup-box {
  width: 100%;
  height: 100%;
  position: relative;
  background: #fafafa;
  display: flex;
  &-tips {
    flex: 1;
    text-align: center;
    &-logo {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 60rpx;
      &-name {
        width: 100%;
        text-align: center;
        font-size: 32rpx;
        margin-top: 10rpx;
        font-weight: 600;
      }
      &-des {
        font-size: 24rpx;
      }
      &-grids {
        margin-top: 40rpx;
        background: none;
      }
    }
  }
  &-controls {
    position: absolute;
    bottom: 0px;
    width: 100%;
    background: #fff;
    padding: 20px;
    height: 100px;
  }
  .ronin-form{
    padding: 0 32rpx;
  }
}
.grid-text {
  font-size: 24rpx;
  margin-top: 40rpx;
}
</style>
