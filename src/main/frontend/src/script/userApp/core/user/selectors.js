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
  return getUser(state).emailErrorInfo;
}

export function getSecondPsdErrorInfo(state){
  return getUser(state).secondPsdErrorInfo;
}


export function getEmail(state){
  return getUser(state).email;
}

export function getPassword(state){
  return getUser(state).password;
}

export function getSecondPsd(state){
  return getUser(state).secondPsd;
}

