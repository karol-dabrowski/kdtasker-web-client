import React, {Component} from 'react';
import {connect} from "react-redux";
import WidgetWrapper from "../WidgetWrapper";
import TodaysTasksTable from "./TodayTasksTable";
import {getTasksForToday} from "../../../actions/taskActions";
import Preloader from "../../Preloader";

class TodaysTasks extends Component {
    componentDidMount() {
        this.props.dispatch(getTasksForToday(this.props.jwtToken));
    };

    refresh = () => {
        this.props.dispatch(getTasksForToday(this.props.jwtToken));
    };

    render() {
        const {loading, list} = this.props;

        return (
            <WidgetWrapper title="Today" refreshButton={true} handleRefresh={this.refresh}>
                { loading ? (
                    <Preloader />
                ) :
                    <TodaysTasksTable tasks={list} />
                }
            </WidgetWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.todaysTasks.loading,
        list: state.todaysTasks.list,
        jwtToken: state.auth.jwt.token
    };
};

export default connect(mapStateToProps)(TodaysTasks);