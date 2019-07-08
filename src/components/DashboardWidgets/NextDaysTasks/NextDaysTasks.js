import React, {Component} from 'react';
import {connect} from "react-redux";

import WidgetWrapper from "../WidgetWrapper";
import NextDaysTasksTable from "./NextDaysTasksTable";
import {getTasksForNextDays} from "../../../actions/taskActions";
import Preloader from "../../Preloader";

class NextDaysTasks extends Component {
    componentDidMount() {
        this.props.dispatch(getTasksForNextDays(this.props.jwtToken, 7));
    };

    refresh = () => {
        this.props.dispatch(getTasksForNextDays(this.props.jwtToken, 7));
    };

    render() {
        const {loading, list} = this.props;

        const sortedTaskList = list.reduce((accumulator, task) => {
            if(!accumulator.hasOwnProperty(task.deadline_date)) {
                accumulator[task.deadline_date] = [];
            }
            accumulator[task.deadline_date].push(task);
            return accumulator;
        }, {});

        const dailyLists = Object.keys(sortedTaskList).map(day =>
            <NextDaysTasksTable key={day} day={day} dayTasks={sortedTaskList[day]} />
        );

        return (
            <WidgetWrapper title="Next 7 days" loading={loading} refreshButton={true} handleRefresh={this.refresh}>
                { loading ? (
                        <Preloader />
                    ) : (
                        list.length > 0 ? (
                            dailyLists
                        ) : 'You don\'t have any tasks for next 7 days'
                    )
                }
            </WidgetWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.nextDaysTasks.loading,
        list: state.nextDaysTasks.list,
        jwtToken: state.auth.jwt.token
    };
};

export default connect(mapStateToProps)(NextDaysTasks);