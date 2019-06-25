import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from '@material-ui/core/IconButton';
import Done from '@material-ui/icons/Done';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

const TodaysTasksTableRow = props => {
    const {task} = props;

    return (
        <TableRow>
            <TableCell align="left">{task.time}</TableCell>
            <TableCell align="left">{task.title}</TableCell>
            <TableCell align="left">
                <IconButton aria-label="Done">
                    <Done />
                </IconButton>
                <IconButton aria-label="Edit">
                    <Edit />
                </IconButton>
                <IconButton aria-label="Delete">
                    <Delete />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default TodaysTasksTableRow;