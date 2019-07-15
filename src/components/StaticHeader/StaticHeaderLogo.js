import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const StaticHeaderLogo = props => {
    const { classes, t } = props;
    return (
        <Typography variant="h6" noWrap className={classes.staticToolbarTitle}>
            <Link to="/" className={classes.staticToolbarTitleLink}>
                {t("header.brand")}
            </Link>
        </Typography>
    );
};

StaticHeaderLogo.propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
};

const styles = theme => ({
    staticToolbarTitle: {
        flex: 1
    },
    staticToolbarTitleLink: {
        outline: 0,
        color: theme.palette.primary.main,
        textDecoration: "none"
    }
});

export default withStyles(styles)(StaticHeaderLogo);
