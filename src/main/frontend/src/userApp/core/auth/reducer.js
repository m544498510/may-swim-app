/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {Record} from 'immutable';

import {SIGN_IN_SUCCESS,SIGN_IN_ERROR} from './action-types';

const AuthState = new Record({
  authenticated: false,
  name: '',
  psd: '',
  autoSignIn: false,
});

export function authReducer(state = new AuthState(),{payload,type}){
  switch (type){
    case SIGN_IN_SUCCESS:
      return state.merge({
        authenticated: !!payload,
        name: payload.name,
        psd: payload.psd
      });
      break;
    case SIGN_IN_ERROR:

      break;
    default:
      return state;
  }
}


