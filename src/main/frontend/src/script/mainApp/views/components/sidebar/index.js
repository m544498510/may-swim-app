/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React, {Component, PropTypes} from 'react';

import SidebarItem from './SidebarItem';

export default class Sidebar extends Component {

  render() {
    return (
      <aside>
        <div className="sidebar_box">
          <ul className="sidebar_main_list">
            <SidebarItem
              dName="home"
              showChild={false}
              icon="fa-home"
              link="/home"
            />

            <SidebarItem
              dName="设置"
              showChild={false}
              icon="fa-home"
            >
              <SidebarItem
                dName="home1"
                showChild={false}
                link="/home"
              />
              <SidebarItem
                dName="home2"
                showChild={false}
                link="/home"
              />
            </SidebarItem>
            <SidebarItem
              dName="asda"
              showChild={false}
              icon="fa-home"
            >
              <SidebarItem
                dName="asda"
                showChild={false}
              />
              <SidebarItem
                dName="asda"
                showChild={false}
              />
            </SidebarItem>
          </ul>
        </div>
        <div className="sidebar_hover_elem"></div>
      </aside>
    )
  }


};
