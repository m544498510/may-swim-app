/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {Recond} from 'immutable';

import actions from './actions';

const user = new Recond({
  userName: '',
  email: '',
  emailErrorInfo: '',
  password: '',
  secondPsd: '',
  secondPsdErrorInfo: '',

  isSignUpFulfilled: false
});

export default function (state=user, {type,payload}) {
  switch (type) {
    case actions.SIGN_IN_FULFILLED:
      return state.meger({

      })

  }
}
