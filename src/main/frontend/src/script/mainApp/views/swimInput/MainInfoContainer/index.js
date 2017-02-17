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
        <BootstrapTable data={products} striped={true} hover={true}>
          <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField="name" dataSort={true}>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
function priceFormatter(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}
