import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TodaysTasksTableRow = props => {
    const {task} = props;

    return (
        <TableRow>
            <TableCell align="left">{task.time}</TableCell>
            <TableCell align="left">{task.title}</TableCell>
            <TableCell align="left">@</TableCell>
        </TableRow>
    );
};

export default TodaysTasksTableRow;