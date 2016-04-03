package com.may.user.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

/**
 *  用户model
 * @author :    Mei XinLin
 * @version :   1.0
 */
public class User implements Serializable{
    private static final long serialVersionUID = 1L;

    private String userId;          //id
    private String userName;        //用户名
    private String userPsd;         //密码
    private String userEmail;       //邮箱
    private String userNickName;    //昵称
    private Date userCreateTime;    //创建时间
    private ArrayList<Permission> permissions;      //权限

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

    public ArrayList<Permission> getPermissions() {
        return permissions;
    }

    public void setPermissions(ArrayList<Permission> permissions) {
        this.permissions = permissions;
    }
}
