import { combineReducers } from 'redux'
import todaysTasks from './todaysTasks'
import auth from './auth'
import createTask from './createTask'

export default combineReducers({
    auth,
    todaysTasks,
    createTask
});
