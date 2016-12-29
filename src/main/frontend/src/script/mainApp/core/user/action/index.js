/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import types from "./types";

export default {
  setUserInfo: userInfo =>({
    type: types.SET_USER_INFO,
    payload: userInfo
  })




}
