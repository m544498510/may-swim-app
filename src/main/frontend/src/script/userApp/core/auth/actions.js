/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

const actions =  {
  SIGN_IN: 'SIGN_IN',
  SIGN_IN_FULFILLED: 'SIGN_IN_FULFILLED',
  ERROR_INFO: 'ERROR_INFO',

  signIn: (userName, password, autoSignIn) => ({
    type: actions.SIGN_IN,
    payload: {userName, password, autoSignIn}
  }),
  signInFulfilled: user => ({
    type: actions.SIGN_IN_FULFILLED,
    payload: user

  })
};
export default actions;

