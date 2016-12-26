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
    showChildren: PropTypes.bool
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      expanded: this.props.showChildren?'expanded':''
    };

    this.renderItem = ::this.renderItem;
    this.renderChildren = ::this.renderChildren;
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.showChildren != this.props.showChildren){
      this.setState({expnaded: })
    }
  }

  renderItem() {
    const {link, dName, icon, children} = this.props;

    const iconTmp = <icon className={'sidebar_item_icon fa ' + icon}/>;
    const dNameTmp = <span >{dName}</span>;



    let dropdownIcon;
    if (children && children.length > 0) {
      dropdownIcon = <icon className="sidebar_dropdown_icon fa fa-angle-down"/>
    }

    let Tag;
    if (link) {
      Tag = Link;
    } else {
      Tag = 'div';
    }

    return (
      <Tag to={link} className="sidebar_item_link">
        {iconTmp}
        {dNameTmp}
        {dropdownIcon}
      </Tag>
    );

  }

  renderChildren() {
    const {children} = this.props;
    if (children && children.length > 0) {
      return (
        <ul className="sidebar_item_sublist">
          {children}
        </ul>
      );
    } else {
      return '';
    }
  }

  render() {
    let showChildrenClass = '';
    if(this.props.showChildren){
      showChildrenClass = 'expanded';
    }

    return (
      <li className={`sidebar_item ${showChildrenClass}`}>
        {this.renderItem()}
        {this.renderChildren()}
      </li>
    )
  }

}

function get
