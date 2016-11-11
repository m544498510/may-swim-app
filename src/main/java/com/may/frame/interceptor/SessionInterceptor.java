package com.may.frame.interceptor;

import com.may.frame.Constant;
import com.may.user.model.User;
import com.may.user.service.IUserService;
import com.may.util.http.CookieUtil;
import com.may.util.http.ResponseUtil;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
@Component
public class SessionInterceptor implements HandlerInterceptor {
    @Resource(name = "userService")
    private IUserService iUserService;


    @Override
    public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {
        HttpSession session = httpServletRequest.getSession();
        User user = (User) session.getAttribute(Constant.SESSION_USER);
        if(user != null){
            return true;
        }
        Cookie userCookie = CookieUtil.getCookieByName(httpServletRequest,Constant.COOKIE_USER);
        user = signInWithCookie(userCookie);
        if(user != null){
            session.setAttribute(Constant.SESSION_USER,user);
            return true;
        }

        httpServletResponse.setStatus(ResponseUtil.UNAUTHORIZED);
        return false;
    }

    private User signInWithCookie(Cookie cookie){
        if(cookie == null) return null;
        String value = cookie.getValue();
        String[] valueArr = value.split("_");
        String userId = valueArr[0];
        String userPsd = valueArr[1];
        return iUserService.getUserByIdAndToken(userId,userPsd);
    }

    @Override
    public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {

    }
}
