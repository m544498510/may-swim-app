package com.may.user.controller;

import com.may.frame.Constant;
import com.may.user.model.User;
import com.may.user.service.IUserService;
import com.may.util.http.CookieUtil;
import com.may.util.http.ResponseUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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
    @RequestMapping(value = "", method = RequestMethod.POST)
    public User signIn(HttpServletRequest request, HttpServletResponse response,
                       String userName, String userPsd, boolean autoSignIn) {
        User user = iUserService.signIn(userName, userPsd);
        if (user != null) {
            ResponseUtil.success(request, response, false);

            HttpSession session = request.getSession();
            session.setAttribute(Constant.SESSION_USER, user);
            if (autoSignIn) {
                String value = user.getUserId() + "_" + user.getUserPsd();
                Cookie cookie = new Cookie(Constant.COOKIE_USER, value);
                //30 day
                cookie.setMaxAge(2592000);
                cookie.setPath("/");
                response.addCookie(cookie);
            }
        } else {
            response.setStatus(ResponseUtil.UNAUTHORIZED);
        }
        return user;
    }

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.DELETE)
    public void signOut(HttpServletRequest request, HttpServletResponse response) {
        User user = (User) request.getSession().getAttribute(Constant.SESSION_USER);
        if (user != null) {
            request.getSession().removeAttribute(Constant.SESSION_USER);
        }
        CookieUtil.delCookieByName(request, response, Constant.COOKIE_USER);
        ResponseUtil.success(request, response, false);
    }

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.GET)
    public User test(HttpServletRequest request, HttpServletResponse response) {
        User user = (User) request.getSession().getAttribute(Constant.SESSION_USER);
        if(user != null){
            ResponseUtil.success(request,response,false);
        }else{
            ResponseUtil.notFoundError(response);
        }
        return user;
    }


}
