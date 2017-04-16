/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React, { Component } from "react";
import PropTypes from 'prop-types';

import {connect} from "react-redux";
import HeaderContainer from "./header/HeaderContainer";
import SidebarContainer from "./sideMenu/SidebarContainer";
import * as frame from "../core/frame";
import {getHtmlSize} from "utils/htmlTool";

class App extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
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
    htmlSizeChange(props);
    window.addEventListener('resize', () => {
      htmlSizeChange(props);
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

function htmlSizeChange(props) {
  if (window.innerWidth < 1280) {
    props.changeSidebarState(false);
  } else {
    props.changeSidebarState(true);
  }
  props.changeHtmlSize(getHtmlSize());

}

const mapPropsToProps = (state) => ({
  sidebarState: frame.selectors.getSidebarState(state)
});

const mapDispatchToProps = {
  changeSidebarState: frame.actions.changeSidebarState,
  changeHtmlSize: frame.actions.changeHtmlSize
};

export default connect(mapPropsToProps, mapDispatchToProps)(App);
