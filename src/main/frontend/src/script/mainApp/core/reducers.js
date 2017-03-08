/**
 * @author May
 * @version 1.0.0
 */

import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import {reducers as userReducers} from './user';
import {reducers as frameReducers} from './frame';
import * as stroke from './swim/stroke';
import * as newSession from './swim/newSession';


export default combineReducers({
  routing: routerReducer,
  user: userReducers,
  frame: frameReducers,
  stroke: stroke.reducers,
  newSession: newSession.reducers
});
