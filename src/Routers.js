import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Layout from 'component/layout/layout';
import Home from 'page/Home/index';
import Login from 'page/Login/login'
import ErrorPage from 'page/Error/error'
class Routers extends Component {
    render() {

        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
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