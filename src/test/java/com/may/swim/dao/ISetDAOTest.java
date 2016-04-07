package com.may.swim.dao;

import com.may.frame.model.PageInfo;
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
public class ISetDAOTest extends BaseTest{

    @Resource
    private ISetDAO iSetDAO;

    @Test
    public void testInsertRows() throws Exception {
        ArrayList<Set> list = new ArrayList<>();
        list.add(this.getSet(new Short("98")));
        list.add(this.getSet(new Short("99")));
        int i = iSetDAO.insertRows(list);

        assertTrue(i == 2);
    }

    @Test
    public void testDeleteRow() throws Exception {
        int i = iSetDAO.deleteRow(1L);

        assertTrue(i == 1);
    }

    @Test
    public void testDeleteRowsBySessionId() throws Exception {
        ArrayList<Set> list = new ArrayList<>();
        list.add(this.getSet(new Short("98")));
        list.add(this.getSet(new Short("99")));
        iSetDAO.insertRows(list);

        int i = iSetDAO.deleteRowsBySessionId(1L);

        assertTrue(i == 3);
    }

    @Test
    public void testUpdateRow() throws Exception {
        Short setIndex = 99;
        Set set = this.getSet(setIndex);
        set.setSetId(1L);
        int i = iSetDAO.updateRow(set);

        assertTrue(i == 1);

        Set newSet = iSetDAO.getRowBySetId(1L);
        assertTrue(setIndex.equals(newSet.getSetIndex()));
    }

    @Test
    public void testGetRowBySetId() throws Exception {
        Set set = iSetDAO.getRowBySetId(1L);
        assertTrue(set.getSessionId() == 1L);
    }

    @Test
    public void testGetRowsBySessionId() throws Exception {
        ArrayList<Set> list = new ArrayList<>();
        list.add(this.getSet(new Short("98")));
        list.add(this.getSet(new Short("99")));
        iSetDAO.insertRows(list);

        PageInfo pageInfo= new PageInfo();
        pageInfo.setPageStart(0);
        pageInfo.setPageSize(100);

        ArrayList<Set> newList = iSetDAO.getRowsBySessionId(1L,pageInfo);

        assertTrue(newList.size() == 3);

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


        return new Set(sessionId,patternId,index,setLap,setStroke,setDistance,setCalorie,setEfficiency,setTrainingTime,setRestTime,setTime,setSpeed);
    }

}