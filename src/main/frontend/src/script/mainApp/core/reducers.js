/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import userInfo from './userInfo';


export default combineReducers({
  routing: routerReducer,
  userInfo: userInfo.reducer
});
