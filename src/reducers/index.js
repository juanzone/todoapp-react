import { combineReducers} from 'redux';
import TasksReducer from './tasks_reducer';

const rootReducer = combineReducers({
  tasks : TasksReducer,
})

export default rootReducer;
