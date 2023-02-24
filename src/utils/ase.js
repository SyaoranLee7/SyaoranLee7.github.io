import CryptoJS from 'crypto-js'
/**
 * @word 要加密的内容
 * @keyWord String  服务器随机返回的关键字
 *  */
export function aesEncrypt(word, keyWord = "XwKsGlMcdPMEhR1B") {
  var key = CryptoJS.enc.Utf8.parse(keyWord);
  var srcs = CryptoJS.enc.Utf8.parse(word);
  var encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
  return encrypted.toString();
}



const secret_key = CryptoJS.enc.Utf8.parse(process.env.VUE_APP_API_3RD_KEY)

// 加密
export function encrypt (data) {
  // if (GLOBAL_CONFIG.debug) return data
  let encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secret_key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
  return encrypted.toString()
}

// 解密
export function decrypt (data) {
  // if (GLOBAL_CONFIG.debug) return data
  let bytes = CryptoJS.AES.decrypt(data, secret_key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
  try {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  } catch (error) {
    return bytes.toString(CryptoJS.enc.Utf8)
  }
}
