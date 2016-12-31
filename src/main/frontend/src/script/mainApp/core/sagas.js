/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import * as user from './user';

export default function* sagas() {
  yield [
    user.sagas
  ];
}
