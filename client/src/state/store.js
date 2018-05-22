import promiseMiddleware from '../utils/promise'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';


const composedMiddleware = [
  applyMiddleware(thunk, promiseMiddleware)
];

if (process.env.NODE_ENV !== 'production') {
  window.__REDUX_DEVTOOLS_EXTENSION__
  && composedMiddleware.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}

export default function configureStore(initialState) {
  return createStore(
    combineReducers({ rootReducer }),
    initialState,
    compose(...composedMiddleware)
  )
}