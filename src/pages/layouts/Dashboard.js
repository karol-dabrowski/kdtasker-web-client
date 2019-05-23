import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Button, withStyles} from "@material-ui/core";
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

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const {classes} = this.props;

        return (
            <Fragment>
                <DashboardHeader drawerIsOpen={this.state.open} />
                <MenuSidebar open={this.state.open} />
                <div className={classNames(
                    classes.dashboardContainer,
                    {[classes.dashboardContainerShift]: this.state.open}
                )}>
                    <Router>
                        <Switch>
                            <Route path="/dashboard" component={DashboardPage} exact />
                        </Switch>
                    </Router>
                    <Button onClick={this.handleDrawerOpen}>Open drawer</Button>
                    <Button onClick={this.handleDrawerClose}>Close drawer</Button>
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
        width: '100%'
    },
    dashboardContainerShift: {
        width: `calc(100% - ${theme.props.SidebarMenu.width}px)`,
        marginLeft: theme.props.SidebarMenu.width,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }
});

export default connect(mapStateToProps)(withStyles(styles)(Dashboard));