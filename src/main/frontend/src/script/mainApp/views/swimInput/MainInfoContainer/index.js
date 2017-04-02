/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React, {Component, PropTypes} from 'react';
import ImmutablePropTypes  from 'react-immutable-proptypes';
import {connect} from 'react-redux';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import StrokeSelectContainer from '../StrokeSelectContainer';

import * as newSession from 'mainApp/core/swim/newSession';


const cellEditProps = {
  mode: 'click',
  blurToSave: true,
  afterSaveCell: (a) => {
    console.log(a);
  },
};

const createNameEditor = (onUpdate, props) => (
  <StrokeSelectContainer
    onUpdate={ onUpdate } {...props}/>
);

export class MainInfoContainer extends Component {
  static  propTypes = {
    sets: ImmutablePropTypes.listOf(
      PropTypes.instanceOf(newSession.Set)
    ).isRequired
  };

  render() {
    const sets = this.props.sets.toArray();

    return (
      <div className="swim-table-step">
        <BootstrapTable data={sets} hover={true}
                        cellEdit={ cellEditProps }>
          <TableHeaderColumn
            dataField="setIndex"
            isKey={true}
            dataAlign="center"
          />
          <TableHeaderColumn
            dataField="strokeDes"
            //dataFormat={(value)=>{return value.strokeDes}}
            customEditor={ {getElement: createNameEditor} }
          >
            泳姿
          </TableHeaderColumn>
          <TableHeaderColumn dataField="setLap">往返数</TableHeaderColumn>
          <TableHeaderColumn dataField="setStrokeNum">挥臂次数</TableHeaderColumn>
          <TableHeaderColumn dataField="setCalorie">消耗卡路里</TableHeaderColumn>
          <TableHeaderColumn dataField="setEfficiency">效率</TableHeaderColumn>
          <TableHeaderColumn dataField="setTrainingTime">时间</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sets: newSession.selectors.getSwimSets(state),
});

export default connect(mapStateToProps, null)(MainInfoContainer);



