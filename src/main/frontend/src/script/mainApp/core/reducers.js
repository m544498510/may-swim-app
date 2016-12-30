/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import user from './user';


export default combineReducers({
  routing: routerReducer,
  user: user.reducers
});
