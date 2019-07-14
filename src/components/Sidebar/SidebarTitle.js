import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

const SidebarTitle = props => {
    const { classes, t } = props;

    return (
        <Fragment>
            <div className={classes.sidebarTitle}>
                {t("header.brand")}
                <Divider className={classes.sidebarTitleDivider} component="hr" />
            </div>
        </Fragment>
    );
};

const styles = theme => ({
    sidebarTitle: {
        width: "90%",
        textAlign: "center",
        margin: "auto",
        marginTop: theme.spacing(2),
        color: theme.palette.common.white
    },
    sidebarTitleDivider: {
        marginTop: theme.spacing(1),
        backgroundColor: "white"
    }
});

export default withStyles(styles)(SidebarTitle);
