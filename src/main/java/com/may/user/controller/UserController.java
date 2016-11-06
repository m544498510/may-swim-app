package com.may.user.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.may.user.model.User;
import com.may.user.service.IUserService;
import com.may.util.http.HttpResultCode;
import com.may.util.http.HttpResultUtil;

import com.sun.org.apache.xpath.internal.operations.Mod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/user")
public class UserController {
    @Resource(name = "userService")
    private IUserService iUserService;

    @RequestMapping(value = "/userApp",method = RequestMethod.GET)
    public ModelAndView userApp(){
        return new ModelAndView("../dist/html/userApp.html");
    }

    @ResponseBody
    @RequestMapping(value="/user",method = RequestMethod.GET)
    public User getUser(HttpServletResponse response, String userName, String userPsd, String email){
        User user = iUserService.signUp(userName,userPsd,email);
        if(user == null){
            response.setStatus(404);
        }
        return user;
    }

    @ResponseBody
    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public User signIn(HttpServletRequest request) {
        User user = null;
        String name = request.getParameter("userName");
        String password = request.getParameter("userPsd");
        if (validateString(name) && validateString(password)) {
            user = iUserService.signIn(name, password);
        }
        if (user != null) {
            request.getSession().setAttribute("user", user);
            return user;
        } else {
            return null;
        }
    }

    @ResponseBody
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public JSONObject login(HttpServletRequest request) {
        User user = iUserService.signIn("mxl", "password");
        return null;
    }

    private boolean validateString(String s) {
        return s != null && !"null".equals(s) && !"undefined".equals(s);
    }
}
