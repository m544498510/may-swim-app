/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import App from './app';
import DashboardContainer from './containers/dashboard';

export const paths = {
  ROOT: '/'
};

export const getRoutes = () => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      {
        indexRoute: {
          component:DashboardContainer
        }
      }
    ]
  };
};
