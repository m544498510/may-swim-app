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
    icon: PropTypes.string.isRequired,
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

    const iconClass = 'fa '+icon;

    let Tag;
    if(link){
      Tag = Link;
    }else{
      Tag = 'div';
    }


    let item = (
      <Tag to={link}>
        <icon className={iconClass} />
        <span >{dName}</span>
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
