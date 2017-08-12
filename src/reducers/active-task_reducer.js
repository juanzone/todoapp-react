import TASK_SELECTED from '../actions/index.js'
export default function(state = null, action){
  switch(action.type){
    case TASK_SELECTED:
      return action.payload; // Retourne les données.
    default:
      return state;
  }
}
