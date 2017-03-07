/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */

import SwimSet from "../model/Set";
import SwimSession from "../model/Session";

const defaultState = {
  session: SwimSession(),
  sets: [
    SwimSet({
      setIndex:1
    }),
    SwimSet({
      setIndex:2
    }),
    SwimSet({
      setIndex:3
    }),
    SwimSet({
      setIndex:4
    }),
    SwimSet({
      setIndex:5
    })
  ]
};

export default function(state=defaultState,{type,payload}){

}
