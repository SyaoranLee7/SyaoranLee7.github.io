<template>
  <view class="container-conversation">
    <view class="scroll-box">
      <view class="uni-list margintop-bar">

        <!-- conversationList           userList -->
        <view
          v-for="item in userList"
          :key="item.userID"
          @tap="handleRoute(item.userID)"
        >
          <userItem
            :data-type="item.type"
            :conversation="item"
          ></userItem>
          <!-- <TUIConversationItem :data-type="item.type" :conversation="item">
          </TUIConversationItem> -->
        </view>
      </view>
    </view>
    <view class="bottom-back">
      <view class="bottom-area">
        <view
          v-if="showSelectTag"
          class="conversation-bubble"
          @tap.stop="handleEditToggle"
        >
          <view
            v-for="(item, index) in array"
            :key="index"
            class="picker"
            :data-name="item.name"
            @tap="handleOnTap"
            >{{ item.name }}</view
          >
        </view>
        <image
          @tap="showMore"
          class="btn-show-more"
          src="@/static/static/assets/add.svg"
        ></image>
        <!-- <view @tap="learnMore" class="im-link">了解更多IM功能</view> -->
      </view>
    </view>

    <u-tabbar
      :list="vuex_company_tabbar"
      active-color="#3873fe"
      fontSize="8px"
      :icon-size="48"
    ></u-tabbar>
  </view>
</template>
<!-- 这里有个加载的补丁逻辑待优化，页面向SDK请求conversationList的时候会有时延，
造成页面的一个抖动，这里加一个if逻辑打一个补丁，后续继续优化 -->
<script>
import logger from "../../../utils/logger.js";
import TUIConversationItem from "@/components/tui-conversation/conversation-item/index";
import userItem from "@/components/tui-conversation/conversation-item/userItem";
import TUIMessageList from "@/components/tui-chat/message-list/index";

import { genTestUserSig } from "@/debug/GenerateTestUserSig.js";

import { imTencentGetUserSig } from "@/api/im";

export default {
  data() {
    return {
      conversationList: [],
      showSelectTag: false,
      array: [
        {
          name: "发起会话",
        },
        {
          name: "发起群聊",
        },
        {
          name: "加入群聊",
        },
      ],
      userSig: "",
      userId: "",
      userList: [],
    };
  },

  components: {
    TUIConversationItem,
    TUIMessageList,
    userItem,
  },
  props: {},
  watch: {
    conversationList: {
      handler: function (newVal) {
        // console.log(JSON.stringify(newVal), "显示数据");
      },
      immediate: true,
      deep: true,
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    // 登入后拉去会话列表

    setTimeout((item) => {
      this.getUserSig();
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    uni.$TUIKit.off(uni.$TUIKitEvent.SDK_READY, this.onConversationListUpdated);
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
      //   console.log(uni.$TUIKit, "聊天iddap");
      let that = this;
      const SDKAppID = genTestUserSig("").sdkAppID;
      let id = SDKAppID.toString();
      let data = genTestUserSig(id);
      console.log(data, "4567890");

      let req = { userID: this.userId, userSig: this.userSig };

      uni.$TUIKit
        .login(req)
        .then((res) => {
          setTimeout(() => {
            that.getConversationList();
            uni.$TUIKit.on(
              uni.$TUIKitEvent.CONVERSATION_LIST_UPDATED,
              that.onConversationListUpdated
            );
          }, 500);
        })
        .catch((res) => {
          console.log("我走倒这里了哈哈");
        });
    },

    handleRoute(id) {
      const url = `../../TUI-Chat/chat?conversationID=${"C2C" + id}`;
      uni.navigateTo({
        url,
      });
    },
    onConversationListUpdated(event) {
      logger.log("TUI-conversation | onConversationListUpdated  |ok");
      this.setData({
        conversationList: event.data,
      });
    },

    getConversationList() {
      uni.$TUIKit
        .getFriendList({ conversationID: "C2Cexample" })
        .then((res) => {
          let data = res.data;
          this.userList = data;
          console.log(res, "消息列表列表");
        });
      uni.$TUIKit.getConversationList().then((imResponse) => {
        console.log(imResponse, "初始化 会话列表");
        logger.log(
          `TUI-conversation | getConversationList | getConversationList-length: ${imResponse.data.conversationList.length}`
        );
        this.setData({
          conversationList: imResponse.data.conversationList,
        });
      });
    },

    showMore() {
      this.setData({
        showSelectTag: !this.showSelectTag,
      });
    },

    learnMore() {
      uni.navigateTo({
        url: "../../TUI-User-Center/webview/webview?url=https://cloud.tencent.com/product/im",
      });
    },

    handleOnTap(event) {
      this.setData(
        {
          showSelectTag: false,
        },
        () => {
          switch (event.currentTarget.dataset.name) {
            case "发起会话":
              this.$createConversation();
              break;

            case "发起群聊":
              this.$createGroup();
              break;

            case "加入群聊":
              this.$joinGroup();

            default:
              break;
          }
        }
      );
    },

    goHomePage() {
      // uni.navigateTo 不能跳转到 tabbar 页面，使用 uni.switchTab 代替
      uni.switchTab({
        url: "../../TUI-Index/index",
      });
    },

    handleEditToggle() {
      this.setData({
        showSelectTag: false,
      });
    },

    $createConversation() {
      uni.navigateTo({
        url: "../create-conversation/create",
      });
    },

    $createGroup() {
      uni.navigateTo({
        url: "../../TUI-Group/create-group/create",
      });
    },

    $joinGroup() {
      uni.navigateTo({
        url: "../../TUI-Group/join-group/join",
      });
    },
  },
};
</script>
<style scoped>
@import "./conversation.css";
</style>
