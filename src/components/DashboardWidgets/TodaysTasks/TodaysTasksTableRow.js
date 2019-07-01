import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from '@material-ui/core/IconButton';
import Done from '@material-ui/icons/Done';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';

const TodaysTasksTableRow = props => {
    const {task, handleConfirm, handleDelete, handleEdit} = props;

    return (
        <TableRow>
            <TableCell align="left">{task.deadline_time}</TableCell>
            <TableCell align="left">{task.title}</TableCell>
            <TableCell align="left">
                <IconButton aria-label="Done" onClick={() => {
                    handleConfirm(task.task_id);
                }}>
                    <Done />
                </IconButton>
                <IconButton aria-label="Edit" onClick={() => {
                    handleEdit(task.task_id);
                }}>
                    <Edit />
                </IconButton>
                <IconButton aria-label="Delete" onClick={() => {
                    handleDelete(task.task_id);
                }}>
                    <Delete />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default TodaysTasksTableRow;