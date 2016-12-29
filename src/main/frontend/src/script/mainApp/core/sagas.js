/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import user from './user';

export default function* sagas() {
  yield [
    user.sagas
  ];
}
