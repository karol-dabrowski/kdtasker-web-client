import React, { Fragment } from "react";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";

import NextDaysTasksTitle from "./NextDaysTasksTitle";
import NextDaysTasksTableRow from "./NextDaysTasksTableRow";

const NextDaysTasksTable = props => {
    const { classes, day, dayTasks, handleConfirm, handleDelete, handleEdit } = props;
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfTheWeek = new Date(day).getDay();

    const rows = dayTasks.map(task => (
        <NextDaysTasksTableRow
            key={task.task_id}
            task={task}
            handleConfirm={handleConfirm}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
        />
    ));

    return (
        <Fragment>
            <NextDaysTasksTitle date={day} dayOfTheWeek={weekdays[currentDayOfTheWeek]} />
            <Table className={classes.nextDaysTable}>
                <TableBody>{rows}</TableBody>
            </Table>
        </Fragment>
    );
};

NextDaysTasksTable.propTypes = {
    classes: PropTypes.object.isRequired,
    day: PropTypes.string.isRequired,
    dayTasks: PropTypes.array.isRequired,
    handleConfirm: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
};

const styles = theme => ({
    nextDaysTable: {
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: theme.palette.primary.main,
        "&:last-of-type": {
            borderBottom: "none"
        }
    }
});

export default withStyles(styles)(NextDaysTasksTable);
