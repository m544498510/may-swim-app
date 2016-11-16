/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Checkbox from './index';


describe('checkbox test', () => {
  it('renders as a <div>', () => {
    const wrapper = shallow(<Checkbox />);
    expect(wrapper.type()).to.eql('span');
  });
});
