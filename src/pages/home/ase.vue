<template>
  <view></view>
</template>

<script>
import CryptoJS from "crypto-js";
import { JSEncrypt } from "jsencrypt";
export default {
  data() {
    return {};
  },
  onLoad() {
    this.rsa();
  },
  methods: {
    rsa() {
        //公钥
        let PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCWo6Td0Rq9zfdeZ8cAXBr/4Mfc1NkekeNZf0BJ6LhthrH+blx1LNGpGcCgqoTJpsAc94didpPr8WeFqj6tC8sGsR+Q5Sa1zzCfAKnCKgLQ2v69aIcq4hlCXu3q4fdgBGl8dQKWFwx3YGlPN98xpxKHCKg4bB2K0PsVsYtYCKTjIwIDAQAB'
        
        // 私钥
        let PRIVATE_KEY = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAMONDo9la91400wnCfG7r6SFutwZ1+w4UXpLDEdufrvANByvfQhi4CrSCaNa9Yft0MUn+UU9fKDQSwIflmhw+kA1MK0IC+GHce64D68aKn+7rFtCtX8BjrDCeVSCXAoYXhhx+a18/E+kl6DHTw++4bokq5S1k8x5CmjAu9Ts4cFnAgMBAAECgYAemugJd1Ufb3aad42t4LMHq8poAj9yAAp4emBsmZWKKvW8+5Y1BsyQxxitEWJWKNlA0hXISWxE+vSSW4E9zVjNB7bd6O1eqHGBK0u7MNRhipWcUIb/+Ncn8KjlrfxgTEni2UujS2Fw2c2ykyk0MgURY4FbvVELwWqHRvaRE1CZQQJBAOWjRhX3LAPUHwwmWI6okq3lJdvBr+iHS6QD5BSpJXxZbctYVT8Yu8DfWTN3/zIodnN/U9g3dtkwcZi+Pa6hfOECQQDaAAVwCi/XOTzlKz3SbO00VdltKMIyu6a29ar1kmPOgTs7OK2/1HJwX2SIcIal5nqpV5ms5YFD8mhUvsTlNP9HAkEAmttPMRLc4LwUL9pQD+wH9jK4JAjqelF6peFl1rT2LXQVQXKREhq4ymkTu0ypkIaO0nZD8WP9xpsPj+SCrhgCoQJBANBpAMnSE1aQ8/SrWFkZpdRI1qqTMsVJvOJhDuXi4+QCjFvbndAtDJL9v6Do4vEr3MyUYOh4KRKKZs/N6XKvLfUCQBiEBZ3sOGXBqFD6qguuaD0eN2ua2ZVLD+x0BiRxGOzCxQnEgGkHI4in5qjFoOg49Pi4jy0Kv+mfQTqfBgrE3MA='
        
        let value = 'SQpyo5VqMPkrOUeQwG+Bo+iPLhkid3Pqs6VM/w9qWouHOZMxUeJSDeVtFFslTeRwodv5SQJ2OjIIrziWejzCTPoEH68TKPbVp67VH1H3SzrTF7AZDerjPsOJCp/oGJZ11/Y2Kqbvgwq1g+JvRHWmWN0sv1ZNFysOpO61ew5ME1w='
       
       // 公钥加密私钥解密
       let data =  this.RSAdecrypt(value,PRIVATE_KEY)

        let value1 = 'dr/gvPXaND6mWWhlAh03c14e6n+BBWLTes2hHqXHvVqofSwIc2cjzp/2qTabef5PgQ7xufizNr2XHk7L02bqqt20fyANyoVNtitjDQqGjQP3XvMsU9F1brjIQJzJZnTInlcMFyAYrHZDidyHcNU0rPm4MTqf+1hLWm2Kd43X9kw='    
       // 私钥加密 公钥解密
       let data1 =  this.RSAdecrypt1(value1,PUBLIC_KEY)

       console.log(data1,'显示数据哈哈哈')

    },

    //公钥解密
     RSAdecrypt1(value,PUBLIC_KEY) {
    //     var decrypt2 = new JSEncrypt();
    // decrypt2.setPublicKey('-----BEGIN RSA PUBLIC KEY-----'+PUBLIC_KEY+'-----END RSA PUBLIC KEY-----');
    // var uncrypted = decrypt.decrypt(encrypted2); 
    // console.log('解密后数据:%o', uncrypted); 


var decrypt2 = new JSEncrypt();
    decrypt2.setPublicKey('-----BEGIN RSA PUBLIC KEY-----'+PUBLIC_KEY+'-----END RSA PUBLIC KEY-----');
    var uncrypted = decrypt2.decrypt(value); 
   
    return uncrypted
    console.log('解密后数据:%o', uncrypted);
        // ---
    //   var encrypt = new JSEncrypt();
    //     encrypt.setPrivateKey('-----BEGIN RSA PUBLIC KEY-----'+PUBLIC_KEY+'-----END RSA PUBLIC KEY-----');
    //     var data = encrypt.decrypt(value); 
    //     return data
    },

    //私钥解密
    RSAdecrypt(value,PRIVATE_KEY) {
      var encrypt = new JSEncrypt();
        encrypt.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----'+PRIVATE_KEY+'-----END RSA PRIVATE KEY-----');
        var data = encrypt.decrypt(value); 
        return data
    },

    //---------------------------------------------------------------------------分割线---------------------------------------------
    des() {
      let key = "62c6bc7277c852472008470d";
      let value = "a111三所的文书三是sb!@#$%";

      let v = this.encryptDes(value, key);

      let valuedata =
        "29O+O9w0qeskg/5OSYl20m3WfhTptCGRK+PmgpcZwBNR7M27IB9+Gg==";

      let v1 = this.decryptDes(valuedata, key);
    },

    Encrypt() {
      var encrypt = new JSEncrypt();
      encrypt.setPrivateKey(RASkey);
      let data = encrypt.encrypt("123456789ABCDE");
      return data;
    },
    // 加密
    encrypt(data, secret_key) {
      // if (GLOBAL_CONFIG.debug) return data
      let encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), secret_key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      });
      return encrypted.toString();
    },

    // 解密
    decrypt(data, secret_key) {
      let bytes = CryptoJS.AES.decrypt(data, secret_key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      });
      try {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      } catch (error) {
        return bytes.toString(CryptoJS.enc.Utf8);
      }
    },

    // des 加密
    encryptDes(message, key) {
      var keyHex = CryptoJS.enc.Utf8.parse(key);
      /* 这里的模式参数需要和后端匹配 mode.ECB，mode.CBC*/
      var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      });
      return encrypted.toString();
    },

    // des 解密
    decryptDes(message, key) {
      var keyHex = CryptoJS.enc.Utf8.parse(key);
      var decrypted = CryptoJS.DES.decrypt(message, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      });
      return decrypted.toString(CryptoJS.enc.Utf8);
    },
  },
};
</script>

