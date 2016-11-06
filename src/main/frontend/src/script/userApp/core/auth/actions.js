/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {SIGN_IN} from './action-types';

export function authenticate(userName, password, autoSignIn) {
  return {
    type: SIGN_IN,
    payload: {
        userName,
        password,
        autoSignIn
    }
  }
}
