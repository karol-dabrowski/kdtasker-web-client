import React, {Component} from 'react';
import {connect} from "react-redux";

import RegistrationForm from "../components/Forms/RegistrationForm";
import AuthWrapper from "../components/AuthWrapper";
import Preloader from "../components/Preloader";
import {register} from "../actions/authActions";
import {clearPreviousFormState} from "../actions/formStateActions";

class RegisterPage extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.props.dispatch(clearPreviousFormState());
    }

    handleRegistrationFormSubmit = (email, password, firstName, lastName) => {
        this.props.dispatch(register(email, password, firstName, lastName));
    };

    render() {
        const {loading, previousState, t} = this.props;

        if(loading) {
            return <Preloader />;
        } else {
            return (
                <AuthWrapper title={t('form.registration_header')}>
                    <RegistrationForm handleSubmit={this.handleRegistrationFormSubmit} formState={previousState} t={t} />
                </AuthWrapper>
            );
        }
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        previousState: state.formState.register
    };
};

export default connect(mapStateToProps)(RegisterPage);
