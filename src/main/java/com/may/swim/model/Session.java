package com.may.swim.model;

import java.io.Serializable;
import java.util.Date;

public class Session implements Serializable{
    private static final long serialVersionUID = 1L;

    private Long sessionId;

    private String userId;

    private Date sessionDate;

    private String sessionDes;

    private Short poolLength;

    public Session() {
    }

    public Session(String userId, Date sessionDate, String sessionDes, Short poolLength) {
        this.userId = userId;
        this.sessionDate = sessionDate;
        this.sessionDes = sessionDes;
        this.poolLength = poolLength;
    }

    public Session(Long sessionId, String userId, Date sessionDate, String sessionDes, Short poolLength) {
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

    public Short getPoolLength() {
        return poolLength;
    }

    public void setPoolLength(Short poolLength) {
        this.poolLength = poolLength;
    }
}