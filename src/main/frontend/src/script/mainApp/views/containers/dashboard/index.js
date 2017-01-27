/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component} from 'react';

import Main from '../../common/Main';

export default class DashboardContainer extends Component {

  render() {
    const breadcrumbs = [{name: 'home'}];
    return (
      <Main
        title="Dashboard"
        breadcrumb={breadcrumbs}>
        {this.props.children ? this.props.children : ''}
      </Main>
    )
  }

}
