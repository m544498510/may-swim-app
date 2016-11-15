/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {takeEvery} from 'redux-saga';
import {call,put,fork} from 'redux-saga/effects';
import mFetch from 'utils/may-fetch-wrapper';

import userActions from './actions';
import actionTypes from './action-types';

function* signUpWorker({payload}) {
  try {
    const user = yield call(mFetch.post,{
      url: '/user',
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
  console.log(actionTypes.SIGN_UP);
  yield takeEvery(actionTypes.SIGN_UP, signUpWorker);
}

export default [
  fork(signUpWatcher)
]
