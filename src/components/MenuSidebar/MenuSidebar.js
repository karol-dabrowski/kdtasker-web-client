import React, {Component, Fragment} from 'react';
import Drawer from "@material-ui/core/Drawer";
import {withStyles, Hidden} from "@material-ui/core";

import background from '../../assets/images/sidebar-background.jpg';

class MenuSidebar extends Component {
    render() {
        const {classes, open, handleClose} = this.props;

        const sidebarContent = <Fragment>
            <div className={classes.menuSidebarContent}>
                Test Drawer Text
            </div>
            <div
                className={classes.menuSidebarBackground}
                style={{ backgroundImage: "url(" + background + ")" }}
            />
        </Fragment>;

        return (
            <Fragment>
                <Hidden mdDown>
                    <Drawer
                        variant="persistent"
                        anchor="left"
                        open={open}
                        className={classes.menuSidebar}
                        classes={{
                            paper: classes.menuSidebarPaper,
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
                            paper: classes.menuSidebarPaper,
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
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
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
            background: theme.palette.common.black,
            opacity: ".2"
        }
    }
});

export default withStyles(styles)(MenuSidebar);