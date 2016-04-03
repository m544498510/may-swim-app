package com.may.user.dao;

import com.may.user.model.Permission;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 *  用户权限关系表DAO
 * @author :    Mei XinLin
 * @version :   1.0
 */
@Repository
public interface IUserToPermDAO {
    /***
     * 获取指定id的用户权限
     * @param userId 用户id
     * @return 权限list
     */
    ArrayList<Permission> getPermsByUserId(String userId);

    /***
     * 插入指定用户的一条权限。
     * @param userId 用户id
     * @param permId 权限id
     * @return 插入数量。
     */
    int insertRow(@Param("userId")String userId,@Param("permId")int permId);

    /***
     * 插入指定用户的多条权限。
     * @param userId 用户id
     * @param permsArr 权限id数组
     * @return 插入数量。
     */
    int insertRows(@Param("userId")String userId,@Param("permsArray")int[] permsArr);

    /***
     * 删除单条数据
     * @param userId 用户id
     * @param permId 权限id
     * @return 删除行数
     */
    int deleteRow(@Param("userId")String userId,@Param("permId")int permId);

    /***
     * 删除多行数据
     * @param userId 用户id
     * @return 删除行数
     */
    int deleteRows(String userId);



}
