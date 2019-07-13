import uuid from "uuid";

import path from "../path";
import history from "../history";
import { enqueueSnackbar } from "./snackbarActions";

const axios = require("axios");

export const LOGIN_REQUEST = "LOGIN_REQUEST";
const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    };
};

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const loginSuccess = data => {
    return {
        type: LOGIN_SUCCESS,
        data
    };
};

export const LOGIN_FAILURE = "LOGIN_FAILURE";
const loginFailure = (username, error) => {
    return {
        type: LOGIN_FAILURE,
        username,
        error
    };
};

export const REGISTER_REQUEST = "REGISTER_REQUEST";
const registerRequest = () => {
    return {
        type: REGISTER_REQUEST
    };
};

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const registerSuccess = data => {
    return {
        type: REGISTER_SUCCESS,
        data
    };
};

export const REGISTER_FAILURE = "REGISTER_FAILURE";
const registerFailure = (email, firstName, lastName, error) => {
    return {
        type: REGISTER_FAILURE,
        email,
        firstName,
        lastName,
        error
    };
};

export const login = (email, password) => {
    return dispatch => {
        dispatch(loginRequest());

        const endpoint = path.apiUrl + path.auth.auth + path.auth.login;
        const data = {
            username: email,
            password: password
        };

        axios
            .post(endpoint, data)
            .then(response => {
                dispatch(loginSuccess(response.data));
                history.push("/dashboard");
            })
            .catch(response => {
                dispatch(loginFailure(data.username, response.response.data.error));
                dispatch(
                    enqueueSnackbar({
                        message: "notification." + response.response.data.error.message,
                        options: {
                            key: new Date().getTime() + Math.random(),
                            variant: "error",
                            preventDuplicate: true,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "right"
                            }
                        }
                    })
                );
            });
    };
};

export const register = (email, password, firstName, lastName) => {
    return dispatch => {
        dispatch(registerRequest());

        const endpoint = path.apiUrl + path.auth.auth + path.auth.register;
        const data = {
            payload: {
                user_id: uuid.v4(),
                email: email,
                password: password,
                first_name: firstName,
                last_name: lastName
            }
        };

        axios
            .post(endpoint, data)
            .then(response => {
                dispatch(registerSuccess(response.data));
                history.push("/");
                dispatch(
                    enqueueSnackbar({
                        message: "notification.registration_success",
                        options: {
                            key: new Date().getTime() + Math.random(),
                            variant: "success",
                            preventDuplicate: true,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "right"
                            }
                        }
                    })
                );
            })
            .catch(response => {
                dispatch(registerFailure(email, firstName, lastName, response.response.data.error));
                const notificationMessage =
                    response.response.data.error.type === "validation_error"
                        ? response.response.data.error.property + "." + response.response.data.error.message
                        : response.response.data.error.message;
                dispatch(
                    enqueueSnackbar({
                        message: "notification." + notificationMessage,
                        options: {
                            key: new Date().getTime() + Math.random(),
                            variant: "error",
                            preventDuplicate: true,
                            anchorOrigin: {
                                vertical: "bottom",
                                horizontal: "right"
                            }
                        }
                    })
                );
            });
    };
};
