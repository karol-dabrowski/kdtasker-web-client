import React, {Fragment} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Refresh from '@material-ui/icons/Refresh';
import {withStyles} from "@material-ui/core";

const WidgetWrapper = props => {
    const {title, classes, widgetMenu, refreshButton, handleRefresh, children} = props;

    const actions =
        <Fragment>
            {refreshButton ? (
                <IconButton aria-label="Refresh" onClick={handleRefresh} className={classes.wrapperRefreshIcon}>
                    <Refresh  />
                </IconButton>
            ) : ''}
            {widgetMenu ? (
                <IconButton aria-label="Settings">
                    <MoreVertIcon className={classes.wrapperMoreIcon} />
                </IconButton>
            ) : ''}
        </Fragment>;


    return (
        <Card>
            <CardHeader
                className={classes.wrapperHeader}
                title={title}
                action={actions}
            />
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
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
});

export default withStyles(styles)(WidgetWrapper);
