import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core";
import classNames from "classnames";
import { connect } from "react-redux";

import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import MenuSidebar from "../../components/MenuSidebar/MenuSidebar";
import TaskModal from "../../components/TaskModal";
import { createTask, editTask, getTaskToEdit, clearTaskToEdit } from "../../actions/taskActions";

class Dashboard extends Component {
    state = {
        drawerIsOpened: false,
        newTaskModalIsOpened: false,
        editTaskModal: {
            isOpened: false,
            taskId: null
        }
    };

    toggleDrawer = () => {
        this.setState({ drawerIsOpened: !this.state.drawerIsOpened });
    };

    handleDrawerClose = () => {
        this.setState({ drawerIsOpened: false });
    };

    openNewTaskModal = () => {
        const { dispatch } = this.props;
        dispatch(clearTaskToEdit());
        this.setState({ newTaskModalIsOpened: true });
    };

    openEditTaskModal = taskId => {
        const { dispatch, jwtToken } = this.props;
        dispatch(getTaskToEdit(jwtToken, taskId));

        this.setState({
            editTaskModal: {
                isOpened: true,
                taskId: taskId
            }
        });
    };

    closeTaskModal = () => {
        this.setState({
            newTaskModalIsOpened: false,
            editTaskModal: {
                isOpened: false,
                taskId: null
            }
        });
    };

    handleNewTaskSubmit = (taskId, title, date, time) => {
        const { dispatch, jwtToken } = this.props;

        if (taskId) {
            dispatch(editTask(jwtToken, taskId, title, date, time));
        } else {
            dispatch(createTask(jwtToken, title, date, time));
        }

        this.setState({
            newTaskModalIsOpened: false,
            editTaskModal: {
                isOpened: false,
                taskId: null
            }
        });
    };

    render() {
        const { classes, children, t } = this.props;

        return (
            <Fragment>
                <DashboardHeader
                    drawerIsOpen={this.state.drawerIsOpened}
                    openNewTaskModal={this.openNewTaskModal}
                    toggleDrawer={this.toggleDrawer}
                    t={t}
                />
                <MenuSidebar open={this.state.drawerIsOpened} handleClose={this.handleDrawerClose} t={t} />
                <div
                    className={classNames(classes.dashboardContainer, {
                        [classes.dashboardContainerShift]: this.state.drawerIsOpened
                    })}
                >
                    {React.cloneElement(children, { handleEditModalOpen: this.openEditTaskModal })}
                </div>
                <TaskModal
                    isOpened={this.state.newTaskModalIsOpened || this.state.editTaskModal.isOpened}
                    taskId={this.state.editTaskModal.taskId}
                    handleClose={this.closeTaskModal}
                    handleSubmit={this.handleNewTaskSubmit}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        jwtToken: state.auth.jwt.token
    };
};

const styles = theme => ({
    dashboardContainer: {
        backgroundColor: theme.palette.background.default,
        width: "100%",
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    dashboardContainerShift: {
        [theme.breakpoints.up("lg")]: {
            width: `calc(100% - ${theme.props.SidebarMenu.width}px)`,
            marginLeft: theme.props.SidebarMenu.width,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen
            })
        }
    }
});

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));
