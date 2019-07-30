import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Refresh from "@material-ui/icons/Refresh";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const WidgetWrapper = props => {
    const { classes, title, widgetMenu, refreshButton, handleRefresh, children, loading } = props;

    const actions = (
        <Fragment>
            {refreshButton ? (
                <IconButton
                    aria-label="Refresh"
                    disabled={loading}
                    onClick={handleRefresh}
                    className={classes.wrapperRefreshIcon}
                >
                    <Refresh />
                </IconButton>
            ) : (
                ""
            )}
            {widgetMenu ? (
                <IconButton aria-label="Settings">
                    <MoreVertIcon className={classes.wrapperMoreIcon} />
                </IconButton>
            ) : (
                ""
            )}
        </Fragment>
    );

    return (
        <Card>
            <CardHeader className={classes.wrapperHeader} title={title} action={actions} />
            <CardContent className={classes.wrapperContent}>{children}</CardContent>
        </Card>
    );
};

WidgetWrapper.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    widgetMenu: PropTypes.bool,
    refreshButton: PropTypes.bool,
    handleRefresh: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array, PropTypes.element]).isRequired,
    loading: PropTypes.bool.isRequired
};

const styles = theme => ({
    wrapperHeader: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white
    },
    wrapperMoreIcon: {
        color: theme.palette.common.white
    },
    wrapperRefreshIcon: {
        color: theme.palette.common.white
    },
    wrapperContent: {
        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1)
        }
    }
});

export default withStyles(styles)(WidgetWrapper);
