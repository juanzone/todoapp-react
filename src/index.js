import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'
import App from './layout/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

const createStoreMiddleware = applyMiddleware(thunk)(createStore)
// let store = createStore(tasks,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <Provider store={createStoreMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())} >
  <App />
  </Provider>
  , document.getElementById('root')
);
