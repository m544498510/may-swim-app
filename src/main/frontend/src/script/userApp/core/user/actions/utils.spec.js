/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import * as utils from './utils';

describe('user action utils', ()=>{
  describe('function validateEmail',()=>{
    it('return true when email is a valid data',()=>{
      const flag = utils.validateEmail('123@qq.com');
      expect(flag).to.be.true;
    });

    it('return false when email is a invalid data',()=>{
      const flag = utils.validateEmail('123');
      expect(flag).to.be.false;
    });
  });
});
