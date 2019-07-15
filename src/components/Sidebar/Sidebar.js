import React, { Component, Fragment } from "react";
import Drawer from "@material-ui/core/Drawer";
import { withStyles, Hidden } from "@material-ui/core";

import background from "../../assets/images/sidebar-background.jpg";
import MenuSidebarTitle from "./SidebarTitle";
import SidebarMenu from "./SidebarMenu";

class Sidebar extends Component {
    render() {
        const { classes, open, handleClose, t } = this.props;

        const sidebarContent = (
            <Fragment>
                <div className={classes.menuSidebarContent}>
                    <MenuSidebarTitle t={t} />
                    <SidebarMenu t={t} />
                </div>
                <div className={classes.menuSidebarBackground} style={{ backgroundImage: "url(" + background + ")" }} />
            </Fragment>
        );

        return (
            <Fragment>
                <Hidden mdDown>
                    <Drawer
                        variant="persistent"
                        anchor="left"
                        open={open}
                        className={classes.menuSidebar}
                        classes={{
                            paper: classes.menuSidebarPaper
                        }}
                    >
                        {sidebarContent}
                    </Drawer>
                </Hidden>

                <Hidden lgUp>
                    <Drawer
                        variant="temporary"
                        anchor="left"
                        open={open}
                        onEscapeKeyDown={handleClose}
                        onBackdropClick={handleClose}
                        className={classes.menuSidebar}
                        classes={{
                            paper: classes.menuSidebarPaper
                        }}
                    >
                        {sidebarContent}
                    </Drawer>
                </Hidden>
            </Fragment>
        );
    }
}

const styles = theme => ({
    menuSidebar: {
        width: `${theme.props.SidebarMenu.width}px`
    },
    menuSidebarPaper: {
        width: `${theme.props.SidebarMenu.width}px`
    },
    menuSidebarContent: {
        zIndex: 4,
        backgroundColor: "transparent",
        border: "none",
        position: "absolute",
        width: "100%",
        top: "0",
        bottom: "0",
        left: "0"
    },
    menuSidebarBackground: {
        position: "absolute",
        zIndex: "1",
        height: "100%",
        width: "100%",
        display: "block",
        top: "0",
        left: "0",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        "&:after": {
            position: "absolute",
            zIndex: "3",
            width: "100%",
            height: "100%",
            content: '""',
            display: "block",
            background: theme.palette.primary.main,
            opacity: ".6"
        }
    }
});

export default withStyles(styles)(Sidebar);
