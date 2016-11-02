/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import  React from 'react';
import {Route} from 'react-router';

import userTest from './user/userTest';


export default (store) => {
  return (
    <Route path="/" component={userTest}>
    </Route>
  )
}
