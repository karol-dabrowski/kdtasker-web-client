import path from '../path';

const axios = require('axios');

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    }
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        data
    }
};

export const login = (email, password) => {
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
            }).catch(error => {
                //@TODO implement error handling
            });
    };
};