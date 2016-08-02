/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import  React from 'react';
import {Route} from 'react-router';

import OtherPageFrame from './otherPage/OtherPageFrame';
import Login from './otherPage/login/Login';
import Register from './otherPage/register/Register';

export default (store) => {
  return (
    <Route path="/" component={OtherPageFrame}>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
    </Route>
  )
}
