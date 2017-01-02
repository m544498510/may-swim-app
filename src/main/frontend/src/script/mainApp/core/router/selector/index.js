/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 * @module routerSelector
 * @alias routerSelector
 */
'use strict';

const routerInitState = {
  pathname: window.location.hash.substring(1),
  search: "",
  hash: "",
  action: "",
  key: null,
  query: {}
};

export function getRouterInfo(state){
  return state.routing.locationBeforeTransitions||routerInitState;
}

export function getPathName(state){
  return getRouterInfo(state).pathname||'';
}

