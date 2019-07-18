import { addDays } from "date-fns";

import {
    GET_TASKS_FOR_NEXT_DAYS_REQUEST,
    GET_TASKS_FOR_NEXT_DAYS_SUCCESS,
    GET_TASKS_FOR_NEXT_DAYS_FAILURE,
    CREATE_TASK_REQUEST,
    CREATE_TASK_SUCCESS,
    CREATE_TASK_FAILURE,
    COMPLETE_TASK_REQUEST,
    COMPLETE_TASK_SUCCESS,
    COMPLETE_TASK_FAILURE,
    DELETE_TASK_REQUEST,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILURE,
    EDIT_TASK_REQUEST,
    EDIT_TASK_SUCCESS,
    EDIT_TASK_FAILURE
} from "../actions/taskActions";

const defaultState = {
    loading: false,
    list: []
};

const nextDaysTasks = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TASKS_FOR_NEXT_DAYS_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case GET_TASKS_FOR_NEXT_DAYS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                list: action.data ? action.data : []
            });
        case GET_TASKS_FOR_NEXT_DAYS_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        case CREATE_TASK_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case CREATE_TASK_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                list:
                    new Date(action.newTask.deadline_date).setHours(0, 0, 0, 0) >=
                        addDays(Date.now(), 1).setHours(0, 0, 0, 0) &&
                    new Date(action.newTask.deadline_date).setHours(0, 0, 0, 0) <=
                        addDays(Date.now(), 7).setHours(0, 0, 0, 0)
                        ? state.list.concat(action.newTask).sort((a, b) => {
                              if (
                                  new Date(a.deadline_date).toDateString() !== new Date(b.deadline_date).toDateString()
                              ) {
                                  return +(a.deadline_date > b.deadline_date);
                              }

                              let result =
                                  a.deadline_time === null && b.deadline_time !== null
                                      ? true
                                      : a.deadline_time > b.deadline_time;
                              return +result;
                          })
                        : state.list
            });
        case CREATE_TASK_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        case EDIT_TASK_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case EDIT_TASK_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                list:
                    new Date(action.taskData.deadline_date).setHours(0, 0, 0, 0) >=
                        addDays(Date.now(), 1).setHours(0, 0, 0, 0) &&
                    new Date(action.taskData.deadline_date).setHours(0, 0, 0, 0) <=
                        addDays(Date.now(), 7).setHours(0, 0, 0, 0)
                        ? state.list
                              .filter(task => {
                                  return task.task_id !== action.taskId;
                              })
                              .concat(Object.assign({ task_id: action.taskId }, action.taskData))
                              .sort((a, b) => {
                                  if (
                                      new Date(a.deadline_date).toDateString() !==
                                      new Date(b.deadline_date).toDateString()
                                  ) {
                                      return +(a.deadline_date > b.deadline_date);
                                  }

                                  let result =
                                      a.deadline_time === null && b.deadline_time !== null
                                          ? true
                                          : a.deadline_time > b.deadline_time;
                                  return +result;
                              })
                        : state.list.filter(task => {
                              return task.task_id !== action.taskId;
                          })
            });
        case EDIT_TASK_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        case COMPLETE_TASK_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case COMPLETE_TASK_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                list: state.list.filter(task => {
                    return task.task_id !== action.taskId;
                })
            });
        case COMPLETE_TASK_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        case DELETE_TASK_REQUEST:
            return Object.assign({}, state, {
                loading: true
            });
        case DELETE_TASK_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                list: state.list.filter(task => {
                    return task.task_id !== action.taskId;
                })
            });
        case DELETE_TASK_FAILURE:
            return Object.assign({}, state, {
                loading: false
            });
        default:
            return state;
    }
};

export default nextDaysTasks;
