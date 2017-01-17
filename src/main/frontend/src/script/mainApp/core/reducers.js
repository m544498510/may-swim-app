/**
 * @author May
 * @version 1.0.0
 */

import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

import {reducers as userReducers} from './user';
import {reducers as frameReducers} from './frame';


export default combineReducers({
  routing: routerReducer,
  user: userReducers,
  frame: frameReducers
});
