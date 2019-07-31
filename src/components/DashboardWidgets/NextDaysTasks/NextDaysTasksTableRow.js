import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Done from "@material-ui/icons/Done";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import responsiveHOC from "react-lines-ellipsis/lib/responsiveHOC";

const NextDaysTasksTableRow = props => {
    const { classes, task, handleConfirm, handleDelete, handleEdit } = props;
    const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

    return (
        <TableRow className={classes.nextDaysTasksRow}>
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

NextDaysTasksTableRow.propTypes = {
    classes: PropTypes.object.isRequired,
    task: PropTypes.object.isRequired,
    handleConfirm: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
};

const styles = theme => ({
    nextDaysTasksRow: {
        "& td:last-child": {
            [theme.breakpoints.down("xs")]: {
                paddingRight: theme.spacing(1)
            }
        }
    },
    deadlineCell: {
        width: theme.spacing(10),
        paddingRight: theme.spacing(3.5),
        [theme.breakpoints.down("xs")]: {
            paddingLeft: theme.spacing(1),
            width: theme.spacing(9)
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
        width: theme.spacing(19.5),
        [theme.breakpoints.down("xs")]: {
            paddingLeft: theme.spacing(0),
            width: theme.spacing(16)
        }
    },
    actionButton: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    }
});

export default withStyles(styles)(NextDaysTasksTableRow);
