import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import Done from "@material-ui/icons/Done";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

const TodaysTasksTableRow = props => {
    const { classes, task, handleConfirm, handleDelete, handleEdit } = props;
    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

    return (
        <TableRow className={classes.todaysTasksRow}>
            <TableCell align="left" className={classes.deadlineCell}>
                {task.deadline_time}
            </TableCell>
            <TableCell align="left" className={classes.titleCell}>
                <ResponsiveEllipsis text={task.title} maxLine="3" ellipsis="..." trimRight basedOn="letters" />
            </TableCell>
            <TableCell className={classes.actionsCell} align="left">
                <IconButton
                    aria-label="Done"
                    className={classes.actionButton}
                    onClick={() => {
                        handleConfirm(task.task_id);
                    }}
                >
                    <Done />
                </IconButton>
                <IconButton
                    aria-label="Edit"
                    className={classes.actionButton}
                    onClick={() => {
                        handleEdit(task.task_id);
                    }}
                >
                    <Edit />
                </IconButton>
                <IconButton
                    aria-label="Delete"
                    className={classes.actionButton}
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

TodaysTasksTableRow.propTypes = {
    classes: PropTypes.object.isRequired,
    task: PropTypes.object.isRequired,
    handleConfirm: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
};

const styles = theme => ({
    todaysTasksRow: {
        "& td:last-child": {
            [theme.breakpoints.down("xs")]: {
                paddingRight: theme.spacing(1)
            }
        }
    },
    deadlineCell: {
        paddingRight: theme.spacing(3.5),
        [theme.breakpoints.down("xs")]: {
            paddingLeft: theme.spacing(1)
        }
    },
    titleCell: {
        paddingRight: theme.spacing(4),
        [theme.breakpoints.down("xs")]: {
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(3)
        }
    },
    actionsCell: {
        [theme.breakpoints.down("xs")]: {
            paddingLeft: theme.spacing(0)
        }
    },
    actionButton: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    }
});

export default withStyles(styles)(TodaysTasksTableRow);
