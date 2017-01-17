/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import {sagas as userSagas} from './user';

export default function* sagas() {
  yield [
    ...userSagas
  ];
}
