"use strict";

export function getAuth(state) {
  return state.auth;
}

export function isSignInRejected(state) {
  return getAuth(state).signInRejected;
}

export function isSignInFulfilled(state){
  return getAuth(state).signInFulfilled;
}
