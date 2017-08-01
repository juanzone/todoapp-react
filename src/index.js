import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import tasks from './reducers'
import App from './layout/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

let store = createStore(tasks,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store} >
  <App />
  </Provider>
  , document.getElementById('root')
);
