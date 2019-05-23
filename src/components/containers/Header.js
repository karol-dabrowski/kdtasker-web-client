import React, {Component} from 'react';
import {connect} from "react-redux";

import StaticHeader from "../StaticHeader/StaticHeader";

class Header extends Component {
    render() {
        const {type, authorized} = this.props;

        let header;
        if(type === 'static') {
            header = <StaticHeader isLogged={authorized} />
        }

        return header;
    };
}

const mapStateToProps = (state) => {
    return {
        authorized: state.auth.authorized
    };
};

export default connect(mapStateToProps)(Header);