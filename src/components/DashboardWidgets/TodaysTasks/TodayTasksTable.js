import React, { Fragment } from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import { withStyles } from "@material-ui/core";

import TodaysTasksTableRow from "./TodaysTasksTableRow";

const TodaysTasksTable = props => {
    const { tasks, classes, handleConfirm, handleDelete, handleEdit, t } = props;

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
                        <TableRow>
                            <TableCell className={classes.deadlineCell} align="left">
                                {t("widget.todays_tasks.time_column_heading")}
                            </TableCell>
                            <TableCell align="left">{t("widget.todays_tasks.title_column_heading")}</TableCell>
                            <TableCell align="left">{t("widget.todays_tasks.actions_column_heading")}</TableCell>
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

const styles = theme => ({
    deadlineCell: {
        width: theme.spacing(12)
    }
});

export default withStyles(styles)(TodaysTasksTable);
