/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import {Link} from 'react-router';

import SidebarItem from './SidebarItem';

describe('component SidebarItem', () => {
  it('should render a li', () => {
    const wrapper = shallow(
      <SidebarItem
        dName="test_name"
        icon="test_icon"
        link="/test"
        className="test_className"
      />
    );
    expect(wrapper.type()).to.equal('li');
  });

  describe('has a normal item child which', () => {
    let _wrapper, _itemWrapper;
    before(() => {
      _wrapper = shallow(
        <SidebarItem
          dName="test_name"
          icon="test_icon"
          className="test_className"
        />
      );
      _itemWrapper = _wrapper.find('.sidebar_item_link');
    });
    it('should set type=div', () => {
      expect(_itemWrapper.type()).to.equal('div');
    });
    it('should add provided #props.className', () => {
      expect(_itemWrapper.hasClass('test_className')).to.be.true;
    });
    it('should render with text node', () => {
      expect(_itemWrapper.find('span').text()).to.equal('test_name');
    });
    it('should render with provided #props.icon', () => {
      expect(_itemWrapper.find('.sidebar_item_icon').hasClass('test_icon')).to.be.true;
    });

  });

  describe('has a link item child which', () => {
    let _wrapper, _itemWrapper;
    before(() => {
      _wrapper = shallow(
        <SidebarItem
          dName="test_name"
          link="/test"
        />
      );
      _itemWrapper = _wrapper.find('.sidebar_item_link');
    });
    it('should set type=Link', () => {
      expect(_itemWrapper.type()).to.equal(Link);
    });
    it('should set "to" to #props.link', () => {
      expect(_itemWrapper.prop('to')).to.equal('/test');
    });
  });

  describe('which has children', () => {
    let _wrapper, _childBox, _handleClick;
    before(() => {
      _handleClick = sinon.spy();
      _wrapper = shallow(
        <SidebarItem dName="test" onClick={_handleClick}>
          <SidebarItem dName="test1"/>
          <SidebarItem dName="test2"/>
          <SidebarItem dName="test3"/>
        </SidebarItem>
      );
      _childBox = _wrapper.find('.sidebar_item_sublist');
    });

    it('should has 3 children', () => {
      expect(_childBox.find('SidebarItem')).to.lengthOf(3);
    });

    it('should has item which has dropdown icon', () => {
      const itemWrapper = _wrapper.find('.sidebar_item_link');
      expect(itemWrapper.find('.sidebar_dropdown_icon')).to.lengthOf(1);
    });

    it('should show sublist when #props.showChildren is true', () => {
      const wrapper = shallow(
        <SidebarItem dName="test" showChildren={true}/>
      );
      expect(wrapper.hasClass('expanded')).to.be.true;
    });

    it('should set #props.onClick', () => {
      _wrapper.find('.sidebar_item_link').simulate('click');
      expect(_handleClick.calledOnce).to.be.true;
    });

    it('should change expand state when click the item', () => {
      const firstState = _wrapper.hasClass('expanded');
      _wrapper.find('.sidebar_item_link').simulate('click');
      expect(_wrapper.hasClass('expanded')).to.not.equal(firstState);
    });
  });
});
