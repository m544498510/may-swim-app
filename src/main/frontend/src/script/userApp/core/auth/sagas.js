/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import {takeEvery} from 'redux-saga';
import {call, put, fork} from 'redux-saga/effects';
import mFetch from 'utils/may-fetch-wrapper';

import authActions from './actions'

function* signInWorker({payload}) {
  try {
    const user = yield call(mFetch.post, {
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
