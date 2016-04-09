package com.may.swim.service.impl;

import com.may.frame.model.PageInfo;
import com.may.swim.dao.ISessionDAO;
import com.may.swim.dao.ISetDAO;
import com.may.swim.dao.IStrokeDAO;
import com.may.swim.model.Session;
import com.may.swim.model.Set;
import com.may.swim.model.Stroke;
import com.may.swim.service.ISwimService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
@Service("swimService")
public class SwimServiceImpl implements ISwimService{
    @Autowired
    private ISetDAO iSetDAO;
    @Autowired
    private ISessionDAO iSessionDAO;
    @Autowired
    private IStrokeDAO iStrokeDAO;


    @Override
    public ArrayList<Stroke> getAllStroke() {
        return iStrokeDAO.getAllRows();
    }

    @Override
    public boolean createSession(Session session) {
        return (iSessionDAO.insertRow(session) == 1);
    }

    @Override
    public boolean updateSession(Session session) {
        return (iSessionDAO.updateRow(session) == 1);
    }

    @Override
    public boolean delSession(Long sessionId) {
        return (iSessionDAO.deleteRow(sessionId) == 1);
    }

    @Override
    public ArrayList<Session> getSessionByUserId(String userId, PageInfo pageInfo) {
        return iSessionDAO.getRowsByUserId(userId,pageInfo);
    }

    @Override
    public boolean createSetList(ArrayList<Set> list) {
        boolean flag = (iSetDAO.insertRows(list) == list.size());

        if(flag){
            flag = calTotalSet(list.get(0).getSessionId());
        }
        return flag;
    }

    @Override
    public boolean updateSet(Set set) {
        boolean flag = (iSetDAO.updateRow(set) == 1);
        if(flag){
            flag = calTotalSet(set.getSessionId());
        }
        return flag;
    }

    @Override
    public boolean delSetById(Long setId,Long sessionId) {
        boolean flag = (iSetDAO.deleteRow(setId) == 1);
        if(flag){
            flag = calTotalSet(sessionId);
        }
        return flag;
    }

    @Override
    public boolean delSetBySessionId(Long sessionId) {
        return (iSetDAO.deleteRowsBySessionId(sessionId) > -1);
    }

    @Override
    public ArrayList<Set> getSetBySessionId(Long sessionId, PageInfo pageInfo) {
        return iSetDAO.getRowsBySessionId(sessionId,pageInfo);
    }

    private boolean calTotalSet(Long sessionId){
        ArrayList<Set> list = iSetDAO.getRowsBySessionId(sessionId,null);
        Set oldTotalSet = list.get(0);
        boolean hasTotalSet = (oldTotalSet.getSetIndex() == 0);

        if(hasTotalSet){
            list.remove(0);
        }
        int setLap = 0;
        int setStrokeNum = 0;         //挥臂次数
        int setDistance = 0;       //距离
        int setCalorie = 0;         //消耗卡路里
        int setEfficiency = 0;     //效率
        float setTrainingTime = 0f;  //训练时间（单位为秒）
        float setRestTime = 0f;      //休息时间（单位为秒）
        float setTime = 0f;          //总时间（单位为秒）
        int setSpeed = 0;         //速度

        for (Set set : list) {
            setLap += set.getSetLap();
            setStrokeNum += set.getSetStrokeNum();
            setDistance += set.getSetDistance();
            setCalorie += set.getSetCalorie();
            setEfficiency += set.getSetEfficiency();
            setTrainingTime += set.getSetTrainingTime();
            setRestTime += set.getSetRestTime();
            setTime += set.getSetTime();
            setSpeed += set.getSetSpeed();
        }
        int count = list.size();
        if(count != 0) {
            setEfficiency = setEfficiency / count;
            setSpeed = setSpeed / count;
        }

        Set newTotalSet = new Set(sessionId,1,0,setLap,setStrokeNum,setDistance,setCalorie,setEfficiency,setTrainingTime,setRestTime,setTime,setSpeed);

        int result;
        if(hasTotalSet){
            newTotalSet.setSetId(oldTotalSet.getSetId());
            result = iSetDAO.updateRow(newTotalSet);
        }else{
            result = iSetDAO.insertRow(newTotalSet);
        }

        return (result == 1);
    }

}
