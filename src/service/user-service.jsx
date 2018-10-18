import Util from 'util/util';
import $ from 'jquery';

class User{
    static login(loginInfo){
        return Util.request({
            type:'post',
            url:'/manage/user/login.do',
            data:loginInfo
        });
    }


   static checkLoginInfo(loginInfo){
        let username =$.trim(loginInfo.username),
            password=$.trim(loginInfo.password);
        if(typeof username !=='string' || username.length===0){
            return {
                status:false,
                msg:'用户名不能为空'
            }
        }

        if(typeof password !=='string' || password.length===0){
            return {
                status:false,
                msg:'密码不能为空'
            }
        }

        return{
            status:true,
            msg:'验证通过'
        }
    }

    static logout(){
        return Util.request({
            type:'post',
            url:'/user/logout.do'
        });
    }


    static getUserList(pageNum){
        return Util.request({
            type    : 'post',
            url     :  '/manage/user/list.do',
            data    : {
                pageNum:pageNum
            }
        });

    }
}


export default User;