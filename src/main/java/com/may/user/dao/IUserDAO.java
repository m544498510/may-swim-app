package com.may.user.dao;

import com.may.user.model.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserDAO {
    /***
     * 通过userName和password查询用户，可能返回null
     * @param userName: 用户名
     * @param userPsd: 密码（密文）
     * @return User对象 或者 null
     */
    User getUserByNameAndPsd(@Param("userName")String userName,@Param("userPsd")String userPsd);

    User getUserByName(String userName);

    int insertUser(User user);

    int updateUser(User user);

    int deleteUser(String userId);

}
