/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import configureStore from 'redux-mock-store';

import * as actions from './index';
import actionsTypes from './types'

const mockStore = configureStore([]);

describe('user action', () => {
  let _store;
  before(() => {
    _store = mockStore({})
  });
  afterEach(() => {
    _store.clearActions();
  });

  describe('function setUserInfo', () => {
    it('should return right action', () => {
      const userInfo = {
        name: '123',
        sex: true
      };
      _store.dispatch(actions.setUserInfo(userInfo));
      const action = _store.getActions()[0];

      expect(action).to.deep.equal({
        type: actionsTypes.SET_USER_INFO,
        payload: userInfo
      });
    });
  });

  describe('function fetchUser', () => {
    it('should return right action', () => {
      _store.dispatch(actions.fetchUser());
      const action = _store.getActions()[0];
      expect(action).to.deep.equal({
        type: actionsTypes.FETCH_USER_INFO
      });
    });
  });

  describe('function loginOut', () => {
    it('should return right action', ()=>{
      _store.dispatch(actions.loginOut());
      const action = _store.getActions()[0];
      expect(action).to.deep.equal({
        type: actionsTypes.LOGIN_OUT
      });
    });
  });

  describe('function loginOutFulfilled',()=>{
    it('should return right action', () => {
      const loginOutState = true;
      _store.dispatch(actions.loginOutFulfilled(loginOutState));
      const action = _store.getActions()[0];
      expect(action).to.deep.equal({
        type: actionsTypes.LOGIN_OUT_FULFILLED,
        payload: loginOutState
      });
    });
  });


});
