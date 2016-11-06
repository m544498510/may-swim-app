/**
 * @author May
 * @version 1.0.0
 */
'use strict';

import {routerReducer} from "react-router-redux";
import {combineReducers} from "redux";
import {authReducer} from "./auth/reducer";

export default combineReducers({
  routing: routerReducer,
  auth: authReducer

});
