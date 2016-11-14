/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware);

  if (process.env.NODE_ENV !== 'production') {
    // configure redux-devtools-extension
    // @see https://github.com/zalmoxisus/redux-devtools-extension
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension());
    }
  }

  const store = createStore(reducers, initialState, middleware);

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('./**/reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
/*
    module.hot.accept('./sagas',() => {
      sagaMiddleware.run(require('./sagas').default);
    })
*/
  }

  return store;
};

