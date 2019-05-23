import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {withStyles} from "@material-ui/core";

import HomePage from "../HomePage";
import StaticHeader from "../../components/containers/StaticHeader";

class Static extends Component {
    render() {
        const {classes} = this.props;

        return (
            <Fragment>
                <StaticHeader />
                <div className={classes.staticContainer}>
                    <Router>
                        <Switch>
                            <Route path="/" component={HomePage} exact />
                        </Switch>
                    </Router>
                </div>
            </Fragment>
        );
    }
}

const styles = theme => ({
    staticContainer: {
        backgroundColor: theme.palette.background.default,
        width: '100%'
    },
});

export default withStyles(styles)(Static);