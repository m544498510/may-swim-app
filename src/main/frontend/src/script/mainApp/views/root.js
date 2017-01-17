/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { getRoutes } from './routes';


export default function Root({history, store}) {
  return (
    <Provider store={store}>
      <Router history={history}  >
        {getRoutes()}
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};
