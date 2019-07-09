import path from '../path';
import history from '../history';

const axios = require('axios');

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const loginSuccess = data => {
    return {
        type: LOGIN_SUCCESS,
        data
    }
};

export const LOGIN_FAILURE = 'LOGIN_FAILURE';
const loginFailure = (username, error) => {
    return {
        type: LOGIN_FAILURE,
        username,
        error
    }
};

export const login = (email, password, failSnackbar) => {
    return dispatch => {
        dispatch(loginRequest());

        const endpoint = path.apiUrl + path.auth.auth + path.auth.login;
        const data = {
            "username": email,
            "password": password
        };

        axios.post(endpoint, data)
            .then(response => {
                dispatch(loginSuccess(response.data));
                history.push('/dashboard');
            }).catch(response => {
                dispatch(loginFailure(data.username, response.response.data.error));
                failSnackbar(response.response.data.error.message);
            });
    };
};