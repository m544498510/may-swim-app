/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {Record} from 'immutable';

import actionTypes from '../action/types';

const userRecord = Record({
  id: '',
  userName: '',
  pic: '',
  loginOutState: false
});

export default function (state = new userRecord(), {type, payload}) {
  switch (type) {
    case actionTypes.SET_USER_INFO:
      const {id, userName, pic} = payload;
      state.merge({
        id, userName, pic
      });
      break;
    case actionTypes.LOGIN_OUT:
      state.merge({
        loginOutState: payload
      });
      break;
    default:
      return state;
  }
}
