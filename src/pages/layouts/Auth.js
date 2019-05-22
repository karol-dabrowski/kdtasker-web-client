import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={LoginPage} exact />
                </Switch>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authorized: state.auth.authorized
    };
};

export default connect(mapStateToProps)(Auth);