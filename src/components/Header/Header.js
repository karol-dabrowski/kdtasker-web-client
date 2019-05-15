import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

const Header = ({isLogged}) => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="title" color="inherit" noWrap>
                    Tasker
                </Typography>

                {isLogged ? (
                    <Typography color="inherit" noWrap component={Link} to="/dashboard">
                        Dashboard
                    </Typography>
                ) : (
                    <Button color="primary" variant="outlined" component={Link} to="/login">
                        Sign in
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;