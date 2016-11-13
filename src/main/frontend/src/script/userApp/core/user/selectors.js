/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

export function getUser(state) {
  return state.user
}

export function isSignUpFulfilled(state) {
  return getUser(state).is
}
