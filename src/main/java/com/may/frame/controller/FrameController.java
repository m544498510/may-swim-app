package com.may.frame.controller;

import com.may.frame.Constant;
import com.may.user.model.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


@Controller
@RequestMapping("/frame")
public class FrameController {
    private String loginPage = "../dist/html/userApp.html";
    private String mainAppPage = "../dist/html/mainApp.html";

    @RequestMapping(value = "/userApp")
    public String userApp() {
        return loginPage;
    }

    @RequestMapping("/mainApp")
    public String mainApp(HttpServletRequest request) {
        HttpSession session = request.getSession();
        User user = (User) session.getAttribute(Constant.SESSION_USER);

        if(user == null){
            return loginPage;
        }else{
            return mainAppPage;
        }
    }
}
