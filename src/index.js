import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

import '../styles/style.css';
import '../styles/bootstrap.css';
import '../styles/bootstrap_grid.css';
import '../styles/bootstrap_reboot.css';
import '../styles/bootstrap_responsive.css';

import App from './components/app';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>, document.getElementById('root'));
