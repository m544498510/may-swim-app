/**
 * @author May
 * @version 1.0.0
 */

import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware  from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';
import thunk from 'redux-thunk';

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  let middleware = applyMiddleware(sagaMiddleware,thunk);

  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension());
    }
  }

  const store = createStore(reducers, initialState, middleware);

  sagaMiddleware.run(sagas);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
};

