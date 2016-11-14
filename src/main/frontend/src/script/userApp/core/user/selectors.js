/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

export function getUser(state) {
  return state.user;
}

export function isSignUpFulfilled(state) {
  return getUser(state).signUpFulfilled;
}

export function getEmailErrorInfo(state){
  return getUser().emailErrorInfo;
}

export function getSecondPsdErrorInfo(state){
  return getUser().secondPsdErrorInfo;
}


export function getEmail(state){
  return getUser().email;
}

export function getPassword(state){
  return getUser().password;
}

export function getSecondPsd(state){
  return getUser().secondPsd;
}

