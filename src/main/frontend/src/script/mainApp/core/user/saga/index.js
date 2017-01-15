/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {takeEvery} from 'redux-saga';
import {fork, call, put} from 'redux-saga/effects';

import mFetch from 'utils/may-fetch-wrapper';

import * as actions from '../action';
import actionTypes from '../action/types';


export function* getUserWorker() {
  try {
    const user = yield call(mFetch.get, {
      url: '/session'
    });
    console.log(user);
    yield put(actions.setUserInfo(user));
  } catch (e) {
    console.log(e);
  }
}

function* getUserWatcher() {
  yield* takeEvery(actionTypes.FETCH_USER_INFO, getUserWorker);
}

export function* loginOutWorker() {
  try {
    yield call(mFetch.del, {
      url: '/session'
    });
    yield put(actions.loginOut(true));
  } catch (e) {
    console.log(e);
  }
}

function* loginOutWatcher() {
  yield* takeEvery(actionTypes.LOGIN_OUT, loginOutWorker);
}

export default [
  fork(getUserWatcher),
  fork(loginOutWatcher)
]
