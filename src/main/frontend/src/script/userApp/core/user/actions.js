/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import actionTypes from './action-types';
import {validateEmail, validatePsd} from './utils';
import {getUser} from './selectors';

/**
 * @alias userActions
 */
export default {

  signUp: function () {
    return (dispatch, getState) => {
      const user = getUser(getState());
      if (validateEmail(user.email) && validatePsd(user.password, user.secondPsd)) {
        dispatch({
          type: actionTypes.SIGN_UP,
          payload: user
        })
      }
    }
  },

  signUpFulfilled: user => ({
    type: actionTypes.SIGN_UP_FULFILLED,
    payload: user
  }),

  signUpRejected: httpStatus => ({
    type: actionTypes.SIGN_UP_REJECTED,
    payload: httpStatus
  }),

  userNameChange: userName => ({
    type: actionTypes.CHECK_USER_NAME_FULFILLED,
    payload: {userName}
  }),

  emailChange: function (email) {
    return (dispatch) => {
      let emailErrorInfo = '';
      if (!validateEmail(email)) {
        emailErrorInfo = '邮箱格式不正确';
      }
      dispatch({
        type: actionTypes.CHECK_EMAIL_FULFILLED,
        payload: {email, emailErrorInfo}

      })
    }
  },

  passwordChange: password => ({
    type: actionTypes.PASSWORD_CHANGE,
    payload: password
  }),

  secondPsdChange: function (secondPsd) {
    return (dispatch, getState) => {
      let secondPsdErrorInfo = '';
      const user = getUser(getState());
      if (!validatePsd(user.password, secondPsd)) {
        secondPsdErrorInfo = '两次输入的密码不一致';
      }
      dispatch({
        type: actionTypes.SECOND_PASSWORD_CHANGE,
        payload: {secondPsd, secondPsdErrorInfo}
      })

    }
  }
};
