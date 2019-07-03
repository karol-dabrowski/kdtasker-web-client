import uuid from "uuid";

import path from '../path';

const axios = require('axios');

export const GET_TASKS_FOR_TODAY_REQUEST = 'GET_TASKS_FOR_TODAY_REQUEST';
const getTasksForTodayRequest = () => {
    return {
        type: GET_TASKS_FOR_TODAY_REQUEST
    }
};

export const GET_TASKS_FOR_TODAY_SUCCESS = 'GET_TASKS_FOR_TODAY_SUCCESS';
const getTasksForTodaySuccess = data => {
    return {
        type: GET_TASKS_FOR_TODAY_SUCCESS,
        data
    }
};

export const GET_TASKS_FOR_TODAY_FAILURE = 'GET_TASKS_FOR_TODAY_FAILURE';
const getTasksForTodayFailure = error => {
    return {
        type: GET_TASKS_FOR_TODAY_FAILURE,
        error
    }
};

export const GET_TASK_TO_EDIT_REQUEST = 'GET_TASK_TO_EDIT_REQUEST';
const getTaskToEditRequest = () => {
    return {
        type: GET_TASK_TO_EDIT_REQUEST
    }
};

export const GET_TASK_TO_EDIT_SUCCESS = 'GET_TASK_TO_EDIT_SUCCESS';
const getTaskToEditSuccess = data => {
    return {
        type: GET_TASK_TO_EDIT_SUCCESS,
        data
    }
};

export const GET_TASK_TO_EDIT_FAILURE = 'GET_TASK_TO_EDIT_FAILURE';
const getTaskToEditFailure = () => {
    return {
        type: GET_TASK_TO_EDIT_FAILURE
    }
};

export const CLEAR_TASK_TO_EDIT_REQUEST = 'CLEAR_TASK_TO_EDIT_REQUEST';
const clearTaskToEditRequest = () => {
    return {
        type: CLEAR_TASK_TO_EDIT_REQUEST
    }
};

export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST';
const createTaskRequest = () => {
    return {
        type: CREATE_TASK_REQUEST
    }
};

export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
const createTaskSuccess = newTask => {
    return {
        type: CREATE_TASK_SUCCESS,
        newTask
    }
};

export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE';
const createTaskFailure = () => {
    return {
        type: CREATE_TASK_FAILURE
    }
};

export const EDIT_TASK_REQUEST = 'EDIT_TASK_REQUEST';
const editTaskRequest = () => {
    return {
        type: EDIT_TASK_REQUEST
    }
};

export const EDIT_TASK_SUCCESS = 'EDIT_TASK_SUCCESS';
const editTaskSuccess = (taskId, taskData) => {
    return {
        type: EDIT_TASK_SUCCESS,
        taskId,
        taskData
    }
};

export const EDIT_TASK_FAILURE = 'EDIT_TASK_FAILURE';
const editTaskFailure = () => {
    return {
        type: EDIT_TASK_FAILURE
    }
};

export const COMPLETE_TASK_REQUEST = 'COMPLETE_TASK_REQUEST';
const completeTaskRequest = () => {
    return {
        type: COMPLETE_TASK_REQUEST
    }
};

export const COMPLETE_TASK_SUCCESS = 'COMPLETE_TASK_SUCCESS';
const completeTaskSuccess = taskId => {
    return {
        type: COMPLETE_TASK_SUCCESS,
        taskId
    }
};

export const COMPLETE_TASK_FAILURE = 'COMPLETE_TASK_FAILURE';
const completeTaskFailure = () => {
    return {
        type: COMPLETE_TASK_FAILURE
    }
};

export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
const deleteTaskRequest = () => {
    return {
        type: DELETE_TASK_REQUEST
    }
};

export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
const deleteTaskSuccess = taskId => {
    return {
        type: DELETE_TASK_SUCCESS,
        taskId
    }
};

export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';
const deleteTaskFailure = () => {
    return {
        type: DELETE_TASK_FAILURE
    }
};

export const getTasksForToday = token => {
    return dispatch => {
        dispatch(getTasksForTodayRequest());

        const endpoint = path.apiUrl + path.api.api + path.api.tasks + path.api.tasksForToday;

        axios({
            url: endpoint,
            method: 'GET',
            headers: {
                'Authorization': token
            }
        }).then(response => {
                dispatch(getTasksForTodaySuccess(response.data));
            }).catch(response => {
                dispatch(getTasksForTodayFailure(response.response.data.error));
        });
    };
};

export const getTaskToEdit = (token, taskId) => {
    return dispatch => {
        dispatch(getTaskToEditRequest());

        const endpoint = path.apiUrl + path.api.api + path.api.task + path.api.get + `/${taskId}`;

        axios({
            url: endpoint,
            method: 'GET',
            headers: {
                'Authorization': token
            }
        }).then(response => {
            dispatch(getTaskToEditSuccess(response.data));
        }).catch(response => {
            dispatch(getTaskToEditFailure());
        });
    };
};

export const clearTaskToEdit = () => {
    return dispatch => {
        dispatch(clearTaskToEditRequest());
    }
};

export const createTask = (token, title, date, time) => {
    return dispatch => {
        dispatch(createTaskRequest());

        const endpoint = path.apiUrl + path.api.api + path.api.task + path.api.create;
        const data = {
            payload: {
                title: title,
                task_id: uuid.v4(),
                deadline_date: date,
                deadline_time: time
            }
        };

        axios({
            url: endpoint,
            method: 'POST',
            data: data,
            headers: {
                'Authorization': token
            }
        }).then(response => {
            dispatch(createTaskSuccess(data.payload));
        }).catch(response => {
            dispatch(createTaskFailure());
        });
    };
};

export const editTask = (token, taskId, title, date, time) => {
    return dispatch => {
        dispatch(editTaskRequest());

        const endpoint = path.apiUrl + path.api.api + path.api.task + path.api.edit + `/${taskId}`;
        const data = {
            payload: {
                title: title,
                deadline_date: date,
                deadline_time: time
            }
        };

        axios({
            url: endpoint,
            method: 'PATCH',
            data: data,
            headers: {
                'Authorization': token
            }
        }).then(response => {
            dispatch(editTaskSuccess(taskId, data.payload));
        }).catch(response => {
            dispatch(editTaskFailure());
        });
    };
};

export const completeTask = (token, taskId) => {
    return dispatch => {
        dispatch(completeTaskRequest());

        const endpoint = path.apiUrl + path.api.api + path.api.task + path.api.complete + `/${taskId}`;

        axios({
            url: endpoint,
            method: 'PATCH',
            headers: {
                'Authorization': token
            }
        }).then(response => {
            dispatch(completeTaskSuccess(taskId));
        }).catch(response => {
            dispatch(completeTaskFailure());
        });
    };
};

export const deleteTask = (token, taskId) => {
    return dispatch => {
        dispatch(deleteTaskRequest());

        const endpoint = path.apiUrl + path.api.api + path.api.task + path.api.delete + `/${taskId}`;

        axios({
            url: endpoint,
            method: 'PATCH',
            headers: {
                'Authorization': token
            }
        }).then(response => {
            dispatch(deleteTaskSuccess(taskId));
        }).catch(response => {
            dispatch(deleteTaskFailure());
        });
    };
};