package com.may.swim.dao;

import com.may.frame.model.PageInfo;
import com.may.swim.SwimConstant;
import com.may.swim.SwimTestUtil;
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
    public void testInsertRow() throws Exception{
        Set set = SwimTestUtil.createSet(77,1L);
        int i = iSetDAO.insertRow(set);
        assertTrue(i == 1);
        assertNotNull(set.getSetId());
    }

    @Test
    public void testInsertRows() throws Exception {
        ArrayList<Set> list = new ArrayList<>();
        list.add(SwimTestUtil.createSet(98,1L));
        list.add(SwimTestUtil.createSet(99,1L));
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
        list.add(SwimTestUtil.createSet(98,1L));
        list.add(SwimTestUtil.createSet(99,1L));
        iSetDAO.insertRows(list);

        int i = iSetDAO.deleteRowsBySessionId(1L);

        assertTrue(i > 0);
    }

    @Test
    public void testUpdateRow() throws Exception {
        Integer setIndex = 99;
        Set set = SwimTestUtil.createSet(setIndex,1L);
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
        list.add(SwimTestUtil.createSet(99,1L));
        list.add(SwimTestUtil.createSet(98,1L));
        iSetDAO.insertRows(list);

        PageInfo pageInfo= new PageInfo();
        pageInfo.setPageStart(0);
        pageInfo.setPageSize(2);
        pageInfo.setOrder(SwimConstant.SET_INDEX);

        ArrayList<Set> newList = iSetDAO.getRowsBySessionId(1L,pageInfo);
        assertTrue(newList.size() == 2);

        pageInfo.setPageStart(2);
        newList = iSetDAO.getRowsBySessionId(1L,pageInfo);
        assertTrue(newList.size() == 2);

        newList = iSetDAO.getRowsBySessionId(1L,null);
        assertTrue(newList.size() == 4);
    }

    @Test
    public void testGetRowsByUserId(){
        ArrayList<Set> list = iSetDAO.getRowsByUserId("TEST_ID",null);
        assertTrue(list.size() == 2);
    }


}