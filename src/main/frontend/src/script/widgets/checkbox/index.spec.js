/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './index';

describe('widgets', () => {
  describe('checkbox', () => {
    const onChange = sinon.spy();

    it('should render a checkbox with text node', () => {
      const wrapper = shallow(<Checkbox>check</Checkbox>);
      /*const box = wrapper.find('.may-checkbox div');
      expect(box.text()).toBe('check');*/
      const checkbox = wrapper.find('.may-checkbox');
      expect(checkbox.length).to.equal(1);
    });
  });

});
