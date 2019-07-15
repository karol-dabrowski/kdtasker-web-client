import React from "react";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const NextDaysTasksTitle = props => {
    const { classes, date, dayOfTheWeek } = props;

    return (
        <h4 className={classes.dayTableHeader}>
            {dayOfTheWeek} - {date}
        </h4>
    );
};

NextDaysTasksTitle.propTypes = {
    classes: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    dayOfTheWeek: PropTypes.string.isRequired
};

const styles = theme => ({
    dayTableHeader: {
        marginTop: theme.spacing(0)
    }
});

export default withStyles(styles)(NextDaysTasksTitle);
