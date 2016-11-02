/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {SIGN_IN} from './action-types';

export function authenticate(userName, password, autoSignIn) {
  var data = new FormData();
  data.append("json", JSON.stringify({
    userName,
    userPsd: password
  }));
  const init = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    body:data
  };

  return {
    type: SIGN_IN,
    payload: {
      promise: fetch('/user/user', init).then(r=>r.json()),
      data: {
        userName,
        password,
        autoSignIn
      }
    }
  }
}
