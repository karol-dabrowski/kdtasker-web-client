import {LOGIN_REQUEST, LOGIN_SUCCESS} from '../actions/authActions';

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
                    token: action.data.token,
                    refreshToken: action.data.refresh_token,
                    tokenTtl: action.data.token_expiration_time
                }
            });
        default:
            return state;
    }
};

export default auth;