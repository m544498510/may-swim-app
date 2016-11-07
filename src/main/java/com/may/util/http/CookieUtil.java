package com.may.util.http;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

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

}
