/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React, { Component } from "react";
import PropTypes from 'prop-types';

import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "widgets/Dropdown";
import {Link} from "react-router";

export default class UserProfile extends Component {
  static propTypes = {
    userPic: PropTypes.string.isRequired,
    loginOut: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="header_userProfile_box">
        <Dropdown id="userProfileDropdown">
          <DropdownToggle tag="a">
            <img className="user_profile_pic"
                 src={this.props.userPic}
                 alt=""/>
          </DropdownToggle>
          <DropdownMenu className="user_profile_dropdown_menu" right>
            <DropdownItem tag="div">
              <Link to="/user/profile">
                <icon className="fa fa-user"/>
                我的信息
              </Link>
            </DropdownItem>
            <DropdownItem tag="div">
              <Link to="/user/profile">
                <icon className="fa fa-cog"/>
                设置
              </Link>
            </DropdownItem>
            <DropdownItem className="sign_out" tag="div" onClick={this.props.loginOut}>
              <icon className="fa fa-power-off"/>
              退出
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

    );
  }

}
