/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {takeEvery} from 'redux-saga';
import {call,put,fork} from 'redux-saga/effects';
import mFetch from 'util/may-fetch-wrapper';

import userActions from './actions';
import { SIGN_UP } from './action-types';

function* signUpWorker({payload}) {
  try {
    const user = yield call(mFetch.post,{
      url: '/user/user',
      data: {
        userName: payload.userName,
        email: payload.email,
        password: payload.password
      }
    });
    yield put(userActions.signUpFulfilled(user));
  }catch (e){
    yield put(userActions.signUpRejected(e.status));
  }
}

function* signUpWatcher(){
  yield takeEvery(SIGN_UP, signUpWorker);
}

export default [
  fork(signUpWatcher)
]
