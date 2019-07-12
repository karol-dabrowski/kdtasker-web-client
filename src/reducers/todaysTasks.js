import {
    GET_TASKS_FOR_TODAY_REQUEST,
    GET_TASKS_FOR_TODAY_SUCCESS,
    GET_TASKS_FOR_TODAY_FAILURE,
    CREATE_TASK_REQUEST,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAILURE,
    EDIT_TASK_REQUEST,
    EDIT_TASK_SUCCESS,
    EDIT_TASK_FAILURE,
    COMPLETE_TASK_REQUEST,
    COMPLETE_TASK_SUCCESS,
    COMPLETE_TASK_FAILURE,
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILURE
} from "../actions/taskActions";

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
            const createdTaskDate = new Date(action.newTask.deadline_date);
            if (createdTaskDate.toDateString() === new Date().toDateString()) {
                newStateForCreateTaskSuccess.list.push(action.newTask);
                newStateForCreateTaskSuccess.list.sort((a, b) => {
                    const result =
                        a.deadline_time === null && b.deadline_time !== null ? true : a.deadline_time > b.deadline_time;
                    return +result;
                });
            }
            return newStateForCreateTaskSuccess;
        case CREATE_TASK_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        case EDIT_TASK_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case EDIT_TASK_SUCCESS:
            const editedTaskDate = new Date(action.taskData.deadline_date);
            let editTasksList;
            if (editedTaskDate.toDateString() === new Date().toDateString()) {
                const editedTaskIndex = state.list.findIndex(task => {
                    return task.task_id === action.taskId;
                });
                editTasksList = state.list;
                editTasksList[editedTaskIndex].title = action.taskData.title;
                editTasksList[editedTaskIndex].deadline_date = action.taskData.deadline_date;
                editTasksList[editedTaskIndex].deadline_time = action.taskData.deadline_time;
                editTasksList.sort((a, b) => {
                    const result =
                        a.deadline_time === null && b.deadline_time !== null ? true : a.deadline_time > b.deadline_time;
                    return +result;
                });
            } else {
                editTasksList = state.list.filter(task => {
                    return task.task_id !== action.taskId;
                });
            }
            return Object.assign({}, state, {
                loading: false,
                list: editTasksList
            });
        case EDIT_TASK_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        case COMPLETE_TASK_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case COMPLETE_TASK_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                list: state.list.filter(task => {
                    return task.task_id !== action.taskId;
                })
            });
        case COMPLETE_TASK_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        case DELETE_TASK_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case DELETE_TASK_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                list: state.list.filter(task => {
                    return task.task_id !== action.taskId;
                })
            });
        case DELETE_TASK_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        default:
            return state;
    }
};

export default todaysTasks;
