import React, { Component } from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from "prop-types";

import StaticHeaderUserMenu from "./StaticHeaderUserMenu";
import StaticHeaderLogo from "./StaticHeaderLogo";

class StaticHeader extends Component {
    render() {
        const { authorized, t } = this.props;

        return (
            <AppBar position="static" color="default">
                <Toolbar>
                    <StaticHeaderLogo t={t} />
                    <StaticHeaderUserMenu isLogged={authorized} t={t} />
                </Toolbar>
            </AppBar>
        );
    }
}

StaticHeader.propTypes = {
    authorized: PropTypes.bool.isRequired,
    t: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        authorized: state.auth.authorized
    };
};

export default connect(mapStateToProps)(StaticHeader);
