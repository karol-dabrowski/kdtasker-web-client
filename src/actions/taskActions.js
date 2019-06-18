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

export const getTasksForToday = (token) => {
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