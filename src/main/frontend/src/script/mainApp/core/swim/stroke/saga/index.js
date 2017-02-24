/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import {takeEvery} from 'redux-saga';
import {call, put, fork} from 'redux-saga/effects';

import mFetch from 'utils/may-fetch-wrapper';

import {setStroke} from '../action';
import actionTypes from '../action/types';

export function* getStrokeWorker() {
  try {
    const strokeList = yield call(mFetch, {
      url: '/stroke'
    });
    if (strokeList && strokeList.length > 0) {
      yield put(setStroke, strokeList);
    }
  } catch (e) {
    console.error(e);
  }
}

export function* getStrokeWatcher () {
  yield* takeEvery(actionTypes.FETCH_STROKE_LIST, getStrokeWorker);
}

export default [
  fork(getStrokeWatcher)
]
