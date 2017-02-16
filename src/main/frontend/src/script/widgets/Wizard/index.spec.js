/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React from 'react';
import {shallow,mount} from 'enzyme';

import Wizard from './index';

describe('widget Wizard', () => {
  describe('(render)', () => {
    let _wrapper;
    before(() => {
      _wrapper = shallow(
        <Wizard>
          <TestTag
            title="title1"
          />
          <TestTag/>
          <TestTag
            title="title3"
          />
        </Wizard>
      );
    });
    it('should render a div', () => {
      expect(_wrapper.type()).to.equals('div');
    });
    it('should render with the class "wizard"', () => {
      expect(_wrapper.hasClass('wizard')).to.be.true;
    });
    it('should render a nav', () => {
      const nav = _wrapper.find('.wizard-nav');
      expect(nav).to.be.lengthOf(1);
    });
    it('should render nav item with children prop', () => {
      const navItems = _wrapper.find('.wizard-nav-item');
      expect(navItems).to.be.lengthOf(3);
      expect(navItems.at(0).text()).to.equals('title1');
      expect(navItems.at(1).text()).to.equals('step 2');
      expect(navItems.at(2).text()).to.equals('title3');
    });
    it('should render first nav item with the active class by default', () => {
      const firstNavItem = _wrapper.find('.wizard-nav-item').first();
      expect(firstNavItem.hasClass('active')).to.be.true;
    });
    it('should render a progress', () => {
      expect(_wrapper.find('.progress')).to.be.lengthOf(1);
    });
    it('should render a progress bar with 33% width by 3 children', () => {
      const progressBar = _wrapper.find('.progress-bar');
      expect(progressBar.prop('style').width).to.equals('33%');
    });
    it('should render a step box', () => {
      const stepBox = _wrapper.find('.wizard-step');
      expect(stepBox).to.be.lengthOf(1);
    });
    it('should render the first child in the step box', ()=>{
      const stepBox = _wrapper.find('.wizard-step');
      expect(stepBox.find('TestTag')).to.be.lengthOf(1);
    })
  });

  describe('(nav item click evt)', () => {
    let _wrapper;
    beforeEach(() => {
      _wrapper = mount(
        <Wizard>
          <TestTag
            title="title1"
          />
          <TestTag
            title="title2"
          />
          <TestTag />
        </Wizard>
      );
    });
    it('should change nav item active class', () => {
      const targetNavItem = _wrapper.find('.wizard-nav-item').at(1);
      expect(targetNavItem.hasClass('active')).to.be.false;
      targetNavItem.simulate('click');
      const newTargetNavItem = _wrapper.find('.wizard-nav-item').at(1);
      expect(newTargetNavItem.hasClass('active')).to.be.true;
    });
    it('should change progress bar width',()=>{
      const targetNavItem = _wrapper.find('.wizard-nav-item').at(1);
      targetNavItem.simulate('click');
      const progress = _wrapper.find('.progress-bar');
      expect(progress.prop('style').width).to.equals('66%');
    });
    it('should change step child when click nav item', () => {
      const targetNavItem = _wrapper.find('.wizard-nav-item').at(1);
      let step = _wrapper.find('TestTag').node;
      expect(step.props.title).to.equals('title1');
      targetNavItem.simulate('click');
      step = _wrapper.find('TestTag').node;
      expect(step.props.title).to.equals('title2');
    });
  });

});

class TestTag extends React.Component{

  constructor(props){
    super(props);
  }
  validateFunc(){
    return true;
  }

  render(){
    return <div>test</div>
  }
}
