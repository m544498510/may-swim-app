/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import {authSagas} from "./auth";
import {userSagas} from "./user";


export default function* sagas() {
  yield [
    ...authSagas,
    ...userSagas
  ];
}
