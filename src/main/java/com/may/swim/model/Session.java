package com.may.swim.model;

import java.io.Serializable;
import java.util.Date;

/**
 * 一套训练信息实体类
 * @author :    Mei XinLin
 * @version :   1.0
 */
public class Session implements Serializable{
    private static final long serialVersionUID = 1L;

    //id
    private Long sessionId;
    //user id
    private String userId;
    //训练日期
    private Date sessionDate;
    //训练描述
    private String sessionDes;
    //泳池长度
    private Integer poolLength;

    public Session() {
    }

    public Session(String userId, Date sessionDate, String sessionDes, Integer poolLength) {
        this.userId = userId;
        this.sessionDate = sessionDate;
        this.sessionDes = sessionDes;
        this.poolLength = poolLength;
    }

    public Session(Long sessionId, String userId, Date sessionDate, String sessionDes, Integer poolLength) {
        this.sessionId = sessionId;
        this.userId = userId;
        this.sessionDate = sessionDate;
        this.sessionDes = sessionDes;
        this.poolLength = poolLength;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Long getSessionId() {
        return sessionId;
    }

    public void setSessionId(Long sessionId) {
        this.sessionId = sessionId;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Date getSessionDate() {
        return sessionDate;
    }

    public void setSessionDate(Date sessionDate) {
        this.sessionDate = sessionDate;
    }

    public String getSessionDes() {
        return sessionDes;
    }

    public void setSessionDes(String sessionDes) {
        this.sessionDes = sessionDes;
    }

    public Integer getPoolLength() {
        return poolLength;
    }

    public void setPoolLength(Integer poolLength) {
        this.poolLength = poolLength;
    }
}