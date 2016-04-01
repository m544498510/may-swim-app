package com.may.user.service;

import com.may.user.model.User;

/**
 * Created by May on 2016/3/27.
 */
public interface IUserService {

    /***
     * 登录验证
     * @param userName: 用户名
     * @param password: 密码（明文）
     * @return User 对象
     */
    User signIn(String userName,String password);

    /***
     * 注册用户
     * @param userName:用户名
     * @param password:密码（明文）
     * @param email:邮箱
     * @return User对象
     */
    User signUp(String userName,String password,String email);

    /***
     *  根据用户名查询用户信息
     * @param userName:用户名
     * @return User对象
     */
    User getUserByName(String userName);


    User resetPsd(User user,String newPsd);

    User resetEmail(User user,String newEmail);

    void findPsdFromEmail(String email);
}
