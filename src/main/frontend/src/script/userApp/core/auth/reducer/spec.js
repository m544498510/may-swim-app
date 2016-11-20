/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import actions from '../actions';

import reducer from './index';

describe('Auth reducer', ()=> {
  describe('init auth', () => {
    it('should set the AuthState.signInFulfilled and the AuthState.signInRejected to false', ()=>{
      const state = reducer(undefined,{});

      expect(state.signInFulfilled).to.be.false;
      expect(state.signInRejected).to.be.false;
    });
  });

  describe('SIGN_IN_FULFILLED', ()=>{
    it('should set the AuthState.signInFulfilled to true and set the AuthState.signInRejected to false', ()=>{
      const state = reducer(undefined,{
        type: actions.SIGN_IN_FULFILLED,
        payload: {}
      });
      expect(state.signInFulfilled).to.be.true;
      expect(state.signInRejected).to.be.false;
    });
  });

  describe('SIGN_IN_REJECTED', ()=>{
    it('should set the AuthState.signInFulfilled to false and set the AuthState.signInRejected to true', ()=>{
      const state = reducer(undefined,{
        type: actions.SIGN_IN_REJECTED,
        payload: {}
      });
      expect(state.signInFulfilled).to.be.false;
      expect(state.signInRejected).to.be.true;
    });
  });


});
