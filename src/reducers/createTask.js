import { CREATE_TASK_REQUEST, CREATE_TASK_SUCCESS, CREATE_TASK_FAILURE } from "../actions/taskActions";

const defaultState = {
    loading: false
};

const createTask = (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_TASK_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case CREATE_TASK_SUCCESS:
            return Object.assign({}, state, {
                loading: false
            });
        case CREATE_TASK_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        default:
            return state;
    }
};

export default createTask;
