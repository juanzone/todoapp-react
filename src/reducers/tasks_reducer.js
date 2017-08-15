import { TASK_LIST, TASK_ADD, TASK_REMOVE } from '../actions/index.js'


export default function(state = null, action){
  switch(action.type){
    case TASK_LIST:
      return action.payload; // Retourne les données.
    case TASK_ADD:
      return state
    case TASK_REMOVE:
      return state
    default:
      return state;
  }
}
