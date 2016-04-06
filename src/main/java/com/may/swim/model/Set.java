package com.may.swim.model;

import java.io.Serializable;
import java.util.Date;

public class Set implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long setId;             //id
    private Long sessionId;         //一套训练id
    private Short patternId;        //泳姿id
    private Short setLap;           //往返数
    private Short setStroke;        //挥臂次数
    private Short setDistance;      //距离
    private Short setCalory;        //消耗卡路里
    private Short setEfficiency;    //效率
    private Short setIndex;         //分组序号（为0时，是total数据；大于0，是分组数据）
    private Date setTime;           //总时间
    private Date setRestTime;       //休息时间
    private Short setSpeed;         //速度

    public Set(Long setId, Long sessionId, Short patternId, Short setLap, Short setStroke, Short setDistance, Short setCalory, Short setEfficiency, Short setIndex, Date setTime, Date setRestTime, Short setSpeed) {
        this.setId = setId;
        this.sessionId = sessionId;
        this.patternId = patternId;
        this.setLap = setLap;
        this.setStroke = setStroke;
        this.setDistance = setDistance;
        this.setCalory = setCalory;
        this.setEfficiency = setEfficiency;
        this.setIndex = setIndex;
        this.setTime = setTime;
        this.setRestTime = setRestTime;
        this.setSpeed = setSpeed;
    }

    public Set(Long sessionId, Short patternId, Short setLap, Short setStroke, Short setDistance, Short setCalory, Short setEfficiency, Short setIndex, Date setTime, Date setRestTime, Short setSpeed) {
        this.sessionId = sessionId;
        this.patternId = patternId;
        this.setLap = setLap;
        this.setStroke = setStroke;
        this.setDistance = setDistance;
        this.setCalory = setCalory;
        this.setEfficiency = setEfficiency;
        this.setIndex = setIndex;
        this.setTime = setTime;
        this.setRestTime = setRestTime;
        this.setSpeed = setSpeed;
    }


    public Set() {
        super();
    }

    public Long getSetId() {
        return setId;
    }

    public void setSetId(Long setId) {
        this.setId = setId;
    }

    public Long getSessionId() {
        return sessionId;
    }

    public void setSessionId(Long sessionId) {
        this.sessionId = sessionId;
    }

    public Short getPatternId() {
        return patternId;
    }

    public void setPatternId(Short patternId) {
        this.patternId = patternId;
    }

    public Short getSetLap() {
        return setLap;
    }

    public void setSetLap(Short setLap) {
        this.setLap = setLap;
    }

    public Short getSetStroke() {
        return setStroke;
    }

    public void setSetStroke(Short setStroke) {
        this.setStroke = setStroke;
    }

    public Short getSetDistance() {
        return setDistance;
    }

    public void setSetDistance(Short setDistance) {
        this.setDistance = setDistance;
    }

    public Short getSetCalory() {
        return setCalory;
    }

    public void setSetCalory(Short setCalory) {
        this.setCalory = setCalory;
    }

    public Short getSetEfficiency() {
        return setEfficiency;
    }

    public void setSetEfficiency(Short setEfficiency) {
        this.setEfficiency = setEfficiency;
    }

    public Short getSetIndex() {
        return setIndex;
    }

    public void setSetIndex(Short setIndex) {
        this.setIndex = setIndex;
    }

    public Date getSetTime() {
        return setTime;
    }

    public void setSetTime(Date setTime) {
        this.setTime = setTime;
    }

    public Date getSetRestTime() {
        return setRestTime;
    }

    public void setSetRestTime(Date setRestTime) {
        this.setRestTime = setRestTime;
    }

    public Short getSetSpeed() {
        return setSpeed;
    }

    public void setSetSpeed(Short setSpeed) {
        this.setSpeed = setSpeed;
    }
}