package com.may.user.model;

import java.io.Serializable;
import java.util.Date;

/**
 * Created by May on 2016/3/27.
 */
public class User implements Serializable{
    private static final long serialVersionUID = 1L;

    private String userId;
    private String userName;
    private String userPsd;
    private String userEmail;
    private String userNickName;
    private Date userCreateTime;
    private int[] permissions;

    public User(){}

    public  User(String userId, String userName,
                String userPsd,String userEmail,
                Date userCreateTime,String userNickName){
        this.userId = userId;
        this.userName = userName;
        this.userPsd = userPsd;
        this.userEmail = userEmail;
        this.userNickName =  userNickName;
        this.userCreateTime = userCreateTime;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPsd() {
        return userPsd;
    }

    public void setUserPsd(String userPsd) {
        this.userPsd = userPsd;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserNickName() {
        return userNickName;
    }

    public void setUserNickName(String userNickName) {
        this.userNickName = userNickName;
    }

    public Date getUserCreateTime() {
        return userCreateTime;
    }

    public void setUserCreateTime(Date userCreateTime) {
        this.userCreateTime = userCreateTime;
    }

    public int[] getPermissions() {
        return permissions;
    }

    public void setPermissions(int[] permissions) {
        this.permissions = permissions;
    }
}
