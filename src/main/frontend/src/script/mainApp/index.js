/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import 'babel-polyfill';

import {AppContainer} from 'react-hot-loader';
import React from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux';

import configureStore from './core/store';
import Root from './views/root';

import * as user from './core/user';
import * as stroke from './core/swim/stroke';

const store = configureStore();
const syncedHistory = syncHistoryWithStore(hashHistory, store);
const rootElement = document.getElementById('root');

const renderRoot = function (Root) {
  render(
    (<AppContainer>
      <Root history={syncedHistory} store={store}/>
    </AppContainer>),
    rootElement
  );
};

renderRoot(Root);

store.dispatch(user.actions.fetchUser());
store.dispatch(stroke.actions.fetchStrokeList());

if (module.hot) {
  module.hot.accept('./views/root', () => {
    let Root = require('./views/root').default;
    renderRoot(Root);
  });
}
