/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import reducers from "./reducer";
import * as actions from "./action";
import actionTypes from "./action/types";
import sagas from "./saga";
import selectors from "./selector";


export default {
  reducers,
  actions,
  actionTypes,
  sagas,
  selectors
}
