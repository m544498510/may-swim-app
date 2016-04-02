package com.may.user.dao;

import com.may.test.BaseTest;
import org.junit.Test;

import javax.annotation.Resource;

import static org.junit.Assert.*;

public class IUserToPermDAOTest extends BaseTest {
    @Resource
    private IUserToPermDAO iUserToPermDAO;

    @Test
    public void testInsertRow() throws Exception {
        int i = iUserToPermDAO.insertRow("TEST_ID",1);
        assertTrue(i>0);
    }

    @Test
    public void testDeleteRow() throws Exception {
        iUserToPermDAO.insertRow("TEST_ID",1);
        int i = iUserToPermDAO.deleteRow("TEST_ID",1);
        assertTrue(i > 0);
    }

    @Test
    public void testDeleteRows() throws Exception {
        iUserToPermDAO.insertRow("TEST_ID",1);
        iUserToPermDAO.insertRow("TEST_ID",2);
        iUserToPermDAO.insertRow("TEST_ID",3);
        int i = iUserToPermDAO.deleteRows("TEST_ID");
        assertTrue(i > 0);
    }
}