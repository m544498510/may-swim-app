/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import actions from './index';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('Auth action', ()=> {
  describe('signUp', ()=> {
    let store;
    beforeEach(function() {
      const initialState = {
        email: '123@qq.com',
        password: '123',
        secondPsd: '123'
      };
      const store = mockStore(initialState);

    });

    it('should dispatch when email and password is validate', ()=> {

      store.dispatch(actions.signUp);
      const actions = store.getActions();

      const expectedPayload = {
        type: actions.SIGN_IN,
        payload: initialState
      };
      expect(actions).to.be.equal([expectedPayload]);

    });

    it('should dispatch nothing when email or password is invalidate',()=>{


    });


  });


});

