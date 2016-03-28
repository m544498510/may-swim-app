package com.may.user.service.impl;

import com.may.user.dao.IUserDAO;
import com.may.user.model.User;
import com.may.user.service.IUserService;
import com.may.util.MD5Util;
import com.may.util.UUIDFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Date;


@Service("userServiceImpl")
@Transactional(rollbackFor=Exception.class)
public class UserServiceImpl implements IUserService{
    @Autowired
    private IUserDAO iUserDAO ;

    /***
     * 登录验证
     * @param userName: 用户名
     * @param password: 密码（明文）
     * @return User 对象
     */
    @Override
    public User signIn(String userName, String password) {
        String psd = MD5Util.MD5(password);
        return iUserDAO.getUserByNameAndPsd(userName,psd);
    }

    @Override
    public User signUp(String name, String password, String email) {
        String uuid = UUIDFactory.getUUID();

        User validateUser = iUserDAO.getUserByName(name);
        if(validateUser != null){
            return null;
        }

        String psd = MD5Util.MD5(password);

        Date date = new Date();

        User user = new User(uuid,name,psd,email,name,date);
        if(iUserDAO.insertUser(user)>0){
            return user;
        }
        return null;
    }

    @Override
    public User resetPsd(User user, String newPsd) {
        return null;
    }

    @Override
    public User resetEmail(User user, String newEmail) {
        return null;
    }

    @Override
    public void findPsdFromEmail(String email) {

    }
}
