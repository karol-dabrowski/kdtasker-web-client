import React from "react";
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/core";

const StaticHeaderLogo = (props) => {
    const {classes} = props;
    return (
        <Typography variant="title" noWrap className={classes.staticToolbarTitle}>
            <Link to='/' className={classes.staticToolbarTitleLink}>Tasker</Link>
        </Typography>
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

export default withStyles(styles)(StaticHeaderLogo);