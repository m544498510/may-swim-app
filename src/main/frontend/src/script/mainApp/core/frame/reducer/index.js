/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import {Map} from 'immutable';

import types from '../action/types';

const defaultState = Map({
  sidebarState: true,         //侧边菜单状态，true：展开；false：收缩
  htmlWidth: 0,               //整个页面的宽度，包括滚动条宽度
  htmlHeight: 0               //整个页面的高度
});

export default function(state = defaultState,{type,payload}){

  switch (type){
    case types.CHANGE_SIDEBAR_STATE:
      return state.merge({
        sidebarState: payload
      });
    case types.CHANGE_HTML_SIZE:
      return state.merge({
        htmlWidth: payload.width,
        htmlHeight: payload.height
      });
    default:
      return state;
  }
}
