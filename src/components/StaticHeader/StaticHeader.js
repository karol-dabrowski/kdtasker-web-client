import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";
import StaticHeaderMenu from "./StaticHeaderMenu";
import StaticHeaderUserMenu from "./StaticHeaderUserMenu";

const StaticHeader = (props) => {
    const {isLogged, classes} = props;
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="title" noWrap className={classes.staticToolbarTitle}>
                    <Link to='/' className={classes.staticToolbarTitleLink}>Tasker</Link>
                </Typography>
                <StaticHeaderMenu isLogged={isLogged} />
                <StaticHeaderUserMenu isLogged={isLogged} />
            </Toolbar>
        </AppBar>
    );
};

const styles = theme => ({
    staticToolbarTitle: {
        flex: 1
    },
    staticToolbarTitleLink: {
        outline: 0,
        color: theme.palette.primary.main,
        textDecoration: 'none'
    }
});

export default withStyles(styles)(StaticHeader);