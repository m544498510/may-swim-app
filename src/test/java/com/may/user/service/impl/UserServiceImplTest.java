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
/*
        User user = userService.signIn("mxl","password");
        assertEquals("mxl",user.getUserName());
*/
    }

    @Test
    public void testSignUp() throws Exception {
        User user = userService.signUp("mxl","mxl","1234@123.com");
        assertNotNull(user);
    }

    @Test
    public void testResetPsd() throws Exception {

    }

    @Test
    public void testResetEmail() throws Exception {

    }

    @Test
    public void testFindPsdFromEmail() throws Exception {

    }
}