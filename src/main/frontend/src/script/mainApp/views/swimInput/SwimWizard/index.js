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
import BaseInfoContainer from '../BaseInfoContainer';
import MainInfoContainer from '../MainInfoContainer';

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
          <Wizard completeFunc={() => {
            console.log('complete')
          }}>
            <BaseInfoContainer
              title="基本信息"
            />
            <MainInfoContainer
              title="训练信息"
            />
            <MainInfoContainer
              title="完成"
            />
          </Wizard>
        </PanelContainer>
      </Main>
    );
  }
}


