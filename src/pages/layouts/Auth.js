import React, {Component} from 'react';
import {withStyles} from "@material-ui/core";

class Auth extends Component {
    render() {
        const {classes, children} = this.props;

        return (
            <div className={classes.authContainer}>
                {children}
            </div>
        );
    }
}

const styles = theme => ({
    authContainer: {
        backgroundColor: theme.palette.background.auth,
        width: '100%',
        flex: 1
    },
});

export default withStyles(styles)(Auth);