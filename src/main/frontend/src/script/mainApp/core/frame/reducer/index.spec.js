/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import reduce from './index';
import types from '../action/types';

describe('frame reduce', () => {
  describe('init', () => {
    it('should set the sidebarState to true', () => {
      const state = reduce(undefined, {});
      expect(state.get('sidebarState')).to.be.true;
    })
  });

  describe('type CHANGE_SIDEBAR_STATE', ()=>{
    it('should set sidebarState to specified value',()=>{
      let state = reduce(undefined,{
        type: types.CHANGE_SIDEBAR_STATE,
        payload: false
      });
      expect(state.get('sidebarState')).to.be.false;

      state = reduce(undefined,{
        type: types.CHANGE_SIDEBAR_STATE,
        payload: true
      });
      expect(state.get('sidebarState')).to.be.true;
    });
  });
  describe('type CHANGE_HTML_SIZE',()=>{
    it('should set html size width specified value',()=>{
      const state = reduce(undefined,{
        type: types.CHANGE_HTML_SIZE,
        payload:{
          width: 1,
          height: 1
        }
      });
      expect(state.get('htmlWidth')).to.equals(1);
      expect(state.get('htmlHeight')).to.equals(1);
    });
  });


});
