import { combineReducers } from 'redux'
import todaysTasks from './todaysTasks'
import auth from './auth'

export default combineReducers({
    auth,
    todaysTasks
});
