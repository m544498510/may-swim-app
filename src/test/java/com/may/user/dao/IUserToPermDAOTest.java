package com.may.user.dao;

import com.may.test.BaseTest;
import com.may.user.model.Permission;
import org.junit.Test;

import javax.annotation.Resource;

import java.util.List;

import static org.junit.Assert.*;

public class IUserToPermDAOTest extends BaseTest {
    @Resource
    private IUserToPermDAO iUserToPermDAO;

    @Test
    public void testGetPermsByUserId() throws Exception {
        int[] perms = {1,2};
        iUserToPermDAO.insertRows("TEST_ID",perms);
        List<Permission> list = iUserToPermDAO.getPermsByUserId("TEST_ID");
        assertTrue(list.size()>0);
    }

    @Test
    public void testInsertRow() throws Exception {
        int i = iUserToPermDAO.insertRow("TEST_ID",1);
        assertTrue(i>0);
    }

    @Test
    public void testInsertRows() throws Exception {
        int[] perms = {0,1,2};
        int i =  iUserToPermDAO.insertRows("TEST_ID",perms);
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
        int[] perms = {1,2};
        iUserToPermDAO.insertRows("TEST_ID",perms);
        int i = iUserToPermDAO.deleteRows("TEST_ID");
        assertTrue(i > 0);
    }
}