import { TASK_LIST } from '../actions/index.js'

export default function(state = null, action){
  switch(action.type){
    case TASK_LIST:
      return action.payload; // Retourne les données.
    default:
      return state;
  }
}
