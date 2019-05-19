import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import HeaderMenu from "./HeaderMenu";
import HeaderUserMenu from "./HeaderUserMenu";

const Header = (props) => {
    const {isLogged, classes} = props;
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="title" noWrap className={classes.toolbarTitle}>
                    <Link to='/' className={classes.toolbarTitleLink}>Tasker</Link>
                </Typography>
                <HeaderMenu isLogged={isLogged} />
                <HeaderUserMenu isLogged={isLogged} />
            </Toolbar>
        </AppBar>
    );
};

const styles = theme => ({
    toolbarTitle: {
        flex: 1
    },
    toolbarTitleLink: {
        outline: 0,
        color: theme.palette.primary.main,
        textDecoration: 'none'
    }
});

export default withStyles(styles)(Header);