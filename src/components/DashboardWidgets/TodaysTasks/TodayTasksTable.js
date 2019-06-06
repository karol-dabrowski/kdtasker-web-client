import React from 'react';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import {withStyles} from "@material-ui/core";
import TodaysTasksTableRow from "./TodaysTasksTableRow";

const TodaysTasksTable = props => {
    const {tasks, classes} = props;

    const rows = tasks.map(task =>
        <TodaysTasksTableRow task={task} />
    );

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell className={classes.deadlineCell} align="left">Time</TableCell>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows}
            </TableBody>
        </Table>
    );
};

const styles = theme => ({
    deadlineCell: {
        width: theme.spacing(12)
    }
});

export default withStyles(styles)(TodaysTasksTable);