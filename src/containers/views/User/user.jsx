import React, { Component } from 'react';

import PageTitle from 'component/page-title/PageTitle';
import Pagination from 'util/pagination';

class User extends Component {

    render(){
        return (
            <div id="page-wrapper">
            <PageTitle title="用户列表"/>
            <div className="row">
                <div className="col-md-12">
                   <table className="table table-striped table-bordered">
                   <thead>
                       <tr>
                            <th>ID</th>
                            <th>ID</th>
                            <th>ID</th>
                            <th>ID</th>
                            <th>ID</th>                           
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td>123</td>
                           <td>123</td>
                           <td>123</td>
                           <td>123</td>
                           <td>123</td>
                           
                       </tr>
                   </tbody>
                   </table>
                   <Pagination current={11} total={200} onChange={(pageNum)=>{console.log(pageNum)}}/>
                </div>
            </div>
        </div>
            );
    }
}

export default User;