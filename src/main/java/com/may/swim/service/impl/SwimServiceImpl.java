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
      //      ArrayList<Set> =
        }
        return false;
    }

    @Override
    public boolean updateSet(Set set) {
        return false;
    }

    @Override
    public boolean delSetById(Long setId) {
        return false;
    }

    @Override
    public boolean delSetBySessionId(Long sessionId) {
        return false;
    }

    @Override
    public ArrayList<Set> getSetBySessionId(Long sessionId, PageInfo pageInfo) {
        return null;
    }

    private boolean updateTotalSet(Long sessionId){
        ArrayList<Set> list = iSetDAO.getRowsBySessionId(sessionId,null);
        Set totalSetOld = list.get(0);
        boolean hasTotalSet = (totalSetOld.getSetIndex() == 0);

        if(hasTotalSet){
            list.remove(0);
        }
        Integer setIndex = 0;
        Integer strokeId = 0;
        Integer setLap = 0;
        Integer setStroke = 0;         //挥臂次数
        Integer setDistance = 0;       //距离
        Integer setCalorie = 55;         //消耗卡路里
        Integer setEfficiency = 0;     //效率
        Float setTrainingTime = 0f;  //训练时间（单位为秒）
        Float setRestTime = 0f;      //休息时间（单位为秒）
        Float setTime = 0f;          //总时间（单位为秒）
        Integer setSpeed = 0;         //速度

        for (Set set : list) {
            setLap += set.getSetLap();
            setStroke += set.getSetStroke();
            setDistance += set.getSetDistance();
            setCalorie += set.getSetCalorie();
            setEfficiency += set.getSetEfficiency();
            setTrainingTime += set.getSetTrainingTime();
            setRestTime += set.getSetRestTime();
            setTime += set.getSetTime();
            setSpeed += set.getSetSpeed();
        }
        int count = list.size();
        setEfficiency = setEfficiency/count;
        setSpeed = setSpeed/count;

        a(setDistance);

//        Set newTotalSet = new Set(sessionId,strokeId,setIndex,(Integer)setLap,);

        return false;
    }

    private void a(Integer i){
    }
}
