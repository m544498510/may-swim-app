/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

const actions = {
  SIGN_UP: 'SIGN_UP',
  SIGN_UP_FULFILLED: 'SIGN_UP_FULFILLED',
  SIGN_UP_REJECTED: 'SIGN_UP_REJECTED',

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
  })
};
export default actions;
