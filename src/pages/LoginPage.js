import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import LoginForm from "../components/Forms/LoginForm";
import { login } from "../actions/authActions";
import { clearPreviousFormState } from "../actions/formStateActions";
import AuthWrapper from "../components/AuthWrapper";
import Preloader from "../components/Preloader";

class LoginPage extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.dispatch(clearPreviousFormState());
    }

    handleLoginFormSubmit = (email, password) => {
        this.props.dispatch(login(email, password));
    };

    render() {
        const { loading, previousState, t } = this.props;

        if (loading) {
            return <Preloader />;
        } else {
            return (
                <AuthWrapper title={t("form.login_header")} t={t}>
                    <LoginForm handleSubmit={this.handleLoginFormSubmit} formState={previousState} t={t} />
                </AuthWrapper>
            );
        }
    }
}

LoginPage.propTypes = {
    loading: PropTypes.bool.isRequired,
    previousState: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        previousState: state.formState.login
    };
};

export default connect(mapStateToProps)(LoginPage);
