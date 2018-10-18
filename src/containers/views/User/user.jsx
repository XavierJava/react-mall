import React, { Component } from 'react';

import PageTitle from 'component/page-title/PageTitle';
import Pagination from 'util/pagination';
import Util from 'util/util';
import User from 'user/user-service';

class UserList extends Component {


    constructor() {
        super();
        this.state = {
            list: [],
            pageNum: 1,
            firstLoading:true
        }
    }
    componentDidMount() {
        this.loadUserList();
    }

    loadUserList() {
        User.getUserList(this.state.pageNum).then(res => {
            this.setState(res,()=>{
                this.setState({
                    firstLoading:false
                })
            })
        }, errMsg => {
            this.setState({
                list:[]
            })
            Util.errorTips(errMsg);
        });
    }

    onPageNumChange(pageNum) {
        this.setState({
            pageNum: pageNum
        }, () => {
            this.loadUserList();
        })
    }
    render() {
        let listBody = this.state.list.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{new Date(user.createTime).toLocaleString()}</td>

                </tr>
            );
        });

        let listError =(
            <tr>
                <td colSpan='5' className='text-center'>{this.state.firstLoading ? '正在加载数据':'没有找到相应的结果' }</td>
            </tr>
        ) ;

        let tableBody =this.state.list.length>0 ?listBody:listError;
        return (
            


            < div id = "page-wrapper" >
            <PageTitle title="用户列表" />
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>用户名</th>
                                <th>邮箱</th>
                                <th>电话</th>
                                <th>注册时间</th>
                            </tr>
                        </thead>
                        <tbody>

                          
                               {tableBody}
                         

                        </tbody>
                    </table>
                    <Pagination current={this.state.pageNum} total={this.state.total}
                        onChange={(pageNum) => { this.onPageNumChange(pageNum) }} />
                </div>
            </div>
        </div >
            );
    }
}

export default UserList;