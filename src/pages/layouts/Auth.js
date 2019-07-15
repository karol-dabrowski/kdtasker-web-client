import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

class Auth extends Component {
    render() {
        const { classes, children } = this.props;

        return <div className={classes.authContainer}>{children}</div>;
    }
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.element.isRequired
};

const styles = theme => ({
    authContainer: {
        backgroundColor: theme.palette.background.auth,
        width: "100%",
        flex: 1
    }
});

export default withStyles(styles)(Auth);
