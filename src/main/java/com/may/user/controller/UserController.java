package com.may.user.controller;

import com.may.user.model.User;
import com.may.user.service.IUserService;
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
    public User getUserById(HttpServletRequest request){
        User user = null;
        String userId = request.getParameter("userId");
        if(userId != null){
    //        user = iUserService.getUserById(userId);
        }
        return user;
    }
}
