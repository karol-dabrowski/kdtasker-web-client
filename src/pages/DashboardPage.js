import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { completeTask, deleteTask } from "../actions/taskActions";
import TodaysTasks from "../components/DashboardWidgets/TodaysTasks/TodaysTasks";
import NextDaysTasks from "../components/DashboardWidgets/NextDaysTasks/NextDaysTasks";

class DashboardPage extends Component {
    handleTaskConfirmation = taskId => {
        const { dispatch, jwtToken } = this.props;
        dispatch(completeTask(jwtToken, taskId));
    };

    handleTaskDeletion = taskId => {
        const { dispatch, jwtToken } = this.props;
        dispatch(deleteTask(jwtToken, taskId));
    };

    render() {
        const { handleEditModalOpen, t } = this.props;

        return (
            <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                    <TodaysTasks
                        handleConfirm={this.handleTaskConfirmation}
                        handleDelete={this.handleTaskDeletion}
                        handleEdit={handleEditModalOpen}
                        t={t}
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <NextDaysTasks t={t} />
                </Grid>
            </Grid>
        );
    }
}

DashboardPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    jwtToken: PropTypes.string.isRequired,
    handleEditModalOpen: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        jwtToken: state.auth.jwt.token
    };
};

export default connect(mapStateToProps)(DashboardPage);
