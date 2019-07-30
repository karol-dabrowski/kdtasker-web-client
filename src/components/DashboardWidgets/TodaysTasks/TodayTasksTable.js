import React, { Fragment } from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import { withStyles } from "@material-ui/core";
import PropTypes from "prop-types";

import TodaysTasksTableRow from "./TodaysTasksTableRow";

const TodaysTasksTable = props => {
    const { classes, tasks, handleConfirm, handleDelete, handleEdit, t } = props;

    const rows = tasks.map(task => (
        <TodaysTasksTableRow
            key={task.task_id}
            task={task}
            handleConfirm={handleConfirm}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
        />
    ));

    return (
        <Fragment>
            {rows.length > 0 ? (
                <Table>
                    <TableHead>
                        <TableRow className={classes.todaysTasksRow}>
                            <TableCell className={classes.deadlineCell} align="left">
                                {t("widget.todays_tasks.time_column_heading")}
                            </TableCell>
                            <TableCell className={classes.titleCell} align="left">
                                {t("widget.todays_tasks.title_column_heading")}
                            </TableCell>
                            <TableCell className={classes.actionsCell} align="left">
                                {t("widget.todays_tasks.actions_column_heading")}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>{rows}</TableBody>
                </Table>
            ) : (
                t("widget.todays_tasks.empty_tasks_list")
            )}
        </Fragment>
    );
};

TodaysTasksTable.propTypes = {
    classes: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,
    handleConfirm: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
};

const styles = theme => ({
    todaysTasksRow: {
        "& th:last-child": {
            [theme.breakpoints.down('xs')]: {
                paddingRight: theme.spacing(1)
            }
        }
    },
    deadlineCell: {
        width: theme.spacing(10),
        paddingRight: theme.spacing(3.5),
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(1),
            width: theme.spacing(9),
            paddingRight: theme.spacing(2.5),
        },
    },
    titleCell: {
        paddingRight: theme.spacing(4),
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(0),
            paddingRight: theme.spacing(3)
        }
    },
    actionsCell: {
        width: theme.spacing(19.5),
        [theme.breakpoints.down('xs')]: {
            paddingLeft: theme.spacing(0),
            width: theme.spacing(16),
        }
    }
});

export default withStyles(styles)(TodaysTasksTable);
