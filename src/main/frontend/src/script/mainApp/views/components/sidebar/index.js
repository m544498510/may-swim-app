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
              dName="asda"
              showChild={false}
              icon="fa-home"
              link="/home"
            />

            <SidebarItem
              dName="asda"
              showChild={false}
              icon="fa-home"
            />
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
