import React, { Component } from 'react';
import Util from 'util/util';
import statistic from 'user/statistic-service';
import { Link }     from 'react-router-dom';
import PageTitle from 'component/page-title/PageTitle';
import './index.scss';
class Index extends Component {
    constructor(){
        super();
        this.state = {
            userCount       : '-',
            productCount    : '-',
            orderCount      : '-'
        }
    }

componentDidMount(){
    this.loadCount();
}
    loadCount(){
        statistic.getHomeCount().then(res=>{
           this.setState(res);
        },errMsg=>{
            Util.errorTips(errMsg);
        });
    }
    render() {
        return (
            <div id="page-wrapper">
            <PageTitle title="首页" />
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/user" className="color-box brown">
                            <p className="count">{this.state.userCount}</p>
                            <p className="desc">
                                <i className="fa fa-user-o"></i>
                                <span>用户总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/product" className="color-box green">
                            <p className="count">{this.state.productCount}</p>
                            <p className="desc">
                                <i className="fa fa-list"></i>
                                <span>商品总数</span>
                            </p>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <Link to="/order" className="color-box blue">
                            <p className="count">{this.state.orderCount}</p>
                            <p className="desc">
                                <i className="fa fa-check-square-o"></i>
                                <span>订单总数</span>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;