import React, {Component} from 'react';
import {connect} from "react-redux";

import LoginForm from "../components/Forms/LoginForm";
import {login} from "../actions/authActions";
import AuthWrapper from "../components/AuthWrapper";
import Preloader from "../components/Preloader";

class LoginPage extends Component {
    handleLoginFormSubmit = (email, password) => {
        this.props.dispatch(login(email, password));
    };

    render() {
        const {loading} = this.props;

        if(loading) {
            return <Preloader />;
        } else {
            const formTitle = 'Sign in';
            return (
                <AuthWrapper title={formTitle}>
                    <LoginForm handleSubmit={this.handleLoginFormSubmit} />
                </AuthWrapper>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps)(LoginPage);
