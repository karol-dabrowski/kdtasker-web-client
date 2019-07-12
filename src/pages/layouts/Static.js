import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core";

import StaticHeader from "../../components/StaticHeader/StaticHeader";

class Static extends Component {
    render() {
        const { classes, children, t } = this.props;

        return (
            <Fragment>
                <StaticHeader t={t} />
                <div className={classes.staticContainer}>{children}</div>
            </Fragment>
        );
    }
}

const styles = theme => ({
    staticContainer: {
        backgroundColor: theme.palette.background.default,
        width: "100%"
    }
});

export default withStyles(styles)(Static);
