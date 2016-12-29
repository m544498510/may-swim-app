/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {takeEvery} from 'redux-saga';
import {fork,put} from 'redux-saga/effects';

import actionTypes from './action/types';

function* getUserWorker(){
  try {

  }catch (e){

  }
}

function* getUserWatcher(){
  return takeEvery(actionTypes.FETCH_USER_INFO,getUserWorker);
}

export default [
  fork(getUserWatcher)
]
