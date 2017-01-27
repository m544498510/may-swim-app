/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import {Record} from 'immutable';

import actionTypes from '../action/types';

const userRecord = Record({
  id: '',
  userName: '',
  pic: '/dist/assets/img/userPic.png',
  loginOutState: false
});

export default function (state = new userRecord(), {type, payload}) {
  switch (type) {
    case actionTypes.SET_USER_INFO:
      const {id, userName, pic} = payload;
      return state.merge({
        id, userName, pic
      });
    case actionTypes.LOGIN_OUT_FULFILLED:
      return state.merge({
        loginOutState: payload
      });
    default:
      return state;
  }
}
