/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';
import {createSelector} from 'reselect';
import {connect} from 'react-redux';

import Sidebar from '../../components/sidebar';
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

const mapStateToProps = createSelector(
  router.selector.getPathName,
  (path)=>({
    path
  })
);

const mapDispatchToProps = {
  expandSidebar: frame.actions.changeSidebarState
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
