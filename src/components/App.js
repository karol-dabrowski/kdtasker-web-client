import React, { Component } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { CssBaseline, withStyles } from "@material-ui/core";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";

import history from "../history";
import Static from "../pages/layouts/Static";
import Dashboard from "../pages/layouts/Dashboard";
import Auth from "../pages/layouts/Auth";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/errors/NotFoundPage";
import Notifier from "./Notifier";

class App extends Component {
    render() {
        const { classes, authorized, t } = this.props;

        return (
            <div className={classes.appWrapper}>
                <CssBaseline />
                <Notifier t={t} />
                <Router history={history}>
                    <Switch>
                        <Route
                            path="/dashboard"
                            exact
                            render={props => {
                                return authorized ? (
                                    <Dashboard t={t} {...props}>
                                        <DashboardPage />
                                    </Dashboard>
                                ) : (
                                    <Redirect to="/login" />
                                );
                            }}
                        />
                        <Route
                            path="/login"
                            exact
                            render={props => {
                                return authorized ? (
                                    <Redirect to="/dashboard" />
                                ) : (
                                    <Auth {...props}>
                                        <LoginPage t={t} />
                                    </Auth>
                                );
                            }}
                        />
                        <Route
                            path="/register"
                            exact
                            render={props => {
                                return authorized ? (
                                    <Redirect to="/dashboard" />
                                ) : (
                                    <Auth {...props}>
                                        <RegisterPage t={t} />
                                    </Auth>
                                );
                            }}
                        />
                        <Route
                            path="/"
                            exact
                            render={props => (
                                <Static t={t} {...props}>
                                    <HomePage t={t} />
                                </Static>
                            )}
                        />
                        <Route render={() => <NotFoundPage t={t} />} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authorized: state.auth.authorized
    };
};

const styles = theme => ({
    appWrapper: {
        display: "flex",
        minHeight: "100vh",
        width: "100vw",
        maxWidth: "100%",
        flexDirection: "column"
    }
});

export default connect(mapStateToProps)(withStyles(styles)(withTranslation()(App)));
