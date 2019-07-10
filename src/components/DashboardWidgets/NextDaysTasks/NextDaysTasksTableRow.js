import React from 'react';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {withStyles} from "@material-ui/core";

const NextDaysTasksTableRow = props => {
    const {classes, task} = props;

    return (
        <TableRow>
            <TableCell align="left" className={classes.deadlineCell}>{task.deadline_time}</TableCell>
            <TableCell align="left">{task.title}</TableCell>
            <TableCell align="left">

            </TableCell>
        </TableRow>
    );
};

const styles = theme => ({
    deadlineCell: {
        width: theme.spacing(12)
    }
});

export default withStyles(styles)(NextDaysTasksTableRow);