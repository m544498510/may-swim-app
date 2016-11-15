/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import {authReducer} from './auth';
import {userReducer} from './user';



export default combineReducers({
  routing: routerReducer,
  auth: authReducer,
  user: userReducer

});
