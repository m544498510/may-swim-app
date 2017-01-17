/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component, PropTypes} from 'react';

import SidebarItem from './SidebarItem';
import itemConfig from './itemConfig';


export default class Sidebar extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    expandSidebar: PropTypes.func.isRequired
  };

  constructor(props, content) {
    super(props, content);

    this.renderItems = ::this.renderItems;
    this.expandSidebar = ::this.expandSidebar;
  }

  expandSidebar() {
    this.props.expandSidebar(true);
  }

  renderItems() {
    const href = this.props.path;

    return (
      <ul className="sidebar_main_list">
        {itemConfig.map((item, i) => {
          const {path, children} = item,
            hasChild = (children && children.length > 0),
            link = !hasChild ? path : null,
            showChildren = hasChild && href.indexOf(path) === 0,
            onClick = hasChild ? this.expandSidebar : null,
            selectedClass = !hasChild ? getSelectedClass(href,path):'';

          return (
            <SidebarItem
              dName={item.dName}
              className={selectedClass}
              showChildren={showChildren}
              icon={item.icon}
              link={link}
              onClick={onClick}
              key={'sidebarItem'+i}
            >
              {hasChild && children.map((subItem, j) => {
                const subPath = path + subItem.path,
                  selectedClass = getSelectedClass(href,subPath);
                return (
                  <SidebarItem
                    className={selectedClass}
                    dName={subItem.dName}
                    link={subPath}
                    key={'sidebarSubItem'+i+j}
                  />
                )
              })}
            </SidebarItem>
          );

        })}
      </ul>
    );
  }


  render() {
    return (
      <aside>
        <div className="sidebar_box">
          {this.renderItems()}
        </div>
        <div className="sidebar_hover_elem"></div>
      </aside>
    )
  }


};

function getSelectedClass(href, path) {
  return href.indexOf(path) === 0 ? 'selected' : '';
}
