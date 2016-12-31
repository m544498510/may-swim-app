/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

import Sidebar from '../../components/sidebar';

import {selector} from '../../../core/router';

class SidebarContainer extends Component{
  static propTypes = {
    path: PropTypes.string.isRequired
  };

  render(){
    return <Sidebar
      path={this.props.path}
    />
  }
}

const mapStateToProps = createSelector(
  selector.getPathName,
  path => ({path})
);

export default connect(mapStateToProps,null)(SidebarContainer);
