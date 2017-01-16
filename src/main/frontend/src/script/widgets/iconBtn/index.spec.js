/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React from 'react';
import {shallow} from 'enzyme';

import IconBtn from './index';

describe('widget IconBtn', () => {
  describe('(render)', () => {
    it('should render a IconBtn and add provided #props.className', () => {
      const wrapper = shallow(<IconBtn className="test"/>);
      expect(wrapper).to.lengthOf(1);
      expect(wrapper.hasClass('test')).to.true;
    });

    it('should have a Icon and this icon should add provided #props.iconClassName', () => {
      const wrapper = shallow(<IconBtn iconClassName="test"/>);
      const icon = wrapper.find('icon');
      expect(icon).to.lengthOf(1);
      expect(icon.hasClass('test')).to.true;
    });
  });

  describe('(event)', () => {
    it('should set onClick with provided #props.onclick', () => {
      const handleClick = sinon.spy();
      const wrapper = shallow(<IconBtn onClick={handleClick}/>);
      wrapper.simulate('click');
      expect(handleClick.calledOnce).to.true;
    });
  });
});
