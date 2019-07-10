import React, {Component} from 'react';
import {connect} from "react-redux";

import RegistrationForm from "../components/Forms/RegistrationForm";
import AuthWrapper from "../components/AuthWrapper";
import Preloader from "../components/Preloader";

class RegisterPage extends Component {
    handleRegistrationFormSubmit = (email, password, firstName, lastName) => {
        //@TODO implement handler
        console.log(email, password, firstName, lastName);
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
