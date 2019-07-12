import React from "react";
import { withStyles } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const Preloader = props => {
    const { classes } = props;
    return (
        <div className={classes.preloaderWrapper}>
            <CircularProgress />
        </div>
    );
};

const styles = theme => ({
    preloaderWrapper: {
        display: "flex",
        justifyContent: "center",
        minHeight: theme.spacing(8)
    }
});

export default withStyles(styles)(Preloader);
