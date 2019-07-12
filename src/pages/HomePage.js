import React from "react";
import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const HomePage = props => {
    const { classes, t } = props;

    return (
        <div className={classes.temporaryContentWrapper}>
            <h3>{t("page.home.title")}</h3>
            <p>{t("page.home.subtitle")}</p>
            <Button
                className={classes.temporaryContentLoginButton}
                color="primary"
                variant="outlined"
                component={Link}
                to="/login"
            >
                {t("button.login")}
            </Button>
            <Button
                className={classes.temporaryContentRegisterButton}
                color="primary"
                variant="outlined"
                component={Link}
                to="/register"
            >
                {t("button.register")}
            </Button>
        </div>
    );
};

const styles = theme => ({
    temporaryContentWrapper: {
        textAlign: "center",
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
