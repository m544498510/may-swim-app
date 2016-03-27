package com.may.user.model;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by May on 2016/3/27.
 */
public class User implements Serializable{
    private static final long serialVersionUID = 1L;

    private int userId;
    private String userName;
    private String userEmail;
    private String userPsd;
    private Date userCreateTime;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPsd() {
        return userPsd;
    }

    public void setUserPsd(String userPsd) {
        this.userPsd = userPsd;
    }

    public Date getUserCreateTime() {
        return userCreateTime;
    }

    public void setUserCreateTime(Date userCreateTime) {
        this.userCreateTime = userCreateTime;
    }
}
