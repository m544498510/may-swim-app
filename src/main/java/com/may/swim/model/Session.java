package com.may.swim.model;

import java.io.Serializable;
import java.util.Date;

public class Session implements Serializable{
    private static final long serialVersionUID = 1L;

    private Long sessionId;

    private String userId;

    private Date sessionDate;

    private String sessionCommert;

    public Session(Long sessionId, String userId, Date sessionDate, String sessionCommert) {
        this.sessionId = sessionId;
        this.userId = userId;
        this.sessionDate = sessionDate;
        this.sessionCommert = sessionCommert;
    }

    public Session() {
        super();
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

    public String getSessionCommert() {
        return sessionCommert;
    }

    public void setSessionCommert(String sessionCommert) {
        this.sessionCommert = sessionCommert;
    }
}