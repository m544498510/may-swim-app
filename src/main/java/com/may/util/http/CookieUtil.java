package com.may.util.http;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
public class CookieUtil {
    public static Cookie getCookieByName(HttpServletRequest request, String name){
        Cookie[] cookies = request.getCookies();
        for(Cookie cookie : cookies){
            if(name.equals(cookie.getName())){
                return cookie;
            }
        }
        return null;
    }

    public static boolean delCookieByName(HttpServletRequest request, HttpServletResponse response, String name){
        Cookie cookie = CookieUtil.getCookieByName(request,name);
        if(cookie != null){
            cookie.setValue(null);
            cookie.setMaxAge(0);// 立即销毁cookie
            cookie.setPath("/");
            response.addCookie(cookie);
            return true;
        }
        return false;
    }

}
