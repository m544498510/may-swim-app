/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component} from 'react';

import Main from '../../common/Main';

import StrokeSelectContainer from 'mainApp/views/swimInput/StrokeSelectContainer';

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
        <StrokeSelectContainer strokeList={[{strokeName:'1',strokeId:1},{strokeName:'4',strokeId:4},{strokeName:'3',strokeId:3},{strokeName:'2',strokeId:2}]}/>
        </Main>
    )
  }

}
