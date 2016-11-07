/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

const actions =  {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_FULFILLED: 'SIGN_IN_FULFILLED',
  SIGN_IN_REJECTED: 'SIGN_IN_REJECTED',

  signIn: (userName, password, autoSignIn) => ({
    type: actions.SIGN_IN,
    payload: {userName, password, autoSignIn}
  }),
  signInFulfilled: user => ({
    type: actions.SIGN_IN_FULFILLED,
    payload: user

  }),
  signInRejected: httpStaus => ({
    type: actions.SIGN_IN_REJECTED,
    payload: httpStaus
  })
};
export default actions;

