/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import App from './app';
import DashboardContainer from './containers/dashboard';
import SwimWizard from './components/swim/wizard';

export const paths = {
  HOME: 'home',
  SWIM_INPUT:'swimmingInput',
  SETTING: 'setting',
  TEST: 'test'
};

export function getRoutes() {
  return (
    <Route path="/" component={App}>
      <IndexRedirect to={`${paths.HOME}`}/>

      <Route path={paths.HOME} component={DashboardContainer}/>
      <Route path={paths.SWIM_INPUT} component={SwimWizard}/>

      <Route path={`${paths.SETTING}/setting1`} component={DashboardContainer}/>
      <Route path={`${paths.SETTING}/setting2`} component={DashboardContainer}/>
      <Route path={paths.TEST} component={DashboardContainer}>
        <Route path='test1' component={DashboardContainer}/>
        <Route path='test2' component={DashboardContainer}/>
      </Route>
    </Route>
  )
}

