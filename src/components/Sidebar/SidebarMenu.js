import React from "react";
import { withStyles } from "@material-ui/core";

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

const styles = theme => ({
    sidebarMenu: {
        width: "90%",
        margin: "auto",
        marginTop: theme.spacing(4)
    }
});

export default withStyles(styles)(SidebarMenu);
