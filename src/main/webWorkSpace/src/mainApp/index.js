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
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

import otherPage from './otherPage';
import login from './otherPage/login';
import register from './otherPage/register';

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
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={otherPage}>
        <Route path="/login" component={login} />
        <Route path="/register" component={register} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
