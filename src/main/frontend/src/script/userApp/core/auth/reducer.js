/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {Record} from 'immutable';

import authActions from './actions';

const AuthState = new Record({
  authenticated: false,
  userName: '',
  password: '',
  autoSignIn: false,
  isFulfilled: false,
  data:{}
});

export default function(state = new AuthState(), action) {
  switch (action.type) {
    case authActions.SIGN_IN_FULFILLED:
      const payload = action.payload;
      return state.merge({
        authenticated: !!payload,
        userName: payload.userName,
        password: payload.password,
        autoSignIn: payload.autoSignIn
      });
      break;
    case authActions.ERROR_INFO:
      return state.merge({
        message: action.payload
      });
    default:
      return state;
  }
}


