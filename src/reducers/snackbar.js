import { ENQUEUE_SNACKBAR, REMOVE_SNACKBAR } from '../actions/snackbarActions';

const defaultState = {
    notifications: [],
};

const snackbar = (state = defaultState, action) => {
    switch (action.type) {
        case ENQUEUE_SNACKBAR:
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    {
                        key: action.key,
                        ...action.notification,
                    },
                ],
            };

        case REMOVE_SNACKBAR:
            return {
                ...state,
                notifications: state.notifications.filter(
                    notification => notification.key !== action.key,
                ),
            };

        default:
            return state;
    }
};

export default snackbar;