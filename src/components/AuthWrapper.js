import React from "react";
import { withStyles, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import FormLogo from "./Forms/elements/FormLogo";

const AuthWrapper = props => {
    const { classes, children, title } = props;

    return (
        <Grid container justify="center">
            <Grid className={classes.authWrapper} item xs={10} sm={8} md={6} lg={4} xl={3}>
                <FormLogo />
                <Typography className={classes.wrapperTitle} variant="h6" noWrap>
                    {title}
                </Typography>
                {children}
            </Grid>
        </Grid>
    );
};

const styles = theme => ({
    authWrapper: {
        backgroundColor: theme.palette.background.authWrapper,
        marginTop: theme.spacing(8),
        padding: theme.spacing(5),
        boxShadow: theme.shadows[12],
        [theme.breakpoints.down("xs")]: {
            marginTop: theme.spacing(5),
            padding: theme.spacing(2)
        }
    },
    wrapperTitle: {
        marginBottom: theme.spacing(1)
    }
});

export default withStyles(styles)(AuthWrapper);
