import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {CssBaseline, withStyles} from "@material-ui/core";

import history from '../history';
import Static from "../pages/layouts/Static";
import Dashboard from "../pages/layouts/Dashboard";
import Auth from "../pages/layouts/Auth";

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.appWrapper}>
                <CssBaseline/>
                <Router history={history}>
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
        display: 'flex',
        minHeight: '100vh',
        width: '100vw',
        maxWidth: '100%',
        'flex-direction': 'column'
    },
});

export default withStyles(styles)(App);
