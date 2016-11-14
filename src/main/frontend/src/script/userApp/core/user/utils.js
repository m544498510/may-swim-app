/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

export function validateEmail(email) {
  const reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
  return reg.test(email);
}

export function validatePsd(password,secondPsd){
  return password == secondPsd;
}
