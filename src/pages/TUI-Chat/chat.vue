<template>
  <view class="container">
    <!-- #ifdef MP-WEIXIN -->
    <!-- <tuicalling
		ref="TUICalling"
		id="TUICalling-component"
		:config="config">
	</tuicalling> -->
    <!-- #endif -->

    <view class="group-profile"
      ><TUI-group-profile
        v-if="isShow"
        id="groip-profile"
        :conversation="conversation"
    /></view>
    <view class="message-list" @tap="triggerClose"
      ><TUI-message-list
        id="message-list"
        ref="messageList"
        :conversation="conversation"
    /></view>
    <view v-if="videoPlay" class="container-box" @tap.stop="stopVideoHander">
      <video
        v-if="videoPlay"
        class="video-message"
        :src="videoMessage.payload.videoUrl"
        :poster="videoMessage.payload.thumbUrl"
        object-fit="cover"
        error="videoError"
        autoplay="true"
        direction="0"
      />
    </view>
    <view v-if="showChat" class="message-input">
      <TUI-message-input
        id="message-input"
        ref="messageInput"
        :conversation="conversation"
        @sendMessage="sendMessage"
      />
    </view>
  </view>
</template>

<script>
import logger from "@/utils/logger";
import TUIMessageList from "../../components/tui-chat/message-list/index";
import TUIMessageInput from "../../components/tui-chat/message-input/index";
import TUIGroupProfile from "../../components/tui-group/group-profile/index";

import { imTencentGetUserSig } from "@/api/im";
import TIM from "tim-js-sdk";
import TIMUploadPlugin from "tim-upload-plugin";

// 初始化 SDK 实例
const tim = TIM.create({
  SDKAppID: process.env.VUE_APP_SDK_APP_ID,
});
tim.setLogLevel(0);
// 日志级别
// tim.setLogLevel(GLOBAL_CONFIG.log_level)

// 注册腾讯云即时通信 IM 上传插件
tim.registerPlugin({ "tim-upload-plugin": TIMUploadPlugin });

const app = getApp();
export default {
  components: {
    TUIMessageList,
    TUIMessageInput,
    TUIGroupProfile,
  },
  props: {},
  data() {
    return {
      conversationName: "",
      conversation: {},
      messageList: [],
      isShow: false,
      showChat: true,
      conversationID: "",
      videoPlay: false,
      videoMessage: {},
      config: {
        sdkAppID: "",
        userID: "",
        userSig: "",
        type: 1,
        tim: null,
      },
    };
  },
  created() {
    uni.$on("videoPlayerHandler", (value) => {
      this.videoPlay = value.isPlay;
      this.videoMessage = value.message;
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
	this.conversationID = options.conversationID
    setTimeout(() => {
      this.getUserSig();
    }, 1000);
    // conversationID: C2C、 GROUP

   
  },
  mounted() {},
  onUnload() {
    // #ifdef MP-WEIXIN
    //   this.$refs.TUICalling.destroyed();
    // // #endif
  },
  methods: {
    getUserSig() {
      imTencentGetUserSig({}).then((res) => {
        if (res.code == "0") {
          this.userSig = res.data.userSig;
          this.userId = res.data.userId;
          this.login();
        }
      });
    },
    login() {
      let req = { userID: this.userId, userSig: this.userSig };

      tim.login(req);

	  setTimeout(()=>{
		 this.getDetails()
	  },1000)
	 
    },
	getDetails(){
		 const  conversationID  = this.conversationID;
		 logger.log(
      ` TUI-chat | onLoad | conversationID: ${conversationID}`
    );
   
    this.setData({
      conversationID,
    });

    tim.setMessageRead({ conversationID });

    tim.getConversationProfile(conversationID).then((res) => {
      const { conversation } = res.data;
      this.conversation = conversation;
      this.setData({
        conversationName: this.getConversationName(conversation),
        isShow: conversation.type === "GROUP",
      });
    });
	},
    stopVideoHander() {
      this.videoPlay = false;
    },
    getConversationName(conversation) {
      if (conversation.type === "@TIM#SYSTEM") {
        this.setData({
          showChat: false,
        });
        return "系统通知";
      }

      if (conversation.type === "C2C") {
        return (
          conversation.remark ||
          conversation.userProfile.nick ||
          conversation.userProfile.userID
        );
      }

      if (conversation.type === "GROUP") {
        return (
          conversation.groupProfile.name || conversation.groupProfile.groupID
        );
      }
    },

    sendMessage(event) {
      // 将自己发送的消息写进消息列表里面
      this.$refs.messageList.updateMessageList(event.detail.message);
    },

    triggerClose() {
      if (this.showChat) {
        this.$refs.messageInput.handleClose();
      }
    },

    goBack() {
      const pages = getCurrentPages(); // 当前页面栈

      if (
        pages[pages.length - 2].route ===
          "pages/TUI-Conversation/create-conversation/create" ||
        pages[pages.length - 2].route ===
          "pages/TUI-Group/create-group/create" ||
        pages[pages.length - 2].route === "pages/TUI-Group/join-group/join"
      ) {
        uni.navigateBack({
          delta: 2,
        });
      } else {
        uni.navigateBack({
          delta: 1,
        });
      }

      tim
        .setMessageRead({
          conversationID: this.conversationID,
        })
        .then(() => {});
    },
  },
};
</script>
<style>
@import "./chat.css";
</style>
