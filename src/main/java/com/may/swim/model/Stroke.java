package com.may.swim.model;

import java.io.Serializable;

/**
 *  泳姿信息
 * @author :    Mei XinLin
 * @version :   1.0
 */
public class Stroke implements Serializable{
    private static final long serialVersionUID = 1L;

    //id
    private Integer strokeId;
    //名称
    private String strokeName;
    //描述
    private String strokeDes;

    public Stroke() {
    }

    public Stroke(String strokeName, String strokeDes) {
        this.strokeName = strokeName;
        this.strokeDes = strokeDes;
    }

    public Stroke(Integer strokeId, String strokeName, String strokeDes) {
        this.strokeId = strokeId;
        this.strokeName = strokeName;
        this.strokeDes = strokeDes;
    }

    public static long getSerialVersionUID() {
        return serialVersionUID;
    }

    public Integer getStrokeId() {
        return strokeId;
    }

    public void setStrokeId(Integer strokeId) {
        this.strokeId = strokeId;
    }

    public String getStrokeName() {
        return strokeName;
    }

    public void setStrokeName(String strokeName) {
        this.strokeName = strokeName;
    }

    public String getStrokeDes() {
        return strokeDes;
    }

    public void setStrokeDes(String strokeDes) {
        this.strokeDes = strokeDes;
    }
}


