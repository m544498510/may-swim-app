/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {Record} from 'immutable';

import {SIGN_IN_FULFILLED,ERROR_INFO} from './action-types';

const AuthState = new Record({
  authenticated: false,
  userName: '',
  password: '',
  autoSignIn: false,
  isFulfilled: false,
  data:{}
});

export function authReducer(state = new AuthState(), action) {
  switch (action.type) {
    case SIGN_IN_FULFILLED:
      const payload = action.payload;
      return state.merge({
        authenticated: !!payload,
        userName: payload.userName,
        password: payload.password,
        autoSignIn: payload.autoSignIn
      });
      break;
    case ERROR_INFO:
      return state.merge({
        message: action.payload
      });
    default:
      return state;
  }
}


