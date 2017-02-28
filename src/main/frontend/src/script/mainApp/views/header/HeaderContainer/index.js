/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React, {PropTypes, Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router";
import IconBtn from "widgets/IconBtn";
import UserProfile from "../UserProfile";
import * as user from "mainApp/core/user";
import * as frame from "mainApp/core/frame";

export class HeaderContainer extends Component {
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

    const userPic = this.props.user.get('pic');

    return (
      <header>
        <Link className="header_logo" to="/">
          <span>May</span>'s sit
        </Link>
        <IconBtn
          className="header_menuCollapse_btn"
          iconClassName="fa-bars"
          onClick={this.props.reverseSidebarState}
        />
        <UserProfile
          userPic={userPic}
          loginOut={this.props.loginOut}
        />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: user.selectors.getUser(state),
  loginOutState: user.selectors.getLoginOutState(state)
});

const mapDispatchToProps = {
  loginOut: user.actions.loginOut,
  reverseSidebarState: frame.actions.reverseSidebarState
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
