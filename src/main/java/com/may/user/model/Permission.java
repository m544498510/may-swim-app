package com.may.user.model;

import java.io.Serializable;

/**
 * 权限model
 * @author :    Mei XinLin
 * @version :   1.0
 */
public class Permission implements Serializable {
    private static final long serialVersionUID = 1L;

    private int permId;
    private String permName;

    public int getPermId() {
        return permId;
    }

    public void setPermId(int permId) {
        this.permId = permId;
    }

    public String getPermName() {
        return permName;
    }

    public void setPermName(String permName) {
        this.permName = permName;
    }
}
