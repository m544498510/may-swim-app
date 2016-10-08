/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

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
render(
  (<AppContainer>
        <Root history={syncedHistory} store={store}/>
    </AppContainer>),
  rootElement
);

if (module.hot) {
  module.hot.accept('./views/root', () => {
    render(require('./views/root').default);
  });
}
