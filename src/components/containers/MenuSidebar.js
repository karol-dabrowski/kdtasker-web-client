import React, {Component} from 'react';
import Drawer from "@material-ui/core/Drawer";
import {withStyles} from "@material-ui/core";

class MenuSidebar extends Component {
    render() {
        const {classes, open} = this.props;

        return (
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
                className={classes.menuSidebar}
                classes={{
                    paper: classes.menuSidebarPaper,
                }}
            >
                Test Drawer Text
            </Drawer>
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
});

export default withStyles(styles)(MenuSidebar);