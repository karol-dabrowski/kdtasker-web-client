import {GET_TASK_TO_EDIT_REQUEST, GET_TASK_TO_EDIT_SUCCESS, GET_TASK_TO_EDIT_FAILURE} from '../actions/taskActions';

const defaultState = {
    loading: false,
    canBeEdited: true,
    task: {
        taskId: null,
        deadlineDate: null,
        deadlineTime: null,
        title: null
    }
};

const editTask = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TASK_TO_EDIT_REQUEST:
            return Object.assign({}, defaultState, {
                loading: true
            });
        case GET_TASK_TO_EDIT_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                canBeEdited: action.data && (action.data.status === 1),
                task: {
                    taskId: action.data.task_id ? action.data.task_id : null,
                    deadlineDate: action.data.deadline_date ? action.data.deadline_date : null,
                    deadlineTime: action.data.deadline_time ? action.data.deadline_time : null,
                    title: action.data.title ? action.data.title : null,
                }
            });
        case GET_TASK_TO_EDIT_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                canBeEdited: false,
                task: {
                    taskId: null,
                    deadlineDate: null,
                    deadlineTime: null,
                    title: null
                }
            });
        default:
            return state;
    }
};

export default editTask;