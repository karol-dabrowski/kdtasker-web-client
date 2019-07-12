import {
    GET_TASKS_FOR_NEXT_DAYS_REQUEST,
    GET_TASKS_FOR_NEXT_DAYS_SUCCESS,
    GET_TASKS_FOR_NEXT_DAYS_FAILURE
} from "../actions/taskActions";

const defaultState = {
    loading: false,
    list: []
};

const nextDaysTasks = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TASKS_FOR_NEXT_DAYS_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case GET_TASKS_FOR_NEXT_DAYS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                list: action.data ? action.data : []
            });
        case GET_TASKS_FOR_NEXT_DAYS_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        default:
            return state;
    }
};

export default nextDaysTasks;
