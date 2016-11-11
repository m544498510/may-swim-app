/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {takeEvery} from 'redux-saga';
import {call, put, fork} from 'redux-saga/effects';

import authActions from './actions'

import mFetch from 'utils/may-fetch-wrapper';

function* signInWorker({payload}) {
  try {
    const user = yield call(mFetch.get, {
      url: '/session',
      data: {
        userName: payload.userName,
        userPsd: payload.password,
        autoSignIn: payload.autoSignIn
      }
    });
    yield put(authActions.signInFulfilled(user));
  } catch (e) {
    console.log(e);
    yield put(authActions.signInRejected(e.status));
  }
}

function* signInWatcher() {
  yield* takeEvery(authActions.SIGN_IN, signInWorker);
}

export default [
  fork(signInWatcher)
];
