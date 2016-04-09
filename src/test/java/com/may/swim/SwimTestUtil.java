package com.may.swim;

import com.may.swim.model.Session;
import com.may.swim.model.Set;

import java.util.ArrayList;
import java.util.Date;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
public class SwimTestUtil {



    public static Session createSession(){
        Integer poolLength = 88;
        return new Session("TEST_ID",new Date(),"TEST_DES",poolLength);
    }

    public static ArrayList<Set> createSetList(Long sessionId){

        ArrayList<Set> list = new ArrayList<>();
        list.add(SwimTestUtil.createSet(87,sessionId));
        list.add(SwimTestUtil.createSet(88,sessionId));
        list.add(SwimTestUtil.createSet(89,sessionId));
        return list;
    }

    public static Set createSet(Integer index,Long sessionId) {
        Integer strokeId = 1;         //泳姿id
        Integer setLap = 4;            //往返数
        Integer setStroke = 12;         //挥臂次数
        Integer setDistance = 100;       //距离
        Integer setCalorie = 55;         //消耗卡路里
        Integer setEfficiency = 58;     //效率
        Float setTrainingTime = 90f;  //训练时间（单位为秒）
        Float setRestTime = 99f;      //休息时间（单位为秒）
        Float setTime = 189f;          //总时间（单位为秒）
        Integer setSpeed = 10;         //速度

        return new Set(sessionId,strokeId,index,setLap,setStroke,setDistance,setCalorie,setEfficiency,setTrainingTime,setRestTime,setTime,setSpeed);
    }


}
