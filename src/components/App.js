import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CssBaseline, withStyles} from "@material-ui/core";

import Static from "../pages/layouts/Static";
import Dashboard from "../pages/layouts/Dashboard";
import Auth from "../pages/layouts/Auth";

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.appWrapper}>
                <CssBaseline/>
                <Router>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/login" component={Auth} exact />
                        <Route component={Static} />
                    </Switch>
                </Router>
            </div>
        );
    };
}

const styles = theme => ({
    appWrapper: {
        minHeight: '100vh',
    },
});

export default withStyles(styles)(App);
