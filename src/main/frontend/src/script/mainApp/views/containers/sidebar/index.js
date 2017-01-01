/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Sidebar from '../../components/sidebar';
import * as frame from '../../../core/frame';

class SidebarContainer extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    const path = this.context.router.location.pathname;
    return <Sidebar
      path={path}
      expandSidebar={this.props.expandSidebar}
    />
  }
}

const mapDispatchToProps = {
  expandSidebar: frame.actions.changeSidebarState
};

export default connect(null, mapDispatchToProps)(SidebarContainer);
