import { combineReducers, createStore } from 'redux';
import todos from './reducers/todos';

let reducer = combineReducers({ todos });

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
