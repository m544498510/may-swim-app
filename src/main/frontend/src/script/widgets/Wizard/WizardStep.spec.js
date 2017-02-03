/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React from 'react';

import WizardStep from './WizardStep';

describe('widget WizardStep',()=>{
  let _wrapper;
  before(() => {
    _wrapper = shallow(
      <WizardStep
        title="test_title"
        isActive={false}
        validateFunc={()=>{}}
      >
        test_text
      </WizardStep>
    );
  });
  describe('(render)', () => {
    it('should render a div', () => {
      expect(_wrapper.type()).to.equals('div');
    });
    it('should render with the class "wizard-step"',()=>{
      expect(_wrapper.hasClass('wizard-step')).to.be.true;
    });
    it('should render children', () => {
      expect(_wrapper.text()).to.equals('test_text');
    });
    it('should not render with the class "active" by default', () => {
      expect(_wrapper.hasClass('active')).to.be.false;
    });
    it('should render with the class "active" when the prop "isActive" is truth', () => {
      const wrapper = shallow(
        <WizardStep
          title="test"
          validateFunc={()=>{}}
          isActive={true}
        />
      );
      expect(wrapper.hasClass('active')).to.be.true;
    });
  });
});
