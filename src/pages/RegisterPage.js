import React, {Component} from 'react';
import {connect} from "react-redux";

import AuthWrapper from "../components/AuthWrapper";
import Preloader from "../components/Preloader";

class RegisterPage extends Component {

    render() {
        const {loading} = this.props;

        if(loading) {
            return <Preloader />;
        } else {
            const formTitle = 'Sign up';
            return (
                <AuthWrapper title={formTitle}>

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

export default connect(mapStateToProps)(RegisterPage);
