/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

export function validateEmail(email) {
  const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
  return reg.test(email);
}

export function validatePsd(password,secondPsd){
  return password === secondPsd;
}
