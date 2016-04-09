package com.may.swim.dao;

import com.may.swim.SwimTestUtil;
import com.may.swim.model.Session;
import com.may.test.BaseTest;
import org.junit.Test;

import javax.annotation.Resource;

import java.util.ArrayList;

import static org.junit.Assert.*;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
public class ISessionDAOTest extends BaseTest{
    @Resource
    private ISessionDAO iSessionDAO;

    @Test
    public void testInsertRow() throws Exception {
        Session session = SwimTestUtil.createSession();

        int i = iSessionDAO.insertRow(session);

        assertTrue(i == 1);
        assertNotNull(session.getSessionId());
    }

    @Test
    public void testDeleteRow() throws Exception {
        int i = iSessionDAO.deleteRow(1L);
        assertTrue(i == 1);
    }

    @Test
    public void testUpdateRow() throws Exception {
        Session session = SwimTestUtil.createSession();
        session.setSessionId(1L);

        int i = iSessionDAO.updateRow(session);

        assertTrue(i == 1);

        Session newSession = iSessionDAO.getRowBySessionId(1L);
        assertTrue(newSession.getPoolLength() == 88);
    }

    @Test
    public void testGetRowBySessionId() throws Exception {
        Session session = iSessionDAO.getRowBySessionId(1L);
        assertTrue(session.getPoolLength() == 25);
    }

    @Test
    public void testGetRowsByUserId() throws Exception {
        ArrayList<Session> list = iSessionDAO.getRowsByUserId("TEST_ID", null);
        assertTrue(list.size() == 1);
    }

}