import React, {Component} from 'react';
import {connect} from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import StaticHeaderMenu from "../StaticHeader/StaticHeaderMenu";
import StaticHeaderUserMenu from "../StaticHeader/StaticHeaderUserMenu";
import StaticHeaderLogo from "../StaticHeader/StaticHeaderLogo";

class StaticHeader extends Component {
    render() {
        const {authorized} = this.props;

        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <StaticHeaderLogo />
                    <StaticHeaderMenu isLogged={authorized} />
                    <StaticHeaderUserMenu isLogged={authorized} />
                </Toolbar>
            </AppBar>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        authorized: state.auth.authorized
    };
};

export default connect(mapStateToProps)(StaticHeader);