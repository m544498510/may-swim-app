/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import actionTypes from '../action-types';
import reducer from './index';

describe('User reducer', ()=>{

  describe('init', ()=>{
    const state = reducer(undefined,{});

    const trueState = {
      userName: '',
      email: '',
      emailErrorInfo: '',
      password: '',
      secondPsd: '',
      secondPsdErrorInfo: '',

      isSignUpFulfilled: false
    };
    expect(state.toJS()).to.deep.equal(trueState)
  });

  describe('SIGN_UP_FULFILLED',()=>{
    it('should set UserState.isSignUpFulfilled to true',()=>{
      const state = reducer(undefined,{
        type: actionTypes.SIGN_UP_FULFILLED,
        payload:{}
      });
      expect(state.isSignUpFulfilled).to.be.true;
    });
  });

  describe('CHECK_USER_NAME_FULFILLED',()=>{
    it('should set userName with provided value ',()=>{
      const state = reducer(undefined,{
        type: actionTypes.CHECK_USER_NAME_FULFILLED,
        payload: {
          userName: '123'
        }
      });
      expect(state.userName).to.be.equal('123');
    });
  });

  describe('CHECK_EMAIL_FULFILLED',()=>{
    it('should set email and emailErrorInfo with provided value',()=>{
      const state = reducer(undefined,{
        type: actionTypes.CHECK_EMAIL_FULFILLED,
        payload: {
          email: '213',
          emailErrorInfo: '111'
        }
      });
      expect(state.email).to.be.equal('213');
      expect(state.emailErrorInfo).to.be.equal('111');
    });
  });

  describe('PASSWORD_CHANGE', ()=>{
    it('should set password with provided value', ()=>{
      const state = reducer(undefined,{
        type: actionTypes.PASSWORD_CHANGE,
        payload: {
          password: '123'
        }
      });
      expect(state.password).to.be.equal('123');
    });
  });

  describe('SECOND_PASSWORD_CHANGE', ()=>{
    it('should set secondPsd with provided value', ()=>{
      const state = reducer(undefined,{
        type: actionTypes.SECOND_PASSWORD_CHANGE,
        payload: {
          secondPsd: '123',
          secondPsdErrorInfo: '321'
        }
      });
      expect(state.secondPsd).to.be.equal('123');
      expect(state.secondPsdErrorInfo).to.be.equal('321');
    });
  })
});
