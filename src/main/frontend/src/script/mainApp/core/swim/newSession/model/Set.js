/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import {Record} from "immutable";

export default class SwimSet extends Record({
  setIndex: 0,             //分组序号（为0时，是当次一套训练统计总数据；大于0，是分组数据）

  strokeId: 1,              //泳姿id
  setLap: 0,                //往返数
  setStrokeNum: 0,         //挥臂次数
  setCalorie: 0,          //消耗卡路里
  setEfficiency: 0,       //效率
  setTrainingTime: 0,     //训练时间（单位为秒）
}){}

