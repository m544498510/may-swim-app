/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

import {SIGN_IN, SIGN_IN_FULFILLED, ERROR_INFO} from '../../core/auth';

import {get} from 'src/script/utils/may-fetch-wrapper';

function* signInWorker({payload}) {
  try {
    const user = yield call(get, {
      url: '/user/user',
      data: {
        userName: payload.userName,
        userPsd: payload.userPsd
      }
    });
    console.log(user);
    yield put({
      type: SIGN_IN_FULFILLED,
      payload: user
    });
  } catch (e) {
    yield put({
      type: ERROR_INFO,
      payload: '登录失败'
    })
  }


}

export default function* signInWatcher() {
  yield* takeEvery(SIGN_IN, signInWorker);
}
