import {GET_TASKS_FOR_TODAY_REQUEST, GET_TASKS_FOR_TODAY_SUCCESS, GET_TASKS_FOR_TODAY_FAILURE} from '../actions/taskActions';

const defaultState = {
    loading: false,
    date: null,
    list: []
};

const todaysTasks = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TASKS_FOR_TODAY_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case GET_TASKS_FOR_TODAY_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                date: action.data.date,
                list: action.data.tasks_list ? action.data.tasks_list : []
            });
        case GET_TASKS_FOR_TODAY_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        default:
            return state;
    }
};

export default todaysTasks;