package com.may.util.http;

import com.alibaba.fastjson.JSONObject;

/**
 * Created by May on 2016/3/28.
 */
public class HttpResultUtil {

    public static JSONObject getSuccessResult(Object o){
        JSONObject jo = new JSONObject();
        jo.put("code",200);
        jo.put("result",o);
        return jo;
    }

    public static JSONObject getFailResult(String code){
        JSONObject jo = new JSONObject();
        jo.put("code",code);
        return jo;
    }

}
