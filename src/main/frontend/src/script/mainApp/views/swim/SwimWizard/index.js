/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component} from 'react';

import Main from '../../common/Main';
import PanelContainer from '../../common/PanelContainer';
import Wizard from 'widgets/Wizard';
import WizardStep from 'widgets/Wizard/WizardStep';

import {paths} from '../../routes';

export default class SwimWizard extends Component {
  render() {
    const breadcrumb = [
      {
        name: 'Home',
        link: paths.HOME
      },
      {
        name: '游泳信息录入'
      }
    ];


    return (
      <Main
        title="游泳信息录入"
        breadcrumb={breadcrumb}
      >
        <PanelContainer title="信息录入向导">
          <Wizard>
            <WizardStep
              title="基本信息"
              validateFunc={()=>true}
            >
              <div style={{height: '500px'}}>1</div>
            </WizardStep>
            <WizardStep
              title="训练信息"
              validateFunc={()=>true}
            >
              <div style={{height: '1500px'}}>2</div>
            </WizardStep>
            <WizardStep
              title="完成"
              validateFunc={()=>true}
            >
              <div style={{height: '500px'}}>3</div>
            </WizardStep>
          </Wizard>
        </PanelContainer>
      </Main>
    );
  }
}


