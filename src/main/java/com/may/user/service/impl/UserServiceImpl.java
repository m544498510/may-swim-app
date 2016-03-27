package com.may.user.service.impl;

import com.may.user.dao.IUserDAO;
import com.may.user.model.User;
import com.may.user.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service("userServiceImpl")
@Transactional(rollbackFor=Exception.class)
public class UserServiceImpl implements IUserService{
    @Autowired
    private IUserDAO iUserDAO ;

    @Override
    public User singIn(String userName, String password) {
    //    User user = iUserDAO.
        return null;
    }

    @Override
    public User signUp(String userName, String password, String email) {
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
