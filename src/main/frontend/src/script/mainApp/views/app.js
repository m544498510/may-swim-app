/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React, { Component, PropTypes } from 'react';

import HeaderContainer from './containers/header';
import SidebarContainer from './containers/sidebar';

export default class App extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    return (
      <app>
        <HeaderContainer />
        <SidebarContainer />
        <main className="main-frame">{this.props.children}</main>
        <footer></footer>
      </app>
    );
  }
}
