/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
/**
 * @alias userActions
 */
const actions = {
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_FULFILLED: 'SIGN_UP_FULFILLED',
  SIGN_UP_REJECTED: 'SIGN_UP_REJECTED',

  CHECK_USER_NAME: 'CHECK_USER_NAME',
  CHECK_USER_NAME_FULFILLED: 'CHECK_USER_NAME_FULFILLED',

  CHECK_EMAIL:'CHECK_EMAIL',
  CHECK_EMAIL_FULFILLED: 'CHECK_EMAIL_FULFILLED',

  signUp: (userName, email, password) => ({
    type: actions.SIGN_UP,
    payload: {userName, email, password}
  }),

  signUpFulfilled: user => ({
    type: actions.SIGN_UP_FULFILLED,
    payload: user
  }),

  signUpRejected: httpStatus => ({
    type: actions.SIGN_IN_REJECTED,
    payload: httpStatus
  }),

  checkUserName: isUsed => ({
    type: actions.CHECK_USER_NAME_FULFILLED,
    payload: isUsed
  }),

  checkEmail: isUsed => ({
    type: actions.CHECK_EMAIL_FULFILLED,
    payload: isUsed
  })
};
export default actions;
