import React,{Component} from 'react';
import Util from 'util/util';
import './login.css';


class Login extends Component{

    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    }

onInputChange(e){
    let inputName=e.target.name,
        inputValue=e.target.value;
    console.log(inputName,inputValue);
    this.setState({
        [inputName]:inputValue
    });

}

onSubmit(){
    Util.request({
        type:'post',
        url:'/manage/user/login.do',
        data:{
            username: this.state.username,
            password :this.state.password
        }
    }).then((res)=>{

    },(err)=>{

    });
}
    render(){
        return (
        <div className="col-md-4 col-md-offset-4">
        <div className="panel panel-default login-panel">
            <div className="panel-heading">欢迎登录 - MMALL管理系统</div>
            <div className="panel-body">
                <div>
                    <div className="form-group">
                        <input type="text"
                            name="username"
                            className="form-control"
                            placeholder="请输入用户名" 
                            onChange={e => this.onInputChange(e)}
                          />
                    </div>
                    <div className="form-group">
                        <input type="password" 
                            name="password"
                            className="form-control" 
                            placeholder="请输入密码" 
                            onChange={e => this.onInputChange(e)}
                           />
                    </div>
                    <button 
                     className="btn btn-lg btn-primary btn-block"
                        onClick={e=>{this.onSubmit(e)}}>登录</button>
                </div>
            </div>
        </div>
    </div>
    );
    }

}

export default Login;