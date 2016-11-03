/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {Record} from 'immutable';

import {SIGN_IN} from './action-types';

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
    case `${SIGN_IN}_PENDING`:
      const payload = action.payload;
      return state.merge({
        authenticated: !!payload,
        userName: payload.userName,
        password: payload.password,
        autoSignIn: payload.autoSignIn
      });
      break;
    case `${SIGN_IN}_FULFILLED`:
      return state.merge({
        isFulfilled:true,
        data:action.payload
      });
      break;
    case `${SIGN_IN}_REJECTED`:
      return state;
      break;
    default:
      return state;
  }
}


