/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {SIGN_IN} from './action-types';

export function authenticate(userName,password,autoSignIn) {
  const init = {
    method: 'GET',
    mode: 'cors',
    cache: 'default'
  };
  return {
    type:SIGN_IN,
    payload:{
      promise: fetch('/user/user',init),
      data: 'a',
      userName,
      password,
      autoSignIn,
    }
  }
}
