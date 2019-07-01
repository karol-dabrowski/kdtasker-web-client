import { combineReducers } from 'redux'
import todaysTasks from './todaysTasks'
import auth from './auth'
import createTask from './createTask'
import editTask from './editTask'

export default combineReducers({
    auth,
    todaysTasks,
    createTask,
    editTask
});
