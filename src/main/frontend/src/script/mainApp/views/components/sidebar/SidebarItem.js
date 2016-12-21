/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React, {Component, PropTypes} from "react";
import {Link} from "react-router";

export default class SidebarItem extends Component {
  static propTypes = {
    icon: PropTypes.string,
    dName: PropTypes.string.isRequired,
    link: PropTypes.string,
    showChild: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      expand: props.showChild
    };

    this.renderItem = ::this.renderItem;
  }


  renderItem() {
    const {link, dName, icon} = this.props;

    const iconTmp = <icon className={'fa '+icon}  />;
    const dNameTmp = <span >{dName}</span>;
    let dropdownIcon = '';
    if(this.props.children && this.props.children.length > 0){
      dropdownIcon = <icon className="fa fa-angle-down" />
    }


    const iconClass = 'fa '+icon;

    let Tag;
    if(link){
      Tag = Link;
    }else{
      Tag = 'div';
    }


    let item = (
      <Tag to={link} className="sidebar_item_link">
        {iconTmp}
        {dNameTmp}
        {dropdownIcon}
      </Tag>
    );
    return item;

  }

  render() {
    return (
      <li className="sidebar_item">
        {this.renderItem()}
        <ul className="sidebar_item_sublist">
          {this.props.children}
        </ul>
      </li>
    )
  }

}
