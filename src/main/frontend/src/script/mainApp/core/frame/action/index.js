/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import types from './types';

import {getSidebarState} from '../selector';

export function changeSidebarState(isCollapsed){
  return {
    type: types.CHANGE_SIDEBAR_STATE,
    payload: isCollapsed
  }
}

export function reverseSidebarState(){
  return (dispatch,getState)=>{
    const sidebarState = getSidebarState(getState());
    dispatch({
      type: types.CHANGE_SIDEBAR_STATE,
      payload: !sidebarState
    });
  }
}

/***
 *
 * @param {object} size
 * @param {int|number} size.width
 * @param {int|number} size.height
 * @returns {{type: string, payload: object}}
 */
export function changeHtmlSize(size){
  return {
    type: types.CHANGE_HTML_SIZE,
    payload: size
  }
}
