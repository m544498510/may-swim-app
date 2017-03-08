/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import {Record} from "immutable";
import moment from "moment";

export default class SwimSession extends Record({
  sessionDate: moment().format(),         //训练日期
  sessionDes: '',                          //训练描述
  poolLength: 50                           //泳池长度

}) {}
