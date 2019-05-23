import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import HomePage from "../HomePage";
import {withStyles} from "@material-ui/core";

class Static extends Component {
    render() {
        const {classes} = this.props;

        return (
            <div className={classes.staticContainer}>
                <Router>
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                    </Switch>
                </Router>
            </div>
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