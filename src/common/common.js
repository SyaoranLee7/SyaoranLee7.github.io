import { logout } from '@/api/login'


let app = {
    /**
     * 登出
     */
    logout() {
        let params = {}
        logout(params).then(res => {
            if (res) {
                this.$u.vuex("vuex_user", {});
                this.$u.vuex("token", '');
            }
        })
    },
    loginType(){
        // let vm = new Vue()
        // console.log(vm)
       let userInfo = uni.getStorageSync('lifeData').vuex_user;
        if(!userInfo){
            //微信授权
            return 1
        }
        if(!userInfo?.mobile){
            //绑定手机
            return 2
        }
        if(userInfo?.userTypeOne !== "1"){
            //不是员工
            return 3
        }
        return 4
       
    },
    magicNav(obj){
        // obj:{
        //     url:'路径',
        //     JumpType:'跳转类型  'switchTab'导航    'redirectTo'清除跳转  ,
        //     UserType:'用户权限，1授权  2绑定手机  3员工 '
        // }
        let UserType =  app.loginType();
       
               
        if( obj.UserType < UserType){
            if (obj.JumpType === 'switchTab' ){
                uni.switchTab({
                    url: obj.url
                });
                return
            }else if(obj.JumpType === 'redirectTo'){
                uni.redirectTo({
                    url: obj.url
                });
                return
            }else{
                uni.navigateTo({
                    url: obj.url
                });
            }

        }else{
             obj.fail()
            // if(obj.UserType == 1){
            //     uni.showToast({
            //         title: '请先登录',
            //         duration: 2000
            //     });
            //     return
            // }else if(obj.UserType == 2){
            //     uni.showToast({
            //         title: '请先绑定手机',
            //         duration: 2000
            //     });
            //     return
            // }else if(obj.UserType == 3){
            //     uni.showToast({
            //         title: '您还不是员工',
            //         duration: 2000
            //     });
            // }
        }
        
    }

}
export default app