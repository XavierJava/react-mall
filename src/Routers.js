import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Layout from 'component/layout/layout';
import Home from 'page/Home/index';
class Routers extends Component {
    render() {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Redirect from='*' to='/' ></Redirect>
                    </Switch>
                </Layout>
            </Router>
        );
    }

}

export default Routers;