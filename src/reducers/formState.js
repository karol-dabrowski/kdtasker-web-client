import {LOGIN_FAILURE, REGISTER_FAILURE} from '../actions/authActions';
import {CLEAR_FORM_STATE} from '../actions/formStateActions';

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
        case REGISTER_FAILURE:
            return Object.assign({}, state, {
                register: {
                    email: action.email,
                    firstName: action.firstName,
                    lastName: action.lastName,
                }
            });
        case CLEAR_FORM_STATE:
            return defaultState;
        default:
            return state;
    }
};

export default auth;