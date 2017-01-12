/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import * as selector from './index';
import {Map} from 'immutable';

describe('frame selector', () => {
  const state = {
    frame: Map({
      sidebarState: false
    })
  };

  describe('function getFrame', () => {
    it('should return frame state', () => {
      const frameState = selector.getFrame(state);
      expect(frameState).to.deep.equal(state.frame);
    });
  });

  describe('function getSidebarState', () => {
    it('should return sidebarState', () => {
      const sidebarState = selector.getSidebarState(state);
      expect(sidebarState).to.be.false;
    });
  });

});
