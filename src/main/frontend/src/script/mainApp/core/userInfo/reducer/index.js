/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
'use strict';

import { Record } from 'immutable';

const userRecord = Record({
  userName: '',
  pic: ''
});

export default function(state=new userRecord(),{type,payload}){
  switch (type){

    default:
      return state;
  }
}
