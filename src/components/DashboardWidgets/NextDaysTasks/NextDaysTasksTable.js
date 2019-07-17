import React, { Fragment } from "react";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import PropTypes from "prop-types";

import NextDaysTasksTitle from "./NextDaysTasksTitle";
import NextDaysTasksTableRow from "./NextDaysTasksTableRow";

const NextDaysTasksTable = props => {
    const { day, dayTasks, handleConfirm, handleDelete, handleEdit } = props;
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
            <Table>
                <TableBody>{rows}</TableBody>
            </Table>
        </Fragment>
    );
};

NextDaysTasksTable.propTypes = {
    day: PropTypes.string.isRequired,
    dayTasks: PropTypes.array.isRequired,
    handleConfirm: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
};

export default NextDaysTasksTable;
