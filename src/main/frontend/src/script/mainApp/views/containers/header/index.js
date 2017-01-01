/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React, {PropTypes, Component} from "react";
import {connect} from "react-redux";
import {createSelector} from "reselect";
import Header from "../../components/header";
import * as user  from "../../../core/user";
import * as frame from '../../../core/frame';

class HeaderContainer extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    loginOut: PropTypes.func.isRequired,
    loginOutState: PropTypes.bool.isRequired,
  };

  render() {
    if (this.props.loginOutState) {
      location.href = '/userApp'
    }

    return <Header
      userPic={this.props.user.pic}
      loginOut={this.props.loginOut}
      fetchUser={this.props.fetchUser}
      sidebarState={this.props.sidebarState}
      changeSidebarState={this.props.changeSidebarState}
    />
  }
}

const mapStateToProps = createSelector(
  user.selectors.getUser,
  user.selectors.getLoginOutState,
  frame.selectors.getSidebarState,
  (user, loginOutState,sidebarState)=> ({
    user, loginOutState,sidebarState
  })
);

const mapDispatchToProps = {
  loginOut: user.actions.loginOut,
  fetchUser: user.actions.fetchUser,
  changeSidebarState: frame.actions.changeSidebarState
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
