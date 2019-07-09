import { combineReducers } from 'redux'
import todaysTasks from './todaysTasks'
import nextDaysTasks from './nextDaysTasks';
import auth from './auth'
import error from './error'
import createTask from './createTask'
import editTask from './editTask'

export default combineReducers({
    auth,
    todaysTasks,
    nextDaysTasks,
    createTask,
    editTask,
    error
});
