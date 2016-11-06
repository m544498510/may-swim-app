package com.may.user.controller;

import com.alibaba.fastjson.JSONObject;
import com.may.user.model.User;
import com.may.user.service.IUserService;
import com.may.util.http.HttpResultUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
@Controller
@RequestMapping(value = "/session")
public class sessionController {
    @Resource(name = "userService")
    private IUserService iUserService;

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.GET)
    public User signUp(HttpServletRequest request, HttpServletResponse response,
                       String userName, String userPsd, String email) {
        User user = iUserService.signUp(userName, userPsd, email);
        if (user != null) {
            HttpResultUtil.success(request, response, false);
        }else{
            response.setStatus(401);
        }
        return user;
    }

    @ResponseBody
    @RequestMapping(value = "/test", method = RequestMethod.GET)
    public User test(HttpServletRequest request, HttpServletResponse response,
                           String userName, String userPsd, String email) {
        JSONObject jo = new JSONObject();
        jo.put("code",200);

        User user = iUserService.signIn("TEST_NAME","TEST_PSD");
        response.setStatus(401);
        return user;
    }


}
