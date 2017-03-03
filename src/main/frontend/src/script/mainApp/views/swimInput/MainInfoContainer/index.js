/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import React, {Component} from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import StrokeSelectContainer from "../StrokeSelectContainer";

const cellEditProps = {
  mode: 'click',
  blurToSave: true,
  beforeSaveCell: (a, b) => {
    console.log(a);
  },
  afterSaveCell: (a) => {
    console.log(a)
  }
};

const products = [{
  setId: -1,                 //id
  sessionId: -1,            //一套训练id
  strokeId: 1,              //泳姿id
  strokeName: '蛙泳',
  setIndex: 1,             //分组序号（为0时，是当次一套训练统计总数据；大于0，是分组数据）
  setLap: 0,                //往返数
  setStrokeNum: 0,         //挥臂次数
  setDistance: 0,         //距离
  setCalorie: 0,          //消耗卡路里
  setEfficiency: 0,       //效率
  setTrainingTime: 0,     //训练时间（单位为秒）
  setRestTime: 0,         //休息时间（单位为秒）
  setTime: 0,             //总时间（单位为秒）
  setSpeed: 0             //速度
},
  {
    setId: -1,                 //id
    sessionId: -1,            //一套训练id
    strokeId: 2,              //泳姿id
    strokeName: '自由泳',
    setIndex: 2,             //分组序号（为0时，是当次一套训练统计总数据；大于0，是分组数据）
    setLap: 0,                //往返数
    setStrokeNum: 0,         //挥臂次数
    setDistance: 0,         //距离
    setCalorie: 0,          //消耗卡路里
    setEfficiency: 0,       //效率
    setTrainingTime: 0,     //训练时间（单位为秒）
    setRestTime: 0,         //休息时间（单位为秒）
    setTime: 0,             //总时间（单位为秒）
    setSpeed: 0             //速度
  },{
    setId: -1,                 //id
    sessionId: -1,            //一套训练id
    strokeId: 2,              //泳姿id
    strokeName: '自由泳',
    setIndex: 2,             //分组序号（为0时，是当次一套训练统计总数据；大于0，是分组数据）
    setLap: 0,                //往返数
    setStrokeNum: 0,         //挥臂次数
    setDistance: 0,         //距离
    setCalorie: 0,          //消耗卡路里
    setEfficiency: 0,       //效率
    setTrainingTime: 0,     //训练时间（单位为秒）
    setRestTime: 0,         //休息时间（单位为秒）
    setTime: 0,             //总时间（单位为秒）
    setSpeed: 0             //速度
  },{
    setId: -1,                 //id
    sessionId: -1,            //一套训练id
    strokeId: 2,              //泳姿id
    strokeName: '自由泳',
    setIndex: 2,             //分组序号（为0时，是当次一套训练统计总数据；大于0，是分组数据）
    setLap: 0,                //往返数
    setStrokeNum: 0,         //挥臂次数
    setDistance: 0,         //距离
    setCalorie: 0,          //消耗卡路里
    setEfficiency: 0,       //效率
    setTrainingTime: 0,     //训练时间（单位为秒）
    setRestTime: 0,         //休息时间（单位为秒）
    setTime: 0,             //总时间（单位为秒）
    setSpeed: 0             //速度
  },{
    setId: -1,                 //id
    sessionId: -1,            //一套训练id
    strokeId: 2,              //泳姿id
    strokeName: '自由泳',
    setIndex: 2,             //分组序号（为0时，是当次一套训练统计总数据；大于0，是分组数据）
    setLap: 0,                //往返数
    setStrokeNum: 0,         //挥臂次数
    setDistance: 0,         //距离
    setCalorie: 0,          //消耗卡路里
    setEfficiency: 0,       //效率
    setTrainingTime: 0,     //训练时间（单位为秒）
    setRestTime: 0,         //休息时间（单位为秒）
    setTime: 0,             //总时间（单位为秒）
    setSpeed: 0             //速度
  }];

const createNameEditor = (onUpdate, props) => (
  <StrokeSelectContainer
    onUpdate={ onUpdate } {...props}/>
);


export default class MainInfoContainer extends Component {
  render() {

    return (
      <div className="swim-step">
        <BootstrapTable data={products} hover={true} cellEdit={ cellEditProps }>
          <TableHeaderColumn
            dataField="setIndex"
            isKey={true}
            dataAlign="center"
            dataSort={true}
          >
            序号
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="strokeName"
            dataFormat={(value)=>{return value.strokeDes}}
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



