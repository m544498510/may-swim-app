/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {SIGN_IN} from './action-types';
import mFetch from 'src/script/utils/may-fetch-wrapper';

export function authenticate(userName, password, autoSignIn) {
  return {
    type: SIGN_IN,
    payload: {
      promise: mFetch.get({
        url: '/user/user',
        data:{
          userName,
          userPsd:password
        }
      }),
      data: {
        userName,
        password,
        autoSignIn
      }
    }
  }
}
