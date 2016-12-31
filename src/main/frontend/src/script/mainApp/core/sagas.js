/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import {sagas as userSagas} from './user';

export default function* sagas() {
  yield [
    ...userSagas
  ];
}
