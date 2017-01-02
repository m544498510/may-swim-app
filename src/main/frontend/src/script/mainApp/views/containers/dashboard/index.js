/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import React,{Component} from 'react';

export default class DashboardContainer extends Component{

  render(){
    return (
      <div>dashboard
        <div>
          {this.props.children?this.props.children:''}
        </div>
      </div>
    )
  }

}
