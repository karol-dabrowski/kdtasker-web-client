// Based on https://github.com/iamhosseindhv/notistack/tree/master/examples/redux-example
import { Component } from "react";
import { connect } from "react-redux";
import { withSnackbar } from "notistack";

import { removeSnackbar } from "../actions/snackbarActions";

class Notifier extends Component {
    displayed = [];

    storeDisplayed = id => {
        this.displayed = [...this.displayed, id];
    };

    shouldComponentUpdate({ notifications: newSnacks = [] }) {
        if (!newSnacks.length) {
            this.displayed = [];
            return false;
        }

        const { notifications: currentSnacks } = this.props;
        let notExists = false;
        for (let i = 0; i < newSnacks.length; i += 1) {
            const newSnack = newSnacks[i];
            if (notExists) continue;
            notExists = notExists || !currentSnacks.filter(({ key }) => newSnack.key === key).length;
        }
        return notExists;
    }

    componentDidUpdate() {
        const { notifications = [], dispatch } = this.props;

        notifications.forEach(({ key, message, options = {} }) => {
            if (this.displayed.includes(key)) return;
            this.props.enqueueSnackbar(message, {
                ...options,
                onClose: (event, reason, key) => {
                    if (options.onClose) {
                        options.onClose(event, reason, key);
                    }
                    dispatch(removeSnackbar(key));
                }
            });
            this.storeDisplayed(key);
        });
    }

    render() {
        return null;
    }
}

const mapStateToProps = state => ({
    notifications: state.snackbar.notifications
});

export default withSnackbar(connect(mapStateToProps)(Notifier));
