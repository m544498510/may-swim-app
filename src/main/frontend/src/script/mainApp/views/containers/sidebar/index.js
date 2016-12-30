/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {createSelect} from 'reselect';


import Sidebar from '../../components/sidebar';

import obj,{routerSelector} from '../../../core/router';

console.log(obj);
console.log(routerSelector);

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

const mapStateToProps = createSelect(
  routerSelector.getPathName,
  {
    path
  }
);

export default connect(mapStateToProps,null)(SidebarContainer);
