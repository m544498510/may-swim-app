/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import HeaderContainer from './containers/header';
import SidebarContainer from './containers/sidebar';

import * as frame from '../core/frame';

class App extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    const sideCollapsedClass = this.props.sidebarState?'':'menu-collapsed';
    return (
      <app className={sideCollapsedClass}>
        <HeaderContainer />
        <SidebarContainer />
        <main className="main-frame">{this.props.children}</main>
        <footer></footer>
      </app>
    );
  }
}

const mapPropsToState = createSelector(
  frame.selectors.getSidebarState,
  (sidebarState) => ({
    sidebarState
  })
);

export default connect(mapPropsToState,null)(App);
