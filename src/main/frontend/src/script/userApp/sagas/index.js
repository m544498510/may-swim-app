/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {call} from 'redux-saga/effects';

import signInSaga from './user/signInSage';

export default function* sages() {
  yield [call(signInSaga)];
}
