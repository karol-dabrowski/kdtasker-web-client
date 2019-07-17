import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Done from "@material-ui/icons/Done";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

const NextDaysTasksTableRow = props => {
    const { classes, task, handleConfirm, handleDelete, handleEdit } = props;

    return (
        <TableRow>
            <TableCell align="left" className={classes.deadlineCell}>
                {task.deadline_time}
            </TableCell>
            <TableCell align="left">{task.title}</TableCell>
            <TableCell align="left">
                <IconButton
                    aria-label="Done"
                    onClick={() => {
                        handleConfirm(task.task_id);
                    }}
                >
                    <Done />
                </IconButton>
                <IconButton
                    aria-label="Edit"
                    onClick={() => {
                        handleEdit(task.task_id);
                    }}
                >
                    <Edit />
                </IconButton>
                <IconButton
                    aria-label="Delete"
                    onClick={() => {
                        handleDelete(task.task_id);
                    }}
                >
                    <Delete />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

NextDaysTasksTableRow.propTypes = {
    classes: PropTypes.object.isRequired,
    task: PropTypes.object.isRequired,
    handleConfirm: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
};

const styles = theme => ({
    deadlineCell: {
        width: theme.spacing(12)
    }
});

export default withStyles(styles)(NextDaysTasksTableRow);
