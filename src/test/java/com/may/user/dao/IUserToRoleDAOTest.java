package com.may.user.dao;

import com.may.test.BaseTest;
import com.may.user.model.Role;
import org.junit.Test;

import javax.annotation.Resource;

import java.util.List;

import static org.junit.Assert.*;

public class IUserToRoleDAOTest extends BaseTest {
    @Resource
    private IUserToRoleDAO iUserToRoleDAO;

    @Test
    public void testGetRolesByUserId() throws Exception {
        int[] roles = {1,2};
        iUserToRoleDAO.insertRows("TEST_ID",roles);
        List<Role> list = iUserToRoleDAO.getRolesByUserId("TEST_ID");
        assertTrue(list.size() >= 2);
    }

    @Test
    public void testInsertRow() throws Exception {
        int i = iUserToRoleDAO.insertRow("TEST_ID",1);
        assertTrue(i>0);
    }

    @Test
    public void testInsertRows() throws Exception {
        int[] roles = {1,2,3};
        int i =  iUserToRoleDAO.insertRows("TEST_ID",roles);
        assertTrue(i>0);
    }

    @Test
    public void testDeleteRow() throws Exception {
        iUserToRoleDAO.insertRow("TEST_ID",1);
        int i = iUserToRoleDAO.deleteRow("TEST_ID",1);
        assertTrue(i > 0);
    }

    @Test
    public void testDeleteRows() throws Exception {
        int[] roles = {1,2};
        iUserToRoleDAO.insertRows("TEST_ID",roles);
        int i = iUserToRoleDAO.deleteRows("TEST_ID");
        assertTrue(i > 0);
    }
}