/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component} from 'react';

import Main from '../../common/Main';

export default class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
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
