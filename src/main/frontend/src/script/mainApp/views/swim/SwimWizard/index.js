/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';

import Main from '../../common/Main';
import PanelContainer from '../../common/PanelContainer';

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
          <div className="wizard">
            <nav className="wizard-nav">
              <div className="wizard-nav-item active">基本信息</div>
              <div className="wizard-nav-item">训练信息</div>
              <div className="wizard-nav-item">完成</div>
            </nav>
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '33%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="wizard-steps">
              <div className="wizard-step active" style={{height:'500px'}}></div>
              <div className="wizard-step"></div>
              <div className="wizard-step"></div>


            </div>
          </div>
        </PanelContainer>
      </Main>
    );
  }
}


