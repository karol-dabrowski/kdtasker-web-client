import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";

import {completeTask, deleteTask} from "../actions/taskActions";
import TodaysTasks from "../components/DashboardWidgets/TodaysTasks/TodaysTasks";

class DashboardPage extends Component{
    handleTaskConfirmation = (taskId) => {
        const {dispatch, jwtToken} = this.props;
        dispatch(completeTask(jwtToken, taskId));
    };

    handleTaskDeletion = (taskId) => {
        const {dispatch, jwtToken} = this.props;
        dispatch(deleteTask(jwtToken, taskId));
    };

    render() {
        const {handleEditModalOpen} = this.props;

        return (
            <Grid container spacing={3}>
                <Grid item xs={12} lg={6}>
                    <TodaysTasks handleConfirm={this.handleTaskConfirmation} handleDelete={this.handleTaskDeletion} handleEdit={handleEditModalOpen} />
                </Grid>
            </Grid>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        jwtToken: state.auth.jwt.token
    };
};

export default connect(mapStateToProps)(DashboardPage);
