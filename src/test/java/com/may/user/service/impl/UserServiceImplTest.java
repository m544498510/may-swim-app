package com.may.user.service.impl;

import com.may.test.BaseTest;
import com.may.user.model.User;

import org.junit.Test;
import javax.annotation.Resource;

import static org.junit.Assert.*;

public class UserServiceImplTest extends BaseTest {
    @Resource  //自动注入,默认按名称
    private UserServiceImpl userService;

    @Test
    public void testSignIn() throws Exception {
        User user = userService.signIn("TEST_NAME","TEST_PSD");
        assertNotNull(user);
    }

    @Test
    public void testSignUp() throws Exception {
        User user = userService.signUp("mxl2","mxl3","1234@123.com");
        assertNotNull(user);
        assertNotNull(user.getRoles());
    }

    @Test
    public void testGetUserByName() throws Exception {
        User user = userService.getUserByName("TEST_NAME");
        assertNotNull(user);
    }

    @Test
    public void testResetPsd() throws Exception {
        User user = this.getTestUser();
        User newUser = userService.resetPsd(user,"NEW_PSD");
        assertNotNull(newUser);
        assertEquals(newUser.getUserPsd(),"NEW_PSD");
    }

    @Test
    public void testResetEmail() throws Exception {
        User user = this.getTestUser();
        User newUser = userService.resetEmail(user,"NEW_EMAIL");
        assertNotNull(newUser);
        assertEquals(newUser.getUserEmail(),"NEW_EMAIL");
    }

    @Test
    public void testFindPsdFromEmail() throws Exception {

    }

    private User getTestUser(){
        return userService.getUserByName("TEST_NAME");
    }
}