import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";
import {connect} from "react-redux";

import {completeTask} from "../actions/taskActions";
import TodaysTasks from "../components/DashboardWidgets/TodaysTasks/TodaysTasks";

class DashboardPage extends Component{
    handleTaskConfirmation = (taskId) => {
        const {dispatch, jwtToken} = this.props;
        dispatch(completeTask(jwtToken, taskId));
    };

    render() {
        return (
            <Grid container>
                <Grid item xs={12}>
                    <TodaysTasks handleConfirm={this.handleTaskConfirmation}/>
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
