/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Sidebar from '../Sidebar';
import * as frame from 'mainApp/core/frame';
import * as router from 'mainApp/core/router';

class SidebarContainer extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  static PropTypes = {
    path: PropTypes.string
  };

  render() {
    return <Sidebar
      path={this.props.path}
      expandSidebar={this.props.expandSidebar}
    />
  }
}

const mapStateToProps = (state) => ({
  path: router.selector.getPathName(state)
});

const mapDispatchToProps = {
  expandSidebar: frame.actions.changeSidebarState
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
