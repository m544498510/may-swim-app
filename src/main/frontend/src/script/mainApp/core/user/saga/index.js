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


function* getUserWorker() {
  try {
    const user = yield call(mFetch.get, {
      url: '/session'
    });
    yield put(actions.setUserInfo(user));
  } catch (e) {
    console.log(e);
    //todo:
    const user1 = {
      id: 1,
      userName: 'may',
      pic: 'http://beijing678.oss-cn-beijing.aliyuncs.com/jeemaa/documents/user/19251/face/1b06449747124c069887320865f4d480.jpg'
    };
    yield put(actions.setUserInfo(user1));

  }
}

function* getUserWatcher() {
  yield* takeEvery(actionTypes.FETCH_USER_INFO, getUserWorker);
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
  yield* takeEvery(actionTypes.LOGIN_OUT,loginOutWorker);
}


export default [
  fork(getUserWatcher),
  fork(loginOutWatcher)
]
