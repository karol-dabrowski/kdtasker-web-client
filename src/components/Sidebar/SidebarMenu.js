import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import menuList from "../../menus/sidebarMenuItems";
import SidebarMenuItem from "./SidebarMenuItem";

const SidebarMenu = props => {
    const { classes, t } = props;

    return (
        <div className={classes.sidebarMenu}>
            {menuList.map(menuItem => (
                <SidebarMenuItem key={menuItem.name} menuItem={menuItem} t={t} />
            ))}
        </div>
    );
};

SidebarMenu.propTypes = {
    classes: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
};

const styles = theme => ({
    sidebarMenu: {
        width: "90%",
        margin: "auto",
        marginTop: theme.spacing(4)
    }
});

export default withStyles(styles)(SidebarMenu);
