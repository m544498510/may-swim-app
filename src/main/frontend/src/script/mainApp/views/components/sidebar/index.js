/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React, {Component, PropTypes} from 'react';

import SidebarItem from './SidebarItem';
import itemConfig from './itemConfig';


export default class Sidebar extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    expandSidebar: PropTypes.func.isRequired
  };

  constructor(props,content){
    super(props,content);

    this.renderItems = ::this.renderItems;
    this.expandSidebar = ::this.expandSidebar;
  }

  expandSidebar(){
    this.props.expandSidebar(true);
  }

  renderItems(){
    const path = this.props.path;

    return (
      <ul>
        {itemConfig.map((message) => (
          <Item key={message} message={message} />
        ))}
      </ul>


    );


  }


  render() {
    return (
      <aside>
        <div className="sidebar_box">
          <ul className="sidebar_main_list">
            <SidebarItem
              dName="home"
              icon="fa-home"
              link="/"
            />
            <SidebarItem
              dName="设置"
              showChildren={setting}
              icon="fa-home"
              onClick={this.expandSidebar}
            >
              <SidebarItem
                dName="home1"
                link="/setting"
              />
              <SidebarItem
                dName="home2"
                link="/setting"
              />
            </SidebarItem>
            <SidebarItem
              dName="test"
              icon="fa-home"
              showChildren={test}
              onClick={this.expandSidebar}
            >
              <SidebarItem
                dName="asda"
                link="/test"
              />
              <SidebarItem
                dName="asda"
                link="/test"
              />
            </SidebarItem>
          </ul>
        </div>
        <div className="sidebar_hover_elem"></div>
      </aside>
    )
  }


};
