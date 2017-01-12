/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

export function getUser(state){
  return state.user;
}

export function getLoginOutState(state){
  return getUser(state).get('loginOutState');
}
