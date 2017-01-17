/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import actions from './index.js';
import actionTypes from '../action-types';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('User action', ()=> {
  let _store, _initialState;
  before(function () {
    _initialState = {
      user: {
        email: '123@qq.com',
        password: '123',
        secondPsd: '123'
      }
    };
    _store = mockStore(_initialState);
  });

  afterEach(function () {
    _store.clearActions();
  });
  describe('signUp', ()=> {
    it('should dispatch when email and password is validate', ()=> {
      _store.dispatch(actions.signUp());
      const actionArr = _store.getActions();

      const expectedPayload = {
        type: actionTypes.SIGN_UP,
        payload: _initialState.user
      };
      expect(actionArr).to.deep.equal([expectedPayload]);

    });

    it('should dispatch nothing when email is invalidate', ()=> {
      const store = mockStore({
        user: {
          email: '123',
          password: '123',
          secondPsd: '123'
        }
      });

      store.dispatch(actions.signUp());
      const actionArr = store.getActions();
      expect(actionArr).to.be.empty
    });

    it('should dispatch nothing when password is invalidate', ()=> {
      const store = mockStore({
        user: {
          email: '123',
          password: '123',
          secondPsd: '1234'
        }
      });

      store.dispatch(actions.signUp());
      const actionArr = store.getActions();
      expect(actionArr).to.be.empty
    })
  });

  describe('emailChange', ()=> {
    it('should dispatch null string emailErrorInfo with validate email', ()=> {
      _store.dispatch(actions.emailChange('123@qq.com'));
      const actionArr = _store.getActions();
      const expectedPayload = {
        type: actionTypes.CHECK_EMAIL_FULFILLED,
        payload: {
          email: '123@qq.com',
          emailErrorInfo: ''
        }
      };
      expect(actionArr).to.deep.equal([expectedPayload]);

    });

    it('should dispatch "邮箱格式不正确" emailErrorInfo with invalidate email', ()=> {
      _store.dispatch(actions.emailChange('123'));
      const actionArr = _store.getActions();

      const expectedPayload = {
        type: actionTypes.CHECK_EMAIL_FULFILLED,
        payload: {
          email: '123',
          emailErrorInfo: '邮箱格式不正确'
        }
      };
      expect(actionArr).to.deep.equal([expectedPayload]);

    });
  });


  describe('secondPsdChange', ()=> {
    it('should dispatch null string secondPsdErrorInfo when password is validate', ()=> {
      _store.dispatch(actions.secondPsdChange('123'));
      const actionArr = _store.getActions();

      const expectedPayload = {
        type: actionTypes.SECOND_PASSWORD_CHANGE,
        payload: {
          secondPsd: '123',
          secondPsdErrorInfo: ''
        }
      };
      expect(actionArr).to.deep.equal([expectedPayload]);

    });

    it('should dispatch "两次输入的密码不一致" secondPsdErrorInfo when password is invalidate', ()=> {
      _store.dispatch(actions.secondPsdChange('1234'));
      const actionArr = _store.getActions();

      const expectedPayload = {
        type: actionTypes.SECOND_PASSWORD_CHANGE,
        payload: {
          secondPsd: '1234',
          secondPsdErrorInfo: '两次输入的密码不一致'
        }
      };
      expect(actionArr).to.deep.equal([expectedPayload]);

    });

  });

});

