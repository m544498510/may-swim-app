/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

export function getFrame(state) {
  return state.frame;
}

export function getSidebarState(state) {
  return getFrame(state).get('sidebarState');
}
