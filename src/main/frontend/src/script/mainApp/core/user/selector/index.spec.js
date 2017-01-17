/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import {Map} from 'immutable';

import * as selectors from './index';


describe('user selector', () => {
  const _state = {
    user: Map({
      userName:'test_name',
      loginOutState: true
    })
  };

  describe('function getUser', () => {
    it('should return the user state', () => {
      const userState = selectors.getUser(_state);
      expect(userState).to.deep.equal(_state.user);
    });
  });

  describe('function ', () => {
    it('should return the loginOutState',()=>{
      const loginOutState = selectors.getLoginOutState(_state);
      expect(loginOutState).to.be.true;
    });
  });
});
