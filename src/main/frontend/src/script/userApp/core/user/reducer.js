/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {Record} from 'immutable';

import actionTypes from './action-types';

const userState = new Record({
  userName: '',
  email: '',
  emailErrorInfo: '',
  password: '',
  secondPsd: '',
  secondPsdErrorInfo: '',

  isSignUpFulfilled: false
});

export default function (state= new userState(), {type,payload}) {
  switch (type) {
    case actionTypes.SIGN_IN_FULFILLED:
      return state.merge({
        isSignUpFulfilled: true
      });
    case actionTypes.CHECK_USER_NAME_FULFILLED:
      return state.merge({
        userName: payload.userName
      });
    case actionTypes.CHECK_EMAIL_FULFILLED:
      return state.merge({
        email: payload.email,
        emailErrorInfo: payload.emailErrorInfo
      });
    case actionTypes.PASSWORD_CHANGE:
      return state.merge({
        password: payload
      });
    case actionTypes.SECOND_PASSWORD_CHANGE:
      return state.merge({
        secondPsd: payload.secondPsd,
        secondPsdErrorInfo: payload.secondPsdErrorInfo
      });
    default:
      return state;
  }
}
