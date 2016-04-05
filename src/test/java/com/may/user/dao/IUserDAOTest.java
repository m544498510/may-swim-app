package com.may.user.dao;

import com.may.test.BaseTest;
import com.may.user.model.User;
import org.junit.Test;

import javax.annotation.Resource;

import java.util.Date;

import static org.junit.Assert.*;


public class IUserDAOTest extends BaseTest {
    @Resource IUserDAO iUserDAO;

    @Test
    public void testGetUserByNameAndPsd() throws Exception {
        User user = iUserDAO.getUserByNameAndPsd("mxl","90D162AA1F38EE74A8A7041BD2201BA4");
        assertEquals("mxl",user.getUserName());
    }

    @Test
    public void testGetUserByName() throws Exception {
        User user = iUserDAO.getUserByName("mxl");
        assertEquals("mxl",user.getUserName());
    }

    @Test
    public void testInsertUser() throws Exception {
        User user = this.createUser();
        iUserDAO.insertUser(user);

        User newUser = iUserDAO.getUserByName("testUserName");
        assertEquals(user.getUserId(),newUser.getUserId());
    }

    @Test
    public void testUpdateUser() throws Exception {
        User user = this.createUser();
        iUserDAO.insertUser(user);

        user.setUserEmail("newEmail@test.com");
        iUserDAO.updateUser(user);

        User newUser = iUserDAO.getUserByName("testUserName");
        assertEquals(newUser.getUserEmail(),"newEmail@test.com");
    }

    @Test
    public void testDeleteUser() throws Exception {
        User user = this.createUser();
        iUserDAO.insertUser(user);
        iUserDAO.deleteUser(user.getUserId());
        User newUser = iUserDAO.getUserByName(user.getUserName());

        assertNull(newUser);
    }

    private User createUser(){
        Date date = new Date();
        return new User("testId","testUserName","testPassword","test@test.com",date,"testNickName");
    }
}