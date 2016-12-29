/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {takeEvery} from 'redux-saga';
import {fork, call, put} from 'redux-saga/effects';

import mFetch from 'utils/may-fetch-wrapper';

import actions from '../action';
import actionTypes from '../action/types';


function* getUserWorker() {
  try {
    const user = yield call(mFetch.get, {
      url: '/session'
    });
    yield put(actions.setUserInfo(user));
  } catch (e) {
    console.log(e);
  }
}

function* getUserWatcher() {
  return takeEvery(actionTypes.FETCH_USER_INFO, getUserWorker);
}

function* loginOutWorker() {
  try {
    yield call(mFetch.del, {
      url: '/session'
    });
    yield put(actions.loginOut(true));
  }catch (e){
    console.log(e);
  }
}

function* loginOutWatcher(){
  return takeEvery(actionTypes.FETCH_LOGIN_OUT,loginOutWorker);
}


export default [
  fork(getUserWatcher),
  fork(loginOutWatcher)
]
