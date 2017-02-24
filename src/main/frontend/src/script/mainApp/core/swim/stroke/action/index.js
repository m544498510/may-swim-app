/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import actionTypes from 'types';

export function setStroke(list) {
  return {
    type: actionTypes.SET_STROKE_LIST,
    payload: list
  }
}

export function fetchStrokeList(){
  return {
    type: actionTypes.FETCH_STROKE_LIST
  }
}
