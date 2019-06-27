import {
    GET_TASKS_FOR_TODAY_REQUEST,
    GET_TASKS_FOR_TODAY_SUCCESS,
    GET_TASKS_FOR_TODAY_FAILURE,
    CREATE_TASK_REQUEST,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAILURE
} from '../actions/taskActions';

const defaultState = {
    loading: false,
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
                list: action.data ? action.data : []
            });
        case GET_TASKS_FOR_TODAY_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        case CREATE_TASK_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case CREATE_TASK_SUCCESS:
            const newStateForCreateTaskSuccess = Object.assign({}, state, {
                loading: false
            });
            newStateForCreateTaskSuccess.list.push(action.newTask);
            newStateForCreateTaskSuccess.list.sort((a, b) => {
                const result = a.deadline_time === null && b.deadline_time !== null
                    ? true
                    : a.deadline_time > b.deadline_time;
                return +result;
            });
            return newStateForCreateTaskSuccess;
        case CREATE_TASK_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        default:
            return state;
    }
};

export default todaysTasks;