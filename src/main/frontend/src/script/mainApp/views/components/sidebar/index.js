/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React, {Component, PropTypes} from 'react';

import SidebarItem from './SidebarItem';

export default class Sidebar extends Component {
  static props = {
    path: PropTypes.string.isRequired
  };

  calculationShowState(url){
    if(url){

    }
  }

  render() {
    const {home,setting} = calculationShowState();



    return (
      <aside>
        <div className="sidebar_box">
          <ul className="sidebar_main_list">
            <SidebarItem
              dName="home"
              icon="fa-home"
              link="/home"
            />
            <SidebarItem
              dName="设置"
              showChildren={true}
              icon="fa-home"
            >
              <SidebarItem
                dName="home1"
                link="/home"
              />
              <SidebarItem
                dName="home2"
                link="/home"
              />
            </SidebarItem>
            <SidebarItem
              dName="asda"
              icon="fa-home"
            >
              <SidebarItem
                dName="asda"
              />
              <SidebarItem
                dName="asda"
              />
            </SidebarItem>
          </ul>
        </div>
        <div className="sidebar_hover_elem"></div>
      </aside>
    )
  }


};
