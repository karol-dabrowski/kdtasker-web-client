import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {withStyles} from "@material-ui/core";
import classNames from "classnames";

import DashboardPage from "../DashboardPage";
import DashboardHeader from "../../components/containers/DashboardHeader";
import MenuSidebar from "../../components/containers/MenuSidebar";
import {connect} from "react-redux";

class Dashboard extends Component {
    state = {
        open: false
    };

    componentDidMount() {
        const {history, authorized} = this.props;
        if(!authorized) {
            history.push('/');
        }
    }

    toggleDrawer = () => {
        this.setState({ open: !this.state.open });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const {classes} = this.props;

        return (
            <Fragment>
                <DashboardHeader drawerIsOpen={this.state.open} toggleDrawer={this.toggleDrawer} />
                <MenuSidebar open={this.state.open} handleClose={this.handleDrawerClose} />
                <div className={classNames(
                    classes.dashboardContainer,
                    {[classes.dashboardContainerShift]: this.state.open}
                )}>
                    <Router>
                        <Switch>
                            <Route path="/dashboard" component={DashboardPage} exact />
                        </Switch>
                    </Router>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authorized: state.auth.authorized
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