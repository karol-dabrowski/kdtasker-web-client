import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const StaticHeaderUserMenu = props => {
    const { classes, isLogged, t } = props;

    return isLogged ? (
        ""
    ) : (
        <Fragment>
            <Button color="primary" variant="outlined" component={Link} to="/login">
                {t("button.login")}
            </Button>
            <Button
                className={classes.registerButton}
                color="primary"
                variant="outlined"
                component={Link}
                to="/register"
            >
                {t("button.register")}
            </Button>
        </Fragment>
    );
};

StaticHeaderUserMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    isLogged: PropTypes.bool.isRequired,
    t: PropTypes.func.isRequired
};

const styles = theme => ({
    registerButton: {
        marginLeft: theme.spacing(2)
    }
});

export default withStyles(styles)(StaticHeaderUserMenu);
