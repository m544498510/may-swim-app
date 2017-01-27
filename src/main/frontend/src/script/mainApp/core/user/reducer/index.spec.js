/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import reducer from './index';
import actionTypes from '../action/types';

describe('user reducer', () => {

  describe('init', () => {
    it('should use initial state', () => {
      const state = reducer(undefined,{});
      expect(typeof state.toObject === 'function').to.be.true;
      expect(state.toObject()).to.deep.equal({
        id: '',
        userName: '',
        pic: '/dist/assets/img/userPic.png',
        loginOutState: false
      });
    });
  });

  describe('type SET_USER_INFO',()=>{
    it('should set the userInfo to specified value',()=>{
      const userInfo = {
        userName: 'test_name',
        id: 'test_id',
        pic: 'test_pic'
      };
      const state = reducer(undefined,{
        type: actionTypes.SET_USER_INFO,
        payload: userInfo
      });

      expect(state.get('userName')).to.be.equal(userInfo.userName);
      expect(state.get('id')).to.be.equal(userInfo.id);
      expect(state.get('pic')).to.be.equal(userInfo.pic);
    });
  });

  describe('type LOGIN_OUT_FULFILLED', () => {
    it('should set loginOutState to false',()=>{
      const loginOutState = false;
      const state = reducer(undefined,{
        type: actionTypes.LOGIN_OUT_FULFILLED,
        payload: loginOutState
      });
      expect(state.get('loginOutState')).to.be.false;
    });

    it('should set loginOutState to true',()=>{
      const loginOutState = true;
      const state = reducer(undefined,{
        type: actionTypes.LOGIN_OUT_FULFILLED,
        payload: loginOutState
      });
      expect(state.get('loginOutState')).to.be.true;
    })
  });

});
