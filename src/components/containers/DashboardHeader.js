import React from "react";
import AppBar from "@material-ui/core/AppBar/index";
import Toolbar from "@material-ui/core/Toolbar/index";
import classNames from 'classnames';
import {withStyles} from "@material-ui/core";

const DashboardHeader = (props) => {
    const {classes, drawerIsOpen} = props;
    console.log(props);
    return (
        <AppBar position="static" color="default" className={classNames(
            classes.appBar,
            {[classes.appBarShift]: drawerIsOpen}
        )}>
            <Toolbar>
                Toolbar
            </Toolbar>
        </AppBar>
    );
};

const styles = theme => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${theme.props.SidebarMenu.width}px)`,
        marginLeft: theme.props.SidebarMenu.width,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
});

export default withStyles(styles)(DashboardHeader);