import React from "react";
import {withStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const HomePage = props => {
    const {classes} = props;

    return (
        <div className={classes.temporaryContentWrapper}>
            <h3>Home page under construction.</h3>
            <p>You can register or login to the alpha version of the dashboard</p>
            <Button className={classes.temporaryContentLoginButton} color="primary" variant="outlined" component={Link} to="/login">
                Sign in
            </Button>
            <Button className={classes.temporaryContentRegisterButton} color="primary" variant="outlined" component={Link} to="/register">
                Sign up
            </Button>
        </div>
    );
};

const styles = theme => ({
    temporaryContentWrapper: {
        textAlign: 'center',
        marginTop: theme.spacing(10)
    },
    temporaryContentLoginButton: {
        marginRight: theme.spacing(1)
    },
    temporaryContentRegisterButton: {
        marginLeft: theme.spacing(1)
    }
});

export default withStyles(styles)(HomePage);
