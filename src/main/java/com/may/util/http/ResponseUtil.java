package com.may.util.http;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;

public class ResponseUtil {

    public static final int BAD_REQUEST = 400;      //参数错误
    public static final int UNAUTHORIZED = 401;     //登录认证失败
    public static final int FORBIDDEN = 403;        //无权限
    public static final int NOT_FOUND = 404;        //没有对应资源
    public static final int CONFLICT = 409;         //资源冲突


    private static final String GET = "GET";
    private static final String POST = "POST";
    private static final String PUT = "PUT";
    private static final String PATCH = "PATCH";
    private static final String DELETE = "DELETE";

    private static final String HEAD = "HEAD";
    private static final String OPTIONS = "OPTIONS";

    public static void success(HttpServletRequest request, HttpServletResponse response, boolean isAsync) {
        if (isAsync) {
            response.setStatus(202);
        } else {
            success(request, response);
        }
    }

    public static void success(HttpServletRequest request, HttpServletResponse response) {
        String method = request.getMethod();
        switch (method) {
            case GET:
                response.setStatus(200);
                break;
            case POST:
            case PUT:
            case PATCH:
                response.setStatus(201);
                break;
            case DELETE:
                response.setStatus(204);
                break;
        }
    }

    public static void parameterError(HttpServletResponse response) {
        response.setStatus(BAD_REQUEST);
    }

    public static void notFoundError(HttpServletResponse response) {
        response.setStatus(NOT_FOUND);
    }

    public static void conflictError(HttpServletResponse response) {
        response.setStatus(CONFLICT);
    }

    private static HashMap<String, Object> getFailureInfo(int code, String message) {
        HashMap<String, Object> map = new HashMap<>();
        map.put("code", code);
        map.put("message", message);
        return map;
    }
}
