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
        const {loading, previousState} = this.props;

        if(loading) {
            return <Preloader />;
        } else {
            const formTitle = 'Sign up';
            return (
                <AuthWrapper title={formTitle}>
                    <RegistrationForm handleSubmit={this.handleRegistrationFormSubmit} formState={previousState} />
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
