import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Layout from 'component/layout/layout';
import Home from 'page/Home/index';
import Login from 'page/Login/login'
class Routers extends Component {
    render() {

        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Redirect from='*' to='/' ></Redirect>
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