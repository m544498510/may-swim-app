/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React, {Component} from "react";

export default class SidebarItem extends Component {
  constructor(props, context) {
    super(props, context);

    this.renderChildren = ::this.renderChildren;

  }


  renderChildren() {
    const {children} = this.props;

    return React.Children.map(children,child=>{

    })
  }

  render() {
    return (
      <li className="sidebar_item">
        {this.renderChildren()}

      </li>
    )
  }

}
