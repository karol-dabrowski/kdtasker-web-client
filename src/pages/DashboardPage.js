import React from 'react';
import Grid from "@material-ui/core/Grid";
import TodaysTasks from "../components/DashboardWidgets/TodaysTasks/TodaysTasks";

const DashboardPage = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <TodaysTasks />
            </Grid>
        </Grid>

    );
};

export default DashboardPage;
