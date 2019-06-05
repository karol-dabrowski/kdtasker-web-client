import React from "react";
import AppBar from "@material-ui/core/AppBar/index";
import Toolbar from "@material-ui/core/Toolbar/index";
import classNames from 'classnames';
import {withStyles} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';

const DashboardHeader = (props) => {
    const {classes, drawerIsOpen, toggleDrawer} = props;

    return (
        <AppBar position="static" color="default" className={classNames(
            classes.appBar,
            {[classes.appBarShift]: drawerIsOpen}
        )}>
            <Toolbar>
                <IconButton
                    aria-label="More"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={toggleDrawer}
                >
                    <Menu />
                </IconButton>
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
        marginBottom: theme.spacing(6)
    },
    appBarShift: {
        [theme.breakpoints.up('lg')]: {
            width: `calc(100% - ${theme.props.SidebarMenu.width}px)`,
            marginLeft: theme.props.SidebarMenu.width,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }
    },
});

export default withStyles(styles)(DashboardHeader);