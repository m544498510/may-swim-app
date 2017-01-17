/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import Header from '../../components/header';
import * as user  from '../../../core/user';
import * as frame from '../../../core/frame';

class HeaderContainer extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    loginOut: PropTypes.func.isRequired,
    loginOutState: PropTypes.bool.isRequired,
    reverseSidebarState: PropTypes.func.isRequired
  };

  render() {
    if (this.props.loginOutState) {
      location.href = '/userApp'
    }

    return <Header
      userPic={this.props.user.pic}
      loginOut={this.props.loginOut}
      reverseSidebarState={this.props.reverseSidebarState}
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
  reverseSidebarState: frame.actions.reverseSidebarState
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
