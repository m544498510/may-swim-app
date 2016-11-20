/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {Record} from 'immutable';

import authActions from '../actions';

const AuthState = new Record({
  signInFulfilled: false,
  signInRejected: false
});

export default function (state = new AuthState(), {type}) {
  switch (type) {
    case authActions.SIGN_IN_FULFILLED:
      return state.merge({
        signInFulfilled: true,
        signInRejected: false
      });
      break;
    case authActions.SIGN_IN_REJECTED:
      return state.merge({
        signInFulfilled: false,
        signInRejected: true
      });
    default:
      return state;
  }
}


