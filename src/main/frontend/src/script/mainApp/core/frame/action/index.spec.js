/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import configureStore from 'redux-mock-store';

import * as actions from './index';
import types from './types';

const mockStore = configureStore([]);

describe('frame action: ', () => {
  let _store;
  before(() => {
    _store = mockStore({});
  });

  afterEach(()=>{
    _store.clearActions();
  });


  describe('changeSidebarState', () => {
    it('能正常传递参数isCollapsed', () => {
      _store.dispatch(actions.changeSidebarState(true));
      _store.dispatch(actions.changeSidebarState(false));

      const actionArr = _store.getActions();

      expect(actionArr[0]).to.deep.equal({
        type: types.CHANGE_SIDEBAR_STATE,
        payload: true
      });

      expect(actionArr[1].payload).to.be.false;
    })
  });
});
