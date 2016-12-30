/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

function getUser(state){
  return state.user;
}

function getLoginOutState(state){
  return getUser(state).loginOutState;
}

export default {
  getUser,
  getLoginOutState
}
