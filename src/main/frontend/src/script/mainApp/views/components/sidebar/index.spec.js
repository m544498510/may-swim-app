/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React from 'react';
import {shallow} from 'enzyme';

import Sidebar from './index';

describe('component sidebar', () => {
  it('should set selected to sidebar item with #props.path', () => {
    const wrapper = shallow(
      <Sidebar
        path="/home"
        expandSidebar={()=>{}}
      />
    );
    const homeItem = wrapper.find('SidebarItem').first();
    expect(homeItem.hasClass('selected')).to.be.true;

    const lastItem = wrapper.find('SidebarItem').last();
    expect(lastItem.hasClass('selected')).to.be.false;
  });

  it('should set expandSidebar to item which has children',()=>{
    const wrapper = shallow(
      <Sidebar
        path="/home"
        expandSidebar={()=>{}}
      />
    );
    const firstItem = wrapper.find('SidebarItem').first();
    const lastItem = wrapper.find('.sidebar_main_list').children().last();
    expect(firstItem.prop('onClick')).to.be.null;
    expect(typeof lastItem.prop('onClick')).to.equals('function');
  });
});
