import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import DashboardPage from "../DashboardPage";

class Dashboard extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/dashboard" component={DashboardPage} exact />
                </Switch>
            </Router>
        );
    }
}

export default Dashboard;