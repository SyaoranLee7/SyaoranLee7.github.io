const SETTING = {
  api: "http://172.16.3.203:5001", // dev

  /* production */
  // api: "http://bqztc-cmzd.cn/api",

  /* 语言 */
  lang: "zh",

  /* 系统常量配置 */
  title: "JASCO", // 系统名称
  name: "", // 子名称
  releaseVersion: "v1.0.0", // 发布版本
  fullVersion: "v1.0.0", // 完整版本
  needHamburger: true, // 展开缩小菜单

  /* 系统框架配置 */
  needDashboard: false, // 是否需要首页
  needHospital: false, // 是否需要院区
  developMode: false, // 前端开发模式

  /* 接口常量部分 */
  requestTokenName: "access_token", // 接口请求时携带token的键名
  requestUserCode: "action_user_code", // 接口请求时携带的用户代码
  requestUserName: "action_user_name", // 接口请求时携带的用户名称
  requestHospitalCode: "hospital_code", // 接口请求时携带的院区代码
  actionCodeName: "action_client_code", // 接口统一请求参数键名：客户端识别码
  actionCodeValue: "PC", // 接口统一请求参数键值：客户端识别码
  menuCode: "menuCode", // 后端唯一标识菜单的key
  menuName: "menuName" // 菜单名称的键名
};
