/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

export function validateEmail(email){
  var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
  return reg.test(email);
}
