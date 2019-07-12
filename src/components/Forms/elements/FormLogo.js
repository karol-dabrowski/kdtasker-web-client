import React from "react";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const FormLogo = props => {
    const { classes, t } = props;

    return (
        <div className={classes.logoWrapper}>
            <Typography className={classes.logoHeader} variant="h5" noWrap>
                <Link className={classes.logoHeaderLink} to="/">
                    {t("header.brand")}
                </Link>
            </Typography>
        </div>
    );
};

const style = theme => ({
    logoWrapper: {
        width: "100%",
        textAlign: "center",
        marginBottom: theme.spacing(3)
    },
    logoHeader: {
        margin: theme.spacing(0),
        display: "inline"
    },
    logoHeaderLink: {
        outline: 0,
        color: theme.palette.primary.main,
        textDecoration: "none"
    }
});

export default withStyles(style)(FormLogo);
