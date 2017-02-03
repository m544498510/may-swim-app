/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React from 'react';

import Wizard from './index';
import WizardStep from './WizardStep';

describe('widget Wizard', () => {
  describe('(render)', () => {
    let _wrapper;
    before(() => {
      _wrapper = shallow(
        <Wizard>
          <WizardStep
            title="step1"
            validateFunc={()=>true}
          />
          <WizardStep
            title="step2"
            validateFunc={()=>true}
          />
          <WizardStep
            title="step3"
            validateFunc={()=>true}
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
    it('should render nav item with children prop',()=>{
      const navItems = _wrapper.find('.wizard-nav-item');
      expect(navItems).to.be.lengthOf(3);
      expect(navItems.at(0).text()).to.equals('step1');
      expect(navItems.at(1).text()).to.equals('step2');
      expect(navItems.at(2).text()).to.equals('step3');
    });
    it('should render a progress', () => {
      expect(_wrapper.find('.progress')).to.be.lengthOf(1);
    });
    it('should render a progress with 33% width by default', () => {
      expect(_wrapper.find('.progress-bar')).to.be.not.null;
      console.log(_wrapper.find('.progress-bar').prop('style'));
    });
    it('should render WizardStep children', () => {
      const children = _wrapper.find('.wizard-steps').children();
      expect(children).to.be.lengthOf(3);
    });

  });
});
