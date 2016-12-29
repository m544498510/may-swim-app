/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React, {Component, PropTypes} from 'react';

import SidebarItem from './SidebarItem';

export default class Sidebar extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired
  };

  constructor(props,content){
    super(props,content);

    this._calculationShowState = ::this._calculationShowState;

  }

  _calculationShowState(){
    const path = location.href;
    const items = ['setting','test'];
    const showState = {};

    for (var i = 0; i < items.length; i++) {
      const item = items[i];
      let flag = false;
      if(path.indexOf(`/${items[i]}`)>-1){
        flag = true;
      }
      showState[item] = flag;
    }
    return showState;
  }

  render() {
    const {setting,test} = this._calculationShowState();
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
              showChildren={setting}
              icon="fa-home"
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
