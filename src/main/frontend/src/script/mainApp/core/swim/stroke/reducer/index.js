/**
 *  泳姿信息
 * @author :    Mei XinLin
 * @version :   1.0
 */
import actionTypes from '../action/types';

const defaultState = [];

export default function (state = defaultState, {type, payload}) {

  switch (type) {
    case actionTypes.SET_STROKE_LIST:
      state = payload;
      return state;
    default:
      return state;
  }
}
