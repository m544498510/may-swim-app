/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';
import React, {Component, PropTypes} from "react";
import {DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";
import {Dropdown} from "widgets/dropdown";
import {Link} from "react-router";


export default class Header extends Component {
  static propsTypes = {
    userPic: PropTypes.string.isRequired,
    loginOut: PropTypes.func.isRequired
  };

  render() {
    return (
      <header>
        <Link className="header_logo" to="/">
          <span>May</span>'s sit
        </Link>
        <a className="header_menuCollapse_btn" href="javascript:;">
          <icon className="fa fa-bars"/>
        </a>
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
              <DropdownItem tag="div" onClick={this.props.loginOut}>
                <icon className="fa fa-power-off"/>
                退出
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </header>
    )
  };
}
