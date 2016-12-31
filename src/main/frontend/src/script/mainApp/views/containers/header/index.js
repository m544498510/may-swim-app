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

class HeaderContainer extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    loginOut: PropTypes.func.isRequired,
    fetchUser: PropTypes.func.isRequired,
    loginOutState: PropTypes.bool.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.props.fetchUser();
  }


  render() {
    if (this.props.loginOutState) {
      location.href = '/userApp'
    }

    return <Header
      userPic={this.props.user.pic}
      loginOut={this.props.loginOut}
    />
  }
}

const mapStateToProps = createSelector(
  user.selectors.getUser,
  user.selectors.getLoginOutState,
  (user, loginOutState)=> ({
    user, loginOutState
  })
);

const mapDispatchToProps = {
  loginOut: user.actions.loginOut,
  fetchUser: user.actions.fetchUser
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
