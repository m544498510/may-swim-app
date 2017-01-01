/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {Map} from 'immutable';

import types from '../action/types';

const defaultState = Map({
  sidebarState: true         //侧边菜单状态，true：展开；false：收缩
});

export default function(state = defaultState,{type,payload}){

  switch (type){
    case types.CHANGE_SIDEBAR_STATE:
      return state.merge({
        sidebarState: payload
      });
    default:
      return state;
  }
}
