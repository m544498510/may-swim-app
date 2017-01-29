/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import configureStore from 'redux-mock-store';
import {Map} from 'immutable';
import thunk from 'redux-thunk';

import * as actions from './index';
import types from './types';
import {getSidebarState} from '../selector';

const mockStore = configureStore([thunk]);

describe('frame action: ', () => {
  let _store;
  before(() => {
    _store = mockStore({
      frame: Map({
        sidebarState: true
      })
    });
  });

  afterEach(() => {
    _store.clearActions();
  });


  describe('changeSidebarState', () => {
    it('should pass parameter isCollapsed', () => {
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

  describe('reverseSidebarState', () => {
    it('should reverse sidebarState from state', () => {
      const firstState = getSidebarState(_store.getState());
      _store.dispatch(actions.reverseSidebarState());
      const actionArr = _store.getActions();
      expect(actionArr[0]).to.deep.equal({
        type: types.CHANGE_SIDEBAR_STATE,
        payload: !firstState
      });
    });
  });

  describe('changeHtmlSize',()=>{
    it('should change html size',()=>{
      _store.dispatch(actions.changeHtmlSize({width:1, height:1}));
      const actionArr = _store.getActions();
      expect(actionArr[0]).to.deep.equal({
        type: types.CHANGE_HTML_SIZE,
        payload:{
          width: 1,
          height: 1
        }
      })
    })

  })
});
