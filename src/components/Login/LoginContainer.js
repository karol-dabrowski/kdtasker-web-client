import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import LoginForm from "./LoginForm";

class LoginContainer extends Component {
    render() {
        const {authorized, loading} = this.props;

        if(authorized) {
            return <Redirect to='/dashboard'/>
        }

        if(loading) {
            return 'loading';
        } else {
            return <LoginForm/>;
        }
    };
}

const mapStateToProps = (state) => {
    return {
        authorized: state.auth.authorized,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps)(LoginContainer);