import React, {Fragment} from 'react';
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";

import NextDaysTasksTitle from "./NextDaysTasksTitle";
import NextDaysTasksTableRow from "./NextDaysTasksTableRow";

const NextDaysTasksTable = props => {
    const {day, dayTasks} = props;
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfTheWeek = (new Date(day)).getDay();

    const rows = dayTasks.map(task =>
        <NextDaysTasksTableRow key={task.task_id} task={task} />
    );

    return (
        <Fragment>
            <NextDaysTasksTitle date={day} dayOfTheWeek={weekdays[currentDayOfTheWeek]} />
            <Table>
                <TableBody>
                    {rows}
                </TableBody>
            </Table>
        </Fragment>
    );
};

export default NextDaysTasksTable;