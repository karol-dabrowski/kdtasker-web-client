import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {CssBaseline} from "@material-ui/core";
import Home from '../pages/HomePage'
import HeaderContainer from "./Header/HeaderContainer";
import LoginPage from "../pages/LoginPage";
import {connect} from "react-redux";
import DashboardPage from "../pages/DashboardPage";
import NotFoundPage from "../pages/error/NotFoundPage";
import ForbiddenPage from "../pages/error/ForbiddenPage";

class App extends Component {
    render() {
        return (
            <div className="app">
                <CssBaseline/>
                <Router>
                    <HeaderContainer/>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={LoginPage}/>
                        {this.props.authorized ? (
                            <Route path="/dashboard" component={DashboardPage}/>
                        ) : (
                            <Route path="/dashboard" component={ForbiddenPage}/>
                        )}
                        <Route component={NotFoundPage} />
                    </Switch>
                </Router>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        authorized: state.auth.authorized
    };
};

export default connect(mapStateToProps)(App);
