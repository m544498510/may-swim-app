/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import HeaderContainer from './header/HeaderContainer';
import SidebarContainer from './sideMenu/SidebarContainer';

import * as frame from '../core/frame';
import {getHtmlSize} from 'utils/htmlTool';

class App extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  static propTypes = {
    children: PropTypes.object.isRequired,
    changeSidebarState: PropTypes.func.isRequired,
    sidebarState: PropTypes.bool.isRequired,
    changeHtmlSize: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);

    //初始化html size
    props.changeHtmlSize(getHtmlSize());
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1280) {
        props.changeSidebarState(false);
      } else {
        props.changeSidebarState(true);
      }
      props.changeHtmlSize(getHtmlSize());
    });

  }

  render() {
    const sideCollapsedClass = this.props.sidebarState ? '' : 'menu-collapsed';
    return (
      <app className={sideCollapsedClass}>
        <HeaderContainer />
        <SidebarContainer />
        {/* main container */}
        {this.props.children}
        <footer />
      </app>
    );
  }
}

const mapPropsToProps = createSelector(
  frame.selectors.getSidebarState,
  (sidebarState) => ({
    sidebarState
  })
);

const mapDispatchToProps = {
  changeSidebarState: frame.actions.changeSidebarState,
  changeHtmlSize: frame.actions.changeHtmlSize
};

export default connect(mapPropsToProps, mapDispatchToProps)(App);
