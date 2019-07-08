import React, {Fragment} from "react";
import {withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

const StaticHeaderUserMenu = (props) => {
    const {classes, isLogged} = props;

    return (
        isLogged ? (
            ''
        ) : (
            <Fragment>
                <Button color="primary" variant="outlined" component={Link} to="/login">
                    Sign in
                </Button>
                <Button className={classes.registerButton} color="primary" variant="outlined" component={Link} to="/register">
                    Sign up
                </Button>
            </Fragment>
        )
    );
};

const styles = theme => ({
    registerButton: {
        marginLeft: theme.spacing(2)
    },
});

export default withStyles(styles)(StaticHeaderUserMenu);