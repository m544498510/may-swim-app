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
            isActive={true}
            title="step1"
            validateFunc={()=>{}}
          />
          <WizardStep
            isActive={false}
            title="step2"
            validateFunc={()=>{}}
          />
          <WizardStep
            isActive={false}
            title="step3"
            validateFunc={()=>{}}
          />
        </Wizard>
      );
    });
    it('should render a wizard', () => {
      console.log(_wrapper);
      console.log(_wrapper.type);
    });
  });
});
