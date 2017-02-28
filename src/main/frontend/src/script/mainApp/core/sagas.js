/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import {sagas as userSagas} from './user';
import * as stroke from './swim/stroke';


export default function* sagas() {
  yield [
    ...userSagas,
    ...stroke.sagas
  ];
}
