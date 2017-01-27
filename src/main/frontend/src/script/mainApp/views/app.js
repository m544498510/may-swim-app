/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import HeaderContainer from './header/HeaderContainer';
import SidebarContainer from './containers/sidebar';

import * as frame from '../core/frame';

class App extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  static propTypes = {
    children: PropTypes.object.isRequired,
    changeSidebarState:  PropTypes.func.isRequired,
    sidebarState: PropTypes.bool.isRequired
  };

  constructor(props,context){
    super(props, context);

    window.addEventListener('resize', () => {
      if(window.innerWidth<1280){
        props.changeSidebarState(false);
      }else{
        props.changeSidebarState(true);
      }
    });

  }

  render() {
    const sideCollapsedClass = this.props.sidebarState?'':'menu-collapsed';
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
  changeSidebarState: frame.actions.changeSidebarState
};

export default connect(mapPropsToProps,mapDispatchToProps)(App);
