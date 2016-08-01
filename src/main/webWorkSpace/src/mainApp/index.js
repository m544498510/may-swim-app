/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';

import App from './containers/App';


const middleware = process.env.NODE_ENV === 'production' ?
  [thunk] :
  [thunk, logger()];

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middleware)
  )
);

store.dispatch(getAllProducts())


render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
