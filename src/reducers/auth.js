import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from "../actions/authActions";

const defaultState = {
    authorized: false,
    loading: false,
    jwt: {
        token: null,
        refreshToken: null,
        tokenTtl: null
    }
};

const auth = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                authorized: true,
                jwt: {
                    token: "Bearer " + action.data.token,
                    refreshToken: action.data.refresh_token,
                    tokenTtl: action.data.token_expiration_time
                }
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                authorized: false
            });
        case REGISTER_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                loading: false
            });
        case REGISTER_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        default:
            return state;
    }
};

export default auth;
