/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import React, {Component} from 'react';
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';

export default class MainInfoContainer extends Component {
  render() {
    const products = [{
      id: 1,
      name: "Item name 1",
      price: 100
    }, {
      id: 2,
      name: "Item name 2",
      price: 100
    }];

    return (
      <div className="swim-step">
        <BootstrapTable data={products} hover={true} cellEdit={ cellEditProp }>
          <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>序号</TableHeaderColumn>
          <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
  beforeSaveCell: (a,b)=>{
    console.log(a);
  },
  afterSaveCell: (a)=>{
    console.log(a)
  }
};
