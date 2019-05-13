import React, {Component} from 'react';
import Header from './Header';
import {connect} from "react-redux";

class HeaderContainer extends Component {
    render() {
        return (
            <Header isLogged={this.props.authorized}/>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        authorized: state.auth.authorized
    };
};

export default connect(mapStateToProps)(HeaderContainer);