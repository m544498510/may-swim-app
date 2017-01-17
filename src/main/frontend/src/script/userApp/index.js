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

const store = configureStore();
const syncedHistory = syncHistoryWithStore(hashHistory, store);
const rootElement = document.getElementById('root');

const renderRoot = function(Root){
  render(
    (<AppContainer>
      <Root history={syncedHistory} store={store}/>
    </AppContainer>),
    rootElement
  );
};

renderRoot(Root);

if (module.hot) {
  module.hot.accept('./views/root', () => {
    let Root = require('./views/root').default;
    renderRoot(Root);
  });
}
