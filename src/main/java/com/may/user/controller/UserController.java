package com.may.user.controller;

import com.alibaba.fastjson.JSONObject;
import com.may.user.model.User;
import com.may.user.service.IUserService;
import com.may.util.http.HttpResultCode;
import com.may.util.http.HttpResultUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    private IUserService iUserService;

    @ResponseBody
    @RequestMapping(value="/user",method= RequestMethod.GET)
    public JSONObject signIn(HttpServletRequest request){
        User user = null;
        String name = request.getParameter("userName");
        String password = request.getParameter("userPsd");
        if(validateString(name) && validateString(password)){
            user = iUserService.signIn(name,password);
        }
        if(user != null){
            request.getSession().setAttribute("user",user);
            return HttpResultUtil.getSuccessResult(user);
        }else{
            return HttpResultUtil.getFailResult(HttpResultCode.SING_UP_FAIL);
        }
    }

    @ResponseBody
    @RequestMapping(value="/login",method= RequestMethod.GET)
    public JSONObject login(HttpServletRequest request) {
        User user = iUserService.signIn("mxl","password");
        return null;
    }

        private boolean validateString(String s){
        return s != null && "null".equals(s) && "undefined".equals(s);
    }
}
