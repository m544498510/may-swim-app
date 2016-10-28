/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {SIGN_IN_ERROR,SIGN_IN_SUCCESS} from './action-types';

export function authenticate(userName,password,autoSignIn) {
  //console.log(userName+' '+password+' '+autoSignIn);
  return dispatch => {
    dispatch(signInSuccess({
      name: userName,
      psd: password,
      autoSignIn:autoSignIn
    }));
  }
}

export function signInSuccess(result){
  return {
    type: SIGN_IN_SUCCESS,
    payload: result
  }
}
