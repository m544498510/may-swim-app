package com.may.user.service.impl;

import com.may.user.UserConstant;
import com.may.user.dao.IUserDAO;
import com.may.user.dao.IUserToRoleDAO;
import com.may.user.model.Role;
import com.may.user.model.User;
import com.may.user.service.IUserService;
import com.may.util.UUIDFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
@Service("userService")
@Transactional(rollbackFor=Exception.class)
public class UserServiceImpl implements IUserService{
    @Autowired
    private IUserDAO iUserDAO;
    @Autowired
    private IUserToRoleDAO iUserToRoleDAO;


    @Override
    public User signIn(String userName, String password) {
        User user = iUserDAO.getUserByNameAndPsd(userName,password);
        this.setUserPerms(user);
        return user;
    }

    @Override
    public User signUp(String name, String password, String email) {
        String uuid = UUIDFactory.getUUID();

        Date date = new Date();

        User user = new User(uuid,name,password,email,date,name);
        if(iUserDAO.insertUser(user)>0){
            iUserToRoleDAO.insertRows(user.getUserId(), UserConstant.DEFAULT_ROLE);
            this.setUserPerms(user);
            return user;
        }
        return null;
    }

    @Override
    public User getUserByName(String userName) {
        return iUserDAO.getUserByName(userName);
    }

    @Override
    public User resetPsd(User user, String newPsd) {
        user.setUserPsd(newPsd);
        if(iUserDAO.updateUser(user)>0){
            return user;
        }
        return null;
    }

    @Override
    public User resetEmail(User user, String newEmail) {
        user.setUserEmail(newEmail);
        if(iUserDAO.updateUser(user)>0){
            return user;
        }
        return null;
    }

    @Override
    public boolean findPsdFromEmail(User user) {
        return false;
    }


    /***
     * 查询用户的角色,并将结果set进user实例
     * @param user User实例
     */
    private void setUserPerms(User user){
        if(user != null){
            ArrayList<Role> perms = iUserToRoleDAO.getRolesByUserId(user.getUserId());
            user.setRoles(perms);
        }
    }

    /**
     * 验证邮箱
     * @param email 邮箱
     * @return 邮箱是否合法
     */
    private boolean validateEmail(String email){
        boolean flag;
        try{
            String check = "^([a-z0-9A-Z]+[-|_\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$";
            Pattern regex = Pattern.compile(check);
            Matcher matcher = regex.matcher(email);
            flag = matcher.matches();
        }catch(Exception e){
            flag = false;
        }
        return flag;
    }
}
