package com.may.user.dao;

import com.may.user.model.User;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserDAO {

    /***
     * 通过userId和password查询用户，可能返回null
     * @param userId: 用户id
     * @param userPsd: 密码（密文）
     * @return User对象 或者 null
     */
    User getUserByIdAndPsd(@Param("userId")String userId,@Param("userPsd")String userPsd);

    /***
     * 通过userName和password查询用户，可能返回null
     * @param userName: 用户名
     * @param userPsd: 密码（密文）
     * @return User对象 或者 null
     */
    User getUserByNameAndPsd(@Param("userName")String userName,@Param("userPsd")String userPsd);

    /***
     * 通过用户名查询用户信息
     * @param userName 用户名
     * @return User对象
     */
    User getUserByName(String userName);

    /***
     * 增加一个用户
     * @param user User对象
     * @return 操作行数
     */
    int insertUser(User user);

    /***
     * 更新一个用户信息
     * @param user User对象
     * @return 操作行数
     */
    int updateUser(User user);

    /***
     * 删除一个用户
     * @param userId 用户id
     * @return 操作行数
     */
    int deleteUser(String userId);

}
