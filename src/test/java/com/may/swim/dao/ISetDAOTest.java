package com.may.swim.dao;

import com.may.swim.model.Set;
import com.may.test.BaseTest;
import org.junit.Test;

import javax.annotation.Resource;

import java.util.ArrayList;

import static org.junit.Assert.*;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
public class ISetDAOTest extends BaseTest {
    @Resource ISetDAO iSetDAO;

    @Test
    public void testInsertRows() throws Exception {
        ArrayList<Set> list = new ArrayList<Set>();
        list.add(this.getSet(new Short("98")));
        list.add(this.getSet(new Short("99")));
        int i = iSetDAO.insertRows(list);

        assertTrue(i > 0);

    }

    private Set getSet(Short index) {
        Long sessionId = 1L;          //一套训练id
        Short patternId = 1;         //泳姿id
        Short setLap = 4;            //往返数
        Short setStroke = 12;         //挥臂次数
        Short setDistance = 100;       //距离
        Short setCalorie = 55;         //消耗卡路里
        Short setEfficiency = 58;     //效率
        Float setTrainingTime = 90f;  //训练时间（单位为秒）
        Float setRestTime = 99f;      //休息时间（单位为秒）
        Float setTime = 189f;          //总时间（单位为秒）
        Short setSpeed = 10;         //速度


        Set set = new Set(sessionId,patternId,index,setLap,setStroke,setDistance,setCalorie,setEfficiency,setTrainingTime,setRestTime,setTime,setSpeed);

        return set;
    }
}