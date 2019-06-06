import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TodaysTasksTableRow = props => {
    const {task} = props;

    return (
        <TableRow key={task.id}>
            <TableCell align="left">{task.deadlineTime.substring(0, 5)}</TableCell>
            <TableCell align="left">{task.title}</TableCell>
            <TableCell align="left">@</TableCell>
        </TableRow>
    );
};

export default TodaysTasksTableRow;