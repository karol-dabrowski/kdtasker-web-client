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