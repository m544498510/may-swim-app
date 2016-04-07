package com.may.swim.model;

import java.io.Serializable;
import java.util.Date;

public class Set implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long setId;               //id
    private Long sessionId;          //一套训练id
    private Short patternId;         //泳姿id
    private Short setIndex;          //分组序号（为0时，是total数据；大于0，是分组数据）
    private Short setLap;            //往返数
    private Short setStroke;         //挥臂次数
    private Short setDistance;       //距离
    private Short setCalorie;         //消耗卡路里
    private Short setEfficiency;     //效率
    private Float setTrainingTime;  //训练时间（单位为秒）
    private Float setRestTime;      //休息时间（单位为秒）
    private Float setTime;          //总时间（单位为秒）
    private Short setSpeed;         //速度

    public Set() {
    }

    public Set(Long sessionId, Short patternId, Short setIndex, Short setLap, Short setStroke, Short setDistance, Short setCalorie, Short setEfficiency, Float setTrainingTime, Float setRestTime, Float setTime, Short setSpeed) {
        this.sessionId = sessionId;
        this.patternId = patternId;
        this.setIndex = setIndex;
        this.setLap = setLap;
        this.setStroke = setStroke;
        this.setDistance = setDistance;
        this.setCalorie = setCalorie;
        this.setEfficiency = setEfficiency;
        this.setTrainingTime = setTrainingTime;
        this.setRestTime = setRestTime;
        this.setTime = setTime;
        this.setSpeed = setSpeed;
    }

    public Set(Long setId, Long sessionId, Short patternId, Short setIndex, Short setLap, Short setStroke, Short setDistance, Short setCalorie, Short setEfficiency, Float setTrainingTime, Float setRestTime, Float setTime, Short setSpeed) {
        this.setId = setId;
        this.sessionId = sessionId;
        this.patternId = patternId;
        this.setIndex = setIndex;
        this.setLap = setLap;
        this.setStroke = setStroke;
        this.setDistance = setDistance;
        this.setCalorie = setCalorie;
        this.setEfficiency = setEfficiency;
        this.setTrainingTime = setTrainingTime;
        this.setRestTime = setRestTime;
        this.setTime = setTime;
        this.setSpeed = setSpeed;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
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

    public Short getSetCalorie() {
        return setCalorie;
    }

    public void setSetCalorie(Short setCalorie) {
        this.setCalorie = setCalorie;
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

    public Float getSetTrainingTime() {
        return setTrainingTime;
    }

    public void setSetTrainingTime(Float setTrainingTime) {
        this.setTrainingTime = setTrainingTime;
    }

    public Float getSetRestTime() {
        return setRestTime;
    }

    public void setSetRestTime(Float setRestTime) {
        this.setRestTime = setRestTime;
    }

    public Float getSetTime() {
        return setTime;
    }

    public void setSetTime(Float setTime) {
        this.setTime = setTime;
    }

    public Short getSetSpeed() {
        return setSpeed;
    }

    public void setSetSpeed(Short setSpeed) {
        this.setSpeed = setSpeed;
    }
}