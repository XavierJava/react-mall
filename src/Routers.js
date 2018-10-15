import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Layout from 'component/layout/layout';
import Home from 'page/Home/index';
import Login from 'page/Login/login';
import ErrorPage from 'page/Error/error';
import UserList from 'page/User/user';
class Routers extends Component {
    render() {

        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/user/index' component={UserList}/>
                    <Redirect exact from='/user' to='/user/index'/>
                    <Route component={ErrorPage}/>                    
                </Switch>
            </Layout>

        );

        return (
            <Router>
                <Switch>
                <Route exact path='/login' component={Login}></Route>
                    <Route path="/" render={props => LayoutRouter} />
                    
                </Switch>
            </Router>
        );
    }

}

export default Routers;