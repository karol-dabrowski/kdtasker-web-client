import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import WidgetWrapper from "../WidgetWrapper";
import NextDaysTasksTable from "./NextDaysTasksTable";
import { getTasksForNextDays } from "../../../actions/taskActions";
import Preloader from "../../Preloader";

class NextDaysTasks extends Component {
    componentDidMount() {
        const { dispatch, jwtToken } = this.props;
        dispatch(getTasksForNextDays(jwtToken, 7));
    }

    refresh = () => {
        const { dispatch, jwtToken } = this.props;
        dispatch(getTasksForNextDays(jwtToken, 7));
    };

    render() {
        const { loading, list, t } = this.props;

        const sortedTaskList = list.reduce((accumulator, task) => {
            if (!accumulator.hasOwnProperty(task.deadline_date)) {
                accumulator[task.deadline_date] = [];
            }
            accumulator[task.deadline_date].push(task);
            return accumulator;
        }, {});

        const dailyLists = Object.keys(sortedTaskList).map(day => (
            <NextDaysTasksTable key={day} day={day} dayTasks={sortedTaskList[day]} />
        ));

        return (
            <WidgetWrapper
                title={t("widget.next_days_tasks.title")}
                loading={loading}
                refreshButton={true}
                handleRefresh={this.refresh}
            >
                {loading ? <Preloader /> : list.length > 0 ? dailyLists : t("widget.next_days_tasks.empty_tasks_list")}
            </WidgetWrapper>
        );
    }
}

NextDaysTasks.propTypes = {
    dispatch: PropTypes.func.isRequired,
    jwtToken: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    list: PropTypes.array.isRequired,
    t: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        loading: state.nextDaysTasks.loading,
        list: state.nextDaysTasks.list,
        jwtToken: state.auth.jwt.token
    };
};

export default connect(mapStateToProps)(NextDaysTasks);
