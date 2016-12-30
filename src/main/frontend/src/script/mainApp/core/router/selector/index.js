/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

export function getRouterInfo(state){
  return state.routing.locationBeforeTransitions;
}

export function getPathName(state){
  return getRouterInfo(state).pathname;
}

