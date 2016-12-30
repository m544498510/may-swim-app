package com.may.user.controller;

import com.may.user.model.User;
import com.may.user.service.IUserService;
import com.may.util.http.ResponseUtil;
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

    @ResponseBody
    @RequestMapping(value = "/userName", method = RequestMethod.GET)
    public String checkUserName(HttpServletRequest request, HttpServletResponse response, String userName) {
        User user = iUserService.getUserByName(userName);
        String result = "";
        if (user == null) {
            response.setStatus(ResponseUtil.NOT_FOUND);
        }else{
            result = user.getUserName();
            ResponseUtil.success(request, response);
        }
        return result;
    }

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.POST)
    public User createUser(HttpServletRequest request, HttpServletResponse response,
                           String userName, String password, String email) {
        User user = iUserService.createUser(userName, password, email);
        if (user != null) {
            ResponseUtil.success(request, response);
        } else {
            response.setStatus(ResponseUtil.NOT_FOUND);
        }
        return user;
    }

    private boolean validateString(String s) {
        return s != null && !"null".equals(s) && !"undefined".equals(s);
    }
}
