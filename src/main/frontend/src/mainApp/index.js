/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware,compose,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

import getRoutes from './router';

const middleware = process.env.NODE_ENV === 'production' ?
  [thunk] :
  [thunk, logger()];

const store = createStore(
  combineReducers({
    ...reducer,
    routing: routerReducer
  }),
  compose(
    applyMiddleware(...middleware)
  )
);
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store);

const routes = getRoutes(store);

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('root')
);
