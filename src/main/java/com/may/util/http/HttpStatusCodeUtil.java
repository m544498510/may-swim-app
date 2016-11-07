package com.may.util.http;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HttpStatusCodeUtil {
    public static final int UNAUTHORIZED = 401;
    public static final int FORBIDDEN = 403;
    public static final int NOT_FOUND = 404;


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
    }
}
