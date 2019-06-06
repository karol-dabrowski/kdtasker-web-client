import React, {Component} from 'react';
import WidgetWrapper from "../WidgetWrapper";
import TodaysTasksTable from "./TodayTasksTable";

class TodaysTasks extends Component {
    render() {
        const tasks = [
            {
                id: 'fe0d9c22-6310-453b-bfa2-9a191d53f938',
                deadlineDay: '2019-06-06',
                deadlineTime: '',
                title: 'Test task'
            },
            {
                id: '76a58b0e-d58d-4de1-ba27-0166f634fe5c',
                deadlineDay: '2019-06-06',
                deadlineTime: '17:50:00',
                title: 'another test task'
            }
        ];
        return (
            <WidgetWrapper title="Today's tasks">
                <TodaysTasksTable tasks={tasks} />
            </WidgetWrapper>
        );
    }
}

export default TodaysTasks;