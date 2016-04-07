package com.may.user.model;

import java.io.Serializable;

/**
 * 角色model
 * @author :    Mei XinLin
 * @version :   1.1
 */
public class Role implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer roleId;         //角色id
    private String roleName;        //角色名称
    private String roleDes;         //角色描述

    public Role() {
    }

    public Role(String roleName, String roleDes) {
        this.roleName = roleName;
        this.roleDes = roleDes;
    }

    public Role(Integer roleId, String roleName, String roleDes) {
        this.roleId = roleId;
        this.roleName = roleName;
        this.roleDes = roleDes;
    }

    public Integer getRoleId() {
        return roleId;
    }

    public void setRoleId(Integer roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getRoleDes() {
        return roleDes;
    }

    public void setRoleDes(String roleDes) {
        this.roleDes = roleDes;
    }
}
