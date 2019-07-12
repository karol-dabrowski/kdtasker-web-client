import React from "react";
import { withStyles } from "@material-ui/core";

const NextDaysTasksTitle = props => {
    const { classes, date, dayOfTheWeek } = props;

    return (
        <h4 className={classes.dayTableHeader}>
            {dayOfTheWeek} - {date}
        </h4>
    );
};

const styles = theme => ({
    dayTableHeader: {
        marginTop: theme.spacing(0)
    }
});

export default withStyles(styles)(NextDaysTasksTitle);
