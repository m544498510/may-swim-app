/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';

import Main from '../../main';
import {paths} from '../../../routes';

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
        游泳信息录入
      </Main>
    );
  }
}
