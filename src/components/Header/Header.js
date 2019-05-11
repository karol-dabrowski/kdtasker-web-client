import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap >
                    Tasker
                </Typography>
                <Button color="primary" variant="outlined">
                    Sign in
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;