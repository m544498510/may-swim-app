/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React from 'react';
import {shallow} from 'enzyme';

import Header from 'index';

describe('component header',()=>{
  describe('(render)',()=>{
    it('should render a header', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper);
    });
  })
});
