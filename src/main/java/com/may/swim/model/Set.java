package com.may.swim.model;

import java.io.Serializable;
/**
 * 一组训练信息实体类
 * @author :    Mei XinLin
 * @version :   1.0
 */
public class Set implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long setId;                 //id
    private Long sessionId;            //一套训练id
    private Integer strokeId;          //泳姿id
    private Integer setIndex;          //分组序号（为0时，是当次一套训练统计总数据；大于0，是分组数据）
    private Integer setLap;            //往返数
    private Integer setStrokeNum;     //挥臂次数
    private Integer setDistance;      //距离
    private Integer setCalorie;       //消耗卡路里
    private Integer setEfficiency;    //效率
    private Float setTrainingTime;    //训练时间（单位为秒）
    private Float setRestTime;        //休息时间（单位为秒）
    private Float setTime;            //总时间（单位为秒）
    private Integer setSpeed;         //速度

    public Set() {
    }

    public Set(Long sessionId, Integer strokeId, Integer setIndex, Integer setLap, Integer setStrokeNum,
               Integer setDistance, Integer setCalorie, Integer setEfficiency, Float setTrainingTime, Float setRestTime, Float setTime, Integer setSpeed) {
        this.sessionId = sessionId;
        this.strokeId = strokeId;
        this.setIndex = setIndex;
        this.setLap = setLap;
        this.setStrokeNum = setStrokeNum;
        this.setDistance = setDistance;
        this.setCalorie = setCalorie;
        this.setEfficiency = setEfficiency;
        this.setTrainingTime = setTrainingTime;
        this.setRestTime = setRestTime;
        this.setTime = setTime;
        this.setSpeed = setSpeed;
    }

    public Set(Long setId, Long sessionId, Integer patternId, Integer setIndex, Integer setLap, Integer setStrokeNum, Integer setDistance, Integer setCalorie, Integer setEfficiency, Float setTrainingTime, Float setRestTime, Float setTime, Integer setSpeed) {
        this.setId = setId;
        this.sessionId = sessionId;
        this.strokeId = patternId;
        this.setIndex = setIndex;
        this.setLap = setLap;
        this.setStrokeNum = setStrokeNum;
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

    public Integer getStrokeId() {
        return strokeId;
    }

    public void setStrokeId(Integer strokeId) {
        this.strokeId = strokeId;
    }

    public Integer getSetLap() {
        return setLap;
    }

    public void setSetLap(Integer setLap) {
        this.setLap = setLap;
    }

    public Integer getSetStrokeNum() {
        return setStrokeNum;
    }

    public void setSetStrokeNum(Integer setStrokeNum) {
        this.setStrokeNum = setStrokeNum;
    }

    public Integer getSetDistance() {
        return setDistance;
    }

    public void setSetDistance(Integer setDistance) {
        this.setDistance = setDistance;
    }

    public Integer getSetCalorie() {
        return setCalorie;
    }

    public void setSetCalorie(Integer setCalorie) {
        this.setCalorie = setCalorie;
    }

    public Integer getSetEfficiency() {
        return setEfficiency;
    }

    public void setSetEfficiency(Integer setEfficiency) {
        this.setEfficiency = setEfficiency;
    }

    public Integer getSetIndex() {
        return setIndex;
    }

    public void setSetIndex(Integer setIndex) {
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

    public Integer getSetSpeed() {
        return setSpeed;
    }

    public void setSetSpeed(Integer setSpeed) {
        this.setSpeed = setSpeed;
    }
}