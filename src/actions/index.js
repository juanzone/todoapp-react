import axios from 'axios';
import { dispatch } from 'redux-thunk'

export const TASK_SELECTED = 'TASK_SELECTED'
export function taskSelected(task){
  return{
    type : TASK_SELECTED,
    payload : task
  }
}

export const TASK_LIST = "TASK_LIST"
export const ERROR_TASK_LIST = "ERROR_TASK_LIST"

export function getTasks(){
  return function(dispatch){
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      console.log(response.data);
      dispatch({type: TASK_LIST, payload: response.data})
    })
    .catch(function (error) {
      dispatch({type: ERROR_TASK_LIST, payload: error})
    });
  }
}
