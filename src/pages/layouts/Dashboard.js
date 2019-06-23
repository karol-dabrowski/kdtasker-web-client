import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {withStyles} from "@material-ui/core";
import classNames from "classnames";
import {connect} from "react-redux";

import DashboardPage from "../DashboardPage";
import DashboardHeader from "../../components/containers/DashboardHeader";
import MenuSidebar from "../../components/containers/MenuSidebar";
import NewTaskModal from "../../components/NewTaskModal";
import {createTask} from "../../actions/taskActions";

class Dashboard extends Component {
    state = {
        drawerIsOpened: false,
        newTaskModalIsOpened: false
    };

    componentDidMount() {
        const {history, authorized} = this.props;
        if(!authorized) {
            history.push('/');
        }
    }

    toggleDrawer = () => {
        this.setState({ drawerIsOpened: !this.state.drawerIsOpened });
    };

    handleDrawerClose = () => {
        this.setState({ drawerIsOpened: false });
    };

    openNewTaskModal = () => {
        this.setState({ newTaskModalIsOpened: true });
    };

    closeNewTaskModal = () => {
        this.setState({ newTaskModalIsOpened: false });
    };

    handleNewTaskSubmit = (title, date, time) => {
        const {dispatch, jwtToken} = this.props;
        dispatch(createTask(jwtToken, title, date, time));
        this.setState({ newTaskModalIsOpened: false });
    };

    render() {
        const {classes} = this.props;

        return (
            <Fragment>
                <DashboardHeader drawerIsOpen={this.state.drawerIsOpened} openNewTaskModal={this.openNewTaskModal} toggleDrawer={this.toggleDrawer} />
                <MenuSidebar open={this.state.drawerIsOpened} handleClose={this.handleDrawerClose} />
                <div className={classNames(
                    classes.dashboardContainer,
                    {[classes.dashboardContainerShift]: this.state.drawerIsOpened}
                )}>
                    <Router>
                        <Switch>
                            <Route path="/dashboard" component={DashboardPage} exact />
                        </Switch>
                    </Router>
                </div>
                <NewTaskModal isOpened={this.state.newTaskModalIsOpened} handleClose={this.closeNewTaskModal} handleSubmit={this.handleNewTaskSubmit} />
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authorized: state.auth.authorized,
        jwtToken: state.auth.jwt.token
    };
};

const styles = theme => ({
    dashboardContainer: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    dashboardContainerShift: {
        [theme.breakpoints.up('lg')]: {
            width: `calc(100% - ${theme.props.SidebarMenu.width}px)`,
            marginLeft: theme.props.SidebarMenu.width,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }
    }
});

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));