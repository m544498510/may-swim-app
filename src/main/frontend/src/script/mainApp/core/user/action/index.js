/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import types from "./types";

export function setUserInfo(userInfo) {
  return {
    type: types.SET_USER_INFO,
    payload: userInfo
  }
}

export function fetchUser() {
  return {
    type: types.FETCH_USER_INFO
  }
}

export function loginOut() {
  return {
    type: types.LOGIN_OUT
  }
}

export function loginOutFulfilled(loginOutState) {
  return {
    type: types.LOGIN_OUT_FULFILLED,
    payload: loginOutState
  }
}
