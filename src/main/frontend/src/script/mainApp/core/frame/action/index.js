/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import types from './types';

export function changeSidebarState(isCollapsed){
  return {
    type: types.CHANGE_SIDEBAR_STATE,
    payload: isCollapsed
  }
}
