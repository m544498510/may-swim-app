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

export function authReducer(state = new AuthState(), {payload, type}) {
  switch (type) {
    case `${SIGN_IN}_PENDING`:
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
        data:payload
      });
      break;
    case `${SIGN_IN}_REJECTED`:

      break;
    default:
      return state;
  }
}


