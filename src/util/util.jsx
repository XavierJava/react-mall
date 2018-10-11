import $ from 'jquery';

class Util {
    static request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: param.data || null,
                success(res) {
                  if(0===res.state){
                      typeof resolve ==='function' &&  resolve(res.data,res.msg);
                  }else if(10===res.state){
                    this.doLogin()
                  }else{
                    typeof reject ==='function' &&  resolve(res.msg||res.data);
                  }
                },
                error(err) {
                    typeof reject ==='function' &&  resolve(err.statusText);
                }
            });
        });
    }

    static doLogin(){
        window.location.href='/login?redirect='+encodeURIComponent(window.location.pathname);
    }

    static getUrlParam(name){
        let queryString =window.location.search.split('?')[1] || "",
             reg =new RegExp("(^|&)"+name+'=([^&]*)(&|$)'),
             result =queryString.match(reg);
             return result ?decodeURIComponent(result[2]) : null;
    }

    static errorTips(errMsg){
        alert(errMsg||'好像哪里不对了');
    }


}

export default Util;