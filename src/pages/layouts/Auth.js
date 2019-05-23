import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";

import LoginPage from "../LoginPage";

class Auth extends Component {
    componentDidMount() {
        const {history, authorized} = this.props;
        if(authorized) {
            history.push('/dashboard');
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.authContainer}>
                <Router>
                    <Switch>
                        <Route path="/login" component={LoginPage} exact />
                    </Switch>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authorized: state.auth.authorized
    };
};

const styles = theme => ({
    authContainer: {
        backgroundColor: theme.palette.background.auth,
        width: '100%'
    },
});

export default connect(mapStateToProps)(withStyles(styles)(Auth));