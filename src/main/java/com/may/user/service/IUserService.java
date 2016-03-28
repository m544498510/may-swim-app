package com.may.user.service;

import com.may.user.model.User;

/**
 * Created by May on 2016/3/27.
 */
public interface IUserService {

    User signIn(String userName,String password);

    User signUp(String userName,String password,String email);

    User resetPsd(User user,String newPsd);

    User resetEmail(User user,String newEmail);

    void findPsdFromEmail(String email);
}
