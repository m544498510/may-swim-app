/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import * as reducer from './reducer';
import action from './action';
import * as actionTypes from './action/types';
import sagas from './saga';



export default {
  reducer,
  action,
  actionTypes,
  sagas
}
