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

    doLogin(){
        window.location.href='/login?redirect='+encodeURIComponent(window.location.pathname);
    }

}

export default Util;