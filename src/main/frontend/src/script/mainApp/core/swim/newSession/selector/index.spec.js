/**
 *
 * @author :    Mei XinLin
 * @version :   1.0
 */
import {List} from "immutable";
import SwimSet from "../model/Set";
import SwimSession from "../model/Session";
import * as selectors from "./index";


describe('module swim newSession selector', () => {
  let _state;
  before(() => {
    _state = {
      stroke: [
        {
          "strokeDes": "蛙泳",
          "strokeId": 1,
          "strokeName": "breaststroke"
        }, {
          "strokeDes": "自由泳",
          "strokeId": 2,
          "strokeName": "breaststroke"
        }, {
          "strokeDes": "蝶泳",
          "strokeId": 3,
          "strokeName": "breaststroke"
        }],
      newSession: {
        session: new SwimSession(),
        sets: List([
          new SwimSet({
            setIndex: 1,
            strokeId: 1
          }),
          new SwimSet({
            setIndex: 2,
            strokeId: 2
          }),
          new SwimSet({
            setIndex: 3,
            strokeId: 3
          })
        ])
      }
    }
  });


  describe('function getNewSession', () => {
    it('should return newSession state', () => {
      const state = selectors.getNewSession(_state);
      expect(state).to.equals(_state.newSession);
    });
  });

  describe('function getSwimSession', () => {
    it('should return the session state from newSession state', () => {
      const state = selectors.getSwimSession(_state);
      expect(state).to.equals(_state.newSession.session);
    });
  });

  describe('function getSwimSets', () => {
    it('should return the sets state from newSession state', () => {
      const state = selectors.getSwimSets(_state);
      expect(state).to.equals(_state.newSession.sets);
    });

    it('should return the sets state and add the strokeDes with strokeId from stroke list', () => {
      const state = selectors.getSwimSets(_state);
      expect(state.get(0).strokeDes).to.equals(_state.stroke[0].strokeDes);
      expect(state.get(1).strokeDes).to.equals(_state.stroke[1].strokeDes);
    })
  });


});
