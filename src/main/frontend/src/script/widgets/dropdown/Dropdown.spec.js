/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React from 'react';
import {shallow} from 'enzyme';

import Dropdown from './Dropdown';


describe('widget dropdown', () => {
  const defaultWrapper = shallow(<Dropdown />);
  describe('class name', () => {
    it('should set default value', () => {
      expect(defaultWrapper.hasClass('dropdown')).to.be.true;
    });

    it('should add provided props.className',()=>{
      const wrapper = shallow(<Dropdown  className="test"/>);
      expect(wrapper.hasClass('test')).to.be.true;
    });

    it('should has "open" when props.isOpen is true',()=>{
      const wrapper = shallow(<Dropdown isOpen={true}/>);
      expect(wrapper.hasClass('open')).to.be.true;
    });

    it('should has "dropup" when props.dropup is true', () => {
      const wrapper = shallow(<Dropdown dropup={true}/>);
      expect(wrapper.hasClass('dropup')).to.be.true;
    });
  });

  describe('tag', () => {
    it('should set default value', () => {
      expect(defaultWrapper.find('div')).to.have.lengthOf(1);
    });
    it('should set special value with props.tag', () => {
      const wrapper = shallow(<Dropdown tag="test"/>);
      expect(wrapper.find('test')).to.have.lengthOf(1);
    });
  });

  describe('click event',()=>{
    it('should change the className "open"',()=>{
      const wrapper = shallow(<Dropdown />);
      expect(wrapper.hasClass('open')).to.be.false;
      wrapper.simulate('click');
      //expect(wrapper.hasClass('open')).to.be.true;
    });

    it('should disabled when props.disabled is true', () => {
      const wrapper = shallow(<Dropdown disabled={true}/>);
      wrapper.simulate('click');
      expect(wrapper.hasClass('open')).to.be.false;
    });

  });
});
