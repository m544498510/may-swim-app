/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import { authSagas } from './auth';


export default function* sagas() {
  yield [
    ...authSagas
  ];
}
