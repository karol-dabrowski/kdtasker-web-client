import React from "react";
import { Button, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarMenuItem = props => {
    const { classes, menuItem, t } = props;

    return (
        <Button className={classes.sidebarMenuItem} variant="outlined" component={Link} to={menuItem.path}>
            {t(menuItem.name)}
        </Button>
    );
};

SidebarMenuItem.propTypes = {
    classes: PropTypes.object.isRequired,
    menuItem: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
};

const styles = theme => ({
    sidebarMenuItem: {
        width: "100%",
        textAlign: "center",
        borderColor: theme.palette.common.white,
        color: theme.palette.common.white,
        marginBottom: theme.spacing(2),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        "&:last-of-type": {
            marginBottom: theme.spacing(0)
        },
        "&:hover": {
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.common.white
        }
    }
});

export default withStyles(styles)(SidebarMenuItem);
