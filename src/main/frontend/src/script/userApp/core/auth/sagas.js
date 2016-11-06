/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {takeEvery} from 'redux-saga';
import {call, put, fork} from 'redux-saga/effects';

import authActions from './actions'

import mFetch from 'src/script/utils/may-fetch-wrapper';

function* signInWorker({payload}) {
  try {
    const user = yield call(mFetch.get, {
      url: '/session',
      data: {
        userName: payload.userName,
        userPsd: payload.userPsd
      }
    });
    yield put(authActions.signInFulfilled(user));
  } catch (e) {
    yield put({
      type: authActions.ERROR_INFO,
      payload: '登录失败'
    })
  }


}

function* signInWatcher() {
  yield* takeEvery(authActions.SIGN_IN, signInWorker);
}

export default [
  fork(signInWatcher)
];
