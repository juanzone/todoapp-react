import axios from 'axios';
import { dispatch } from 'redux-thunk'


export const TASK_LIST = "TASK_LIST"
export const ERROR_TASK_LIST = "ERROR_TASK_LIST"

export const TASK_ADD = "TASK_ADD"
export const ERROR_TASK_ADD = "ERROR_TASK_ADD"

export const TASK_REMOVE = "TASK_REMOVE"
export const ERROR_TASK_REMOVE = "ERROR_TASK_REMOVE"

export function getTasks(){
  return function(dispatch){
    axios.get('http://localhost:8080/api/task')
    .then(function (response) {
      dispatch({type: TASK_LIST, payload: response.data.liste})
    })
    .catch(function (error) {
      dispatch({type: ERROR_TASK_LIST, payload: error})
    });
  }
}

export function addTask(task){
  return function(dispatch){
    axios.post('http://localhost:8080/api/task', task)
    .then(function (response) {
      dispatch({type: TASK_ADD, payload: response.data.liste})
    })
    .catch(function (error) {
      dispatch({type: ERROR_TASK_ADD, payload: error})
    });
  }
}

export function removeTask(id){
  return function(dispatch){
    axios.delete('http://localhost:8080/api/task/' + id)
    .then(function (response) {
      dispatch({type: TASK_REMOVE, payload: response.data.liste})
    })
    .catch(function (error) {
      dispatch({type: ERROR_TASK_REMOVE, payload: error})
    });
  }
}
