import {LOGIN_FAILURE} from '../actions/authActions';

const defaultState = {
    login: {
        username: ''
    },
    register: {
        email: '',
        firstName: '',
        lastName: ''
    }
};

const auth = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                login: {
                    username: action.username
                }
            });
        default:
            return state;
    }
};

export default auth;