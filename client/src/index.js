import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import '../stylesheets/main.css'
import { Provider } from 'react-redux'
import configureStore from './state/store'

const store = configureStore(window.__INITIAL_STATE__)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
