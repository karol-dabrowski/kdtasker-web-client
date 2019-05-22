import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import LoginForm from "../Login/LoginForm";
import {login} from "../../actions/authActions";

class Login extends Component {
    handleLoginFormSubmit = (email, password) => {
        this.props.dispatch(login(email, password));
    };

    render() {
        const {authorized, loading} = this.props;

        if(authorized) {
            return <Redirect to='/dashboard'/>
        }

        if(loading) {
            return 'loading';
        } else {
            return <LoginForm handleSubmit={this.handleLoginFormSubmit} />;
        }
    };
}

const mapStateToProps = (state) => {
    return {
        authorized: state.auth.authorized,
        loading: state.auth.loading
    };
};

export default connect(mapStateToProps)(Login);