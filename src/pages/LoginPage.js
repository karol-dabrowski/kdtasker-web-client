import React, {Component} from 'react';
import {connect} from "react-redux";
import {withSnackbar} from 'notistack';

import LoginForm from "../components/Forms/LoginForm";
import {login} from "../actions/authActions";
import AuthWrapper from "../components/AuthWrapper";
import Preloader from "../components/Preloader";

class LoginPage extends Component {
    showFailedLoginSnackbar = message => {
        this.props.enqueueSnackbar(message, {
            variant: "error",
            preventDuplicate: true,
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'right',
            },
        });
    };

    handleLoginFormSubmit = (email, password) => {
        this.props.dispatch(login(email, password, this.showFailedLoginSnackbar));
    };

    render() {
        const {loading, previousState} = this.props;

        if(loading) {
            return <Preloader />;
        } else {
            const formTitle = 'Sign in';
            return (
                <AuthWrapper title={formTitle}>
                    <LoginForm handleSubmit={this.handleLoginFormSubmit} formState={previousState} />
                </AuthWrapper>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        previousState: state.formState.login
    };
};

export default connect(mapStateToProps)(withSnackbar(LoginPage));
